// ai-employee.js - Main AI Employee System
// Place in root folder, load after Firebase

class AIEmployee {
    constructor(userId) {
        this.userId = userId;
        this.context = null;
        this.memory = null;
        this.isAdmin = false;
        this.loadContext();
    }

    async loadContext() {
        // Load the context file
        try {
            const response = await fetch('ai-context.md');
            this.context = await response.text();
            console.log('✅ AI Employee context loaded');
        } catch (error) {
            console.error('❌ Failed to load context:', error);
        }
    }

    async loadMemory(userId) {
        // Get student data from Firebase
        try {
            const doc = await firebase.firestore()
                .collection('users')
                .doc(userId)
                .get();
            
            if (doc.exists) {
                this.memory = doc.data().aiMemory || this.createNewMemory();
            } else {
                this.memory = this.createNewMemory();
            }
            console.log('✅ Memory loaded for user:', userId);
        } catch (error) {
            console.error('❌ Memory load failed:', error);
            this.memory = this.createNewMemory();
        }
    }

    createNewMemory() {
        return {
            skills: {
                reading: { score: 0, weakness: [], attempts: 0, improvement: 0 },
                listening: { score: 0, weakness: [], attempts: 0, improvement: 0 },
                writing: { score: 0, weakness: [], attempts: 0, improvement: 0 },
                speaking: { score: 0, weakness: [], attempts: 0, improvement: 0 }
            },
            history: [],
            commonMistakes: [],
            learningPace: {
                questionsPerDay: 0,
                studyStreak: 0,
                lastStudyDate: null
            },
            goals: {
                targetBand: 7.0,
                examDate: null
            },
            preferences: {
                studyTime: 'evening',
                reminderFrequency: 'daily'
            }
        };
    }

    async saveMemory() {
        try {
            await firebase.firestore()
                .collection('users')
                .doc(this.userId)
                .update({
                    aiMemory: this.memory,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                });
            console.log('✅ Memory saved');
        } catch (error) {
            console.error('❌ Failed to save memory:', error);
        }
    }

    // Main grading function
    async gradeTest(testType, answers, questions) {
        console.log(`📝 Grading ${testType} test for user ${this.userId}`);
        
        // Load memory if not loaded
        if (!this.memory) {
            await this.loadMemory(this.userId);
        }

        let result = null;
        
        switch(testType) {
            case 'reading':
                result = await this.gradeReading(answers, questions);
                break;
            case 'listening':
                result = await this.gradeListening(answers, questions);
                break;
            case 'writing':
                result = await this.gradeWriting(answers, questions);
                break;
            case 'speaking':
                result = await this.gradeSpeaking(answers, questions);
                break;
            default:
                throw new Error('Unknown test type');
        }

        // Update memory with results
        await this.updateMemory(testType, result);
        await this.saveMemory();

        // Check if admin approval needed (high-stakes)
        if (result.needsApproval) {
            await this.sendForApproval(testType, result);
            result.message = '✅ Draft created. Waiting for admin approval.';
        }

        return result;
    }

    // ===== GRADING METHODS =====

    async gradeReading(answers, questions) {
        let correct = 0;
        let wrongAnswers = [];
        let weaknesses = [];

        questions.forEach((q, index) => {
            const userAnswer = answers[index] || '';
            const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();
            
            if (isCorrect) {
                correct++;
            } else {
                wrongAnswers.push({
                    question: q.text,
                    userAnswer: userAnswer,
                    correctAnswer: q.correct,
                    type: q.type // e.g., 'multiple-choice', 'matching', 'true-false'
                });
            }
        });

        // Calculate band score
        const bandScore = this.getReadingBandScore(correct);
        
        // Identify weaknesses
        const typeErrors = {};
        wrongAnswers.forEach(w => {
            typeErrors[w.type] = (typeErrors[w.type] || 0) + 1;
        });

        for (const [type, count] of Object.entries(typeErrors)) {
            if (count / wrongAnswers.length > 0.4) { // 40%+ errors in one type
                weaknesses.push(`Weakness in ${type} questions`);
            }
        }

        const result = {
            score: correct,
            total: questions.length,
            percentage: Math.round((correct / questions.length) * 100),
            bandScore: bandScore,
            wrongAnswers: wrongAnswers,
            weaknesses: weaknesses,
            needsApproval: false, // Reading is auto-approved
            details: {
                type: 'reading',
                timestamp: new Date().toISOString()
            }
        };

        console.log(`📊 Reading score: ${correct}/${questions.length} (Band ${bandScore})`);
        return result;
    }

