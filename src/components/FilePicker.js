import React, { useState } from 'react';
import * as ExpoDocsPicker from 'expo-document-picker';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome'

export let docsSelecionados = [];

export default function FilePicker() {
  const [docs, setDocs] = useState(null);

  const pickDocs = async () => {
    let result = await ExpoDocsPicker.getDocumentAsync({
      multiple: true,
      copyToCacheDirectory: true,
      type: '*/*'
    });

    if (!result.cancelled) {
      setDocs(result.uri);

      docsSelecionados = result.uri;
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={pickDocs}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Anexar Certificados e Diplomas
          </Text>

          <Icon
            name='paperclip'
            style={{
              fontSize: 16,
              marginTop: 5,
              color: colors.branco,
            }}
          />

        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp('4.5%'),
    borderWidth: 1,
    padding: 10,
    borderColor: colors.branco,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10
  },
  text: {
    fontSize: hp('2.0%'),
    color: colors.branco,
    textAlign: 'center',
  }
});