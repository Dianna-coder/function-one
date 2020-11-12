import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ScreenUm(props) {
  return (
    <View style={styles.conatiner}>
      <Header titulo='' funcao={() => props.navigation.navigate('Main')} />

      <View style={styles.interno}>
        <Text style={styles.titulo}>
          Conforto e Rapidez
          </Text>

        <Image source={require('../../../../assets/icons/rota.png')}></Image>

        <Text style={styles.paragrafo}>
          Solicite um técnico em TI no conforto de sua casa e sem dor de cabeça
          </Text>

        <TouchableOpacity  onPress={() => props.navigation.navigate('ScreenDois')}>
          <Text style={styles.btn}>
            Próximo
          </Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.icon} source={require('../../../../assets/icons/telaUm.png')}></Image>
    </View>

  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.azulEscuro,
  },
  interno: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  titulo: {
    color: colors.branco,
    fontSize: 30,
    textAlign: "center",
  },
  paragrafo: {
    width: wp ('88%'),
    color: "#FFFFFF", 
    fontSize: 18,
    textAlign: "center"
  },
  btn: {
    fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
      padding: 6,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: colors.azulVibrante,
      borderRadius: 5,
      color: colors.branco,
      borderWidth: 1
  },
  icon: {
    height: hp ('1.2%'), 
    width: hp ('4.9%'),
    marginBottom: 20
  }
})