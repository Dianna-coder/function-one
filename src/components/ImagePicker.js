import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../styles/colors/index';

import * as ExpoImagePicker from 'expo-image-picker';

// TODO - abrir camera tb
// mudar mensagem do requestCameraRollPermissionsAsync()
// passar imagem para o App.js
// Retirar o botao de adicionar conforme o formulario que estiver

export default function ImagePicker() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ExpoImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      cropperCircleOverlay: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ImageBackground source={{ uri: image }} style={styles.container} borderRadius={ 100 }>
      <TouchableOpacity style={styles.btnAdicionar} onPress={pickImage}>
        <Image style={styles.imagemAdicao} source={require("../../assets/icons/adicao.png")}/>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('7.5%'),
    marginBottom: hp('1%'),
    height: hp('18%'),
    width: hp('18%'),
    borderRadius: wp('50%'),
    backgroundColor: colors.cinza,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
  },
  btnAdicionar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.azulVibrante,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemAdicao: {
    width: hp('2.6%'),
    height: hp('2.6%'),
  },
});
