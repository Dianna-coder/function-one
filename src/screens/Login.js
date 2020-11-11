import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const fundo = "../../assets/fundo.png";
const logo = "../../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: wp("100%"),
          height: hp("100%"),
          justifyContent: "center",
        }}
        source={require(fundo)}
      >
        <KeyboardAvoidingView>
          <View>
            <Text style={styles.saudacao}>BEM VINDO</Text>
          </View>

          <View style={styles.container2}>
            <TextInput
              style={{
                fontSize: 16,
                color: "#FFF",
                borderBottomWidth: 1,
                borderColor: "#FFF",
                margin: 20,
              }}
              placeholderTextColor="white"
              placeholder="Email :"
            />

            <TextInput
              style={{
                fontSize: 16,
                color: "#FFF",
                borderBottomWidth: 1,
                borderColor: "#FFF",
                margin: 20,
              }}
              placeholderTextColor="white"
              placeholder="Senha:"
              keyboardType="numeric"
              secureTextEntry
            />
          </View>

          <View>
            <TouchableOpacity style={styles.botao}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                CONFIRMAR
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                textDecorationLine: "underline",
                color: "white",
                textAlign: "center",
              }}
            >
              Esqueci minha senha
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    marginTop: wp("30%"),
    padding: 10,
  },

  botao: {
    backgroundColor: "blue",
    alignItems: "center",
    marginTop: wp("30%"),
    margin: 20,
    padding: 13,
    borderRadius: 15,
  },
  saudacao: {
    color: "#FFFFFF",
    fontSize: 45,
    textAlign: "center",
  },
});
