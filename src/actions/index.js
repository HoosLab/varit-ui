import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const fetchPosts = () => (dispatch) => {

  dispatch({
    type: 'FETCH_POSTS_REQUEST',
  });

  return axios.get('http://localhost:8000/api/posts/').then(function (response) {
    dispatch({
      type: 'FETCH_POSTS_SUCCESS',
      response: normalize(response.data, schema.arrayOfPosts)
    });
    // 응답된 데이터는 response.data 에 포함되어 있다.
  }).catch(function (error) {
    dispatch({
      type: 'FETCH_POSTS_FAILURE'
    });
  });
};