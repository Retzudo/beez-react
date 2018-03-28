import { APIARIES_RECEIVED } from '../actions/types';

function apiaries(state=[], action) {
  switch (action.type) {
    case APIARIES_RECEIVED:
      return action.apiaries;
    default:
      return state;
  }
}

export default apiaries;