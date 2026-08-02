// netlify/functions/api.js

// ============================================================
// IELTSPROVA — BACKEND API (Netlify Functions)
// ============================================================
// 🔒 Hides API keys from the frontend
// 🔐 Handles secure operations
// 💳 Processes webhooks
// ============================================================

// ============================================================
// 1. FIREBASE ADMIN SDK
// ============================================================
// Note: You'll need to add your Firebase Admin SDK credentials
// as environment variables in Netlify

const admin = require('firebase-admin');

// Initialize Firebase Admin (with environment variables)
if (!admin.apps.length) {
    const serviceAccount = {
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
    };
    
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const db = admin.firestore();

// ============================================================
// 2. PAYSTACK WEBHOOK HANDLER
// ============================================================
async function handlePaystackWebhook(event) {
    const data = event.data;
    const reference = data.reference;
    
    // Verify payment
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
            'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
    });
    
    const result = await response.json();
    if (result.data.status === 'success') {
        // Update user's plan in Firestore
        const userId = data.metadata.userId;
        const plan = data.metadata.plan;
        
        await db.collection('users').doc(userId).set({
            plan: plan,
            planUpdatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        
        // Save payment record
        await db.collection('payments').add({
            userId: userId,
            plan: plan,
            amount: result.data.amount,
            reference: reference,
            date: admin.firestore.FieldValue.serverTimestamp()
        });
        
        return { success: true, message: 'Payment verified and plan updated' };
    }
    
    return { success: false, message: 'Payment verification failed' };
}

// ============================================================
// 3. AI EVALUATION ENDPOINT
// ============================================================
async function evaluateWriting(text, task) {
    // This would connect to OpenAI or another AI service
    // For now, we'll return a simple evaluation
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    let band = 6.0;
    if (words >= 250) band = 7.0;
    else if (words >= 200) band = 6.5;
    else if (words >= 150) band = 6.0;
    else band = 5.5;
    
    if (sentences >= 10) band += 0.5;
    band = Math.min(band, 9.0);
    band = Math.round(band * 2) / 2;
    
    return {
        band: band,
        words: words,
        sentences: sentences,
        feedback: `You wrote ${words} words in ${sentences} sentences. Try to use more complex vocabulary and vary your sentence structure.`
    };
}

// ============================================================
// 4. MAIN HANDLER
// ============================================================
exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };
    
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers };
    }
    
    // Parse the request body
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        body = {};
    }
    
    // Route the request
    const path = event.path.replace('/.netlify/functions/api', '');
    
    try {
        let result;
        
        switch (path) {
            case '/webhook/paystack':
                result = await handlePaystackWebhook(body);
                break;
                
            case '/evaluate/writing':
                result = await evaluateWriting(body.text, body.task);
                break;
                
            case '/health':
                result = { status: 'ok', timestamp: new Date().toISOString() };
                break;
                
            default:
                return {
                    statusCode: 404,
                    headers,
                    body: JSON.stringify({ error: 'Endpoint not found' })
                };
        }
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result)
        };
        
    } catch (error) {
        console.error('API Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
