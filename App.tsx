import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ApiProvider } from './api/Api';
import Tiltle from './src/components/Title/Title';
import { StyleSheet, View } from 'react-native';
import PhotoZone from './src/components/PhotoZone/PhotoZone';
import Search from './src/components/Search/Search';

export default function App() {
  return (
    <ApiProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Search />
        <PhotoZone />
      </View>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
  },
});
