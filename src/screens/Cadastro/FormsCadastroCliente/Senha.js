import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import Button from '../../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
  
  nextStep = () => {
    const { next, saveState, getState } = this.props;

    saveState(this.state);
    
    const stateAnterior = getState(this.state)

    next();
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
          value={this.state.confirmacaoSenha}
        />

        <Input
          labelText='Confirmar senha'
          onChangeText={this.handleConfirmacaoSenhaChange}
          value={this.state.confirmacaoSenha}
        />

        <Button titulo='CADASTRAR' funcao={this.nextStep} />  
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
