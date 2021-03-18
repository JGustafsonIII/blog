import jsonPlaceholder from '../../api/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: data });
  };
};

export const fetchPostsAndUsers = () => {
  return async (dispatch) => {
    const posts = await dispatch(fetchPosts());
    const users = dispatch(fetchUser());
  };
};
