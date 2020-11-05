import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Button from '../../components/Button';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class FormCartaoDeCredito extends React.Component {
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
        <Header titulo='Cadastre Seu Cartão' />

        <ImagePicker
        />

        <Input
          labelText='Titular'
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
            labelText='Data'
            onChangeText={this.handletituloChange}
            value={this.state.titulo}
          />

          <Input
            withi={wp('35%')}
            labelText='CVC'
            onChangeText={this.handletituloChange}
            value={this.state.titulo}
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
