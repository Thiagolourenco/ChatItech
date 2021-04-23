import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import chatRoom from './chatRoom/sagas';

export default function* rootSaga() {
  return yield all([auth, chatRoom]);
}
