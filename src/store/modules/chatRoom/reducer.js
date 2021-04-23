import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  loadingChatRoom: false,
  data: [],
  info: [],
};

export default function chatRoom(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chat/CHAT_ROOM_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@chat/CHAT_ROOM_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@chat/CHAT_ROOM_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@chat/CHAT_ROOM_SHOW_REQUEST': {
        draft.loadingChatRoom = true;
        break;
      }

      case '@chat/CHAT_ROOM_SHOW_SUCCESS': {
        draft.info = action.payload.data;
        draft.loadingChatRoom = false;
        break;
      }

      case '@chat/CHAT_ROOM_SHOW_FAILURE': {
        draft.loadingChatRoom = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}
