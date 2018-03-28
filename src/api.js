import axios from 'axios';
import jwt from 'jsonwebtoken';

const logIn = credentials => { 
  return axios.post('/api/auth', credentials)
  .then(response => response.data.token)
  .then(token => ({
    ...jwt.decode(token),
    token
  }));
}

export default {
  user: {
    logIn
  }
};