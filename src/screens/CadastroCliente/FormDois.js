import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CheckBox from '../../components/CheckBox';

// TODO
// Validação de campos
// Formatação dos inputs
// Seta de voltar e botao de continuar funcionar
// pegar os dados dos inputs
// Checkbox
// Botao de adicionar na image

export default class FormDois extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      titulo: "",
      check: false
    };

    this.handletituloChange = this.handletituloChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }

  handletituloChange = (value) => this.setState({ titulo: value });

  handleCheck() {
    this.setState({ check: !this.state.check });
  }

  render () {
    return (
      <View style={styles.container}>
        <Header />

        <ImagePicker
        />

        <Input
          labelText='CEP'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Endereço'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Número'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <View style={styles.containerDoisInputs}>
          <Input
            withi={wp('35%')}
            labelText='Bairro'
            onChangeText={this.handletituloChange}
            value={this.state.titulo}
          />

          <Input
            withi={wp('35%')}
            labelText='UF'
            onChangeText={this.handletituloChange}
            value={this.state.titulo}
          />
        </View>
  
        <CheckBox
          label="Li e concordo com os termos de uso"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={this.state.check}
          onChange={this.handleCheck}
        />

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
