import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CadPro(props) {


function filterDesc(desc){
    if(desc.length < 40){
        return desc;
    }
    
    return `${desc.substring(0, 35)}...`;
}
 

 return (
    
   <View style={styles.container} >
       
       <View style={styles.Coluna1}>
       <Image
        source={props.img}
        style={styles.ProfImg}/>
       </View>
   
   <View style={styles.Coluna2}>
      
       <View style={styles.Linha1}>
         <Text style={styles.StyleName}> {props.NameProf} </Text>
         

       </View>


      
       <View style={styles.Linha2}>
         <Text style={styles.StyleRamo}> {props.NameRamo} </Text>
         
         <Text style={styles.StyleDesc}> {filterDesc(props.DescServico)}
         
         </Text>
       </View>
     
       <View style={styles.Linha3}>
       
         <Icon name='location-on' style={styles.StyleDist} />
         <Text style={styles.StyleDist}> {props.Distancia}
         
          </Text>
         
         </View>
      </View>
      <View style={styles.Coluna3}>
            
            <View style={styles.StyleAva}>
            
              <Icon name='star' size={20} />
              <Text> {props.Avali} </Text>
             
             </View>
            
             <View style={styles.StyleAccess}>
              <TouchableOpacity>
              <Image source={require('../../assets/SetaRight.png')}style={styles.SetaEnt}/>
               </TouchableOpacity>
             </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 175,
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
        paddingTop: 15
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
        width: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    Linha2:{
        height: '33.3%',
        width: '100%',
        alignItems: 'flex-start',
        flex: 1,
    },
    Linha3:{
        height: '33.3%',
        width: '100%',
        alignItems: 'flex-start',
        flex: 0.6,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#b3b3b3'
    },
    StyleName:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 18

    },
    StyleRamo:{
        fontSize: 13,
        lineHeight: 25,
        opacity: 0.6,
        fontWeight: 'bold'

    },
    StyleDesc:{
        fontSize: 13,
        opacity:0.5
    },
    StyleDist:{
        fontSize: 13,
        alignSelf: 'flex-end',
        opacity: 0.5,
        paddingBottom: 10
    },
    ProfImg:{
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain',
    },
    StyleAva:{
        paddingTop: 25,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        opacity: 0.6

    },
    StyleAccess:{
        flex: 1,
        resizeMode: 'contain',
        alignSelf:'center',
        paddingTop: 100
    },
    SetaEnt:{

    }
});