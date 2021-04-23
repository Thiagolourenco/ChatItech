export function AuthRequest(email, password, navigation) {
  return {
    type: '@auth/AUTH_REQUEST',
    payload: {email, password, navigation},
  };
}

export function AuthSuccess(token, user) {
  return {
    type: '@auth/AUTH_SUCCESS',
    payload: {token, user},
  };
}

export function AuthFailure() {
  return {
    type: '@auth/AUTH_FAILURE',
  };
}
