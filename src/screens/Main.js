import React, { useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

import { Modalize } from 'react-native-modalize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors/index';

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
    <View style={styles.container}>
    <ImageBackground
      style={{width: wp ('100%'), height: hp ('100%'),justifyContent: "space-around",alignItems: "center" }}
      source={require(fundo)}>

      <Image
        style={{ alignSelf: "center", marginTop: wp('30%'), height: hp ('20%'), width: hp ('40%') }}
        source={require(logo)}>
      </Image>              
      
      <View>
        <TouchableOpacity style={styles.botoes} onPress={() => props.navigation.navigate('Login') }>
          <Text style={styles.txtbotao}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen} style={styles.botoes}>
          <Text style={styles.txtbotao}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
        <Modalize
          ref={modalizeRef}
          modalHeight={hp ('30%')}
        >

        <View style={{justifyContent: "flex-end"}}>
            
            <TouchableOpacity style={{ flexDirection: "row",justifyContent: "flex-start", alignItems: "center", paddingTop: 10}} onPress={() => props.navigation.navigate('ScreenUm') }>
              <Image
                style={{
                  marginLeft: 30,
                  marginRight: 35,
                  height: hp ('10%'),
                  width: hp ('10%'),
                }}
                source={require(iconeUsuario)}>
              </Image>

              <Text style={{fontSize: 20,color: colors.azulVibrante}}>
                Usuário
                </Text>
            </TouchableOpacity>
            
            <Text style={{ marginLeft: wp ('5%'), width: wp('90%'), borderBottomWidth: 1, borderBottomColor: colors.cinza, margin: 0 }} ></Text>
            
            <TouchableOpacity style={{ flexDirection: "row",justifyContent: "flex-start", alignItems: "center", paddingTop: 10}} onPress={() => props.navigation.navigate('CadastroTecnico') }>
              <Image
                style={{
                  marginLeft: 30,
                  marginRight: 35,
                  height: hp ('10%'),
                  width: hp ('10%'),
                }}
                source={require(profissional)}>
              </Image>

              <Text style={{fontSize: 20, color: colors.azulVibrante}}>
                Profissional
                </Text>
            </TouchableOpacity>
            
          </View>
        </Modalize>
      </ImageBackground>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  botoes: {
    backgroundColor: colors.azulVibrante,
    width: wp('61.6%'),
    height: hp('5.57%'),
    borderRadius: 10,
    marginTop: hp('3%'),
    justifyContent: 'center',
  },

  txtbotao: {
    color: "white",
    fontSize: 15,
    textAlign: "center"
  },
});