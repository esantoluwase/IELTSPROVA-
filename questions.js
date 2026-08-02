// ============================================================
// IELTSPROVA — SMART QUESTION GENERATOR
// ============================================================
// This file generates 2,000+ questions automatically using:
//   1. Topic Pool (100 topics)
//   2. Question Templates (20 templates per topic)
//   3. Answer Options (4 options per question)
// ============================================================

// ============================================================
// 1. TOPIC POOLS
// ============================================================

const topicPool = {
    reading: [
        // Environment
        { id: 1, title: "Climate Change", category: "Environment", level: "Medium" },
        { id: 2, title: "Renewable Energy", category: "Environment", level: "Hard" },
        { id: 3, title: "Biodiversity", category: "Environment", level: "Medium" },
        { id: 4, title: "Deforestation", category: "Environment", level: "Easy" },
        { id: 5, title: "Ocean Pollution", category: "Environment", level: "Hard" },
        { id: 6, title: "Sustainable Agriculture", category: "Environment", level: "Medium" },
        { id: 7, title: "Water Conservation", category: "Environment", level: "Easy" },
        { id: 8, title: "Climate Policy", category: "Environment", level: "Hard" },
        { id: 9, title: "Environmental Activism", category: "Environment", level: "Medium" },
        { id: 10, title: "Green Technology", category: "Environment", level: "Hard" },
        // Technology
        { id: 11, title: "Artificial Intelligence", category: "Technology", level: "Hard" },
        { id: 12, title: "The Internet", category: "Technology", level: "Medium" },
        { id: 13, title: "Social Media", category: "Technology", level: "Easy" },
        { id: 14, title: "Cybersecurity", category: "Technology", level: "Hard" },
        { id: 15, title: "Digital Divide", category: "Technology", level: "Medium" },
        { id: 16, title: "Robotics", category: "Technology", level: "Hard" },
        { id: 17, title: "E-commerce", category: "Technology", level: "Medium" },
        { id: 18, title: "Space Exploration", category: "Technology", level: "Hard" },
        { id: 19, title: "Biotechnology", category: "Technology", level: "Hard" },
        { id: 20, title: "Wearable Technology", category: "Technology", level: "Medium" },
        // Health
        { id: 21, title: "Mental Health", category: "Health", level: "Medium" },
        { id: 22, title: "Nutrition", category: "Health", level: "Easy" },
        { id: 23, title: "Exercise", category: "Health", level: "Easy" },
        { id: 24, title: "Sleep", category: "Health", level: "Medium" },
        { id: 25, title: "Chronic Disease", category: "Health", level: "Hard" },
        { id: 26, title: "Public Health", category: "Health", level: "Medium" },
        { id: 27, title: "Healthcare Access", category: "Health", level: "Hard" },
        { id: 28, title: "Genetics", category: "Health", level: "Hard" },
        { id: 29, title: "Telemedicine", category: "Health", level: "Medium" },
        { id: 30, title: "Health Literacy", category: "Health", level: "Easy" },
        // Education
        { id: 31, title: "Online Learning", category: "Education", level: "Medium" },
        { id: 32, title: "Critical Thinking", category: "Education", level: "Hard" },
        { id: 33, title: "Early Childhood Education", category: "Education", level: "Easy" },
        { id: 34, title: "Higher Education", category: "Education", level: "Medium" },
        { id: 35, title: "Education Reform", category: "Education", level: "Hard" },
        { id: 36, title: "Financial Literacy", category: "Education", level: "Medium" },
        { id: 37, title: "STEM Education", category: "Education", level: "Hard" },
        { id: 38, title: "Lifelong Learning", category: "Education", level: "Easy" },
        { id: 39, title: "Arts Education", category: "Education", level: "Medium" },
        { id: 40, title: "Language Learning", category: "Education", level: "Medium" },
        // Society
        { id: 41, title: "Globalization", category: "Society", level: "Hard" },
        { id: 42, title: "Immigration", category: "Society", level: "Medium" },
        { id: 43, title: "Poverty", category: "Society", level: "Hard" },
        { id: 44, title: "Equality", category: "Society", level: "Medium" },
        { id: 45, title: "Community Development", category: "Society", level: "Easy" },
        { id: 46, title: "Gender Equality", category: "Society", level: "Medium" },
        { id: 47, title: "Human Rights", category: "Society", level: "Hard" },
        { id: 48, title: "Social Media", category: "Society", level: "Medium" },
        { id: 49, title: "Future of Work", category: "Society", level: "Hard" },
        { id: 50, title: "Civic Engagement", category: "Society", level: "Easy" },
        // Culture
        { id: 51, title: "Cultural Heritage", category: "Culture", level: "Medium" },
        { id: 52, title: "Tradition", category: "Culture", level: "Easy" },
        { id: 53, title: "Cultural Exchange", category: "Culture", level: "Medium" },
        { id: 54, title: "Indigenous Cultures", category: "Culture", level: "Hard" },
        { id: 55, title: "Music", category: "Culture", level: "Easy" },
        { id: 56, title: "Art", category: "Culture", level: "Medium" },
        { id: 57, title: "Folklore", category: "Culture", level: "Easy" },
        { id: 58, title: "Cultural Preservation", category: "Culture", level: "Hard" },
        { id: 59, title: "Food Culture", category: "Culture", level: "Easy" },
        { id: 60, title: "Festivals", category: "Culture", level: "Medium" },
        // History
        { id: 61, title: "Ancient Civilizations", category: "History", level: "Medium" },
        { id: 62, title: "Industrial Revolution", category: "History", level: "Hard" },
        { id: 63, title: "World Wars", category: "History", level: "Hard" },
        { id: 64, title: "Exploration", category: "History", level: "Medium" },
        { id: 65, title: "Colonialism", category: "History", level: "Hard" },
        { id: 66, title: "Revolution", category: "History", level: "Medium" },
        { id: 67, title: "Inventions", category: "History", level: "Easy" },
        { id: 68, title: "Migration", category: "History", level: "Medium" },
        { id: 69, title: "Language Evolution", category: "History", level: "Hard" },
        { id: 70, title: "Cultural History", category: "History", level: "Medium" },
        // Science
        { id: 71, title: "Astronomy", category: "Science", level: "Hard" },
        { id: 72, title: "Physics", category: "Science", level: "Hard" },
        { id: 73, title: "Biology", category: "Science", level: "Medium" },
        { id: 74, title: "Chemistry", category: "Science", level: "Medium" },
        { id: 75, title: "Earth Science", category: "Science", level: "Easy" },
        { id: 76, title: "Climate Science", category: "Science", level: "Hard" },
        { id: 77, title: "Neuroscience", category: "Science", level: "Hard" },
        { id: 78, title: "Genetics", category: "Science", level: "Hard" },
        { id: 79, title: "Ecology", category: "Science", level: "Medium" },
        { id: 80, title: "Scientific Method", category: "Science", level: "Easy" },
        // Economics
        { id: 81, title: "Global Economy", category: "Economics", level: "Hard" },
        { id: 82, title: "Trade", category: "Economics", level: "Medium" },
        { id: 83, title: "Entrepreneurship", category: "Economics", level: "Medium" },
        { id: 84, title: "Financial Markets", category: "Economics", level: "Hard" },
        { id: 85, title: "Sustainable Development", category: "Economics", level: "Hard" },
        { id: 86, title: "Consumer Behavior", category: "Economics", level: "Easy" },
        { id: 87, title: "Job Market", category: "Economics", level: "Medium" },
        { id: 88, title: "Wealth Distribution", category: "Economics", level: "Hard" },
        { id: 89, title: "Economic Growth", category: "Economics", level: "Medium" },
        { id: 90, title: "Inflation", category: "Economics", level: "Hard" },
        // Travel
        { id: 91, title: "Ecotourism", category: "Travel", level: "Medium" },
        { id: 92, title: "Adventure Travel", category: "Travel", level: "Easy" },
        { id: 93, title: "Cultural Tourism", category: "Travel", level: "Medium" },
        { id: 94, title: "Sustainable Tourism", category: "Travel", level: "Hard" },
        { id: 95, title: "Travel Technology", category: "Travel", level: "Medium" },
        { id: 96, title: "Responsible Travel", category: "Travel", level: "Easy" },
        { id: 97, title: "Travel Safety", category: "Travel", level: "Medium" },
        { id: 98, title: "Travel Planning", category: "Travel", level: "Easy" },
        { id: 99, title: "Medical Tourism", category: "Travel", level: "Hard" },
        { id: 100, title: "Space Tourism", category: "Travel", level: "Hard" }
    ]
};

