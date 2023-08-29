import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyContextApi from '../../../api/Api';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const contexto = useContext(MyContextApi);
  return (
    <View style={styles.container}>
      <Text>{contexto}</Text>
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
