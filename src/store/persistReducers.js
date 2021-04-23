import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persist = persistReducer(
    {
      key: 'chat',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persist;
};
