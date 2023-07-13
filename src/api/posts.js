import axios from 'axios';

// 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

// 추가
const addPost = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

// 삭제
const deletePost = async (postId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`);
};

// 수정
const updatePost = async (editPost) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${editPost.id}`, { text: editPost.text });
};

export { getPosts, addPost, deletePost, updatePost };
