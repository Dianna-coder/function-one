import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function ScreenTres(props) {
  return (
    <View style={styles.conatiner}>
      <Text style={{ color: "#FFFFFF", fontSize: 30 }}>
        Melhor Custo-benefício
        </Text>

      <Image source={require('../../../assets/icons/cofrinho.png')}>
      </Image>

      <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center" }}>
        Escolha o técnico que pode solucionar seu problema e que também atenda a seu orçamento.
        </Text>

      <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate('CadastroCliente')}>
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