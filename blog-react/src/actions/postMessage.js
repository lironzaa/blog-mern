import api from './api';

export const ACTIONS_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  FETCH_ALL: 'FETCH_ALL',
}

export const fetchAll = () => dispatch => {
  api.postMessage().fetchAll()
    .then(res => {
      console.log(res);
      dispatch({
        type: ACTIONS_TYPES.FETCH_ALL,
        payload: [res.data]
      })
    })
    .catch(err => console.log(err))
}