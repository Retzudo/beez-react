import { APIARY_LIST_RECEIVED, APIARY_RECEIVED, APIARY_CREATED } from './types';
import api from '../api';

export const receivedApiaryList = apiaries => ({
  type: APIARY_LIST_RECEIVED,
  apiaries
});

export const receivedApiary = apiary => ({
  type: APIARY_RECEIVED,
  apiary
});

export const createdApiary = apiary => ({
  type: APIARY_CREATED,
  apiary
})

export const fetchApiaryList = () => dispatch => api.apiaries.list()
  .then(apiaries => {
    dispatch(receivedApiaryList(apiaries));
  });

export const fetchApiaryDetails = id => dispatch => api.apiaries.get(id)
  .then(apiary => {
    dispatch(receivedApiary(apiary));
  });

export const addApiary = apiary => dispatch => api.apiaries.create(apiary)
  .then(apiary => {
    dispatch(createdApiary(apiary));
  })