import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import Button from '../../../components/Button';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { addNewProfissionalData, addNewUserData, emailSignUp } from '../../../database/Firebase';

export default class Senha extends React.Component {
  constructor(props) {
    super(props);

    // LogBox.ignoreAllLogs(true)

    this.state = {
      senha: '',
      confirmacaoSenha: '',
    };

    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.handleConfirmacaoSenhaChange = this.handleConfirmacaoSenhaChange.bind(this);
  }

  handleSenhaChange = (senha) => this.setState({ senha: senha ? senha.toString() : senha });
  handleConfirmacaoSenhaChange = (confirmacaoSenha) => this.setState({ confirmacaoSenha });

  handleSubmit = () => {
    if (this.state.senha !== this.state.confirmacaoSenha) {
      Alert.alert('Senhas divergentes!')
      return
    }

    const { getState, finish } = this.props;

    const foundState = getState(this.state);

    const data = { 
      ...foundState, 
      senha: this.state.senha
    };

    const email = data.email;
    const password = data.senha;

    if (!email || !password) return Alert.alert('Dados Incompletos!')

    setTimeout(() => {
      emailSignUp({ email, password }, (error, user) => {
        if (error && !user) return alert(error.message);

        const userData = data;

        if (userData.profissional) {
          addNewProfissionalData({ email, userData }, (docRef, error) => {
            if (error && !docRef) return alert(error);
          });
        } else {
          addNewUserData({ email, userData }, (docRef, error) => {
            if (error && !docRef) return alert(error);
          });    
        }
      });
    }, 2000);

    Alert.alert('Cadastro efetuado com sucesso!');

    finish();
  };

  goBack = () => {
    const { back } = this.props;

    back();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header titulo='Defina Sua Senha' funcao={this.goBack} />

        <ImagePicker permitirAdd={false} />

        <Input
          labelText='Senha'
          onChangeText={this.handleSenhaChange}
          value={this.state.senha}
        />

        <Input
          labelText='Confirmar senha'
          onChangeText={this.handleConfirmacaoSenhaChange}
          value={this.state.confirmacaoSenha}
        />

        <Button titulo='CADASTRAR' funcao={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulEscuro,
    alignItems: 'center',
  },
  containerDoisInputs: {
    flexDirection: 'row',
    width: wp('79.71%'),
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
