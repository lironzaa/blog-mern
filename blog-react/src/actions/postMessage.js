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
      dispatch({
        type: ACTIONS_TYPES.FETCH_ALL,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const createPost = (data, onSuccess) => dispatch => {
  api.postMessage().create(data)
    .then(res => {
      dispatch({
        type: ACTIONS_TYPES.CREATE,
        payload: res.data
      })
      onSuccess();
    })
    .catch(err => console.log(err))
}

export const updatePost = (id, data, onSuccess) => dispatch => {
  api.postMessage().update(id, data)
    .then(res => {
      dispatch({
        type: ACTIONS_TYPES.UPDATE,
        payload: res.data
      })
      onSuccess();
    })
    .catch(err => console.log(err))
}

export const deletePost = (id, onSuccess) => dispatch => {
  api.postMessage().delete(id)
    .then(res => {
      dispatch({
        type: ACTIONS_TYPES.DELETE,
        payload: id
      })
      onSuccess();
    })
    .catch(err => console.log(err))
}