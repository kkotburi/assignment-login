import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { addComment } from '../../api/comments';

const CommentForm = () => {
  const { id } = useParams();

  const [commentText, setCommentText] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });

  return (
    <div>
      CommentForm
      <form
        onSubmit={(e) => {
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
            postId: id,
            text: commentText
          };

          mutation.mutate(newComment);

          setCommentText('');
        }}
      >
        <input
          type="text"
          name="commentText"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <button>done</button>
      </form>
    </div>
  );
};

export default CommentForm;
