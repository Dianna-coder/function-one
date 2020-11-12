import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, Modal, Alert } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../styles/colors';
import Input from '../../../components/Input';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

class TaskList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      titular: '',
    };

    this.handleTitularChange = this.handleTitularChange.bind(this);
  }

  handleTitularChange = (titular) => this.setState({ titular });

  render() {
   
    return (
      <View>
        
      <Input
        labelText='Titular'
        onChangeText={this.handleTitularChange}
        value={this.state.titular}
      />
    </View>
    ) }
}

export default class InformacoesAcademicas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: [
        <TaskList />
      ]
    }
  }

  // const [open, setOpen] = useState(false)

  render () {
  return (
    <ScrollView style={StyleSheet.container}>
      <StatusBar backgroundColor={colors.azulEscuro} barStyle='light-content'></StatusBar>
      <View style={styles.content}>
        <Text style={styles.text}>Minhas Tarefas</Text>
      </View>

      {this.state.lista}

      <TouchableOpacity style={styles.btn} onPress={() => this.setState({
        lista: [<TaskList />,this.state.lista,]
      })}>
        <Text style={styles.text}>Clica aqui</Text>
      </TouchableOpacity>

      {console.log(this.state.lista[1])}
    </ScrollView>
  ) }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulEscuro,
    alignItems: "center"
  },
  btn: {
    marginTop: 430,
    backgroundColor: colors.vermelho
  },
  text: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: colors.branco
  }
})