// ============================================================
// 2. QUESTION TEMPLATES
// ============================================================

const questionTemplates = [
    { text: "What is the main idea of the passage about {topic}?", difficulty: "Easy" },
    { text: "According to the passage, what is the primary cause of {topic}?", difficulty: "Medium" },
    { text: "What does the author suggest about {topic}?", difficulty: "Medium" },
    { text: "What is the author's attitude towards {topic}?", difficulty: "Hard" },
    { text: "What can be inferred from the passage about {topic}?", difficulty: "Hard" },
    { text: "Why is {topic} considered important?", difficulty: "Medium" },
    { text: "What are the main challenges related to {topic}?", difficulty: "Hard" },
    { text: "What solutions does the author propose for {topic}?", difficulty: "Hard" },
    { text: "What is the most significant effect of {topic}?", difficulty: "Medium" },
    { text: "What does the passage say about the future of {topic}?", difficulty: "Hard" },
    { text: "Which of the following is NOT mentioned about {topic}?", difficulty: "Medium" },
    { text: "How does {topic} affect society?", difficulty: "Medium" },
    { text: "What is the role of {topic} in modern life?", difficulty: "Easy" },
    { text: "What are the benefits of {topic}?", difficulty: "Easy" },
    { text: "What are the drawbacks of {topic}?", difficulty: "Medium" },
    { text: "How has {topic} evolved over time?", difficulty: "Hard" },
    { text: "What does the passage compare {topic} to?", difficulty: "Hard" },
    { text: "What is the author's conclusion about {topic}?", difficulty: "Medium" },
    { text: "What is the main purpose of the passage about {topic}?", difficulty: "Medium" },
    { text: "What is the most surprising fact about {topic} in the passage?", difficulty: "Hard" }
];

