/* eslint-disable react/jsx-no-bind */
import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';

// Components
import NovaConversaItem from '../NovaConversaItem';
import {ChatRoomRequest} from '../../store/modules/chatRoom/actions';

Icon.loadFont();

export default function ({showModal, setShowModal}) {
  const navigation = useNavigation();
  const [selectTipo, setSelectTipo] = useState(0);
  // const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const users = useSelector(state => state.chatRoom.data);

  useEffect(() => {
    dispatch(ChatRoomRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickFechar = () => {
    setShowModal(false);
  };

  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
          <View style={styles.titleArea}>
            <TouchableOpacity
              onPress={handleClickFechar}
              style={styles.botaoFechar}>
              <Icon name="close" size={30} color="#4c4c4c" />
            </TouchableOpacity>
            <Text style={styles.title}>Nova Conversa</Text>
          </View>

          {users.map((item, index) => (
            <NovaConversaItem
              tipoConversa={selectTipo}
              setShowModal={setShowModal}
              item={item}
              key={index}
            />
          ))}
        </View>
      </View>
    </Modal>
  );
}
