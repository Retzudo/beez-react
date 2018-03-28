import axios from "axios";
import jwt from 'jsonwebtoken';

import { userLoggedIn } from './actions/auth';

export function setAuthorizationHeader(token = null) {
  if (token) {
    axios.defaults.headers.common.authorization = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
}

export function decodeJwtToUser(token) {
  return {
    ...jwt.decode(token),
    token
  };
}

export function restoreLogin(store) {
  let token = localStorage.getItem('token');
  setAuthorizationHeader(token);
  let user = decodeJwtToUser(token);

  store.dispatch(userLoggedIn(user));
}