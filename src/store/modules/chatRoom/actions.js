export function ChatRoomRequest() {
  return {
    type: '@chat/CHAT_ROOM_REQUEST',
  };
}

export function ChatRoomSuccess(data) {
  return {
    type: '@chat/CHAT_ROOM_SUCCESS',
    payload: {data},
  };
}

export function ChatRoomFailure() {
  return {
    type: '@chat/CHAT_ROOM_FAILURE',
  };
}

export function ChatRoomNewRequest(name, nameUserAuth, nameChatRoom) {
  return {
    type: '@chat/CHAT_ROOM_NEW_REQUEST',
    payload: {name, nameUserAuth, nameChatRoom},
  };
}

export function ChatRoomNewSuccess() {
  return {
    type: '@chat/CHAT_ROOM_NEW_SUCCESS',
  };
}

export function ChatRoomNewFailure() {
  return {
    type: '@chat/CHAT_ROOM_NEW_FAILURE',
  };
}

export function ChatRoomShowRequest(id) {
  return {
    type: '@chat/CHAT_ROOM_SHOW_REQUEST',
    payload: {id},
  };
}

export function ChatRoomShowSuccess(data) {
  return {
    type: '@chat/CHAT_ROOM_SHOW_SUCCESS',
    payload: {data},
  };
}

export function ChatRoomShowFailure() {
  return {
    type: '@chat/CHAT_ROOM_SHOW_FAILURE',
  };
}
