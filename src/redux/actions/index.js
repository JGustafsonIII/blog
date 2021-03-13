import jsonPlaceholder from '../../api/jsonPlaceholder';

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
    action: {
      type: 'FETCH_POSTS',
      payload: response,
    },
  };
};
