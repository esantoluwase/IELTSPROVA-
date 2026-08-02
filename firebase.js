// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCV8z2TqjtwR5LpSMlGn5jCsvw1IM5vMFQ",
    authDomain: "ieltsprova.firebaseapp.com",
    projectId: "ieltsprova",
    storageBucket: "ieltsprova.firebasestorage.app",
    messagingSenderId: "812300970124",
    appId: "1:812300970124:web:992398c08c151ae97df3a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
