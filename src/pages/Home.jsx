import React from 'react';
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';

const Home = () => {
  return (
    <div>
      Home
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;
