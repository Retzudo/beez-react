import { APIARY_LIST_RECEIVED, APIARY_RECEIVED } from './types';
import api from '../api';

export const receivedApiaryList = apiaries => ({
  type: APIARY_LIST_RECEIVED,
  apiaries
});

export const receivedApiary = apiary => ({
  type: APIARY_RECEIVED,
  apiary
});

export const fetchApiaryList = () => dispatch => api.apiaries.list()
  .then(apiaries => {
    dispatch(receivedApiaryList(apiaries));
  });

export const fetchApiaryDetails = id => dispatch => api.apiaries.get(id)
  .then(apiary => {
    dispatch(receivedApiary(apiary));
  });