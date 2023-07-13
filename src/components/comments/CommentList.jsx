import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteComment, getComments } from '../../api/comments';

const CommentList = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });

  const { isLoading, isError, data } = useQuery('comments', getComments);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const comments = data.filter((comment) => `${comment.postId}` === id);

  return (
    <div>
      CommentList
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.text}</div>
            <button onClick={() => mutation.mutate(comment.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
