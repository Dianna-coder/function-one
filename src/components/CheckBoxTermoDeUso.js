import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../styles/colors/index';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { CheckBox } from 'react-native-elements'

export default class CheckBoxTermoDeUso extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <CheckBox 
          title='Li e concordo com os termos de uso'
          checked={false}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
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
  title: {
    fontSize: hp('2.2%'),
    color: colors.branco,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
