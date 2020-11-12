import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../styles/colors/index';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import ImagePicker, { imagemPerfil } from '../../../components/ImagePicker';
import Button from '../../../components/Button';

import CheckBox from '../../../components/CheckBox';

// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'

// const fieldValidationSchema = yup.object().shape({
//   nome: yup
//     .string()
//     .required('O nome não pode ser vazio')
//     .min(2),
//   sobrenome: yup
//     .string()
//     .required('O sobrenome não pode ser vazio')
//     .min(2),
//   email: yup
//     .string()
//     .required('O email não pode ser vazio')
//     .email('Digite um email válido'),
//   celular: yup
//     .string()
//     .required('O celular não pode ser vazio')
//     .min(11, 'O celular deve conter 11 dígitos'),
//   nascimento: yup
//     .string()
//     .required('O nascimento não pode ser vazio'),
//   cpf: yup
//     .string()
//     .required('O cpf não pode ser vazio')
//     .min(11, 'O cpf deve conter 11 dígitos'),
// })

export default class DadosIniciais extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      termoDeUso: false,
      imagem: imagemPerfil, // nao foi
      nome: '',
      email: '',
      celular: '',
      nascimento: '',
      cpf: '',
    };

    this.handleNomeChange = this.handleNomeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCelularChange = this.handleCelularChange.bind(this);
    this.handleNascimentoChange = this.handleNascimentoChange.bind(this);
    this.handleCPFChange = this.handleCPFChange.bind(this);
    this.handleTermoDeUsoChange = this.handleTermoDeUsoChange.bind(this);
  }

  handleNomeChange = (nome) => this.setState({ nome });
  handleEmailChange = (email) => this.setState({ email: email ? email.toString().trim() : email });
  handleCelularChange = (celular) => this.setState({ celular });
  handleNascimentoChange = (nascimento) => this.setState({ nascimento });
  handleCPFChange = (cpf) => this.setState({ cpf });

  handleTermoDeUsoChange() {
    this.setState({ termoDeUso: !this.state.termoDeUso });
  }

  nextStep = () => {
    const { next, saveState } = this.props;
    saveState(this.state);

    next();
  };

  goBack() {
    const { back } = this.props;

    back();
  }

  render () {
    // const { errors } = useForm({ validationSchema: fieldValidationSchema }); // initialize the hook

    return (
      <View style={styles.container}>
        <Header titulo='Seus Dados' />

        <ImagePicker permitirAdd={true} />

        <Input
          labelText='Nome'
          // error={errors?.nome}
          onChangeText={this.handleNomeChange}
          value={this.state.nome}
        />

        <Input
          labelText='CPF'
          onChangeText={this.handleCPFChange}
          value={this.state.cpf}
        />

        <Input
          labelText='Email'
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />

        <Input
          labelText='Celular'
          onChangeText={this.handleCelularChange}
          value={this.state.celular}
        />

        <Input
          labelText='Nascimento'
          onChangeText={this.handleNascimentoChange}
          value={this.state.nascimento}
        />

        <CheckBox
          label="Li e concordo com os termos de uso"
          labelStyle={{ color: colors.branco, fontSize: 16 }}
          value={this.state.termoDeUso}
          onChange={this.handleTermoDeUsoChange}
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
    alignItems: 'center'
  }
});
