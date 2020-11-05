import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import colors from '../../styles/colors/index';

import Header from '../../components/Header';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
// import Button from '../../components/Button';

import { useForm } from 'react-hook-form'
import * as yup from 'yup'

// TODO
// Validação de campos
// Formatação dos inputs
// Seta de voltar e botao de continuar funcionar
// pegar os dados dos inputs

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

export default class FormDadosIniciais extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      nome: '',
      sobrenome: '',
      email: '',
      celular: '',
      nascimento: '',
      cpf: ''
    };

    this.handleNomeChange = this.handleNomeChange.bind(this);
    this.handleSobrenomeChange = this.handleSobrenomeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCelularChange = this.handleCelularChange.bind(this);
    this.handleNascimentoChange = this.handleNascimentoChange.bind(this);
    this.handleCPFChange = this.handleCPFChange.bind(this);
  }

  handleNomeChange = (nome) => this.setState(nome);
  handleSobrenomeChange = (sobrenome) => this.setState(sobrenome);
  handleEmailChange = (email) => this.setState(email);
  handleCelularChange = (celular) => this.setState(celular);
  handleNascimentoChange = (nascimento) => this.setState(nascimento);
  handleCPFChange = (cpf) => this.setState(cpf);

  render () {
    // const { errors } = useForm({ validationSchema: fieldValidationSchema }); // initialize the hook
    
    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <View style={styles.container}>
        <Header />

        <ImagePicker
        />

        <Input
          labelText='Nome'
          // error={errors?.nome}
          onChangeText={this.handleNomeChange}
          value={this.state.nome}
        />

        <Input
          labelText='Sobrenome'
          // error={errors?.sobrenome}
          onChangeText={this.handleSobrenomeChange}
          value={this.state.sobrenome}
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

        <Input
          labelText='CPF'
          onChangeText={this.handleCPFChange}
          value={this.state.cpf}
        />

        <Button onPress={handleSubmit(onSubmit)} text={'Continuar'}> </Button> 
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
