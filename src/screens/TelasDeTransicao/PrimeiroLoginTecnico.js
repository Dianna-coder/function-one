import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

import colors from '../../styles/colors/index';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class PrimeiroLoginTecnico extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  nextStep = () => {
    const { next } = this.props;

    // setTimeout(
    //   function() {
    //       this.setState({timePassed: true});
    //   }
    //   .bind(this),
    //   1000
    // );

    next();
  };

  render () {
    return (
      <View style={styles.container}>

        {/* Adicionar nome da pessoa */}
        <Text style={styles.titulo}>BEM VINDO!</Text>

        <Image style={styles.imagem} source={require('../../../assets/icons/garoto.png')}/>

        <Text style={styles.text}>
          Antes de começar a trabalhar adicione os dados complementares do seu perfil!
        </Text>


        <Button style={styles.btn} title='CONTINUAR' funcao={this.nextStep} />
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
  titulo: {
    fontSize: hp('2.7%'),
    color: colors.branco,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('20%'),
    marginBottom: hp('10%'),
    marginRight: wp('6.9%'),
    marginLeft: wp('6.9%'),
  },
  imagem: {
    height: hp('18%'),
    width: hp('18%'),
    marginBottom: hp('10%')
  },
  text: {
    fontSize: hp('2.7%'),
    color: colors.branco,
    textAlign: 'center',
    marginRight: wp('6.9%'),
    marginLeft: wp('6.9%'),
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    opacity: 0,
    color: colors.branco
  }
});
