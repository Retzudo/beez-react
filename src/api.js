import axios from 'axios';
import { decodeJwtToUser } from './utils';

const logIn = credentials => axios.post('/api/auth', credentials)
  .then(response => response.data.token)
  .then(token => decodeJwtToUser(token));
const refreshToken = token => axios.post('/api/auth/refresh', {token})
  .then(response => response.data.token);

const apiariesList = () => axios.get('/api/apiaries').then(response => response.data);
const apiariesDetail = id => axios.get(`/api/apiaries/${id}`).then(response => response.data);
const apiariesCreate = data => axios.post('/api/apiaries', data).then(response => response.data);
const apiariesUpdate = data => axios.put(`/api/apiaries/${data.id}`, data).then(response => response.data);
const apiariesDelete = id => axios.delete(`/api/apiaries/${id}`);

const hivesList = apiaryId => axios.get('/api/hives', {params: {apiary: apiaryId}}).then(response => response.data);
const hivesDetail = id => axios.get(`/api/hives/${id}`).then(response => response.data);
const hivesCreate = data => axios.post('/api/hives', data).then(response => response.data);
const hivesUpdate = data => axios.put(`/api/hives/${data.id}`, data).then(response => response.data);
const hivesDelete = id => axios.delete(`/api/hives/${id}`);

const inspectionsList = hiveId => axios.get('/api/inspections', {params: {hive: hiveId}}).then(response => response.data);
const inspectionsDetail = id => axios.get(`/api/inspections/${id}`).then(response => response.data);
const inspectionsCreate = data => axios.post('/api/inspections', data).then(response => response.data);
const inspectionsUpdate = data => axios.put(`/api/hives/${data.id}`, data).then(response => response.data);
const inspectionsDelete = id => axios.delete(`/api/inspections/${id}`);

const harvestsList = hiveId => axios.get('/api/harvests', {params: {hive: hiveId}}).then(response => response.data);
const harvestsDetail = id => axios.get(`/api/harvests/${id}`).then(response => response.data);
const harvestsCreate = data => axios.post('/api/harvests', data).then(response => response.data);
const harvestsUpdate = data => axios.put(`/api/harvests/${data.id}`, data).then(response => response.data);
const harvestsDelete = id => axios.delete(`/api/harvests/${id}`);

export default {
  user: {
    logIn,
    refreshToken
  },
  apiaries: {
    list: apiariesList,
    get: apiariesDetail,
    create: apiariesCreate,
    update: apiariesUpdate,
    delete: apiariesDelete
  },
  hive: {
    list: hivesList,
    get: hivesDetail,
    create: hivesCreate,
    update: hivesUpdate,
    delete: hivesDelete
  },
  inspection: {
    list: inspectionsList,
    get: inspectionsDetail,
    create: inspectionsCreate,
    update: inspectionsUpdate,
    delete: inspectionsDelete
  },
  harvest: {
    list: harvestsList,
    get: harvestsDetail,
    create: harvestsCreate,
    update: harvestsUpdate,
    delete: harvestsDelete
  }
};