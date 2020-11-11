import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/styles/colors/index';
import AnimatedFormView from './src/components/Step'

import DadosIniciais from './src/screens/FormsPadroes/DadosIniciais';
import Endereco from './src/screens/FormsPadroes/Endereco';
// import CartaoDeCredito from './src/screens/FormsCadastroCliente/CartaoDeCredito';
// import Senha from './src/screens/FormsCadastroCliente/Senha';

import PerfilProfissional from './src/screens/FormsCadastroTecnico/PerfilProfissional';
import InformacoesAcademicas from './src/screens/FormsCadastroTecnico/InformacoesAcademicas';
import Conhecimentos from './src/screens/FormsCadastroTecnico/Conhecimentos';
import ContaBancaria from './src/screens/FormsCadastroTecnico/DadosComplementares/ContaBancaria';
import Agenda from './src/screens/FormsCadastroTecnico/DadosComplementares/Agenda';
import Servicos from './src/screens/FormsCadastroTecnico/DadosComplementares/Servicos';
import CadastroEfetuado from './src/screens/TelasDeTransicao/CadastroEfetuado';
import PrimeiroLoginTecnico from './src/screens/TelasDeTransicao/PrimeiroLoginTecnico';

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
    // const allStepsFormsCliente = [
    //   { name: "step 1", component: DadosIniciais },
    //   { name: "step 2", component: Endereco },
    //   { name: "step 3", component: CartaoDeCredito },
    //   { name: "step 4", component: Senha }
    // ];

    const allStepsFormsTecnico = [
      { name: "step 1", component: DadosIniciais },
      { name: "step 2", component: Endereco },
      // { name: "step 3", component: PerfilProfissional },
      { name: "step 4", component: InformacoesAcademicas },
      // { name: "step 5", component: Conhecimentos },
      // { name: "step 6", component: CadastroEfetuado },
      { name: "step 7", component: PrimeiroLoginTecnico },
      // { name: "step 8", component: ContaBancaria },
      { name: "step 9", component: Agenda },
      { name: "step 10", component: Servicos },
    ];

    return (
      <View style={styles.container}>
        <AnimatedFormView
          steps={allStepsFormsTecnico}
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
