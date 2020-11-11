import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from '../../styles/colors/index';
import AnimatedFormView from '../../components/Step'

import DadosIniciais from './FormsPadroes/DadosIniciais';
import Endereco from './FormsPadroes/Endereco';
import CartaoDeCredito from './FormsCadastroCliente/CartaoDeCredito';
import Senha from './FormsPadroes/Senha';

export default class CadastroCliente extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  onNext = () => {
    // console.log("Next");
  };

  onBack = () => {
    // console.log("Back");
  };

  finish = () => this.props.navigation.navigate('Login');

  render() {
    const allStepsFormsCliente = [
      { name: "step 1", component: DadosIniciais },
      { name: "step 2", component: Endereco },
      { name: "step 3", component: CartaoDeCredito },
      { name: "step 4", component: Senha }
    ];

    return (
      <View style={styles.container}>
        <AnimatedFormView
          steps={allStepsFormsCliente}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          comeInOnNext="bounceInUp"
          OutOnNext="bounceOutDown"
          comeInOnBack="bounceInDown"
          OutOnBack="bounceOutUp"
        />

        <StatusBar 
          style='light'
          backgroundColor = { colors.azulEscuro }
          translucent = {false} 
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulEscuro,
    // alignItems: 'center'
  }
});
