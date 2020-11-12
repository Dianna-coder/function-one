import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';
import colors from '../../../styles/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ScreenTres(props) {
  return (
    <View style={styles.conatiner}>
      <Header titulo='' funcao={() => props.navigation.navigate('Main')} />

      <View style={styles.interno}>
        <Text style={styles.titulo}>
        Melhor Custo-benefício
        </Text>

        <Image source={require('../../../../assets/icons/cofrinho.png')}></Image>

        <Text style={styles.paragrafo}>
        Escolha o técnico que pode solucionar seu problema e que também atenda a seu orçamento.
        </Text>

        <TouchableOpacity  onPress={() => props.navigation.navigate('CadastroCliente')}>
          <Text style={styles.btn}>
            Próximo
          </Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.icon} source={require('../../../../assets/icons/telaTres.png')}></Image>
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