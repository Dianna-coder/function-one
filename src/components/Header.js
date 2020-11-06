import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from "../styles/colors/index";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titulo } = this.props;

    return (
        <View style={styles.container}>
          <Image style={styles.imagem} source={require("../../assets/icons/btn-voltar.png")}/>
          
          <Text style={ styles.title }>
            { titulo }
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    paddingTop: hp('2.2%'),
  },
  imagem: {
    width: wp('2.5%'),
    height: hp('2.3%'),
    marginLeft: wp('6%'),
    marginTop: hp('2.2%'),
    position: 'absolute'
  },
  title: {
    fontSize: hp('2.2%'),
    color: colors.branco,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
