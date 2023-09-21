import React, { useContext } from 'react';
import MyContextApi from '../../../api/Api';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const contexto = useContext(MyContextApi);

  return (
    <View>
      <Text>aaaa</Text>
      <Icon name="airplay" size={32} color="#00000" />
    </View>
  );
}
