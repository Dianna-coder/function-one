import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from '../../styles/colors/index';
import AnimatedFormView from '../../components/Step'

import DadosIniciais from './FormsPadroes/DadosIniciais';
import Endereco from './FormsPadroes/Endereco';
import PerfilProfissional from './FormsCadastroTecnico/PerfilProfissional';
import InformacoesAcademicas from './FormsCadastroTecnico/InformacoesAcademicas';
import Conhecimentos from './FormsCadastroTecnico/Conhecimentos';
import CadastroEfetuado from '../TelasDeTransicao/CadastroEfetuado';
import PrimeiroLoginTecnico from '../TelasDeTransicao/PrimeiroLoginTecnico';
import ContaBancaria from './FormsCadastroTecnico/DadosComplementares/ContaBancaria';
import Agenda from './FormsCadastroTecnico/DadosComplementares/Agenda';
import Servicos from './FormsCadastroTecnico/DadosComplementares/Servicos';
import Senha from './FormsPadroes/Senha';

export default class CadastroTecnico extends React.Component {
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
    const allStepsFormsTecnico = [
      { name: "step 1", component: DadosIniciais },
      { name: "step 2", component: Endereco },
      { name: "step 3", component: PerfilProfissional },
      { name: "step 4", component: InformacoesAcademicas },
      { name: "step 5", component: Conhecimentos },
      // { name: "step 6", component: CadastroEfetuado },
      // { name: "step 7", component: PrimeiroLoginTecnico },
      { name: "step 8", component: ContaBancaria },
      { name: "step 9", component: Agenda },
      { name: "step 10", component: Servicos },
      { name: "step 11", component: Senha },
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
