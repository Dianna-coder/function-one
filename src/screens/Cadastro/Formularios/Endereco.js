import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Endereco extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      cep: '',
      endereco: '', 
      numero: '',
      bairro: '',
      uf: '',
      cidade: ''
    };

    this.handleCEPChange = this.handleCEPChange.bind(this);
    this.handleEnderecoChange = this.handleEnderecoChange.bind(this);
    this.handleNumeroChange = this.handleNumeroChange.bind(this);
    this.handleBairroChange = this.handleBairroChange.bind(this);
    this.handleUFChange = this.handleUFChange.bind(this);
    this.handleCidadeChange = this.handleCidadeChange.bind(this);
  }

  handleCEPChange = (cep) => this.setState({ cep });
  handleEnderecoChange = (endereco) => this.setState({ endereco });
  handleNumeroChange = (numero) => this.setState({ numero });
  handleBairroChange = (bairro) => this.setState({ bairro });
  handleUFChange = (uf) => this.setState({ uf });
  handleCidadeChange = (cidade) => this.setState({ cidade });
  
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
        <Header titulo='Endereço' funcao={this.goBack}/>

        <ImagePicker permitirAdd={false} />

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
            withi={wp('38%')}
            labelText='Bairro'
            onChangeText={this.handleBairroChange}
            value={this.state.bairro}
          />

          <Select
            largura={wp('38%')}
            labelText={'UF'}
            valor={this.state.uf}
            valorMudado={this.handleUFChange}
            valoresDoSelect={[
              { label: 'São Paulo', value: 'SP' },
            ]}
          />
        </View>

        <Input
          labelText='Cidade'
          onChangeText={this.handleCidadeChange}
          value={this.state.cidade}
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
    alignItems: 'center',
  },
  containerDoisInputs: {
    flexDirection: 'row',
    width: wp('79.71%'),
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});