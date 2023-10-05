import React, { useContext, useEffect, useState } from 'react';
import MyContextApi from '../../../api/Api';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as S from './Styles.Search';

export default function App() {
  const [value, onChangeText] = useState('');
  const contexto = useContext(MyContextApi);
  const { setQuery } = contexto;

  const handleOnSubmit = () => {
    // Faça algo com o texto (inputText) aqui, por exemplo, envie para uma API
    console.log('Texto digitado:', value);
    setQuery(value);
  };

  return (
    <S.Container>
      <S.SearchInput
        editable
        numberOfLines={1}
        maxLength={40}
        placeholder="Digite algo..."
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={handleOnSubmit}
        value={value}
      />

      <S.Icon name="search" onPress={handleOnSubmit} size={22} color="#5E5E5E" />
    </S.Container>
  );
}
