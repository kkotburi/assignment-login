import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { updatePost } from '../../api/posts';
import { rUpdatePost } from '../../redux/modules/postsSlice';

const PostUpdate = () => {
  const { id } = useParams();

  const [editPostText, setEditPostText] = useState('');
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsSlice);
  const post = posts.find((post) => `${post.id}` === id);

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);

  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const onSubmitEditPost = (e) => {
    e.preventDefault();

    if (editPostText === '') {
      alert('내용을 입력해 주시기 바랍니다.');
      return false;
    } else if (editPostText.length > 50) {
      alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
      return false;
    }
    // alert('수정이 완료되었습니다.');

    const editPost = {
      id: post.id,
      userId: signInUser.id,
      text: editPostText
    };

    mutation.mutate(editPost);
    dispatch(rUpdatePost(editPost));

    setEditPostText('');
  };

  const onChangeEditPostText = (e) => {
    setEditPostText(e.target.value);
  };

  return (
    <form onSubmit={onSubmitEditPost}>
      <input type="text" name="editPostText" value={editPostText} onChange={onChangeEditPostText} />
      <button type="submit">edit</button>
    </form>
  );
};

export default PostUpdate;
