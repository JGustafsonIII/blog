import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderedList = () => {
    return posts.map((post) => {
      console.log(post.userId);
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return <div className='ui relaxed divided list'>{renderedList()}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
