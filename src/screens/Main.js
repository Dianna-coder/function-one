import React, { useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

import { Modalize } from 'react-native-modalize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const fundo = '../../assets/fundo.png';
const logo = '../../assets/logo.png';
const iconeUsuario = '../../assets/icons/usuario.png';
const profissional = '../../assets/icons/profissional.png'

export default function Main(props) {
  const modalizeRef = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require(fundo)}>

      <Image
        style={{ alignSelf: "center", marginTop: wp('30%') }}
        source={require(logo)}>
      </Image>

      <View style={styles.container}>

        <TouchableOpacity style={styles.botoes} onPress={() => props.navigation.navigate('Login') }>
          <Text style={styles.txtbotao}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen} style={styles.botoes}>
          <Text style={styles.txtbotao}>CADASTRAR</Text>
        </TouchableOpacity>

        <Modalize
          ref={modalizeRef}
          snapPoint={300}
          modalHeight={300}
        >

          <View style={{
            flex: 1,
            height: 300,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
          }}>

            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate('ScreenUm') }>
              <Image
                style={{
                  marginLeft: 30,
                  marginRight: 35
                }}
                source={require(iconeUsuario)}>
              </Image>

              <Text style={{
                fontSize: 20,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 25,
                marginLeft: 30
              }}>
                USUÁRIO
                </Text>
            </TouchableOpacity>

            <Text style={{ borderBottomWidth: 1, borderBottomColor: "black", margin: 30 }} ></Text>

            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate('CadastroTecnico') }>
              <Image
                style={{ marginLeft: 30, marginRight: 35 }}
                source={require(profissional)}>
              </Image>

              <Text
                style={{
                  fontSize: 20,
                  paddingTop: 25,
                  marginLeft: 30
                }}>
                PROFISSIONAL
                </Text>
            </TouchableOpacity>
          </View>
        </Modalize>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },

  botoes: {
    borderRadius: 20,
    backgroundColor: "blue",
    padding: hp('3.5'),
    margin: wp('3.5'),
    // marginHorizontal: 50
  },

  txtbotao: {
    color: "white",
    fontSize: 15,
    textAlign: "center"
  },
});