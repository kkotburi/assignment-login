import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostUpdate from './PostUpdate';
import PostDelete from './PostDelete';

const PostDetail = () => {
  const { id } = useParams();

  const posts = useSelector((state) => state.postsSlice);
  const post = posts.find((post) => `${post.id}` === id);

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);

  return (
    <div>
      <div>{post.id}</div>
      <div>{post.text}</div>
      {post.userId === signInUser.id && (
        <div>
          <PostUpdate />
          <PostDelete />
        </div>
      )}
    </div>
  );
};

export default PostDetail;
