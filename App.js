import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/styles/colors/index';

import DadosIniciais from './src/screens/FormsCadastroCliente/DadosIniciais';
import Endereco from './src/screens/FormsCadastroCliente/Endereco';
// import CartaoDeCredito from './src/screens/FormsCadastroCliente/CartaoDeCredito';
// import Senha from './src/screens/FormsCadastroCliente/Senha';
// import Formzao from './src/screens/FormsCadastroCliente/exemplo/Formzao'

import AnimatedFormView from './src/components/Step'

export default class App extends React.Component {
  onNext = () => {
    console.log("Next");
  };

  onBack = () => {
    console.log("Back");
  };

  finish = finalState => {
    console.log(finalState);
  };

  render() {
    const allSteps = [
      { name: "step 1", component: DadosIniciais },
      { name: "step 2", component: Endereco },
      // { name: "step 3", component: FormCartaoDeCredito },
      // { name: "step 4", component: Senha }
    ];

    return (
      <View style={styles.container}>
        <AnimatedFormView
          steps={allSteps}
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
