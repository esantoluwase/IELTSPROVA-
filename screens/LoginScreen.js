// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Navigate to Dashboard
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={styles.logo} />
            <Text style={styles.title}>IELTS<span style={{color:'#FFD700'}}>Prova</span></Text>
            <Text style={styles.subtitle}>AI-Powered IELTS Preparation</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            {error ? <Text style={styles.error}>{error}</Text> : null}
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.link}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f0ff' },
    logo: { width: 80, height: 80, alignSelf: 'center', marginBottom: 10 },
    title: { fontSize: 28, fontWeight: '900', color: '#4A148C', textAlign: 'center' },
    subtitle: { fontSize: 16, color: '#7B6A8A', textAlign: 'center', marginBottom: 30 },
    input: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#f0e8f5' },
    button: { backgroundColor: '#4A148C', padding: 15, borderRadius: 50, alignItems: 'center' },
    buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
    error: { color: '#c62828', textAlign: 'center', marginBottom: 10 },
    link: { textAlign: 'center', marginTop: 15, color: '#4A148C', fontWeight: '600' }
});
