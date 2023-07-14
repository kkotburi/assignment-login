import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { addComment } from '../../api/comments';
import { rAddComment } from '../../redux/modules/commentsSlice';
import shortid from 'shortid';

const CommentForm = () => {
  const { id } = useParams();

  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);

  const onSubmitNewComment = (e) => {
    e.preventDefault();

    if (!commentText) {
      alert('내용을 입력해 주시기 바랍니다.');
      return false;
    } else if (commentText.length > 50) {
      alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
      return false;
    }
    // alert('댓글이 작성되었습니다.');

    const newComment = {
      id: shortid.generate(),
      userId: signInUser.id,
      postId: id,
      text: commentText
    };

    mutation.mutate(newComment);
    dispatch(rAddComment(newComment));

    setCommentText('');
  };

  const onChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div>
      CommentForm
      <form onSubmit={onSubmitNewComment}>
        <input type="text" name="commentText" value={commentText} onChange={onChangeCommentText} />
        <button>done</button>
      </form>
    </div>
  );
};

export default CommentForm;
