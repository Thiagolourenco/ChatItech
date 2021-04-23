/* eslint-disable no-const-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-lone-blocks */
import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import socketio from 'socket.io-client';
import {useSelector} from 'react-redux';
// import {format} from 'date-fns';

import api from '../../../services';

Icon.loadFont();

import {styles} from './styles';

import MensagemChat from '../../../components/MensagemChat';

export default function ChatMessage() {
  const navigation = useNavigation();
  const routes = useRoute();

  const infoUser = routes.params;

  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  const user = useSelector(state => state.auth.user);

  const socket = useMemo(
    () =>
      socketio('http://192.168.0.120:5000', {query: {message: infoUser._id}}),
    [infoUser],
  );

  useEffect(() => {
    socket.on('messages', messageNew => {
      setMessages([...messages, messageNew]);
    });
  }, [socket, messages]);

  useEffect(() => {
    async function loadMessage() {
      const response = await api.get(`messages/${infoUser._id}`);

      setMessages(response.data);
    }

    loadMessage();
  }, [infoUser]);

  async function submitChatMessage() {
    const obj = {
      message: message,
      chatroom: infoUser._id,
      user: user._id,
    };

    await api.post('messages', obj);

    setMessage('');
  }

  const handleClickBack = () => {
    navigation.navigate('ChatUser');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClickBack}>
          <Icon name="arrow-left" size={33} color="#4c4c4c" />
        </TouchableOpacity>
        <Text style={styles.title}>Claudio Mesquita - Suporte</Text>
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.textSubTitle}>Gesprov</Text>
      </View>
      <View style={styles.conversaArea}>
        <FlatList
          data={messages}
          renderItem={({item}) => <MensagemChat data={item} user={user._id} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity
          style={styles.botaoEnviar}
          onPress={submitChatMessage}>
          <Text style={styles.textBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
