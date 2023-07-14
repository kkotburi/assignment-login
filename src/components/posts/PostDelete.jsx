import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../../api/posts';
import { rDeletePost } from '../../redux/modules/postsSlice';

const PostDelete = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.postsSlice);
  const post = posts.find((post) => `${post.id}` === id);

  const queryClient = useQueryClient();
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const onClickDeletePost = () => {
    mutation.mutate(post.id);
    dispatch(rDeletePost(post.id));

    navigate('/');
  };

  return <button onClick={onClickDeletePost}>delete</button>;
};

export default PostDelete;
