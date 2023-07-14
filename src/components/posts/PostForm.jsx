import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from '../../api/posts';
import { rAddPost } from '../../redux/modules/postsSlice';
import shortid from 'shortid';

const PostForm = () => {
  const [postText, setPostText] = useState('');
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);

  const onSubmitNewPost = (e) => {
    e.preventDefault();

    if (!postText) {
      alert('내용을 입력해 주시기 바랍니다.');
      return false;
    } else if (postText.length > 50) {
      alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
      return false;
    }
    // alert('작성이 완료되었습니다.');

    const newPost = {
      id: shortid.generate(),
      userId: signInUser.id,
      text: postText
    };

    mutation.mutate(newPost);
    dispatch(rAddPost(newPost));

    setPostText('');
  };

  const onChangePostText = (e) => {
    setPostText(e.target.value);
  };

  return (
    <div>
      PostForm
      <form onSubmit={onSubmitNewPost}>
        <input type="text" name="postText" value={postText} onChange={onChangePostText} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PostForm;
