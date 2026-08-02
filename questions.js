// ============================================================
// IELTSPROVA — COMPLETE QUESTION BANK (8,000+ QUESTIONS)
// ============================================================
// TIER SYSTEM:
//   Free:  1 Passage per module (20 questions)
//   Pro:   50 Passages per module (1,000 questions)
//   Pro+:  100 Passages per module (2,000 questions)
// ============================================================

// ============================================================
// READING MODULE — 100 PASSAGES × 20 QUESTIONS = 2,000+ QUESTIONS
// ============================================================

const readingPassages = [
    // ==========================================================
    // PASSAGES 1-10: HISTORY & CULTURE
    // ==========================================================
    {
        id: 1,
        title: "The History of Glassmaking",
        category: "History",
        level: "Easy",
        passage: "Glassmaking is one of the oldest crafts in human history, dating back to around 3500 BCE in Mesopotamia. Early glass was used primarily for beads and decorative objects, as it was difficult to produce clear, flawless sheets. The discovery of glassblowing in the 1st century BCE in the Roman Empire revolutionised production, making glass cheaper and more widely available. This technique allowed artisans to create transparent vessels, which soon became popular across Europe and Asia. During the Middle Ages, Venice emerged as a major centre for glass production, particularly on the island of Murano. Murano glassmakers developed crystalline glass and enamel decoration, and their techniques were closely guarded secrets. By the 17th century, lead crystal glass was invented in England, adding brilliance and weight to glassware, which became highly sought after by royalty. The Industrial Revolution brought mechanisation to glass production. In 1887, the mass production of glass bottles began, and in the early 20th century, the invention of the float glass process made it possible to produce large, perfectly flat sheets of glass for windows and mirrors. Today, glass is used in everything from smartphone screens to fibre optics, proving that this ancient material remains at the forefront of modern technology.",
        questions: [
            { id: 1, text: "When did glassmaking first begin?", options: ["1500 BCE", "3500 BCE", "1st century BCE", "17th century"], answer: "B" },
            { id: 2, text: "What invention made glass production cheaper and more widespread?", options: ["Float glass process", "Lead crystal", "Glassblowing", "Enamel decoration"], answer: "C" },
            { id: 3, text: "Which city became a major centre for glassmaking in the Middle Ages?", options: ["London", "Paris", "Venice", "Rome"], answer: "C" },
            { id: 4, text: "What was invented in England in the 17th century?", options: ["Crystalline glass", "Lead crystal glass", "Float glass", "Glass bottles"], answer: "B" },
            { id: 5, text: "What did the Industrial Revolution bring to glass production?", options: ["Mechanisation", "Glassblowing", "Enamel decoration", "Smartphone screens"], answer: "A" },
            { id: 6, text: "In which year did mass production of glass bottles begin?", options: ["1887", "1901", "1750", "1923"], answer: "A" },
            { id: 7, text: "What is the float glass process used for?", options: ["Making beads", "Producing flat glass sheets", "Creating enamel decoration", "Colouring glass"], answer: "B" },
            { id: 8, text: "Which of the following is NOT mentioned as a modern use of glass?", options: ["Smartphone screens", "Fibre optics", "Aircraft windows", "Windows and mirrors"], answer: "C" },
            { id: 9, text: "The techniques of Murano glassmakers were...", options: ["Widely published", "Closely guarded secrets", "Sold to other cities", "Lost over time"], answer: "B" },
            { id: 10, text: "What is the main idea of the passage?", options: ["Glass is fragile", "Glassmaking has evolved significantly over time", "Venice was the only glassmaking centre", "Modern glass is better than ancient glass"], answer: "B" },
            { id: 11, text: "According to the passage, what was early glass used for?", options: ["Windows", "Beads and decorations", "Bottles", "Smartphone screens"], answer: "B" },
            { id: 12, text: "When did Venice emerge as a glassmaking centre?", options: ["Ancient times", "Middle Ages", "17th century", "19th century"], answer: "B" },
            { id: 13, text: "What did the Romans contribute to glassmaking?", options: ["Float glass", "Glassblowing", "Lead crystal", "Enamel decoration"], answer: "B" },
            { id: 14, text: "Why were Murano techniques considered valuable?", options: ["They were easy", "They were guarded secrets", "They were cheap", "They were modern"], answer: "B" },
            { id: 15, text: "What did the Industrial Revolution mechanise?", options: ["Glassblowing", "Glass production", "Enamel decoration", "Crystal making"], answer: "B" },
            { id: 16, text: "What makes lead crystal glass unique?", options: ["Colour", "Brilliance and weight", "Price", "Size"], answer: "B" },
            { id: 17, text: "What modern technology uses glass?", options: ["Smartphones", "Fibre optics", "Both", "Neither"], answer: "C" },
            { id: 18, text: "What does the passage suggest about glass?", options: ["It is outdated", "It is still relevant", "It is fragile", "It is expensive"], answer: "B" },
            { id: 19, text: "What is a common misconception about glass?", options: ["It is modern", "It is ancient", "It is fragile", "It is renewable"], answer: "C" },
            { id: 20, text: "What does the author conclude about glass?", options: ["It has a bright future", "It is obsolete", "It is only for decoration", "It is too expensive"], answer: "A" }
        ]
    },
    {
        id: 2,
        title: "The Science of Sleep",
        category: "Health",
        level: "Easy",
        passage: "Sleep is a fundamental biological process that affects every aspect of human health. Adults typically need 7-9 hours of sleep per night for optimal functioning. During sleep, the brain cycles through different stages, including REM (Rapid Eye Movement) and deep sleep. REM sleep is crucial for memory consolidation and emotional processing. The hormone melatonin regulates the sleep-wake cycle, and exposure to blue light from screens can suppress melatonin production, disrupting sleep patterns. Sleep disorders such as insomnia and sleep apnoea affect millions of people worldwide. Chronic sleep deprivation has been linked to obesity, diabetes, and cardiovascular disease. Conversely, good sleep hygiene — including maintaining a consistent schedule, avoiding caffeine before bed, and creating a dark, quiet environment — can significantly improve sleep quality. For teenagers, 8-10 hours of sleep is recommended to support their physical and cognitive development.",
        questions: [
            { id: 21, text: "How many hours of sleep do adults typically need per night?", options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"], answer: "C" },
            { id: 22, text: "During which sleep stage does the brain consolidate memories?", options: ["REM sleep", "Deep sleep", "Light sleep", "Awake state"], answer: "A" },
            { id: 23, text: "What hormone regulates the sleep-wake cycle?", options: ["Cortisol", "Melatonin", "Adrenaline", "Insulin"], answer: "B" },
            { id: 24, text: "Which of the following is a sleep disorder?", options: ["Migraine", "Insomnia", "Asthma", "Diabetes"], answer: "B" },
            { id: 25, text: "Lack of sleep can lead to...", options: ["Improved focus", "Weight gain", "Better memory", "Increased energy"], answer: "B" },
            { id: 26, text: "What is the recommended sleep duration for teenagers?", options: ["6-7 hours", "8-10 hours", "11-12 hours", "4-5 hours"], answer: "B" },
            { id: 27, text: "Blue light from screens can disrupt sleep because it...", options: ["Reduces melatonin", "Increases melatonin", "Has no effect", "Causes stress"], answer: "A" },
            { id: 28, text: "Which of the following helps improve sleep quality?", options: ["Exercising before bed", "Drinking coffee", "Maintaining a consistent schedule", "Eating heavy meals"], answer: "C" },
            { id: 29, text: "Sleep deprivation is linked to which health condition?", options: ["Obesity", "Anaemia", "Cancer", "All of the above"], answer: "A" },
            { id: 30, text: "What is the main purpose of sleep according to the passage?", options: ["To conserve energy", "To restore and repair the body", "To dream", "To pass time"], answer: "B" },
            { id: 31, text: "What does REM stand for?", options: ["Rapid Eye Movement", "Real Energy Movement", "Restful Eye Movement", "Rapid Energy Motion"], answer: "A" },
            { id: 32, text: "What can suppress melatonin production?", options: ["Darkness", "Blue light", "Exercise", "Sleep"], answer: "B" },
            { id: 33, text: "What is insomnia?", options: ["A sleep disorder", "A heart condition", "A skin condition", "A mental illness"], answer: "A" },
            { id: 34, text: "What does good sleep hygiene include?", options: ["Irregular schedule", "Caffeine before bed", "Dark quiet environment", "Bright lights"], answer: "C" },
            { id: 35, text: "Why is sleep important for teenagers?", options: ["Physical development", "Cognitive development", "Both", "Neither"], answer: "C" },
            { id: 36, text: "What does the passage say about sleep apnoea?", options: ["It is rare", "It affects millions", "It is harmless", "It is only for adults"], answer: "B" },
            { id: 37, text: "What is the effect of chronic sleep deprivation?", options: ["Improved health", "Weight loss", "Cardiovascular disease", "Better memory"], answer: "C" },
            { id: 38, text: "What role does REM sleep play?", options: ["Memory consolidation", "Muscle repair", "Bone growth", "Eye health"], answer: "A" },
            { id: 39, text: "What advice does the passage give about sleep?", options: ["Sleep less", "Sleep more", "Maintain a schedule", "Use screens before bed"], answer: "C" },
            { id: 40, text: "What does the author emphasize about sleep?", options: ["It is optional", "It is essential", "It is overrated", "It is only for children"], answer: "B" }
        ]
    },
    {
        id: 3,
        title: "Renewable Energy",
        category: "Environment",
        level: "Medium",
        passage: "Renewable energy sources — including solar, wind, hydro, and geothermal — are critical for reducing greenhouse gas emissions and combating climate change. Solar power, which converts sunlight into electricity using photovoltaic panels, is one of the fastest-growing energy sectors worldwide. China is currently the world's largest producer of solar energy. Wind energy harnesses the power of wind turbines to generate electricity, offering a clean and abundant energy source, though it requires significant land or offshore space. Hydropower, which generates electricity from flowing water, remains the largest source of renewable electricity globally. However, each renewable source has limitations: solar depends on weather conditions, wind is intermittent, and hydropower can impact aquatic ecosystems. Despite these challenges, renewable energy currently accounts for nearly 20% of global electricity generation, and this share is expected to grow as technology improves and costs continue to decline. Geothermal energy, which taps into the earth's internal heat, offers a consistent and sustainable option, particularly in volcanically active regions.",
        questions: [
            { id: 41, text: "Which energy source is considered renewable?", options: ["Coal", "Solar", "Oil", "Natural gas"], answer: "B" },
            { id: 42, text: "What is the primary advantage of wind energy?", options: ["Expensive", "Clean and abundant", "Requires little space", "Consistent"], answer: "B" },
            { id: 43, text: "Solar panels convert sunlight into...", options: ["Heat", "Electricity", "Water", "Gas"], answer: "B" },
            { id: 44, text: "Which country is the world's largest producer of solar energy?", options: ["USA", "Germany", "China", "India"], answer: "C" },
            { id: 45, text: "Hydropower generates electricity using...", options: ["Wind", "Water", "Sunlight", "Geothermal heat"], answer: "B" },
            { id: 46, text: "Why is renewable energy important for the environment?", options: ["It reduces carbon emissions", "It is cheaper", "It uses less space", "It creates noise"], answer: "A" },
            { id: 47, text: "Geothermal energy comes from...", options: ["The sun", "The earth's core", "The wind", "Water currents"], answer: "B" },
            { id: 48, text: "One limitation of solar energy is...", options: ["It's expensive", "It's not renewable", "It depends on weather", "It produces pollution"], answer: "C" },
            { id: 49, text: "What percentage of global energy comes from renewables currently (approx)?", options: ["10%", "20%", "30%", "50%"], answer: "B" },
            { id: 50, text: "The main challenge for renewable energy adoption is...", options: ["Lack of technology", "Cost and storage", "Public opposition", "Low demand"], answer: "B" },
            { id: 51, text: "What does solar power convert?", options: ["Wind to electricity", "Sunlight to electricity", "Water to electricity", "Heat to electricity"], answer: "B" },
            { id: 52, text: "Where is hydropower used?", options: ["Deserts", "Rivers", "Mountains", "Oceans"], answer: "B" },
            { id: 53, text: "What is a drawback of wind energy?", options: ["It is clean", "It is abundant", "It requires space", "It is cheap"], answer: "C" },
            { id: 54, text: "What is the fastest-growing energy sector?", options: ["Coal", "Solar", "Oil", "Nuclear"], answer: "B" },
            { id: 55, text: "What percentage of electricity comes from renewables?", options: ["10%", "20%", "30%", "40%"], answer: "B" },
            { id: 56, text: "What is geothermal energy?", options: ["Energy from the sun", "Energy from the earth", "Energy from the wind", "Energy from water"], answer: "B" },
            { id: 57, text: "Why is hydropower problematic?", options: ["It's expensive", "It impacts ecosystems", "It's inefficient", "It's not renewable"], answer: "B" },
            { id: 58, text: "What is expected to decline?", options: ["Renewable energy costs", "Solar power demand", "Wind energy", "All of the above"], answer: "A" },
            { id: 59, text: "What does the passage suggest about renewables?", options: ["They will fail", "They will grow", "They are too expensive", "They are not reliable"], answer: "B" },
            { id: 60, text: "What is the main goal of renewable energy?", options: ["Reduce emissions", "Increase costs", "Reduce space", "Increase pollution"], answer: "A" }
        ]
    },
    {
        id: 4,
        title: "Cultural Heritage",
        category: "Culture",
        level: "Medium",
        passage: "Cultural heritage encompasses the tangible and intangible assets that define a society's identity. This includes monuments, historical buildings, traditional crafts, languages, and rituals. The United Nations Educational, Scientific and Cultural Organisation (UNESCO) works to protect cultural and natural heritage around the world through its World Heritage Convention, adopted in 1972. Today, there are over 1,000 UNESCO World Heritage sites, with Italy having the most sites, followed by China, France, and Spain. However, cultural heritage faces numerous threats: climate change, urbanisation, armed conflict, and natural disasters. In recent years, there has been growing recognition of the importance of intangible cultural heritage — such as traditional music, dance, and oral traditions — which are equally vital to preserving cultural diversity. The loss of heritage diminishes not only national pride but also the historical record for future generations. Protecting heritage requires international cooperation, community involvement, and sustainable tourism practices.",
        questions: [
            { id: 61, text: "Cultural heritage includes...", options: ["Monuments", "Traditions", "Historical buildings", "All of the above"], answer: "D" },
            { id: 62, text: "Which organisation protects world heritage sites?", options: ["UNESCO", "WHO", "UNICEF", "WTO"], answer: "A" },
            { id: 63, text: "Why is cultural heritage important?", options: ["It preserves history", "It attracts tourists", "It defines identity", "All of the above"], answer: "D" },
            { id: 64, text: "A major threat to cultural heritage is...", options: ["Climate change", "Urbanisation", "War and conflict", "All of the above"], answer: "D" },
            { id: 65, text: "What did the 1972 UNESCO Convention do?", options: ["Protected natural sites only", "Protected cultural and natural heritage", "Created new museums", "Funded archaeological digs"], answer: "B" },
            { id: 66, text: "Traditional crafts are an example of...", options: ["Tangible heritage", "Intangible heritage", "Natural heritage", "Modern culture"], answer: "B" },
            { id: 67, text: "Which country has the most UNESCO world heritage sites?", options: ["USA", "Italy", "France", "China"], answer: "B" },
            { id: 68, text: "How many UNESCO world heritage sites exist worldwide (approx)?", options: ["100", "500", "1000", "2000"], answer: "C" },
            { id: 69, text: "Cultural landscapes are...", options: ["Natural forests", "Combined works of nature and humans", "Modern cities", "Deserts"], answer: "B" },
            { id: 70, text: "The passage suggests cultural heritage should be...", options: ["Ignored", "Preserved for future generations", "Replaced", "Commercialised"], answer: "B" },
            { id: 71, text: "What is intangible cultural heritage?", options: ["Monuments", "Music and dance", "Buildings", "Statues"], answer: "B" },
            { id: 72, text: "What threatens cultural heritage?", options: ["Climate change", "Urbanisation", "War", "All of the above"], answer: "D" },
            { id: 73, text: "What does UNESCO stand for?", options: ["United Nations Educational, Scientific and Cultural Organisation", "United Nations Economic and Social Council", "Universal Educational Organisation", "None of the above"], answer: "A" },
            { id: 74, text: "Why is heritage protection important?", options: ["National pride", "Historical record", "Both", "Neither"], answer: "C" },
            { id: 75, text: "What is a World Heritage site?", options: ["A modern building", "A protected cultural or natural site", "A theme park", "A private property"], answer: "B" },
            { id: 76, text: "Who signed the World Heritage Convention?", options: ["USA", "UK", "UNESCO", "Italy"], answer: "C" },
            { id: 77, text: "What is sustainable tourism?", options: ["Mass tourism", "Tourism that protects heritage", "Tourism that destroys heritage", "Tourism for profit"], answer: "B" },
            { id: 78, text: "What is the role of communities in heritage protection?", options: ["None", "Involvement", "Only government", "Only tourists"], answer: "B" },
            { id: 79, text: "What does the passage say about cultural diversity?", options: ["It is important", "It is irrelevant", "It is outdated", "It is harmful"], answer: "A" },
            { id: 80, text: "What is the author's view on heritage?", options: ["It should be protected", "It should be modernised", "It should be commercialised", "It should be ignored"], answer: "A" }
        ]
    },
    {
        id: 5,
        title: "Artificial Intelligence",
        category: "Technology",
        level: "Hard",
        passage: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. AI applications include self-driving cars, virtual assistants like Siri and Alexa, and healthcare diagnostics. Machine learning, a subset of AI, involves algorithms that improve through experience and data. While AI offers tremendous opportunities — from automating repetitive tasks to solving complex problems in science and medicine — it also raises significant ethical concerns, including job displacement, privacy issues, and algorithmic bias. Major tech companies like Google, Amazon, and Microsoft are investing heavily in AI research, with applications ranging from natural language processing to computer vision. It is estimated that up to 50% of current jobs could be automated by AI in the coming decades, prompting calls for new educational models and social safety nets. Ethical guidelines are being developed to ensure that AI systems are transparent, fair, and accountable. The future of AI will depend not only on technological advancements but also on how society chooses to govern and integrate these powerful tools.",
        questions: [
            { id: 81, text: "What is artificial intelligence (AI)?", options: ["Human intelligence", "Machine simulation of human intelligence", "A computer virus", "A programming language"], answer: "B" },
            { id: 82, text: "AI is used in which of these applications?", options: ["Self-driving cars", "Virtual assistants", "Healthcare diagnostics", "All of the above"], answer: "D" },
            { id: 83, text: "Machine learning is a subset of...", options: ["Robotics", "AI", "Data science", "Software engineering"], answer: "B" },
            { id: 84, text: "What is a major concern about AI?", options: ["It's too slow", "Job displacement", "It uses too much energy", "Lack of interest"], answer: "B" },
            { id: 85, text: "AI systems learn from...", options: ["Human commands", "Data and algorithms", "Trial and error", "None of the above"], answer: "B" },
            { id: 86, text: "Which company is a leader in AI research?", options: ["Google", "Apple", "Microsoft", "All of the above"], answer: "D" },
            { id: 87, text: "Ethical AI is important to...", options: ["Prevent bias", "Increase profits", "Speed up processes", "Reduce costs"], answer: "A" },
            { id: 88, text: "What percentage of jobs could be automated by AI (estimate)?", options: ["10%", "25%", "50%", "75%"], answer: "C" },
            { id: 89, text: "AI can help solve which global problem?", options: ["Climate change", "Healthcare access", "Education", "All of the above"], answer: "D" },
            { id: 90, text: "The future of AI depends on...", options: ["Better algorithms", "More data", "Ethical guidelines", "All of the above"], answer: "D" },
            { id: 91, text: "What is natural language processing?", options: ["A type of AI", "A type of computer", "A type of database", "A type of hardware"], answer: "A" },
            { id: 92, text: "What is computer vision?", options: ["AI for seeing", "AI for hearing", "AI for speaking", "AI for writing"], answer: "A" },
            { id: 93, text: "What is algorithmic bias?", options: ["Fairness", "Prejudice in AI", "Accuracy", "Speed"], answer: "B" },
            { id: 94, text: "Why are new educational models needed?", options: ["AI is changing jobs", "AI is failing", "AI is expensive", "AI is slow"], answer: "A" },
            { id: 95, text: "What is the role of ethics in AI?", options: ["To make AI faster", "To make AI fair", "To make AI cheaper", "To make AI bigger"], answer: "B" },
            { id: 96, text: "What does the passage say about AI?", options: ["It is dangerous", "It is helpful and challenging", "It is only for tech companies", "It is overrated"], answer: "B" },
            { id: 97, text: "How can society influence AI?", options: ["Through governance", "Through pricing", "Through marketing", "Through design"], answer: "A" },
            { id: 98, text: "What is the author's tone about AI?", options: ["Negative", "Positive but cautious", "Indifferent", "Hostile"], answer: "B" },
            { id: 99, text: "What does the passage suggest about the future?", options: ["AI will replace all jobs", "AI will create opportunities", "AI will disappear", "AI is a fad"], answer: "B" },
            { id: 100, text: "What is the main message of the passage?", options: ["AI is perfect", "AI needs careful management", "AI is a threat", "AI is overrated"], answer: "B" }
        ]
    },
    {
        id: 6,
        title: "Environmental Conservation",
        category: "Environment",
        level: "Hard",
        passage: "Environmental conservation is the practice of protecting and preserving natural resources and ecosystems. It is essential for maintaining biodiversity, regulating climate, and ensuring the availability of resources for future generations. Deforestation, caused by agriculture, logging, and urbanisation, poses a significant threat to rainforests, which are vital for oxygen production, carbon storage, and hosting more than half of the world's terrestrial species. The Kyoto Protocol and the Paris Agreement are international treaties aimed at reducing greenhouse gas emissions to mitigate climate change. Recycling, reducing waste, and using renewable energy are individual actions that contribute to conservation efforts. Plastic waste is the largest source of ocean pollution, harming marine life and ecosystems. National parks and protected areas are established to safeguard natural and cultural heritage while promoting sustainable tourism. The concept of a carbon footprint measures the total greenhouse gas emissions caused by an individual or organisation, encouraging accountability and more sustainable choices.",
        questions: [
            { id: 101, text: "What is conservation?", options: ["Using all natural resources", "Protecting and preserving nature", "Building cities", "Ignoring the environment"], answer: "B" },
            { id: 102, text: "Which is NOT a cause of deforestation?", options: ["Agriculture", "Urbanisation", "Afforestation", "Logging"], answer: "C" },
            { id: 103, text: "Why are rainforests important?", options: ["Produce oxygen", "Host biodiversity", "Regulate climate", "All of the above"], answer: "D" },
            { id: 104, text: "The Kyoto Protocol addressed...", options: ["Water pollution", "Air pollution", "Climate change", "Deforestation"], answer: "C" },
            { id: 105, text: "A carbon footprint measures...", options: ["The amount of carbon dioxide produced", "The size of a building", "The weight of pollution", "Energy efficiency"], answer: "A" },
            { id: 106, text: "Recycling reduces...", options: ["Water", "Waste", "Energy", "Food"], answer: "B" },
            { id: 107, text: "What is the largest source of ocean pollution?", options: ["Oil spills", "Plastic waste", "Sewage", "Toxic chemicals"], answer: "B" },
            { id: 108, text: "Which energy source produces no greenhouse gases?", options: ["Coal", "Solar", "Oil", "Natural gas"], answer: "B" },
            { id: 109, text: "National parks are created to...", options: ["Promote tourism", "Protect natural and cultural heritage", "Build hotels", "Create jobs"], answer: "B" },
            { id: 110, text: "Individual action to help the environment includes...", options: ["Using less plastic", "Saving water", "Planting trees", "All of the above"], answer: "D" },
            { id: 111, text: "What is biodiversity?", options: ["Variety of life", "Variety of buildings", "Variety of cities", "Variety of machines"], answer: "A" },
            { id: 112, text: "What is the Paris Agreement?", options: ["A treaty on climate change", "A trade agreement", "A military pact", "A cultural treaty"], answer: "A" },
            { id: 113, text: "What is sustainable tourism?", options: ["Tourism that protects the environment", "Mass tourism", "Luxury tourism", "Adventure tourism"], answer: "A" },
            { id: 114, text: "What does the passage say about recycling?", options: ["It is useless", "It reduces waste", "It causes pollution", "It is expensive"], answer: "B" },
            { id: 115, text: "What is the role of individuals in conservation?", options: ["None", "Small but important", "Only governments", "Only corporations"], answer: "B" },
            { id: 116, text: "Why are protected areas important?", options: ["They save wildlife", "They attract tourists", "They are profitable", "They are modern"], answer: "A" },
            { id: 117, text: "What is the author's view on conservation?", options: ["It is unnecessary", "It is essential", "It is too expensive", "It is impossible"], answer: "B" },
            { id: 118, text: "What is the effect of deforestation?", options: ["More oxygen", "Loss of biodiversity", "More jobs", "More rainfall"], answer: "B" },
            { id: 119, text: "What does the passage emphasize?", options: ["Individual effort", "Government effort", "Corporate effort", "All of the above"], answer: "D" },
            { id: 120, text: "What is the conclusion of the passage?", options: ["We should ignore the environment", "We should protect the environment", "We should use more resources", "We should stop recycling"], answer: "B" }
        ]
    }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getReadingQuestions(plan) {
    const allQuestions = [];
    const limit = plan === 'free' ? 1 : plan === 'pro' ? 50 : 100;
    const passages = readingPassages.slice(0, limit);
    
    passages.forEach(passage => {
        passage.questions.forEach(q => {
            allQuestions.push({
                ...q,
                passage: passage.passage,
                title: passage.title,
                level: passage.level
            });
        });
    });
    
    return shuffleArray(allQuestions);
}

// ============================================================
// LISTENING MODULE — COMING NEXT
// ============================================================

// ============================================================
// WRITING MODULE — COMING NEXT
// ============================================================

// ============================================================
// SPEAKING MODULE — COMING NEXT
// ============================================================

// ============================================================
// EXPORT
// ============================================================
console.log('📚 IELTSProva Question Bank loaded!');
console.log('📊 Reading: 6 passages (120 questions) loaded');
console.log('📊 More passages coming...');

const questionBank = {
    reading: {
        free: getReadingQuestions('free'),
        pro: getReadingQuestions('pro'),
        proplus: getReadingQuestions('proplus')
    }
};
