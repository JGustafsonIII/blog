const postsReducer = (posts = null, action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  } else {
    return posts;
  }
};

export default postsReducer;
