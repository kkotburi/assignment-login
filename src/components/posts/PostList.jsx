import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostList = () => {
  const posts = useSelector((state) => state.postsSlice);

  return (
    <div>
      PostList
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
