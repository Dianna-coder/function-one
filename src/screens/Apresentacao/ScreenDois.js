import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function ScreenDois(props) {
  return (
    <View style={styles.conatiner}>

      <Text style={{ color: "#FFFFFF", fontSize: 30 }}>
        Profissionais capacitados
        </Text>

      <Image source={require('../../../assets/icons/diploma.png')}>
      </Image>

      <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center" }}>
        Através do site ou aplicativo, você encontrará técnicos capacitados e certificados para atender sua necessidade
        </Text>

      <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate('ScreenTres')}>
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