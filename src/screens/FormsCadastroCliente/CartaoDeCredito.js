import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class CartaoDeCredito extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      titular: '',
      numero: '',
      data: '',
      cvc: ''
    };

    this.handleTitularChange = this.handleTitularChange.bind(this);
    this.handleNumeroChange = this.handleNumeroChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleCVCChange = this.handleCVCChange.bind(this);
  }

  handleTitularChange = (titular) => this.setState(titular);
  handleNumeroChange = (numero) => this.setState(numero);
  handleDataChange = (data) => this.setState(data);
  handleCVCChange = (cvc) => this.setState(cvc);


  render () {
    return (
      <View style={styles.container}>
        <Header titulo='Cadastre Seu Cartão' />

        <ImagePicker />

        <Input
          labelText='Titular'
          onChangeText={this.handleTitularChange}
          value={this.state.titular}
        />

        <Input
          labelText='Número'
          onChangeText={this.handleNumeroChange}
          value={this.state.numero}
        />

        <View style={styles.containerDoisInputs}>
          <Input
            withi={wp('35%')}
            labelText='Data'
            onChangeText={this.handleDataChange}
            value={this.state.data}
          />

          <Input
            withi={wp('35%')}
            labelText='CVC'
            onChangeText={this.handleCVCChange}
            value={this.state.cvc}
          />
        </View>

        <Button />
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
