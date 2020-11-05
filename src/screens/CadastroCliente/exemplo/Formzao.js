import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './components/Wizard';
import Input from './components/Input';

const formDadosIniciais = [
  {
    placeholder: 'Nome here...',
    name: 'nome',
  },
  {
    placeholder: 'Email here...',
    name: 'email',
  }
]

const formEndereco = [
  {
    placeholder: 'CEP here...',
    name: 'cep',
  },
  {
    placeholder: 'Numero here...',
    name: 'numero',
  }
]

const forms = [
  formDadosIniciais,
  formEndereco
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            nome: '',
            email: '',
            cep: '',
            numero: '',
          }}
        >
          {forms.map(el => (
            <Wizard.Step key={el.name}>
              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                {el.map((al) => (
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder={al.placeholder}
                    value={values[al.name]}
                    name={al.name}
                  />
                ))}
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});