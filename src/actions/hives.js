import { HIVE_LIST_RECEIVED, HIVE_CREATED, HIVE_UPDATED, HIVE_DELETED } from './types';
import api from '../api';

export const receivedHiveList = hives => ({
  type: HIVE_LIST_RECEIVED,
  hives
});

export const createdHive = hive => ({
  type: HIVE_CREATED,
  hive
});

export const updatedHive = hive => ({
  type: HIVE_UPDATED,
  hive
});

export const deletedHive = hiveId => ({
  type: HIVE_DELETED,
  hiveId
})

export const fetchHiveList = apiaryId => dispatch => api.hives.list(apiaryId)
  .then(hives => {
    dispatch(receivedHiveList(hives));
  });

export const addHive = hive => dispatch => api.apiaries.create(hive)
  .then(hive => {
    dispatch(createdHive(hive));
  });

export const updateHive = hive => dispatch => api.apiaries.update(hive)
  .then(hive => {
    dispatch(updatedHive(hive));
  });

export const deleteHive = hive => dispatch => api.apiaries.delete(hive.id)
  .then(() => {
    dispatch(deletedHive(hive.id));
  })