import { APIARY_LIST_RECEIVED, APIARY_CREATED, APIARY_UPDATED } from './types';
import api from '../api';

export const receivedApiaryList = apiaries => ({
  type: APIARY_LIST_RECEIVED,
  apiaries
});

export const createdApiary = apiary => ({
  type: APIARY_CREATED,
  apiary
});

export const updatedApiary = apiary => ({
  type: APIARY_UPDATED,
  apiary
});

export const fetchApiaryList = () => dispatch => api.apiaries.list()
  .then(apiaries => {
    dispatch(receivedApiaryList(apiaries));
  });

export const addApiary = apiary => dispatch => api.apiaries.create(apiary)
  .then(apiary => {
    dispatch(createdApiary(apiary));
  });

export const updateApiary = apiary => dispatch => api.apiaries.update(apiary)
  .then(apiary => {
    dispatch(updatedApiary(apiary));
  });