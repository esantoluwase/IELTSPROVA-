// memory-manager.js - Advanced memory management

class MemoryManager {
    constructor(userId) {
        this.userId = userId;
        this.cache = new Map();
    }

    async getMemory(key) {
        // Check cache first
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        // Get from Firebase
        try {
            const doc = await firebase.firestore()
                .collection('users')
                .doc(this.userId)
                .get();
            
            const data = doc.data()?.aiMemory || {};
            this.cache.set(key, data[key]);
            return data[key];
        } catch (error) {
            console.error('Memory read failed:', error);
            return null;
        }
    }

    async setMemory(key, value) {
        try {
            // Update Firebase
            await firebase.firestore()
                .collection('users')
                .doc(this.userId)
                .update({
                    [`aiMemory.${key}`]: value
                });
            
            // Update cache
            this.cache.set(key, value);
            console.log(`✅ Memory updated: ${key}`);
        } catch (error) {
            console.error('Memory write failed:', error);
        }
    }

    async analyzeWeaknesses() {
        const memory = await this.getMemory('skills');
        if (!memory) return [];

        const weaknesses = [];
        for (const [skill, data] of Object.entries(memory)) {
            if (data.weakness && data.weakness.length > 0) {
                weaknesses.push({
                    skill: skill,
                    weaknesses: data.weakness,
                    currentScore: data.score,
                    attempts: data.attempts
                });
            }
        }
        return weaknesses;
    }

    async getLearningRecommendations() {
        const weaknesses = await this.analyzeWeaknesses();
        const recommendations = [];

        weaknesses.forEach(w => {
            if (w.skill === 'reading') {
                recommendations.push(`Practice ${w.weaknesses.join(', ')} in reading`);
            }
            if (w.skill === 'writing') {
                recommendations.push(`Focus on ${w.weaknesses.join(', ')} in writing`);
            }
        });

        return recommendations;
    }
}

window.MemoryManager = MemoryManager;
