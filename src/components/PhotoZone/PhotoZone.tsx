import React, { useContext, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
const { StorageAccessFramework } = FileSystem;
import { shareAsync } from 'expo-sharing';
import MyContextApi from '../../../api/Api';
import { Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native'; // Importe o TouchableOpacity
import * as S from './Styles.PhotoZone';

export default function App() {
  const contexto = useContext(MyContextApi);
  const { data, query, setQuery } = contexto;
  const name = data?.photos;
  const downloadFolder = FileSystem.documentDirectory;

  const downloadPath = FileSystem.documentDirectory + (Platform.OS == 'android' ? '' : '');
  const ensureDirAsync = async (dir, intermediates = true) => {
    const props = await FileSystem.getInfoAsync(dir);
    if (props.exists && props.isDirectory) {
      return props;
    }
    let _ = await FileSystem.makeDirectoryAsync(dir, { intermediates });
    return await ensureDirAsync(dir, intermediates);
  };

  const downloadFile = async (fileUrl, filename) => {
    if (Platform.OS == 'android') {
      const dir = ensureDirAsync(downloadPath);
    }

    let fileName = fileUrl.split('Reports/')[1];
    //alert(fileName)
    const downloadResumable = FileSystem.createDownloadResumable(
      fileUrl,
      downloadPath + fileName,
      {}
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      if (Platform.OS == 'android') saveAndroidFile(uri, fileName);
      else saveIosFile(uri);
    } catch (e) {
      console.error('download error:', e);
    }
  };

  const saveAndroidFile = async (url, fileName = 'File') => {
    try {
      const fileString = await FileSystem.readAsStringAsync(url, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (!permissions.granted) {
        return;
      }

      try {
        await StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          fileName,
          'image/png'
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, fileString, {
              encoding: FileSystem.EncodingType.Base64,
            });
            alert('Report Downloaded Successfully');
          })
          .catch((e) => {});
      } catch (e) {
        throw new Error(e);
      }
    } catch (err) {}
  };

  return (
    <S.Container>
      <ScrollView>
        <View>
          {name?.map((name) => {
            return (
              <TouchableOpacity
                onPress={() => downloadFile(name?.src?.large, name?.src?.photographer)}
                key={name.id}
              >
                <S.I
                  key={name.id}
                  source={{
                    uri: name?.src?.large,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </S.Container>
  );
}
function saveIosFile(uri: string) {
  throw new Error('Function not implemented.');
}
