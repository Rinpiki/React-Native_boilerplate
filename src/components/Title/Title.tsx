import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyContextApi from '../../../api/Api';
import { Text } from 'react-native';
import * as S from './Styles.title';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  const context = useContext(MyContextApi);
  return (
    <S.Container>
      <Text>{context?.photos?.[0]?.photographer || 'Aguardando dados...'}</Text>

      <StatusBar />
    </S.Container>
  );
}
