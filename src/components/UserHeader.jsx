import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions';

const UserHeader = ({ userId, user, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  if (!user) {
    return null;
  }

  return <div className='header'>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => ownProps.userId === user.id) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
