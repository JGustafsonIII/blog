import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
// The tutorial I followed for some reason used class based components so I converted it here.
const PostList = ({ fetchPosts }) => {
  // Basically ComponentDidMount()
  useEffect(() => {
    fetchPosts();
  });

  return <div>Ayo</div>;
};

export default connect(null, { fetchPosts })(PostList);
