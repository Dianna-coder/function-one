import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CadPag(props) {

    return (

        <View style={styles.container} >

            <View style={styles.Coluna1}>
                <Image source={props.img} style={styles.ProfImg} />
            </View>

            <View style={styles.Coluna2}>

                <View style={styles.Linha1}>
                    <Text style={styles.StyleName}> {props.NameProf} </Text>
                </View>

                <View style={styles.Linha2}>
                    <Text style={styles.StyleDivida}> {(props.Divida)}</Text>
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '80%',
        backgroundColor: '#fff',
        margin: '3%',
        alignSelf: 'center',
        borderColor: '#9c9c9c',
        borderWidth: 2,
        flexDirection: 'row'
    },
    Coluna1: {
        flex: 0.2,
        height: '100%',
        width: '20%',
        paddingTop: 20,

    },
    Coluna2: {
        flex: 1,
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Linha1: {
        height: '33.3%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Linha2: {
        height: '33.3%',
        width: '100%',
        alignItems: 'flex-start',
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StyleName: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 18

    },
    StyleDivida: {
        fontSize: 15,
        fontWeight: 'bold'

    },
    ProfImg: {
        alignSelf: 'center',
        width: '100%',
        resizeMode: 'contain',
    }
});