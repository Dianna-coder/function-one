import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CadMensagens(props) {


function filterDesc(mens){
    if(mens.length < 43){
        return mens;
    }
    
    return `${mens.substring(0, 38)}...`;
}
 

 return (
    
   <View style={styles.container} >
       
       <View style={styles.Coluna1}>
          <Image source={props.img} style={styles.ProfImg}/>
       </View>
   
    <View style={styles.Coluna2}>
        
        <View style={styles.Linha1}>
            <Text style={styles.StyleName}> {props.NameProf} </Text>
        </View>
        
        <View style={styles.Linha2}>
            <Text style={styles.StyleDesc}> {filterDesc(props.DescServico)}</Text>
        </View>
        
    </View>
        <View style={styles.Coluna3}>
            <TouchableOpacity style={styles.StyleAccess}>
                <Image source={require('../../assets/SetaRight.png')}style={styles.SetaEnt}/>
            </TouchableOpacity>
        </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: '80%',
        backgroundColor: '#fff',
        margin: '3%',
        alignSelf: 'center',
        borderColor: '#9c9c9c',
        borderWidth: 2,
        flexDirection: 'row'
    },
    Coluna1:{
        flex: 0.2,
        height: '100%',
        width: '20%',
        paddingTop: 20
    },
    Coluna2:{
        flex: 1,
        height: '100%',
        width: '80%'
    },
    Coluna3:{
        flex: 0.2,
        height: '100%',
        width: '20%',
    },
    Linha1:{
        height: '33.3%',
        width: '75%',
        flex: 1,
        flexDirection: 'row'
    },
    Linha2:{
        height: '33.3%',
        width: '100%',
        alignItems: 'flex-start',
        flex: 0.8,
    },
    StyleName:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 18

    },
    StyleDesc:{
        fontSize: 13,
        opacity:0.5
    },
    ProfImg:{
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain',
    },
    StyleAccess:{
        flex: 1,
        resizeMode: 'contain',
        alignSelf:'center',
        justifyContent:'center',
        marginTop:25,
        marginBottom:25,
        paddingRight:10,
        paddingLeft:10

    }
});