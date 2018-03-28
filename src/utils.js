import axios from "axios";

export function setAuthorizationHeader(token = null) {
  if (token) {
    axios.defaults.headers.common.authorization = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
}