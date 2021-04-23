import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import styles from './styles';
import api from '../../services';

import {AuthRequest} from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function handleLogin() {
    dispatch(AuthRequest(email, password, navigation));
    // try {
    //   const obj = {
    //     email: email,
    //     password: password,
    //   };

    //   const response = await api.post('session', obj);

    //   const {token, user} = response.data;

    //   const data = JSON.stringify(user);

    //   await AsyncStorage.setItem('@token', token);
    //   await AsyncStorage.setItem('@user', data);

    //   navigation.navigate('Chat');
    // } catch (error) {
    //   console.log('ERRROR => ', error);
    // }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Itech</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Entrar</Text>
      </Pressable>
    </View>
  );
}
