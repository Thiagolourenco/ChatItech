import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '../../../services';
import {ChatRoomSuccess, ChatRoomShowSuccess} from './actions';

export function* ChatRoomList() {
  try {
    const response = yield call(api.get, '/users');

    yield put(ChatRoomSuccess(response.data));
  } catch (error) {
    console.log('ERROR => ', error);
  }
}

export function* ChatRoomNew({payload}) {
  try {
    const obj = {
      name: payload.name,
      nameUserAuth: payload.nameUserAuth,
      nameChatRooom: payload.nameChatRoom,
    };

    const response = yield call(api.post, 'chatroom', obj);

    console.log('response => ', response.data);
  } catch (error) {
    console.log('error', error);
  }
}

export function* ChatRoomShow({payload}) {
  try {
    const response = yield call(api.get, `chatroom/${payload.id}`);

    yield put(ChatRoomShowSuccess(response.data));
  } catch (error) {
    console.log('error', error);
  }
}

export default all([
  takeLatest('@chat/CHAT_ROOM_REQUEST', ChatRoomList),
  takeLatest('@chat/CHAT_ROOM_NEW_REQUEST', ChatRoomNew),
  takeLatest('@chat/CHAT_ROOM_SHOW_REQUEST', ChatRoomShow),
]);
