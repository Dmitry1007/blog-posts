import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// With memoization we can only fetch each user one time
export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
};

// In old school JS
// export const fetchUser = function(id) {
//     return function(dispatch) {
//         _fetchUser(id, dispatch);
//     };
// };

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
});