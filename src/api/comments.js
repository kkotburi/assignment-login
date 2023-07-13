import axios from 'axios';

// 조회
const getComments = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments`);
  return response.data;
};

// 추가
const addComment = async (newComment) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, newComment);
};

// 삭제
const deleteComment = async (commentId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${commentId}`);
};

export { getComments, addComment, deleteComment };
