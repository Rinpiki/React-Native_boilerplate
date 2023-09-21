import React, { useContext } from 'react';
import MyContextApi from '../../../api/Api';
import { Text, View, Image, ScrollView } from 'react-native';
import * as S from './Styles.PhotoZone';

export default function App() {
  const contexto = useContext(MyContextApi);
  const name = contexto?.photos;

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
