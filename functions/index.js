// ============================================================
// 🔐 PAYSTACK WEBHOOK VERIFICATION (SERVER-SIDE ONLY)
// ============================================================
// This file runs on the SERVER - the Secret Key is SAFE here!
// BUT it should be read from environment variables, NOT hardcoded!
// ============================================================

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

// ============================================================
// 🔒 PAYSTACK SECRET KEY - Read from Environment Variables
// ============================================================
// The key is stored in Firebase Cloud Functions environment
// NOT hardcoded in the file!
// ============================================================
const PAYSTACK_SECRET_KEY = functions.config().paystack.secret_key;

// ============================================================
// VERIFY PAYMENT WEBHOOK
// ============================================================
exports.verifyPayment = functions.https.onRequest(async (req, res) => {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const { reference } = req.body;
        
        if (!reference) {
            return res.status(400).send('Missing reference');
        }

        // ✅ Verify payment with Paystack (using Secret Key from env)
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
                }
            }
        );
        
        const data = response.data;
        
        if (data.status && data.data.status === 'success') {
            // Payment is valid - update user's plan
            const userId = data.data.metadata?.custom_fields?.find(
                field => field.variable_name === 'user_id'
            )?.value;
            
            const plan = data.data.metadata?.custom_fields?.find(
                field => field.variable_name === 'plan'
            )?.value;
            
            if (userId && plan) {
                await admin.firestore()
                    .collection('users')
                    .doc(userId)
                    .update({
                        plan: plan.toLowerCase(),
                        planUpdatedAt: new Date().toISOString(),
                        paymentReference: reference,
                        paymentStatus: 'verified'
                    });
                
                console.log(`✅ Verified payment for ${userId}: ${plan}`);
                return res.status(200).json({ 
                    status: 'success', 
                    message: 'Payment verified',
                    userId,
                    plan
                });
            } else {
                return res.status(400).json({ 
                    status: 'error', 
                    message: 'Missing user ID or plan in metadata' 
                });
            }
        } else {
            return res.status(400).json({ 
                status: 'error', 
                message: 'Payment verification failed' 
            });
        }
    } catch (error) {
        console.error('❌ Webhook error:', error);
        return res.status(500).json({ 
            status: 'error', 
            message: 'Webhook error: ' + error.message 
        });
    }
});
