import React, { useEffect } from 'react';
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';
import SignOutButton from '../components/sign/SignOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import { rGetPosts } from '../redux/modules/postsSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersSlice);
  const currnetUser = users.find((user) => user.isSignIn);

  const { isLoading, isError, data } = useQuery('posts', getPosts);

  // if (!currnetUser) {
  //   alert('Please sign in.');
  //   navigate('/signin');
  // }

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  dispatch(rGetPosts(data));

  return (
    <div>
      Home
      <SignOutButton />
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;
