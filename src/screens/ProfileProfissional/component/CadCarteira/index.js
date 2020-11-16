import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CadCarteira(props) {

 return (
    
    <View style={styles.container} >

            <Text style={styles.StyleSaldo}> Saldo: {props.Saldo} Reais </Text>

    </View>
  
  );
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: '80%',
        backgroundColor: '#fff',
        margin: '3%',
        alignSelf: 'center',
        borderWidth:3,
        borderColor:'#d3d3d3',
        justifyContent:'center',
        alignItems:'center'
    },
    StyleSaldo:{
        fontSize: 26,
        fontWeight: 'bold'

    }
});