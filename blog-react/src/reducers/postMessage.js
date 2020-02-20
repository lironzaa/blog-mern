import { ACTION_TYPES, ACTIONS_TYPES } from '../actions/postMessage';

const initialState = {
  posts: []
}

export const postMessages = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_ALL:
      return {
        ...state,
        posts: [...action.payload]
      }
    default:
      return state;
  }
}