    async gradeListening(answers, questions) {
        // Same as reading
        return this.gradeReading(answers, questions);
    }

    async gradeWriting(answers, questions) {
        // Writing needs more complex analysis
        const result = {
            taskAchievement: 0,
            coherence: 0,
            lexicalResource: 0,
            grammaticalRange: 0,
            bandScore: 0,
            feedback: [],
            needsApproval: true, // Admin approval required
            details: {
                type: 'writing',
                wordCount: answers.length,
                timestamp: new Date().toISOString()
            }
        };

        // Auto-checks (low-stakes)
        // 1. Word count
        const wordCount = answers.split(/\s+/).length;
        if (wordCount < 150) {
            result.feedback.push('⚠️ Below minimum word count (150 words)');
            result.taskAchievement = 5;
        } else if (wordCount > 150 && wordCount < 200) {
            result.feedback.push('✅ Good word count');
            result.taskAchievement = 7;
        } else {
            result.feedback.push('✅ Excellent word count');
            result.taskAchievement = 8;
        }

        // 2. Basic structure check (paragraphs)
        const paragraphs = answers.split(/\n\s*\n/).length;
        if (paragraphs < 2) {
            result.feedback.push('⚠️ Consider adding more paragraphs for better structure');
            result.coherence = 6;
        } else if (paragraphs >= 3) {
            result.feedback.push('✅ Good paragraph structure');
            result.coherence = 7;
        }

        // 3. Basic grammar check (heuristic)
        const commonErrors = ['is is', 'are are', 'was was', 'have been have been'];
        let grammarIssues = 0;
        commonErrors.forEach(error => {
            if (answers.includes(error)) {
                grammarIssues++;
                result.feedback.push(`⚠️ Found duplicate word pattern: "${error}"`);
            }
        });

        if (grammarIssues === 0) {
            result.grammaticalRange = 7;
            result.feedback.push('✅ No common grammar errors detected');
        } else {
            result.grammaticalRange = 6;
            result.feedback.push('📝 Review grammar: check for repeated words');
        }

        // 4. Lexical resource (vocabulary variety)
        const words = answers.toLowerCase().match(/\b\w+\b/g) || [];
        const uniqueWords = new Set(words);
        const variety = (uniqueWords.size / words.length) * 100;
        
        if (variety > 40) {
            result.lexicalResource = 8;
            result.feedback.push('✅ Good vocabulary variety');
        } else if (variety > 30) {
            result.lexicalResource = 7;
            result.feedback.push('📝 Try using more varied vocabulary');
        } else {
            result.lexicalResource = 6;
            result.feedback.push('📝 Expand your vocabulary range');
        }

        // Calculate average band score (auto, but needs admin final)
        result.bandScore = Math.round(
            (result.taskAchievement + result.coherence + 
             result.lexicalResource + result.grammaticalRange) / 4
        );

        // Generate detailed feedback for admin
        result.detailedFeedback = {
            strengths: this.identifyWritingStrengths(answers),
            improvements: this.identifyWritingImprovements(answers),
            suggestedTasks: this.suggestWritingTasks(result.weaknesses)
        };

        return result;
    }

    async gradeSpeaking(answers, questions) {
        // Simplified for now - needs voice recognition
        const result = {
            fluency: 0,
            lexicalResource: 0,
            grammaticalRange: 0,
            pronunciation: 0,
            bandScore: 0,
            feedback: [],
            needsApproval: true, // Needs human review
            details: {
                type: 'speaking',
                timestamp: new Date().toISOString(),
                audioAnalysis: 'Voice recognition not yet implemented'
            }
        };

        // Placeholder grading
        result.fluency = 7;
        result.lexicalResource = 7;
        result.grammaticalRange = 6;
        result.pronunciation = 7;
        result.bandScore = 7;

        result.feedback = [
            '✅ Good fluency and coherence',
            '📝 Could use more complex vocabulary',
            '📝 Minor grammar improvements needed',
            '✅ Pronunciation is clear'
        ];

        return result;
    }

