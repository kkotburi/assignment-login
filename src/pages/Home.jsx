import React from 'react';
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';
import SignOutButton from '../components/sign/SignOutButton';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import { rGetPosts } from '../redux/modules/postsSlice';

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery('posts', getPosts);

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
