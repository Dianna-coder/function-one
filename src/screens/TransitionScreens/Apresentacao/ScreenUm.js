import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../../../components/Header';

export default function ScreenUm(props) {
  return (
    <View style={styles.conatiner}>
      <Header titulo='Conhecimentos' funcao={() => props.navigation.navigate('Main')} />

      <Text style={{ color: "#FFFFFF", fontSize: 30 }}>
        Conforto e Rapidez
        </Text>

      <Image source={require('../../../../assets/icons/rota.png')}></Image>

      <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center" }}>
        Solicite um técnico em TI no conforto de sua casa e sem dor de cabeça
        </Text>

      <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate('ScreenDois')}>
        <Text style={{
          fontSize: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 25,
          marginLeft: 30
        }}>
          PRÓXIMO
        </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0C1C41",
  },
})