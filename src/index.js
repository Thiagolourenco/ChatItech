import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Chat from './pages/Home/Chat';
import ChatMessage from './pages/Home/ChatMessage';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatMessage" component={ChatMessage} />
    </Stack.Navigator>
  );
}
