import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CadCli(props) {


function filterDesc(desc){
    if(desc.length < 40){
        return desc;
    }
    
    return `${desc.substring(0, 35)}...`;
}
 

 return (
    
   <View style={styles.container} >
       
        <View style={styles.Coluna1}>
           
           <Image source={props.img} style={styles.CliImg}/>

        </View>
   
        <View style={styles.Coluna2}>
      
            <View style={styles.Linha1}>
                 <Text style={styles.StyleCli}> {props.NameCli} </Text>
            </View>
            
            <View style={styles.Linha2}>
                <Text style={styles.StyleServi}> {props.Serviço} </Text>
                <Text style={styles.StylePreço}> {filterDesc(props.Preço)} Reais</Text>
                <Text style={styles.StyleStatus}> {props.Status}</Text>
            </View>
     
        </View>
     
        <View style={styles.Coluna3}>
        
            
            <TouchableOpacity style={styles.StyleAccess}>
                <View>
                    <Image source={require('../../assets/SetaRight.png')}style={styles.SetaEnt}/>
                </View>
            </TouchableOpacity>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 135,
        width: '80%',
        backgroundColor: '#fff',
        margin: '3%',
        alignSelf: 'center',
        borderColor: '#9c9c9c',
        borderWidth: 2,
        flexDirection: 'row'
    },
    Coluna1:{
        flex: 0.28,
        height: '100%',
        width: '20%',
        paddingTop: 15,
    },
    Coluna2:{
        flex: 1,
        height: '100%',
        width: '80%',
    },
    Coluna3:{
        flex: 0.24,
        height: '100%',
        width: '20%',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    Linha1:{
        height: '33.3%',
        width: '100%',
        flex: 0.7,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    Linha2:{
        height: '33.3%',
        width: '100%',
        alignItems: 'flex-start',
        flex: 1,
        
    },
    StyleCli:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop:'5%'

    },
    StyleServi:{
        fontSize: 14,
        lineHeight: 25,
        opacity: 0.6,
        fontWeight: 'bold'

    },
    StylePreço:{
        fontSize: 14,
        opacity:0.5,
    },
    StyleStatus:{
        fontSize: 13,
        fontWeight: 'bold'
    },
    CliImg:{
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain'
    },
    StyleAccess:{
        flex: 1,
        resizeMode: 'contain',
        padding:15,
        alignItems:'center'
    }
});