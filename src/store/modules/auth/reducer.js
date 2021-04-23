import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  loadingForgot: false,
  signed: false,
  user: null,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/AUTH_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/AUTH_SUCCESS': {
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        break;
      }

      case '@auth/AUTH_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
