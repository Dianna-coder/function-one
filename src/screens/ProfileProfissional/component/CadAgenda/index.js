import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CadAgenda(props) {

 return (
    
    <View style={styles.container} >
            <Text style={styles.StyleAgenda}> {props.Agendado} </Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
    container:{
        height: 500,
        width: '80%',
        backgroundColor: '#fff',
        margin: '3%',
        alignSelf: 'center',
        borderWidth:3,
        borderColor:'#d3d3d3',
        justifyContent:'center',
        alignItems:'center'
    },
    StyleAgenda:{
        fontSize: 18,
        fontWeight: 'bold'

    }
});