import { APIARY_LIST_RECEIVED, APIARY_CREATED, APIARY_UPDATED } from '../actions/types';

function apiaries(state = [], action) {
  switch (action.type) {
    case APIARY_LIST_RECEIVED:
      return action.apiaries;
    case APIARY_CREATED:
      return [...state, action.apiary]
    case APIARY_UPDATED:
      return state.map(apiary => {
        if (apiary.id === action.apiary.id) {
          return action.apiary;
        } else {
          return apiary;
        }
      })
    default:
      return state;
  }
}

export default apiaries;