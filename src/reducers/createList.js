import { combineReducers } from 'redux';

const createList = () => {
  
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return action.response;
    }
    return state;
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_FAILURE':
        return action.message;
      case 'FETCH_POSTS_REQUEST':  
      case 'FETCH_POSTS_SUCCESS':
        return null;
      default:
        return state;    
    }
  };

  return combineReducers({
    ids,
    errorMessage,
  });
};

export default createList;

export const getIds = (state) => state.ids;