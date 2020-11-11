import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../../styles/colors/index';

import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import ImagePicker from '../../../../components/ImagePicker';
import Button from '../../../../components/Button';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ContaBancaria extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      titular: '',
      cpf: '',
      banco: '', // Esse vai ser select
      agencia: '',
      conta: ''
    };

    this.handleTitularChange = this.handleTitularChange.bind(this);
    this.handleCpfChange = this.handleCpfChange.bind(this);
    this.handleBancoChange = this.handleBancoChange.bind(this);
    this.handleAgenciaChange = this.handleAgenciaChange.bind(this);
    this.handleContaChange = this.handleContaChange.bind(this);

  }

  handleTitularChange = (titular) => this.setState({ titular });
  handleCpfChange = (cpf) => this.setState({ cpf });
  handleBancoChange = (banco) => this.setState({ banco });
  handleAgenciaChange = (agencia) => this.setState({ agencia });
  handleContaChange = (conta) => this.setState({ conta });

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState(this.state);

    next();
  };

  goBack = () => {
    const { back } = this.props;

    back();
  }

  render () {
    return (
      <View style={styles.container}>
        <Header titulo='Cadastre Sua Conta Bancária' funcao={this.goBack} />

        <ImagePicker permitirAdd={false} />

        <Input
          labelText='Titular'
          onChangeText={this.handleTitularChange}
          value={this.state.titular}
        />

        <Input
          labelText='CPF'
          onChangeText={this.handleCpfChange}
          value={this.state.cpf}
        />

        <Input
          labelText='Banco'
          onChangeText={this.handleBancoChange}
          value={this.state.banco}
        />

        <Input
          labelText='Agência'
          onChangeText={this.handleAgenciaChange}
          value={this.state.agencia}
        />

        <Input
          labelText='Conta'
          onChangeText={this.handleContaChange}
          value={this.state.conta}
        />

        <Button titulo='CONTINUAR' funcao={this.nextStep} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulEscuro,
    alignItems: 'center'
  },
  containerDoisInputs: {
    flexDirection: 'row',
    width: wp('79.71%'),
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
