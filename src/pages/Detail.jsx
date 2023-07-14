import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostDetail from '../components/posts/PostDetail';
import CommentForm from '../components/comments/CommentForm';
import CommentList from '../components/comments/CommentList';
import { getComments } from '../api/comments';
import { rGetComments } from '../redux/modules/commentsSlice';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery('comments', getComments);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  dispatch(rGetComments(data));

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
