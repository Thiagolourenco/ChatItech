import {combineReducers} from 'redux';

import auth from './auth/reducer';
import chatRoom from './chatRoom/reducer';

export default combineReducers({
  auth,
  chatRoom,
});
