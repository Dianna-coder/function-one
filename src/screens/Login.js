import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../components/Input";
import colors from "../styles/colors"

const fundo = "../../assets/fundo.png";
const logo = "../../assets/logo.png";

export default class Login extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSenhaChange = this.handleSenhaChange.bind(this);
  }

  handleEmailChange = (email) => this.setState({ email });
  handleSenhaChange = (senha) => this.setState({ senha });


  render () {
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
            <View style={{justifyContent: "space-evenly", height: hp ('100%'), width: wp ('100%')}}>
            <Text style={styles.saudacao}>BEM VINDO</Text>

            <View style={styles.container2}>
              <Input
                labelText='E-mail'
                onChangeText={this.handleEmailChange}
                value={this.state.email}
              />

              <Input
                  labelText='Senha'
                  onChangeText={this.handleSenhaChange}
                  value={this.state.senha}
                />
            </View>

            <View style={{alignItems: "center",marginTop: 40, marginBottom: 40}}>
              <TouchableOpacity onPress={() => Alert.alert('Você clicou para Confirmar')} style={styles.botoes}>
                <Text style={styles.txtbotao}>Confirmar</Text>
              </TouchableOpacity>

              <Text
                style={{ textDecorationLine: "underline", color: "white", textAlign: "center", marginTop: 25}}>
                Esqueci minha senha
              </Text>
            </View>
            </View> 
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
}
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
  saudacao: {
    color: "#FFFFFF",
    fontSize: hp ("6%"),
    textAlign: "center",
    marginTop: 150,
  },
});
