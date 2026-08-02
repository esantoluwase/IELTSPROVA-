// screens/DashboardScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function DashboardScreen({ navigation }) {
    const [user, setUser] = useState(null);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;
        setUser(user);
        loadScores(user.uid);
    }, []);

    const loadScores = async (userId) => {
        const q = query(collection(db, 'scores'), where('userId', '==', userId));
        const snapshot = await getDocs(q);
        const data = [];
        snapshot.forEach(doc => data.push(doc.data()));
        setScores(data);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>👋 Hi, {user?.displayName || 'Student'}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.statsGrid}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>{scores.length}</Text>
                    <Text style={styles.statLabel}>Tests Taken</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>1</Text>
                    <Text style={styles.statLabel}>Day Streak</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.testCard} onPress={() => navigation.navigate('ReadingTest')}>
                <Text style={styles.testIcon}>📖</Text>
                <Text style={styles.testTitle}>Reading Test</Text>
                <Text style={styles.testDesc}>3 passages · 40 questions · 60 mins</Text>
            </TouchableOpacity>

            {/* More test cards */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f0ff', padding: 20 },
    header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    greeting: { fontSize: 22, fontWeight: '700', color: '#4A148C' },
    statsGrid: { flexDirection: 'row', gap: 15, marginBottom: 20 },
    statCard: { flex: 1, backgroundColor: 'white', padding: 20, borderRadius: 16, alignItems: 'center', borderWidth: 1, borderColor: '#f0e8f5' },
    statNumber: { fontSize: 28, fontWeight: '800', color: '#4A148C' },
    statLabel: { color: '#7B6A8A', fontSize: 12 },
    testCard: { backgroundColor: 'white', padding: 20, borderRadius: 16, marginBottom: 15, borderWidth: 1, borderColor: '#f0e8f5' },
    testIcon: { fontSize: 32, marginBottom: 5 },
    testTitle: { fontSize: 18, fontWeight: '700', color: '#4A148C' },
    testDesc: { color: '#7B6A8A', fontSize: 14 }
});
