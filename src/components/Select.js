import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../styles/colors/index';

import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome"

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.defaultValue,
    };
  }

  render() {
    const {
      largura,
      labelText,
      valor,
      inputValue,
      valorMudado,
      valoresDoSelect,
    } = this.props;

    return (
      <View style={styles.wrapper}>
          <RNPickerSelect
            style={{
              placeholder: {
                color: colors.branco,
                fontSize: hp('2.2%'),
                color: colors.branco,
                fontWeight: 'bold',
                left: -8.5,
              },
              iconContainer: {
                color: '#fff',
                paddingTop: 10,
              },
              inputAndroid: {
                height: hp('3.95%'),
                color: '#fff',
                paddingBottom: 10,
                textAlign: 'center',
                backgroundColor: colors.azulEscuro,
              },
              viewContainer: {
                marginTop: hp('3.5%'),
                borderBottomWidth: 1.5,
                borderBottomColor: '#cecece',
                width: largura ? largura : wp('79.71%'),
                alignSelf: 'center',
              }
            }}
            placeholder={{
              label: labelText,
              value: valor,
            }}
            value={inputValue}
            onValueChange={valorMudado}
            items={valoresDoSelect}
            Icon={() => {
              return <Icon 
              name='chevron-down'
              style={{ 
                fontSize: 16, 
                color: colors.branco 
                }}
            /> ;
            }}
            />

      </View>
    );
  }
};


const styles = StyleSheet.create({
  wrapper: {
    // paddingTop: 5,
  },
});