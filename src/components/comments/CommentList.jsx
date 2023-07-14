import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteComment } from '../../api/comments';
import { rDeleteComment } from '../../redux/modules/commentsSlice';

const CommentList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.commentsSlice);
  const filterdComments = comments.filter((comment) => comment.postId === id);

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);

  return (
    <div>
      CommentList
      {filterdComments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.text}</div>
            {comment.userId === signInUser.id && (
              <button
                onClick={() => {
                  mutation.mutate(comment.id);
                  dispatch(rDeleteComment(comment.id));
                }}
              >
                delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
