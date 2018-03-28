import { APIARIES_RECEIVED } from './types';
import api from '../api';

export const receivedApiaries = apiaries => ({
  type: APIARIES_RECEIVED,
  apiaries
});

export const fetchApiaries = () => dispatch => api.apiaries.list()
  .then(apiaries => {
    dispatch(receivedApiaries(apiaries));
  });