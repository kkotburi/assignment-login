import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostDetail from '../components/posts/PostDetail';
import CommentForm from '../components/comments/CommentForm';
import CommentList from '../components/comments/CommentList';

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>home</button>
      <br />
      Detail
      <PostDetail />
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default Detail;
