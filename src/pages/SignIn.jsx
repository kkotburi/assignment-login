import React from 'react';
import SignInForm from '../components/sign/SignInForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { getUsers } from '../api/users';
import { rGetUsers } from '../redux/modules/usersSlice';

const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery('users', getUsers);

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  dispatch(rGetUsers(data));

  return (
    <div>
      SignIn
      <SignInForm />
      <button onClick={() => navigate('/signup')}>signup</button>
    </div>
  );
};

export default SignIn;
