import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import Button from '../../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { addItem } from '../../../database/Firebase';

export default class Senha extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      senha: '',
      confirmacaoSenha: '',
    };

    this.handleSenhaChange = this.handleSenhaChange.bind(this);
    this.handleConfirmacaoSenhaChange = this.handleConfirmacaoSenhaChange.bind(this);
  }

  handleSenhaChange = (senha) => this.setState({ senha });
  handleConfirmacaoSenhaChange = (confirmacaoSenha) => this.setState({ confirmacaoSenha });

  handleSubmit = () => {
    const { saveState, getState, finish } = this.props;

    saveState({ 
      senha: this.state.senha 
    });
  
    const dadosCadastro = getState(this.state);

    const table = this.props.profissao !== '' ? '/profissionais' : '/clientes';
  
    addItem(dadosCadastro, table);

    Alert.alert('Cadastro efetuado com sucesso!');

    finish();
  };

  goBack = () => {
    const { back } = this.props;

    back();
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Header titulo='Defina Sua Senha' funcao={this.goBack}/>

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
