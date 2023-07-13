import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deletePost, getPosts } from '../../api/posts';

const PostList = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deletePost, {
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

  return (
    <div>
      PostList
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
            <button onClick={() => mutation.mutate(post.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
