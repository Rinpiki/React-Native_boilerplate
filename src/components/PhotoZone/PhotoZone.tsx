import React, { useContext } from 'react';
import MyContextApi from '../../../api/Api';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const contexto = useContext(MyContextApi);

  return (
    <View style={styles.container}>
      <FlatList
        data={contexto}
        renderItem={({ item }) => (
          <View>
            <Text>{item.photographer}</Text>
            <Image
              source={{ uri: item.src.medium }}
              style={{ width: 200, height: 300 }} // Ajuste o tamanho conforme necessário
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
