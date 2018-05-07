import { APIARY_LIST_RECEIVED, APIARY_RECEIVED, APIARY_CREATED } from '../actions/types';

const initialState = {
  list: [],
  current: {}
}

function apiaries(state = initialState, action) {
  switch (action.type) {
    case APIARY_LIST_RECEIVED:
      return {
        ...state,
        list: action.apiaries
      };
    case APIARY_RECEIVED:
      return {
        ...state,
        current: action.apiary
      };
    case APIARY_CREATED:
      return {
        ...state,
        list: [...state.list, action.apiary]
      }
    default:
      return state;
  }
}

export default apiaries;