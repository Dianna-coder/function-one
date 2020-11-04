import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/styles/colors/index';

// import FormUm from './src/screens/CadastroCliente/FormUm';
// import FormDois from './src/screens/CadastroCliente/FormDois';
// import FormTres from './src/screens/CadastroCliente/FormTres';
import FormQuatro from './src/screens/CadastroCliente/FormQuatro';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormQuatro />

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
