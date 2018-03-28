import { combineReducers } from 'redux';
import apiaries from './apiaries';
import user from './user';

export default combineReducers({
  user,
  apiaries
});