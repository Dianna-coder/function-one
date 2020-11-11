import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Servicos extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tipoDeServico: '',
      valor: '',
      remoto: false,
      duracao: '',
    };

    this.handleTipoDeServicoChange = this.handleTipoDeServicoChange.bind(this);
    this.handleValorChange = this.handleValorChange.bind(this);
    this.handleRemotoChange = this.handleRemotoChange.bind(this);
    this.handleDuracaoChange = this.handleDuracaoChange.bind(this);
  }

  handleTipoDeServicoChange = (tipoDeServico) => this.setState({ tipoDeServico });
  handleValorChange = (valor) => this.setState({ valor });
  handleRemotoChange = (remoto) => this.setState({ remoto });
  handleDuracaoChange = (duracao) => this.setState({ duracao });

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
        <Header titulo='Cadastrar Serviços' funcao={this.goBack} />

        <ImagePicker permitirAdd={false} />

        <Input
          labelText='Tipo de Serviço'
          onChangeText={this.handleTipoDeServicoChange}
          value={this.state.tipoDeServico}
        />

        <Input
          labelText='Valor'
          onChangeText={this.handleValorChange}
          value={this.state.valor}
        />

        <View style={styles.containerDoisInputs}>
          <CheckBox
            bordaBottom={1}
            largura={wp('38%')}
            label="Remoto"
            labelStyle={{ color: colors.branco, fontSize: 16 }}
            value={this.state.remoto}
            onChange={this.handleRemotoChange}
          />

          <Input
            withi={wp('38%')}
            labelText='Duração'
            onChangeText={this.handleDuracaoChange}
            value={this.state.duracao}
          />
        </View>

        {/* Adicionar serviço */}

        {/* Adicionar função de enviar */}
        <Button titulo='CADASTRAR' funcao={this.nextStep} />
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
  containerDoisInputs: {
    flexDirection: 'row',
    width: wp('79.71%'),
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
