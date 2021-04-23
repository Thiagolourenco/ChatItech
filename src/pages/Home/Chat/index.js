import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Flatlist} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

Icon.loadFont();

// Components
import UserChat from '../../../components/UserChat';
import NovaConversa from '../../../components/NovaConversa';

export default function Chat() {
  const navigation = useNavigation();

  const [novoCanal, setNovoCanal] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleClickBack = () => {
    navigation.goBack();
  };

  const handleClickNovaConversa = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="arrow-left" size={33} color="#4c4c4c" />
        </TouchableOpacity>
        <Text style={styles.title}>Conversas</Text>
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.textSubTitle}>Gesprov</Text>
      </View>

      <UserChat />
      <TouchableOpacity
        style={styles.novaConversaBotao}
        onPress={handleClickNovaConversa}>
        <Icon name="comment-plus" size={30} color="#fff" />
      </TouchableOpacity>

      <NovaConversa showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
}
