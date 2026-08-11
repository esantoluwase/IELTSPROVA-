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

// ✅ This is correct
console.log('🔥 Firebase initialized');