// ============================================================
// 3. ANSWER OPTIONS GENERATOR
// ============================================================

function generateOptions(topic, correctAnswerIndex) {
    const optionSets = [
        ["A) Yes", "B) No", "C) Not mentioned", "D) Both A and B"],
        ["A) Government", "B) Individuals", "C) Corporations", "D) All of the above"],
        ["A) Economic growth", "B) Social progress", "C) Technological advancement", "D) All of the above"],
        ["A) Education", "B) Health", "C) Environment", "D) All of the above"],
        ["A) Efficiency", "B) Innovation", "C) Sustainability", "D) All of the above"],
        ["A) Climate change", "B) Pollution", "C) Resource depletion", "D) All of the above"],
        ["A) Technology", "B) Society", "C) Economy", "D) All of the above"],
        ["A) Developing countries", "B) Developed countries", "C) Both", "D) Neither"],
        ["A) Profit", "B) Purpose", "C) Sustainability", "D) All of the above"],
        ["A) Data", "B) Information", "C) Knowledge", "D) Wisdom"],
        ["A) Science", "B) Technology", "C) Engineering", "D) Mathematics"],
        ["A) Energy", "B) Water", "C) Food", "D) All of the above"],
        ["A) Urban", "B) Rural", "C) Both", "D) Neither"],
        ["A) Natural resources", "B) Human capital", "C) Financial resources", "D) All of the above"],
        ["A) Innovation", "B) Tradition", "C) Both", "D) Neither"]
    ];
    
    return optionSets[correctAnswerIndex % optionSets.length];
}

// ============================================================
// 4. SMART QUESTION GENERATOR
// ============================================================

function generateReadingQuestions() {
    const allQuestions = [];
    let questionId = 1;
    
    topicPool.reading.forEach(topic => {
        // Select 20 random templates for this topic
        const shuffledTemplates = shuffleArray(questionTemplates);
        const selectedTemplates = shuffledTemplates.slice(0, 20);
        
        selectedTemplates.forEach((template, index) => {
            const questionText = template.text.replace('{topic}', topic.title);
            const correctAnswerIndex = Math.floor(Math.random() * 4);
            const options = generateOptions(topic.title, correctAnswerIndex);
            const answer = String.fromCharCode(65 + correctAnswerIndex); // A, B, C, D
            
            allQuestions.push({
                id: questionId++,
                text: questionText,
                options: options,
                answer: answer,
                category: topic.category,
                level: topic.level || template.difficulty
            });
        });
    });
    
    return allQuestions;
}

// ============================================================
// 5. HELPER FUNCTIONS
// ============================================================

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getQuestions(module, plan) {
    const allQuestions = generateReadingQuestions();
    const limit = plan === 'free' ? 20 : plan === 'pro' ? 1000 : 2000;
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, Math.min(limit, shuffled.length));
}

// ============================================================
// 6. QUESTION BANK
// ============================================================

const questionBank = {
    reading: {
        free: getQuestions('reading', 'free'),
        pro: getQuestions('reading', 'pro'),
        proplus: getQuestions('reading', 'proplus')
    }
};

// ============================================================
// 7. CONSOLE OUTPUT
// ============================================================

console.log('📚 IELTSProva Smart Question Bank loaded!');
console.log('📊 Reading:');
console.log('   🟢 Free: 20 questions');
console.log('   ⭐ Pro: 1,000+ questions');
console.log('   🚀 Pro+: 2,000+ questions');
console.log('📊 Topics: 100 topics');
console.log('📊 Templates: 20 templates per topic');
console.log('📊 Total generated: 2,000+ questions');
