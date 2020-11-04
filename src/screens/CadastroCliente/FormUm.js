import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

// TODO
// Validação de campos
// Formatação dos inputs
// Seta de voltar e botao de continuar funcionar
// pegar os dados dos inputs

export default class FormUm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      titulo: "",
    };

    this.handletituloChange = this.handletituloChange.bind(this);
  }

  handletituloChange = (value) => this.setState({ titulo: value });

  render () {
    return (
      <View style={styles.container}>
        <Header />

        <ImagePicker
        />

        <Input
          labelText='Nome'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Sobrenome'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Email'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Celular'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='Nascimento'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
        />

        <Input
          labelText='CPF'
          onChangeText={this.handletituloChange}
          value={this.state.titulo}
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
    alignItems: 'center'
  },
});
