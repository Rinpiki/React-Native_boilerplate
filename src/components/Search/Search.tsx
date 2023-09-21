import React, { useContext } from 'react';
import MyContextApi from '../../../api/Api';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as S from './Styles.Search';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  const contexto = useContext(MyContextApi);

  return (
    <S.Container>
      <S.SearchInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <S.Icon name="search" size={28} color="#5E5E5E" />
    </S.Container>
  );
}
