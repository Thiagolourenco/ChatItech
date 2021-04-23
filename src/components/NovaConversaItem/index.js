import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import {ChatRoomNewRequest} from '../../store/modules/chatRoom/actions';

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
    padding: 5,
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

export default function NovaConversa({tipoConversa, setShowModal, item}) {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);

  const user = useSelector(state => state.auth.user);

  console.log('USER => ', user);

  const dispatch = useDispatch();

  const handleCheck = () => {
    if (tipoConversa === 1) {
      if (check === false) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    } else {
      setShowModal(false);
      navigation.navigate('Chat');
    }
  };

  async function handleNewMessage(data) {
    dispatch(ChatRoomNewRequest(data.name, user._id, data._id));
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNewMessage(item)}>
      <Icon name="account" size={50} color="#4c4c4c" />
      <View style={styles.dadosView}>
        <Text style={styles.nomeText}>{item.name}</Text>
        <Text style={styles.mensagemText}>Suporte</Text>
      </View>
      {tipoConversa === 1 && (
        <View>
          <Icon
            name={check === true ? 'radiobox-marked' : 'radiobox-blank'}
            size={22}
            color="#4c4c4c"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
