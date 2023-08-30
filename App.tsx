import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyContextApi from './api/Api';
import Tiltle from './src/components/Title/Title';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import PhotoZone from './src/components/PhotoZone/PhotoZone';

export default function App() {
  const [dadosDaApi, setDadosDaApi] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'tDqzkbci2QpO5ZjDACJ2UAWwbABBaRXGLJtrVdRS1EUxrdD6pssVUxM7',
      },
    };

    axios
      .get('https://api.pexels.com/v1/search?query=people', config)
      .then((response) => {
        console.log(response.data.photos[0].photographer);
        setDadosDaApi(response.data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MyContextApi.Provider value={dadosDaApi}>
        <Tiltle />
        <StatusBar style="auto" />
        <PhotoZone />
      </MyContextApi.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
