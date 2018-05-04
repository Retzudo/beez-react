import { USER_LOGGED_IN, USER_LOGGED_OUT, TOKEN_REFRESHED } from '../actions/types';

function user(state = {}, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    case TOKEN_REFRESHED:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}

export default user;