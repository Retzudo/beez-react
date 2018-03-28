import axios from "axios";

export function setAuthorizationHeader(token = null) {
  if (token) {
    axios.defaults.headers.common.authorization = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
}

export function restoreAuthorizationHeader() {
  let token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common.authorization = `JWT ${token}`;
  }
}