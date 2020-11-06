import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Senha extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      senha: '',
      confirmacaoSenha: ''
    };

    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.handleConfirmacaoSenhaChange = this.handleConfirmacaoSenhaChange.bind(this);
  }

  handleSenhaChange = (senha) => this.setState(senha);
  handleConfirmacaoSenhaChange = (confirmacaoSenha) => this.setState(confirmacaoSenha);
  
  render () {
    return (
      <View style={styles.container}>
        <Header titulo='Defina Sua Senha' />

        <ImagePicker
        />
 
        <Input
          labelText='Senha'
          onChangeText={this.handleSenhaChange}
          value={this.state.confirmacaoSenha}
        />

        <Input
          labelText='Confirme Sua Senha'
          onChangeText={this.handleConfirmacaoSenhaChange}
          value={this.state.confirmacaoSenha}
        />

        <Button titulo='CADASTRAR' />
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
