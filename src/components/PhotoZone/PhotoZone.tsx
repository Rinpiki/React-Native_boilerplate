import React, { useContext, useEffect } from 'react';
import MyContextApi from '../../../api/Api';
import { Text, View, Image, ScrollView } from 'react-native';
import * as S from './Styles.PhotoZone';

export default function App() {
  const contexto = useContext(MyContextApi);
  const { data, query, setQuery } = contexto;
  const name = data?.photos;

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery('rock');
      console.log(`A função foi executada após 6 segundos ${query} `);
    }, 6000); // 6000 milissegundos = 6 segundos

    // Certifique-se de limpar o timer se o componente for desmontado antes de 6 segundos
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Container>
      <ScrollView>
        <View>
          {name?.map((name) => {
            return (
              <S.I
                key={name.id}
                source={{
                  uri: name?.src?.large,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </S.Container>
  );
}