    // ===== HELPER FUNCTIONS =====

    getReadingBandScore(correct) {
        const bands = [
            { min: 39, band: 9.0 },
            { min: 37, band: 8.5 },
            { min: 35, band: 8.0 },
            { min: 33, band: 7.5 },
            { min: 30, band: 7.0 },
            { min: 27, band: 6.5 },
            { min: 23, band: 6.0 },
            { min: 19, band: 5.5 },
            { min: 15, band: 5.0 },
            { min: 13, band: 4.5 },
            { min: 10, band: 4.0 }
        ];

        for (const band of bands) {
            if (correct >= band.min) {
                return band.band;
            }
        }
        return 3.5;
    }

    identifyWritingStrengths(text) {
        const strengths = [];
        const words = text.split(/\s+/);
        
        if (words.length > 200) strengths.push('Good length');
        if (text.includes('however') || text.includes('furthermore')) {
            strengths.push('Uses transitions well');
        }
        
        return strengths;
    }

    identifyWritingImprovements(text) {
        const improvements = [];
        if (!text.includes('however') && !text.includes('although')) {
            improvements.push('Add more complex connectors');
        }
        return improvements;
    }

    suggestWritingTasks(weaknesses) {
        return [
            'Practice writing Task 1 (charts/graphs)',
            'Review band 7 sample essays',
            'Focus on paragraph structure'
        ];
    }

    // ===== MEMORY UPDATE =====

    async updateMemory(testType, result) {
        if (!this.memory) return;

        // Update skill scores
        const skill = this.memory.skills[testType];
        if (skill) {
            skill.score = result.bandScore || result.percentage / 10;
            skill.attempts += 1;
            
            // Calculate improvement
            if (skill.attempts > 1) {
                const previousScore = skill.score;
                const improvement = result.bandScore - previousScore;
                skill.improvement = improvement;
            }

            // Track weaknesses
            if (result.weaknesses) {
                result.weaknesses.forEach(w => {
                    if (!skill.weakness.includes(w)) {
                        skill.weakness.push(w);
                    }
                });
            }
        }

        // Add to history
        this.memory.history.push({
            type: testType,
            score: result.bandScore || result.score,
            date: new Date().toISOString(),
            details: result.details
        });

        // Update learning pace
        const today = new Date().toDateString();
        if (this.memory.learningPace.lastStudyDate === today) {
            // Already studied today
            this.memory.learningPace.questionsPerDay += 20; // Assuming 20 questions
        } else {
            this.memory.learningPace.questionsPerDay = 20;
            this.memory.learningPace.lastStudyDate = today;
            
            // Update streak
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (this.memory.learningPace.lastStudyDate === yesterday.toDateString()) {
                this.memory.learningPace.studyStreak += 1;
            } else {
                this.memory.learningPace.studyStreak = 1;
            }
        }
    }

    // ===== ADMIN APPROVAL =====

    async sendForApproval(testType, result) {
        try {
            // Store in Firebase for admin review
            await firebase.firestore()
                .collection('adminQueue')
                .add({
                    userId: this.userId,
                    testType: testType,
                    result: result,
                    status: 'pending',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            
            console.log('📨 Draft sent to admin for approval');
            
            // Send notification to admin (you)
            await this.notifyAdmin(testType, result);
        } catch (error) {
            console.error('❌ Failed to send for approval:', error);
        }
    }

    async notifyAdmin(testType, result) {
        // This would send an email using your email service
        // For now, just log
        console.log(`🔔 ADMIN NOTIFICATION: ${testType} test needs review for user ${this.userId}`);
        console.log('Draft result:', result);
    }
}

// ===== EXPORT FOR USE =====
// Make available globally
window.AIEmployee = AIEmployee;
