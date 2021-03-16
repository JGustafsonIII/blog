import jsonPlaceholder from '../../api/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: data });
  };
};
