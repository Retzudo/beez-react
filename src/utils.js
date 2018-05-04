import axios from "axios";
import jwt from 'jsonwebtoken';

import { userLoggedIn, refreshToken } from './actions/auth';

export function setAuthorizationHeader(token = null) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
  if (!token) {
    return false;
  }

  setAuthorizationHeader(token);
  let user = decodeJwtToUser(token);

  store.dispatch(userLoggedIn(user));
  return true;
}

export function refreshLogin(store) {
  let token = localStorage.getItem('token');
  store.dispatch(refreshToken(token));
}