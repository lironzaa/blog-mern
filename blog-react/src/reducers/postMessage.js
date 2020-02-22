import { ACTIONS_TYPES } from '../actions/postMessage';

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
    case ACTIONS_TYPES.CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case ACTIONS_TYPES.UPDATE:
      return {
        ...state,
        posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)
      }
    case ACTIONS_TYPES.DELETE:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      }
    default:
      return state;
  }
}