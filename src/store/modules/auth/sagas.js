import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services';
import {AuthSuccess} from './actions';

export function* Auth({payload}) {
  try {
    const obj = {
      email: payload.email,
      password: payload.password,
    };

    const response = yield call(api.post, 'session', obj);

    const {token, user} = response.data;

    yield put(AuthSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    payload.navigation.navigate('Chat');
  } catch (error) {
    console.log('error');
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([takeLatest('@auth/AUTH_REQUEST', Auth)]);
