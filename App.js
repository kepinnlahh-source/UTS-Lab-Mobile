import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import InfoCard from './src/components/InfoCard';
import DaftarMahasiswaScreen from './src/screens/DaftarMahasiswaScreen';

export default function App() {
  const [tab, setTab] = useState('soal1');

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, tab === 'soal1' && styles.tabActive]}
          onPress={() => setTab('soal1')}
        >
          <Text style={[styles.tabText, tab === 'soal1' && styles.tabTextActive]}>
            Soal 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'soal2' && styles.tabActive]}
          onPress={() => setTab('soal2')}
        >
          <Text style={[styles.tabText, tab === 'soal2' && styles.tabTextActive]}>
            Soal 2
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'soal1' ? (
        <View style={styles.content}>
          <Text style={styles.header}>Daftar Tugas</Text>

          <InfoCard
            title="Laporan Praktikum Mobile"
            status="selesai"
            onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile sudah selesai')}
          />
          <InfoCard
            title="Laporan Praktikum Mobile ke 2"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile ke 2 masih proses')}
          />
        </View>
      ) : (
        <DaftarMahasiswaScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 50,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#38bdf8',
  },
  tabText: {
    color: '#64748b',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#38bdf8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  header: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});