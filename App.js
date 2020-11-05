import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/styles/colors/index';

import FormDadosIniciais from './src/screens/CadastroCliente/FormDadosIniciais';
import FormEndereco from './src/screens/CadastroCliente/FormEndereco';
// import FormCartaoDeCredito from './src/screens/CadastroCliente/FormTres';
import FormSenha from './src/screens/CadastroCliente/FormSenha';
import Formzao from './src/screens/CadastroCliente/exemplo/Formzao'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Formzao />

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
