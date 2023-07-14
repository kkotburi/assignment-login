import axios from 'axios';

// 조회
const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
  return response.data;
};

// 추가
const addUser = async (newUser) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUser);
};

// 수정
const updateUser = async (currnetUser) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${currnetUser.id}`, { isSignIn: true });
};

export { getUsers, addUser, updateUser };
