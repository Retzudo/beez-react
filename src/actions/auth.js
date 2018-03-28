import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import { setAuthorizationHeader } from '../utils';
import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const logIn = credentials => dispatch =>
  api.user.logIn(credentials).then(user => {
    localStorage.setItem('token', user.token);
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

export const logOut = () => dispatch => {
  localStorage.removeItem('token');
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};