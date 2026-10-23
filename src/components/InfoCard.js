import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';
  const warna = isSelesai ? '#22c55e' : '#f97316';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={[styles.status, { color: warna }]}>
        Status: {isSelesai ? 'Selesai' : 'Proses'}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: warna }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});