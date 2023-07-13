import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, updatePost } from '../../api/posts';

const PostDetail = () => {
  const { id } = useParams();

  const [editPostText, setEditPostText] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const { isLoading, isError, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const post = data.find((post) => `${post.id}` === id);

  return (
    <div>
      <div>{post.id}</div>
      <div>{post.text}</div>
      <form
        onSubmit={(e) => {
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
            text: editPostText
          };

          mutation.mutate(editPost);

          setEditPostText('');
        }}
      >
        <input
          type="text"
          name="editPostText"
          value={editPostText}
          onChange={(e) => {
            setEditPostText(e.target.value);
          }}
        />
        <button type="submit">edit</button>
      </form>
    </div>
  );
};

export default PostDetail;
