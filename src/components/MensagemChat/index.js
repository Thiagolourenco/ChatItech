import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconUser from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const styles = StyleSheet.create({
  containerRecebido: {
    margin: 2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  containerEnviado: {
    margin: 2,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  dadosView: {
    maxWidth: '85%',
  },
  nomeTextRecebido: {
    alignSelf: 'flex-start',
  },
  nomeTextEnviado: {
    alignSelf: 'flex-end',
  },
  mensagemTextRecebida: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#bdc3c7',
    padding: 6,
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  mensagemTextEnviada: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#40aba5',
    padding: 6,
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  dataText: {
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});

export default function MensagemChat({data, user}) {
  return (
    <View>
      {user !== data.user ? (
        <View style={styles.containerRecebido}>
          <Icon name="support-agent" size={40} color="#000" />
          <View style={styles.dadosView}>
            {/* <Text style={styles.nomeTextRecebido}>{nome}</Text> */}
            <Text style={styles.mensagemTextRecebida}>{data.message}</Text>
            <Text>{data.createdAt}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.containerEnviado}>
          <View style={styles.dadosView}>
            {/* <Text style={styles.nomeTextEnviado}>{nome}</Text> */}
            <Text style={styles.mensagemTextEnviada}>{data.message}</Text>
            <Text style={styles.dataText}>{data.createdAt}</Text>
          </View>
          <IconUser name="account-hard-hat" size={40} color="#000" />
        </View>
      )}
    </View>
  );
}
