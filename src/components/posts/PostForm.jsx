import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from '../../api/posts';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  return (
    <div>
      PostForm
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!postText) {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (postText.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('작성이 완료되었습니다.');

          const newTodo = {
            text: postText
          };

          mutation.mutate(newTodo);

          setPostText('');
        }}
      >
        <input
          type="text"
          name="postText"
          value={postText}
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PostForm;
