import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CheckBox from '../../components/CheckBox';

export default class Endereco extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      titulo: "",
      check: false
    };

    this.handleCEPChange = this.handleCEPChange.bind(this);
    this.handleEnderecoChange = this.handleEnderecoChange.bind(this);
    this.handleNumeroChange = this.handleNumeroChange.bind(this);
    this.handleBairroChange = this.handleBairroChange.bind(this);
    this.handleUFChange = this.handleUFChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCEPChange = (cep) => this.setState({ cep });
  handleEnderecoChange = (endereco) => this.setState({ endereco });
  handleNumeroChange = (numero) => this.setState({ numero });
  handleBairroChange = (bairro) => this.setState({ bairro });
  handleUFChange = (uf) => this.setState({ uf });
  handleCheck() {
    this.setState({ check: !this.state.check });
  }
  
  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render () {

    console.log(this.state)
    return (
      <View style={styles.container}>
        <Header titulo='Seus Dados' />

        <ImagePicker />

        <Input
          labelText='CEP'
          onChangeText={this.handleCEPChange}
          value={this.state.cep}
        />

        <Input
          labelText='Endereço'
          onChangeText={this.handleEnderecoChange}
          value={this.state.endereco}
        />

        <Input
          labelText='Número'
          onChangeText={this.handleNumeroChange}
          value={this.state.numero}
        />

        <View style={styles.containerDoisInputs}>
          <Input
            withi={wp('35%')}
            labelText='Bairro'
            onChangeText={this.handleBairroChange}
            value={this.state.bairro}
          />

          <Input
            withi={wp('35%')}
            labelText='UF'
            onChangeText={this.handleUFChange}
            value={this.state.uf}
          />
        </View>
  
        <CheckBox
          label="Li e concordo com os termos de uso"
          labelStyle={{ color: colors.branco, fontSize: 16 }}
          iconColor={ colors.branco }
          checkColor={ colors.branco }
          value={this.state.check}
          onChange={this.handleCheck}
        />

        <Button onPress={this.nextStep} title='Continuar'>
        </Button> 
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
