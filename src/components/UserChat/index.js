/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {ChatRoomShowRequest} from '../../store/modules/chatRoom/actions';

Icon.loadFont();

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingRight: 5,
    alignItems: 'center',
  },
  nomeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  mensagemText: {
    fontSize: 14,
    color: '#4c4c4c',
  },
  dadosView: {
    flex: 2,
  },
});

export default function UserChat() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);
  const info = useSelector(state => state.chatRoom.info);

  useEffect(() => {
    dispatch(ChatRoomShowRequest(user._id));
  }, [user]);

  const handleClickChat = item => {
    navigation.navigate('ChatMessage', item);
  };

  return (
    <FlatList
      data={info}
      keyExtractor={item => String(item._id)}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => handleClickChat(item)}>
          <Icon name="account" size={60} color="#00b6c9" />
          <View style={styles.dadosView}>
            <Text style={styles.nomeText}>{item.name}</Text>
            <Text style={styles.mensagemText}>Mensagem enviada</Text>
          </View>
          <View>
            <Text style={styles.nomeText}>13:01</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
