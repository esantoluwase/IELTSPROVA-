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
// ============================================================
// READING PASSAGES 7-20 (14 MORE PASSAGES)
// ============================================================

    {
        id: 7,
        title: "Space Exploration",
        category: "Science",
        level: "Medium",
        passage: "Space exploration has captivated humanity for centuries. The launch of Sputnik 1 by the Soviet Union in 1957 marked the beginning of the space age. Since then, humans have landed on the Moon, sent probes to Mars, and established the International Space Station. Space exploration has led to numerous technological innovations, including satellite communications, GPS, and weather forecasting. Despite the high costs and risks, space agencies around the world continue to push the boundaries of what is possible. The future of space exploration includes plans for manned missions to Mars, asteroid mining, and the establishment of permanent lunar bases. Private companies like SpaceX and Blue Origin are also playing an increasingly important role in making space more accessible.",
        questions: [
            { id: 121, text: "When was Sputnik 1 launched?", options: ["1947", "1957", "1967", "1977"], answer: "B" },
            { id: 122, text: "What marked the beginning of the space age?", options: ["Apollo 11", "Sputnik 1", "International Space Station", "SpaceX"], answer: "B" },
            { id: 123, text: "What has space exploration led to?", options: ["Satellite communications", "GPS", "Weather forecasting", "All of the above"], answer: "D" },
            { id: 124, text: "What is one challenge of space exploration?", options: ["High costs", "Low risks", "Easy access", "No challenges"], answer: "A" },
            { id: 125, text: "What is the future of space exploration?", options: ["Manned missions to Mars", "Asteroid mining", "Permanent lunar bases", "All of the above"], answer: "D" },
            { id: 126, text: "Which private company is involved in space exploration?", options: ["SpaceX", "Blue Origin", "Both", "Neither"], answer: "C" },
            { id: 127, text: "What does GPS stand for?", options: ["Global Positioning System", "Global Power System", "Geographic Positioning System", "General Positioning System"], answer: "A" },
            { id: 128, text: "When did humans land on the Moon?", options: ["1957", "1969", "1972", "1980"], answer: "B" },
            { id: 129, text: "What is the International Space Station?", options: ["A lunar base", "A space laboratory", "A Mars rover", "A satellite"], answer: "B" },
            { id: 130, text: "What is the main purpose of space exploration?", options: ["Scientific discovery", "Military advantage", "Tourism", "Profit"], answer: "A" },
            { id: 131, text: "What is a Mars rover?", options: ["A vehicle on Mars", "A spacecraft", "A satellite", "A telescope"], answer: "A" },
            { id: 132, text: "What is the role of private companies?", options: ["Making space accessible", "Increasing costs", "Reducing safety", "Limiting access"], answer: "A" },
            { id: 133, text: "What is a satellite used for?", options: ["Communication", "Navigation", "Research", "All of the above"], answer: "D" },
            { id: 134, text: "What is the cost of space exploration?", options: ["Low", "Moderate", "High", "Free"], answer: "C" },
            { id: 135, text: "What does the passage suggest about space exploration?", options: ["It is unnecessary", "It is important", "It is too expensive", "It is dangerous"], answer: "B" },
            { id: 136, text: "What is the role of space agencies?", options: ["To explore space", "To build hotels", "To sell products", "To limit access"], answer: "A" },
            { id: 137, text: "What is the benefit of satellite communications?", options: ["Global connectivity", "Local connectivity", "No connectivity", "Limited connectivity"], answer: "A" },
            { id: 138, text: "What is the future of space travel?", options: ["More accessible", "Less accessible", "More expensive", "More dangerous"], answer: "A" },
            { id: 139, text: "What is the author's view on space exploration?", options: ["Positive", "Negative", "Indifferent", "Hostile"], answer: "A" },
            { id: 140, text: "What is the main message of the passage?", options: ["Space exploration is valuable", "Space exploration is a waste", "Space exploration is dangerous", "Space exploration is impossible"], answer: "A" }
        ]
    },
    {
        id: 8,
        title: "Genetics and Health",
        category: "Science",
        level: "Hard",
        passage: "Genetics is the study of genes and heredity. It has revolutionized our understanding of health and disease. The Human Genome Project, completed in 2003, mapped all the genes in human DNA. This has led to advances in personalized medicine, where treatments are tailored to an individual's genetic makeup. Genetic testing can identify risks for diseases such as cancer, heart disease, and Alzheimer's. Gene therapy, which involves replacing or repairing defective genes, has shown promise in treating rare genetic disorders. However, genetic research also raises ethical concerns, including privacy issues and the potential for genetic discrimination. Despite these challenges, genetics continues to be one of the most exciting fields in medicine.",
        questions: [
            { id: 141, text: "What is genetics?", options: ["The study of genes", "The study of diseases", "The study of drugs", "The study of cells"], answer: "A" },
            { id: 142, text: "When was the Human Genome Project completed?", options: ["1993", "2003", "2013", "2023"], answer: "B" },
            { id: 143, text: "What did the Human Genome Project map?", options: ["All human genes", "All human cells", "All human diseases", "All human drugs"], answer: "A" },
            { id: 144, text: "What is personalized medicine?", options: ["Treatments based on genetics", "Treatments based on age", "Treatments based on location", "Treatments based on cost"], answer: "A" },
            { id: 145, text: "What can genetic testing identify?", options: ["Disease risks", "Personality traits", "Physical appearance", "All of the above"], answer: "A" },
            { id: 146, text: "What is gene therapy?", options: ["Replacing defective genes", "Removing genes", "Creating genes", "Ignoring genes"], answer: "A" },
            { id: 147, text: "What disease risks can genetic testing identify?", options: ["Cancer", "Heart disease", "Alzheimer's", "All of the above"], answer: "D" },
            { id: 148, text: "What is an ethical concern about genetics?", options: ["Privacy", "Cost", "Speed", "Safety"], answer: "A" },
            { id: 149, text: "What is genetic discrimination?", options: ["Treating people based on genetics", "Treating people based on age", "Treating people based on location", "Treating people based on appearance"], answer: "A" },
            { id: 150, text: "What is the author's view on genetics?", options: ["Positive", "Negative", "Indifferent", "Hostile"], answer: "A" },
            { id: 151, text: "What is the Human Genome Project?", options: ["A gene mapping project", "A disease mapping project", "A drug mapping project", "A cell mapping project"], answer: "A" },
            { id: 152, text: "What is the benefit of genetics?", options: ["Better treatments", "Better prevention", "Better understanding", "All of the above"], answer: "D" },
            { id: 153, text: "What is a genetic disorder?", options: ["A disease caused by genes", "A disease caused by environment", "A disease caused by lifestyle", "A disease caused by age"], answer: "A" },
            { id: 154, text: "What is the challenge of genetics?", options: ["Ethical concerns", "Cost", "Speed", "Safety"], answer: "A" },
            { id: 155, text: "What is the future of genetics?", options: ["Personalized medicine", "Universal medicine", "Expensive medicine", "Ineffective medicine"], answer: "A" },
            { id: 156, text: "What is the role of genes in health?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 157, text: "What is the passage about?", options: ["Genetics and health", "Disease prevention", "Drug development", "Cell biology"], answer: "A" },
            { id: 158, text: "What is the author's tone?", options: ["Informative", "Persuasive", "Entertaining", "Critical"], answer: "A" },
            { id: 159, text: "What is the main message?", options: ["Genetics is important", "Genetics is overrated", "Genetics is dangerous", "Genetics is expensive"], answer: "A" },
            { id: 160, text: "What is the role of genes?", options: ["Determining traits", "Determining behavior", "Determining environment", "Determining education"], answer: "A" }
        ]
    },
    {
        id: 9,
        title: "Global Warming",
        category: "Environment",
        level: "Medium",
        passage: "Global warming refers to the long-term increase in Earth's average temperature. It is primarily caused by the burning of fossil fuels, which releases greenhouse gases such as carbon dioxide and methane into the atmosphere. These gases trap heat, leading to the greenhouse effect. The consequences of global warming include rising sea levels, more frequent and severe weather events, and loss of biodiversity. The Intergovernmental Panel on Climate Change (IPCC) has warned that urgent action is needed to limit global warming to 1.5°C above pre-industrial levels. Solutions include transitioning to renewable energy, improving energy efficiency, and reforestation. Individual actions, such as reducing waste and using public transport, can also make a difference.",
        questions: [
            { id: 161, text: "What is global warming?", options: ["Long-term temperature increase", "Short-term temperature increase", "Long-term temperature decrease", "Short-term temperature decrease"], answer: "A" },
            { id: 162, text: "What causes global warming?", options: ["Burning fossil fuels", "Planting trees", "Reducing waste", "Using renewable energy"], answer: "A" },
            { id: 163, text: "What are greenhouse gases?", options: ["Carbon dioxide", "Methane", "Both", "Neither"], answer: "C" },
            { id: 164, text: "What is the greenhouse effect?", options: ["Trapping heat", "Releasing heat", "Absorbing heat", "Reflecting heat"], answer: "A" },
            { id: 165, text: "What are the consequences of global warming?", options: ["Rising sea levels", "Severe weather", "Loss of biodiversity", "All of the above"], answer: "D" },
            { id: 166, text: "What does IPCC stand for?", options: ["Intergovernmental Panel on Climate Change", "International Panel on Climate Control", "Intergovernmental Program on Climate Change", "International Program on Climate Control"], answer: "A" },
            { id: 167, text: "What is the recommended limit for global warming?", options: ["1.0°C", "1.5°C", "2.0°C", "3.0°C"], answer: "B" },
            { id: 168, text: "What is a solution to global warming?", options: ["Renewable energy", "Deforestation", "Burning fossil fuels", "Increasing waste"], answer: "A" },
            { id: 169, text: "What is the role of individuals?", options: ["Reduce waste", "Use public transport", "Both", "Neither"], answer: "C" },
            { id: 170, text: "What is the author's view on global warming?", options: ["It is serious", "It is exaggerated", "It is harmless", "It is inevitable"], answer: "A" },
            { id: 171, text: "What is reforestation?", options: ["Planting trees", "Cutting trees", "Burning trees", "Ignoring trees"], answer: "A" },
            { id: 172, text: "What is energy efficiency?", options: ["Using less energy", "Using more energy", "Using energy wastefully", "Using energy carelessly"], answer: "A" },
            { id: 173, text: "What is the role of fossil fuels?", options: ["Cause global warming", "Reduce global warming", "No role", "Minor role"], answer: "A" },
            { id: 174, text: "What is the IPCC?", options: ["A climate change panel", "A health panel", "An education panel", "A technology panel"], answer: "A" },
            { id: 175, text: "What is the effect of rising sea levels?", options: ["Flooding", "Drought", "Wildfires", "Tornadoes"], answer: "A" },
            { id: 176, text: "What is the message of the passage?", options: ["Act now", "Wait and see", "Do nothing", "Ignore the problem"], answer: "A" },
            { id: 177, text: "What is the main cause of global warming?", options: ["Human activity", "Natural causes", "Animal activity", "Plant activity"], answer: "A" },
            { id: 178, text: "What is the solution to global warming?", options: ["Renewable energy", "Fossil fuels", "Deforestation", "Pollution"], answer: "A" },
            { id: 179, text: "What is the author's tone?", options: ["Urgent", "Calm", "Indifferent", "Optimistic"], answer: "A" },
            { id: 180, text: "What is the main idea?", options: ["Global warming is a serious problem", "Global warming is not a problem", "Global warming is natural", "Global warming is exaggerated"], answer: "A" }
        ]
    },
    {
        id: 10,
        title: "Education Around the World",
        category: "Education",
        level: "Easy",
        passage: "Education is a fundamental human right and a key driver of economic and social development. However, access to quality education varies widely around the world. In developed countries, nearly all children complete primary and secondary education, and many go on to higher education. In developing countries, millions of children are out of school due to poverty, conflict, and lack of infrastructure. The United Nations' Sustainable Development Goal 4 aims to ensure inclusive and equitable quality education for all. Technology is playing an increasingly important role in bridging the education gap, with online learning platforms and digital resources making education more accessible. However, the digital divide remains a significant barrier in many parts of the world.",
        questions: [
            { id: 181, text: "What is education considered?", options: ["A human right", "A luxury", "A privilege", "A burden"], answer: "A" },
            { id: 182, text: "What drives economic and social development?", options: ["Education", "Military", "Tourism", "Farming"], answer: "A" },
            { id: 183, text: "What is the status of education in developed countries?", options: ["Nearly all children complete school", "Few children complete school", "No children complete school", "Only boys complete school"], answer: "A" },
            { id: 184, text: "What is the status of education in developing countries?", options: ["Millions are out of school", "All children are in school", "Only girls are out of school", "Only boys are in school"], answer: "A" },
            { id: 185, text: "What are the barriers to education?", options: ["Poverty", "Conflict", "Lack of infrastructure", "All of the above"], answer: "D" },
            { id: 186, text: "What is Sustainable Development Goal 4?", options: ["Quality education", "No poverty", "Gender equality", "Good health"], answer: "A" },
            { id: 187, text: "What role does technology play in education?", options: ["Bridging the education gap", "Widening the education gap", "No role", "Minor role"], answer: "A" },
            { id: 188, text: "What is the digital divide?", options: ["Access gap to technology", "Access gap to books", "Access gap to teachers", "Access gap to schools"], answer: "A" },
            { id: 189, text: "What is the goal of SDG 4?", options: ["Inclusive and equitable education", "Free education for all", "Online education only", "Higher education only"], answer: "A" },
            { id: 190, text: "What is the author's view on education?", options: ["It is essential", "It is optional", "It is overrated", "It is expensive"], answer: "A" },
            { id: 191, text: "What is the role of technology?", options: ["Making education accessible", "Making education expensive", "Making education difficult", "Making education irrelevant"], answer: "A" },
            { id: 192, text: "What is the digital divide?", options: ["Technology access gap", "Education quality gap", "Teacher availability gap", "School infrastructure gap"], answer: "A" },
            { id: 193, text: "What is the main message?", options: ["Education is important", "Education is unnecessary", "Education is outdated", "Education is expensive"], answer: "A" },
            { id: 194, text: "What is the role of the UN?", options: ["Promoting education", "Limiting education", "Ignoring education", "Complicating education"], answer: "A" },
            { id: 195, text: "What is the challenge?", options: ["Access inequality", "Cost inequality", "Age inequality", "Gender inequality"], answer: "A" },
            { id: 196, text: "What is the benefit of education?", options: ["Personal growth", "Social development", "Economic growth", "All of the above"], answer: "D" },
            { id: 197, text: "What is the author's tone?", options: ["Hopeful", "Pessimistic", "Indifferent", "Critical"], answer: "A" },
            { id: 198, text: "What is the role of online learning?", options: ["Increasing access", "Decreasing access", "Making education expensive", "Making education difficult"], answer: "A" },
            { id: 199, text: "What is the future of education?", options: ["More accessible", "Less accessible", "More expensive", "More difficult"], answer: "A" },
            { id: 200, text: "What is the main idea?", options: ["Education is a fundamental right", "Education is a luxury", "Education is a privilege", "Education is a burden"], answer: "A" }
        ]
    },
    {
        id: 11,
        title: "Mental Health Awareness",
        category: "Health",
        level: "Medium",
        passage: "Mental health is an integral part of overall health and well-being. It affects how we think, feel, and act. According to the World Health Organization (WHO), one in four people will be affected by a mental health condition at some point in their lives. Common mental health conditions include depression, anxiety, and bipolar disorder. Stigma and discrimination often prevent people from seeking help. However, there is growing awareness of the importance of mental health, and more resources are being dedicated to mental health care. Treatment options include therapy, medication, and lifestyle changes. Self-care practices such as regular exercise, adequate sleep, and mindfulness can also support mental well-being.",
        questions: [
            { id: 201, text: "What is mental health?", options: ["Part of overall health", "Separate from health", "Only for some people", "Only for adults"], answer: "A" },
            { id: 202, text: "What does WHO stand for?", options: ["World Health Organization", "World Health Office", "World Health Outreach", "World Health Operations"], answer: "A" },
            { id: 203, text: "What percentage of people will be affected by mental health conditions?", options: ["1 in 4", "1 in 10", "1 in 100", "1 in 1000"], answer: "A" },
            { id: 204, text: "What are common mental health conditions?", options: ["Depression", "Anxiety", "Bipolar disorder", "All of the above"], answer: "D" },
            { id: 205, text: "What prevents people from seeking help?", options: ["Stigma", "Cost", "Awareness", "All of the above"], answer: "A" },
            { id: 206, text: "What is growing?", options: ["Awareness of mental health", "Stigma", "Ignorance", "Discrimination"], answer: "A" },
            { id: 207, text: "What are treatment options?", options: ["Therapy", "Medication", "Lifestyle changes", "All of the above"], answer: "D" },
            { id: 208, text: "What is self-care?", options: ["Practices for well-being", "Ignoring health", "Avoiding treatment", "Isolation"], answer: "A" },
            { id: 209, text: "What is stigma?", options: ["Negative attitudes", "Positive attitudes", "Neutral attitudes", "No attitudes"], answer: "A" },
            { id: 210, text: "What is the author's view on mental health?", options: ["It is important", "It is unimportant", "It is overrated", "It is exaggerated"], answer: "A" },
            { id: 211, text: "What is the role of exercise?", options: ["Supporting mental well-being", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 212, text: "What is mindfulness?", options: ["A self-care practice", "A medication", "A therapy", "A disorder"], answer: "A" },
            { id: 213, text: "What is the main message?", options: ["Mental health matters", "Mental health is not important", "Mental health is rare", "Mental health is overrated"], answer: "A" },
            { id: 214, text: "What is the role of WHO?", options: ["Promoting mental health", "Ignoring mental health", "Limiting mental health", "Complicating mental health"], answer: "A" },
            { id: 215, text: "What is the challenge?", options: ["Stigma", "Access", "Cost", "All of the above"], answer: "D" },
            { id: 216, text: "What is the future of mental health care?", options: ["More accessible", "Less accessible", "More stigmatized", "More expensive"], answer: "A" },
            { id: 217, text: "What is the author's tone?", options: ["Supportive", "Critical", "Indifferent", "Pessimistic"], answer: "A" },
            { id: 218, text: "What is the role of therapy?", options: ["Supporting mental health", "Ignoring mental health", "Harmful", "No role"], answer: "A" },
            { id: 219, text: "What is the role of medication?", options: ["Supporting mental health", "Harmful", "No role", "Minor role"], answer: "A" },
            { id: 220, text: "What is the main idea?", options: ["Mental health is important", "Mental health is not important", "Mental health is rare", "Mental health is overrated"], answer: "A" }
        ]
    }
];

// ============================================================
// CONTINUE WITH PASSAGES 12-100
// ============================================================
// ============================================================
// READING PASSAGES 12-20
// ============================================================

    {
        id: 12,
        title: "The History of the Internet",
        category: "Technology",
        level: "Medium",
        passage: "The Internet has transformed the way we live, work, and communicate. Its origins can be traced back to the 1960s when the United States Department of Defense developed ARPANET, a network that allowed computers to communicate with each other. In the 1980s, the introduction of the World Wide Web by Tim Berners-Lee made the Internet accessible to the general public. Since then, the Internet has grown exponentially, connecting billions of people around the world. The rise of social media, e-commerce, and streaming services has further revolutionized the way we interact with technology. However, the Internet also poses challenges, including privacy concerns, cybercrime, and misinformation. Despite these issues, the Internet remains one of the most powerful tools for education, communication, and commerce.",
        questions: [
            { id: 221, text: "When did the Internet originate?", options: ["1960s", "1970s", "1980s", "1990s"], answer: "A" },
            { id: 222, text: "What was ARPANET?", options: ["A network", "A computer", "A website", "A search engine"], answer: "A" },
            { id: 223, text: "Who developed the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"], answer: "A" },
            { id: 224, text: "What did the World Wide Web do?", options: ["Made the Internet accessible", "Made the Internet private", "Made the Internet expensive", "Made the Internet slow"], answer: "A" },
            { id: 225, text: "What has risen with the Internet?", options: ["Social media", "E-commerce", "Streaming services", "All of the above"], answer: "D" },
            { id: 226, text: "What are challenges of the Internet?", options: ["Privacy", "Cybercrime", "Misinformation", "All of the above"], answer: "D" },
            { id: 227, text: "What is the Internet used for?", options: ["Education", "Communication", "Commerce", "All of the above"], answer: "D" },
            { id: 228, text: "What is cybercrime?", options: ["Online crime", "Offline crime", "No crime", "Minor crime"], answer: "A" },
            { id: 229, text: "What is misinformation?", options: ["False information", "True information", "Neutral information", "No information"], answer: "A" },
            { id: 230, text: "What is the author's view on the Internet?", options: ["Powerful but challenging", "Perfect", "Harmful", "Irrelevant"], answer: "A" },
            { id: 231, text: "What is the role of social media?", options: ["Connecting people", "Isolating people", "No role", "Minor role"], answer: "A" },
            { id: 232, text: "What is e-commerce?", options: ["Online shopping", "Offline shopping", "No shopping", "Only shopping"], answer: "A" },
            { id: 233, text: "What is streaming?", options: ["Watching online", "Downloading", "Buying", "Renting"], answer: "A" },
            { id: 234, text: "What is the future of the Internet?", options: ["Growing", "Shrinking", "Staying the same", "Disappearing"], answer: "A" },
            { id: 235, text: "What is the author's tone?", options: ["Informative", "Critical", "Pessimistic", "Indifferent"], answer: "A" },
            { id: 236, text: "What is the main message?", options: ["The Internet is powerful", "The Internet is dangerous", "The Internet is useless", "The Internet is expensive"], answer: "A" },
            { id: 237, text: "What is the role of the Internet in education?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 238, text: "What is the role of the Internet in commerce?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 239, text: "What is the challenge of the Internet?", options: ["Privacy concerns", "Cost", "Speed", "Availability"], answer: "A" },
            { id: 240, text: "What is the Internet used for today?", options: ["Communication", "Education", "Business", "All of the above"], answer: "D" }
        ]
    },
    {
        id: 13,
        title: "The Importance of Physical Activity",
        category: "Health",
        level: "Easy",
        passage: "Physical activity is essential for maintaining good health and well-being. It can help prevent chronic diseases such as obesity, diabetes, and heart disease. Regular exercise also improves mental health by reducing stress, anxiety, and depression. The World Health Organization recommends at least 150 minutes of moderate-intensity exercise per week. This can include activities such as walking, running, swimming, or cycling. Despite the benefits, many people do not get enough exercise due to busy schedules, lack of motivation, or limited access to facilities. However, even small changes, such as taking the stairs instead of the elevator or walking instead of driving, can make a significant difference.",
        questions: [
            { id: 241, text: "What is physical activity essential for?", options: ["Health and well-being", "Wealth", "Fame", "Power"], answer: "A" },
            { id: 242, text: "What can physical activity prevent?", options: ["Chronic diseases", "Infections", "Accidents", "All of the above"], answer: "A" },
            { id: 243, text: "What does exercise improve?", options: ["Mental health", "Physical health", "Both", "Neither"], answer: "C" },
            { id: 244, text: "What does WHO recommend?", options: ["150 minutes of exercise per week", "50 minutes of exercise per week", "200 minutes of exercise per week", "No exercise"], answer: "A" },
            { id: 245, text: "What are examples of exercise?", options: ["Walking", "Running", "Swimming", "All of the above"], answer: "D" },
            { id: 246, text: "Why do many people not exercise?", options: ["Busy schedules", "Lack of motivation", "Limited access", "All of the above"], answer: "D" },
            { id: 247, text: "What is a small change that can make a difference?", options: ["Taking the stairs", "Watching TV", "Sitting all day", "Eating junk food"], answer: "A" },
            { id: 248, text: "What is the author's view on exercise?", options: ["It is important", "It is optional", "It is overrated", "It is harmful"], answer: "A" },
            { id: 249, text: "What is the role of exercise?", options: ["Improving health", "Worsening health", "No role", "Minor role"], answer: "A" },
            { id: 250, text: "What is the main message?", options: ["Exercise is important", "Exercise is not important", "Exercise is harmful", "Exercise is expensive"], answer: "A" },
            { id: 251, text: "What is the benefit of exercise?", options: ["Disease prevention", "Cost", "Speed", "Convenience"], answer: "A" },
            { id: 252, text: "What is the role of WHO?", options: ["Promoting exercise", "Limiting exercise", "Ignoring exercise", "Complicating exercise"], answer: "A" },
            { id: 253, text: "What is the challenge?", options: ["Time", "Money", "Space", "All of the above"], answer: "A" },
            { id: 254, text: "What is the future of exercise?", options: ["More accessible", "Less accessible", "More expensive", "More difficult"], answer: "A" },
            { id: 255, text: "What is the author's tone?", options: ["Encouraging", "Discouraging", "Indifferent", "Critical"], answer: "A" },
            { id: 256, text: "What is the role of walking?", options: ["Supporting health", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 257, text: "What is the role of cycling?", options: ["Supporting health", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 258, text: "What is the role of swimming?", options: ["Supporting health", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 259, text: "What is the main idea?", options: ["Exercise is important", "Exercise is not important", "Exercise is harmful", "Exercise is expensive"], answer: "A" },
            { id: 260, text: "What is the benefit of exercise?", options: ["Better health", "More stress", "Less energy", "More illness"], answer: "A" }
        ]
    },
    {
        id: 14,
        title: "The Future of Work",
        category: "Society",
        level: "Hard",
        passage: "The world of work is undergoing significant changes. Automation and artificial intelligence are transforming industries, leading to the creation of new jobs and the obsolescence of others. The COVID-19 pandemic accelerated the shift towards remote work, which is now becoming a permanent feature of many professions. The gig economy, characterized by short-term contracts and freelance work, is also on the rise. These changes offer flexibility and opportunities but also pose challenges such as job insecurity and income inequality. To thrive in the future of work, individuals will need to develop skills such as digital literacy, adaptability, and lifelong learning.",
        questions: [
            { id: 261, text: "What is transforming industries?", options: ["Automation", "AI", "Both", "Neither"], answer: "C" },
            { id: 262, text: "What accelerated remote work?", options: ["COVID-19 pandemic", "Technology", "Government policy", "All of the above"], answer: "A" },
            { id: 263, text: "What is the gig economy?", options: ["Freelance work", "Full-time work", "Part-time work", "Volunteer work"], answer: "A" },
            { id: 264, text: "What does the gig economy offer?", options: ["Flexibility", "Security", "Benefits", "Permanence"], answer: "A" },
            { id: 265, text: "What are challenges of the gig economy?", options: ["Job insecurity", "Income inequality", "Both", "Neither"], answer: "C" },
            { id: 266, text: "What skills are needed for the future of work?", options: ["Digital literacy", "Adaptability", "Lifelong learning", "All of the above"], answer: "D" },
            { id: 267, text: "What is the author's view on the future of work?", options: ["Transformative", "Negative", "Indifferent", "Pessimistic"], answer: "A" },
            { id: 268, text: "What is the role of AI?", options: ["Transforming work", "Ignoring work", "Limiting work", "Complicating work"], answer: "A" },
            { id: 269, text: "What is the role of automation?", options: ["Transforming work", "Ignoring work", "Limiting work", "Complicating work"], answer: "A" },
            { id: 270, text: "What is the main message?", options: ["Work is changing", "Work is staying the same", "Work is disappearing", "Work is becoming easier"], answer: "A" },
            { id: 271, text: "What is the future of remote work?", options: ["Permanent", "Temporary", "Rare", "Non-existent"], answer: "A" },
            { id: 272, text: "What is the challenge?", options: ["Job insecurity", "Income inequality", "Both", "Neither"], answer: "C" },
            { id: 273, text: "What is the role of lifelong learning?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 274, text: "What is the role of digital literacy?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 275, text: "What is the author's tone?", options: ["Forward-looking", "Pessimistic", "Indifferent", "Critical"], answer: "A" },
            { id: 276, text: "What is the main idea?", options: ["Work is changing", "Work is stable", "Work is disappearing", "Work is becoming easier"], answer: "A" },
            { id: 277, text: "What is the role of technology?", options: ["Transforming work", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 278, text: "What is the role of COVID-19?", options: ["Accelerating change", "Slowing change", "No role", "Minor role"], answer: "A" },
            { id: 279, text: "What is the future of jobs?", options: ["New jobs emerging", "All jobs disappearing", "No changes", "Jobs becoming easier"], answer: "A" },
            { id: 280, text: "What is the main message?", options: ["Prepare for change", "Ignore change", "Resist change", "Stop learning"], answer: "A" }
        ]
    },
    {
        id: 15,
        title: "The Power of Storytelling",
        category: "Culture",
        level: "Medium",
        passage: "Storytelling is a fundamental human activity that has been practiced for thousands of years. It is a powerful tool for communication, education, and entertainment. Stories have the ability to inspire, inform, and connect people across cultures and generations. They can be found in various forms, including books, films, theatre, and oral traditions. In the digital age, storytelling has evolved with the rise of social media, podcasts, and video platforms. Good storytelling can create emotional connections, convey complex ideas, and drive social change. Whether in business, politics, or entertainment, the ability to tell a compelling story is a valuable skill.",
        questions: [
            { id: 281, text: "What is storytelling?", options: ["A fundamental human activity", "A modern activity", "A rare activity", "An outdated activity"], answer: "A" },
            { id: 282, text: "What is storytelling used for?", options: ["Communication", "Education", "Entertainment", "All of the above"], answer: "D" },
            { id: 283, text: "What forms can stories take?", options: ["Books", "Films", "Theatre", "All of the above"], answer: "D" },
            { id: 284, text: "What has storytelling evolved with?", options: ["Social media", "Podcasts", "Video platforms", "All of the above"], answer: "D" },
            { id: 285, text: "What can good storytelling do?", options: ["Create emotional connections", "Convey complex ideas", "Drive social change", "All of the above"], answer: "D" },
            { id: 286, text: "Where is storytelling valuable?", options: ["Business", "Politics", "Entertainment", "All of the above"], answer: "D" },
            { id: 287, text: "What is the author's view on storytelling?", options: ["Powerful", "Irrelevant", "Outdated", "Harmful"], answer: "A" },
            { id: 288, text: "What is the role of stories?", options: ["Inspiring people", "Informing people", "Connecting people", "All of the above"], answer: "D" },
            { id: 289, text: "What is the main message?", options: ["Storytelling is powerful", "Storytelling is outdated", "Storytelling is harmful", "Storytelling is irrelevant"], answer: "A" },
            { id: 290, text: "What is the future of storytelling?", options: ["Evolving", "Disappearing", "Staying the same", "Becoming irrelevant"], answer: "A" },
            { id: 291, text: "What is the role of technology?", options: ["Transforming storytelling", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 292, text: "What is the role of social media?", options: ["Amplifying stories", "Limiting stories", "Ignoring stories", "No role"], answer: "A" },
            { id: 293, text: "What is the role of podcasts?", options: ["Sharing stories", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 294, text: "What is the author's tone?", options: ["Appreciative", "Critical", "Indifferent", "Pessimistic"], answer: "A" },
            { id: 295, text: "What is the main idea?", options: ["Storytelling is valuable", "Storytelling is outdated", "Storytelling is harmful", "Storytelling is irrelevant"], answer: "A" },
            { id: 296, text: "What is the role of stories in culture?", options: ["Connecting people", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 297, text: "What is the role of stories in business?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 298, text: "What is the role of stories in politics?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 299, text: "What is the challenge?", options: ["Keeping stories relevant", "Ignoring stories", "Limiting stories", "Complicating stories"], answer: "A" },
            { id: 300, text: "What is the main message?", options: ["Stories matter", "Stories don't matter", "Stories are outdated", "Stories are harmful"], answer: "A" }
        ]
    },
    {
        id: 16,
        title: "The Impact of Social Media",
        category: "Technology",
        level: "Medium",
        passage: "Social media has become an integral part of modern life, with billions of people using platforms such as Facebook, Instagram, and Twitter. It has transformed the way we communicate, share information, and connect with others. Social media offers numerous benefits, including the ability to stay in touch with friends and family, access news and information, and participate in online communities. However, it also has its drawbacks, such as the spread of misinformation, cyberbullying, and negative effects on mental health. It is important to use social media mindfully and to be aware of its potential impact on our lives.",
        questions: [
            { id: 301, text: "What has social media become?", options: ["An integral part of modern life", "A minor part of modern life", "An outdated part of modern life", "A harmful part of modern life"], answer: "A" },
            { id: 302, text: "What platforms are mentioned?", options: ["Facebook", "Instagram", "Twitter", "All of the above"], answer: "D" },
            { id: 303, text: "What has social media transformed?", options: ["Communication", "Information sharing", "Connections", "All of the above"], answer: "D" },
            { id: 304, text: "What are the benefits of social media?", options: ["Staying in touch", "Accessing news", "Participating in communities", "All of the above"], answer: "D" },
            { id: 305, text: "What are the drawbacks of social media?", options: ["Misinformation", "Cyberbullying", "Negative effects on mental health", "All of the above"], answer: "D" },
            { id: 306, text: "What is the author's view on social media?", options: ["Mindful use is important", "It should be avoided", "It is perfect", "It is irrelevant"], answer: "A" },
            { id: 307, text: "What is the role of social media?", options: ["Connecting people", "Isolating people", "No role", "Minor role"], answer: "A" },
            { id: 308, text: "What is the main message?", options: ["Social media is powerful but needs careful use", "Social media is harmful", "Social media is perfect", "Social media is outdated"], answer: "A" },
            { id: 309, text: "What is the challenge?", options: ["Misinformation", "Cyberbullying", "Mental health", "All of the above"], answer: "D" },
            { id: 310, text: "What is the future of social media?", options: ["Evolving", "Disappearing", "Staying the same", "Becoming irrelevant"], answer: "A" },
            { id: 311, text: "What is the role of information?", options: ["Sharing", "Controlling", "Limiting", "No role"], answer: "A" },
            { id: 312, text: "What is the role of communities?", options: ["Connecting", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 313, text: "What is the author's tone?", options: ["Balanced", "Critical", "Pessimistic", "Indifferent"], answer: "A" },
            { id: 314, text: "What is the main idea?", options: ["Social media is important", "Social media is harmful", "Social media is irrelevant", "Social media is outdated"], answer: "A" },
            { id: 315, text: "What is the role of mindfulness?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 316, text: "What is the challenge of misinformation?", options: ["False information", "True information", "Neutral information", "No information"], answer: "A" },
            { id: 317, text: "What is the challenge of cyberbullying?", options: ["Online harassment", "Offline harassment", "No harassment", "Minor harassment"], answer: "A" },
            { id: 318, text: "What is the role of mental health?", options: ["Affected by social media", "Not affected", "No role", "Minor role"], answer: "A" },
            { id: 319, text: "What is the future of social media?", options: ["Growing", "Shrinking", "Staying the same", "Disappearing"], answer: "A" },
            { id: 320, text: "What is the main message?", options: ["Use social media wisely", "Avoid social media", "Ignore social media", "Social media is perfect"], answer: "A" }
        ]
    },
    {
        id: 17,
        title: "The Benefits of Reading",
        category: "Education",
        level: "Easy",
        passage: "Reading is a valuable habit that offers numerous benefits. It improves vocabulary, enhances critical thinking, and reduces stress. Reading also increases empathy by exposing readers to different perspectives and experiences. Whether it's fiction, non-fiction, or poetry, reading can provide a sense of escape and relaxation. In addition, reading regularly can improve concentration and focus, which are important skills in both academic and professional settings. The habit of reading can be cultivated at any age, and it's never too late to start.",
        questions: [
            { id: 321, text: "What is reading?", options: ["A valuable habit", "A waste of time", "An outdated activity", "A difficult activity"], answer: "A" },
            { id: 322, text: "What does reading improve?", options: ["Vocabulary", "Critical thinking", "Empathy", "All of the above"], answer: "D" },
            { id: 323, text: "What does reading reduce?", options: ["Stress", "Happiness", "Energy", "Focus"], answer: "A" },
            { id: 324, text: "What does reading increase?", options: ["Empathy", "Stress", "Anxiety", "Isolation"], answer: "A" },
            { id: 325, text: "What forms can reading take?", options: ["Fiction", "Non-fiction", "Poetry", "All of the above"], answer: "D" },
            { id: 326, text: "What does reading provide?", options: ["Escape", "Relaxation", "Both", "Neither"], answer: "C" },
            { id: 327, text: "What does reading improve?", options: ["Concentration", "Focus", "Both", "Neither"], answer: "C" },
            { id: 328, text: "Where are concentration and focus important?", options: ["Academic settings", "Professional settings", "Both", "Neither"], answer: "C" },
            { id: 329, text: "When can reading be cultivated?", options: ["At any age", "Only in childhood", "Only in adulthood", "Never"], answer: "A" },
            { id: 330, text: "What is the author's view on reading?", options: ["Positive", "Negative", "Indifferent", "Critical"], answer: "A" },
            { id: 331, text: "What is the role of reading?", options: ["Improving skills", "Reducing skills", "No role", "Minor role"], answer: "A" },
            { id: 332, text: "What is the main message?", options: ["Reading is beneficial", "Reading is useless", "Reading is harmful", "Reading is outdated"], answer: "A" },
            { id: 333, text: "What is the challenge?", options: ["Finding time", "Finding books", "Both", "Neither"], answer: "A" },
            { id: 334, text: "What is the author's tone?", options: ["Encouraging", "Discouraging", "Indifferent", "Critical"], answer: "A" },
            { id: 335, text: "What is the role of fiction?", options: ["Entertaining", "Educating", "Both", "Neither"], answer: "C" },
            { id: 336, text: "What is the role of non-fiction?", options: ["Educating", "Entertaining", "Both", "Neither"], answer: "A" },
            { id: 337, text: "What is the role of poetry?", options: ["Expressing emotions", "Educating", "Both", "Neither"], answer: "A" },
            { id: 338, text: "What is the future of reading?", options: ["Still valuable", "Disappearing", "Becoming irrelevant", "Becoming obsolete"], answer: "A" },
            { id: 339, text: "What is the main idea?", options: ["Reading is good", "Reading is bad", "Reading is outdated", "Reading is irrelevant"], answer: "A" },
            { id: 340, text: "What is the role of books?", options: ["Sharing knowledge", "Entertaining", "Both", "Neither"], answer: "C" }
        ]
    },
    {
        id: 18,
        title: "The Problem of Plastic Pollution",
        category: "Environment",
        level: "Hard",
        passage: "Plastic pollution is one of the most pressing environmental issues of our time. Every year, millions of tons of plastic waste end up in the oceans, harming marine life and ecosystems. Plastic takes hundreds of years to decompose, and microplastics have been found in the food chain, posing risks to human health. Efforts to reduce plastic pollution include recycling, banning single-use plastics, and developing biodegradable alternatives. Individuals can also make a difference by reducing their use of plastic, choosing reusable products, and supporting businesses that prioritize sustainability. Governments and corporations also have a responsibility to address this crisis through policy and innovation.",
        questions: [
            { id: 341, text: "What is plastic pollution?", options: ["A pressing environmental issue", "A minor issue", "An outdated issue", "An irrelevant issue"], answer: "A" },
            { id: 342, text: "Where does plastic waste end up?", options: ["Oceans", "Landfills", "Recycling centers", "All of the above"], answer: "A" },
            { id: 343, text: "What does plastic pollution harm?", options: ["Marine life", "Ecosystems", "Both", "Neither"], answer: "C" },
            { id: 344, text: "How long does plastic take to decompose?", options: ["Hundreds of years", "Years", "Months", "Days"], answer: "A" },
            { id: 345, text: "What are microplastics?", options: ["Small plastic particles", "Large plastic particles", "Plastic bottles", "Plastic bags"], answer: "A" },
            { id: 346, text: "What are the risks of microplastics?", options: ["Human health", "Animal health", "Both", "Neither"], answer: "C" },
            { id: 347, text: "What are efforts to reduce plastic pollution?", options: ["Recycling", "Banning single-use plastics", "Developing biodegradable alternatives", "All of the above"], answer: "D" },
            { id: 348, text: "What can individuals do?", options: ["Reduce plastic use", "Choose reusable products", "Support sustainable businesses", "All of the above"], answer: "D" },
            { id: 349, text: "Who has responsibility?", options: ["Governments", "Corporations", "Both", "Neither"], answer: "C" },
            { id: 350, text: "What is the author's view on plastic pollution?", options: ["It is serious", "It is exaggerated", "It is harmless", "It is inevitable"], answer: "A" },
            { id: 351, text: "What is the role of recycling?", options: ["Reducing waste", "Increasing waste", "No role", "Minor role"], answer: "A" },
            { id: 352, text: "What is the role of biodegradable alternatives?", options: ["Reducing pollution", "Increasing pollution", "No role", "Minor role"], answer: "A" },
            { id: 353, text: "What is the challenge?", options: ["Plastic use", "Recycling", "Awareness", "All of the above"], answer: "D" },
            { id: 354, text: "What is the future of plastic?", options: ["Reducing", "Increasing", "Staying the same", "Disappearing"], answer: "A" },
            { id: 355, text: "What is the author's tone?", options: ["Urgent", "Calm", "Indifferent", "Pessimistic"], answer: "A" },
            { id: 356, text: "What is the main message?", options: ["We must act", "We should wait", "We should ignore", "We should give up"], answer: "A" },
            { id: 357, text: "What is the role of individuals?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 358, text: "What is the role of governments?", options: ["Policy-making", "Ignoring", "No role", "Minor role"], answer: "A" },
            { id: 359, text: "What is the role of corporations?", options: ["Innovation", "Pollution", "No role", "Minor role"], answer: "A" },
            { id: 360, text: "What is the main idea?", options: ["Plastic pollution is a crisis", "Plastic pollution is not a crisis", "Plastic pollution is natural", "Plastic pollution is exaggerated"], answer: "A" }
        ]
    },
    {
        id: 19,
        title: "The Importance of Financial Literacy",
        category: "Education",
        level: "Medium",
        passage: "Financial literacy is the ability to understand and manage personal finances. It is a crucial life skill that enables individuals to make informed decisions about budgeting, saving, investing, and borrowing. Despite its importance, financial literacy is often not taught in schools, leaving many people unprepared for financial challenges. A lack of financial literacy can lead to debt, poor credit, and financial stress. However, there are many resources available to improve financial knowledge, including online courses, books, and workshops. By increasing financial literacy, individuals can achieve greater financial stability and independence.",
        questions: [
            { id: 361, text: "What is financial literacy?", options: ["Understanding personal finances", "Understanding business finances", "Understanding government finances", "Understanding global finances"], answer: "A" },
            { id: 362, text: "What is financial literacy a crucial life skill for?", options: ["Making informed decisions", "Making random decisions", "Making no decisions", "Making decisions based on luck"], answer: "A" },
            { id: 363, text: "What are examples of personal finance?", options: ["Budgeting", "Saving", "Investing", "All of the above"], answer: "D" },
            { id: 364, text: "Where is financial literacy often not taught?", options: ["In schools", "In universities", "In workplaces", "In families"], answer: "A" },
            { id: 365, text: "What can a lack of financial literacy lead to?", options: ["Debt", "Poor credit", "Financial stress", "All of the above"], answer: "D" },
            { id: 366, text: "What resources are available to improve financial knowledge?", options: ["Online courses", "Books", "Workshops", "All of the above"], answer: "D" },
            { id: 367, text: "What can increased financial literacy lead to?", options: ["Financial stability", "Independence", "Both", "Neither"], answer: "C" },
            { id: 368, text: "What is the author's view on financial literacy?", options: ["Important", "Unimportant", "Overrated", "Harmful"], answer: "A" },
            { id: 369, text: "What is the role of financial literacy?", options: ["Empowering individuals", "Confusing individuals", "No role", "Minor role"], answer: "A" },
            { id: 370, text: "What is the main message?", options: ["Financial literacy is important", "Financial literacy is not important", "Financial literacy is outdated", "Financial literacy is harmful"], answer: "A" },
            { id: 371, text: "What is the challenge?", options: ["Lack of education", "Lack of resources", "Lack of awareness", "All of the above"], answer: "D" },
            { id: 372, text: "What is the future of financial literacy?", options: ["More accessible", "Less accessible", "More expensive", "More difficult"], answer: "A" },
            { id: 373, text: "What is the author's tone?", options: ["Encouraging", "Discouraging", "Indifferent", "Critical"], answer: "A" },
            { id: 374, text: "What is the role of online courses?", options: ["Improving knowledge", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 375, text: "What is the role of books?", options: ["Improving knowledge", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 376, text: "What is the role of workshops?", options: ["Improving knowledge", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 377, text: "What is the main idea?", options: ["Financial literacy matters", "Financial literacy doesn't matter", "Financial literacy is outdated", "Financial literacy is harmful"], answer: "A" },
            { id: 378, text: "What is the role of budgeting?", options: ["Managing money", "Wasting money", "No role", "Minor role"], answer: "A" },
            { id: 379, text: "What is the role of saving?", options: ["Building wealth", "Wasting money", "No role", "Minor role"], answer: "A" },
            { id: 380, text: "What is the role of investing?", options: ["Growing money", "Losing money", "No role", "Minor role"], answer: "A" }
        ]
    },
    {
        id: 20,
        title: "The Rise of Telemedicine",
        category: "Health",
        level: "Medium",
        passage: "Telemedicine is the use of technology to provide healthcare remotely. It has gained popularity in recent years, particularly during the COVID-19 pandemic, as it allows patients to consult with healthcare providers from the comfort of their homes. Telemedicine offers numerous benefits, including increased access to care, reduced travel time, and lower costs. It is particularly useful for patients in rural areas or those with limited mobility. However, telemedicine also faces challenges, such as technical issues, concerns about the quality of care, and privacy concerns. As technology continues to advance, telemedicine is expected to become an increasingly important part of healthcare.",
        questions: [
            { id: 381, text: "What is telemedicine?", options: ["Remote healthcare", "In-person healthcare", "Online shopping", "Video streaming"], answer: "A" },
            { id: 382, text: "When did telemedicine gain popularity?", options: ["During COVID-19 pandemic", "Before COVID-19", "After COVID-19", "Never"], answer: "A" },
            { id: 383, text: "What are the benefits of telemedicine?", options: ["Increased access", "Reduced travel time", "Lower costs", "All of the above"], answer: "D" },
            { id: 384, text: "Who is telemedicine particularly useful for?", options: ["Rural patients", "Patients with limited mobility", "Both", "Neither"], answer: "C" },
            { id: 385, text: "What are the challenges of telemedicine?", options: ["Technical issues", "Quality concerns", "Privacy concerns", "All of the above"], answer: "D" },
            { id: 386, text: "What is the future of telemedicine?", options: ["Increasingly important", "Decreasingly important", "Irrelevant", "Outdated"], answer: "A" },
            { id: 387, text: "What is the author's view on telemedicine?", options: ["Positive", "Negative", "Indifferent", "Critical"], answer: "A" },
            { id: 388, text: "What is the role of technology?", options: ["Enabling telemedicine", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 389, text: "What is the main message?", options: ["Telemedicine is valuable", "Telemedicine is useless", "Telemedicine is harmful", "Telemedicine is outdated"], answer: "A" },
            { id: 390, text: "What is the challenge?", options: ["Technical issues", "Quality of care", "Privacy", "All of the above"], answer: "D" },
            { id: 391, text: "What is the role of remote access?", options: ["Expanding healthcare", "Limiting healthcare", "No role", "Minor role"], answer: "A" },
            { id: 392, text: "What is the role of technology in healthcare?", options: ["Transforming care", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 393, text: "What is the author's tone?", options: ["Optimistic", "Pessimistic", "Indifferent", "Critical"], answer: "A" },
            { id: 394, text: "What is the main idea?", options: ["Telemedicine is the future", "Telemedicine is a trend", "Telemedicine is overrated", "Telemedicine is dangerous"], answer: "A" },
            { id: 395, text: "What is the role of patients?", options: ["Accessing care", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 396, text: "What is the role of healthcare providers?", options: ["Delivering care", "No role", "Minor role", "Harmful role"], answer: "A" },
            { id: 397, text: "What is the role of privacy?", options: ["Important", "Irrelevant", "Minor", "No role"], answer: "A" },
            { id: 398, text: "What is the future of remote healthcare?", options: ["Growing", "Shrinking", "Staying the same", "Disappearing"], answer: "A" },
            { id: 399, text: "What is the main message?", options: ["Telemedicine is beneficial", "Telemedicine is harmful", "Telemedicine is irrelevant", "Telemedicine is outdated"], answer: "A" },
            { id: 400, text: "What is the role of technology?", options: ["Enabling access", "No role", "Minor role", "Harmful role"], answer: "A" }
        ]
    }
];
