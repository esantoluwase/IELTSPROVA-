// ============================================================
// 🔥 FIREBASE CONFIGURATION
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyCV8z2TqjtwR5LpSMlGn5jCsvw1IM5vMFQ",
    authDomain: "ieltsprova.firebaseapp.com",
    projectId: "ieltsprova",
    storageBucket: "ieltsprova.firebasestorage.app",
    messagingSenderId: "812300970124",
    appId: "1:812300970124:web:992398c08c151ae97df3a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// ============================================================
// 🔐 PAYSTACK CONFIG - PUBLIC KEY ONLY (Safe for frontend)
// ============================================================
const PAYSTACK_CONFIG = {
    publicKey: 'pk_live_745c9817e91e0698cb32aea110be95eadbe68eda'
    // ✅ NO SECRET KEY HERE - IT STAYS ON THE SERVER!
};

console.log('🔥 Firebase initialized');
console.log('🔐 Paystack Public Key loaded');
