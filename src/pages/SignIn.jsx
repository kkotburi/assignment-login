import React from 'react';
import SignInForm from '../components/sign/SignInForm';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      SignIn
      <SignInForm />
      <button onClick={() => navigate('/signup')}>signup</button>
    </div>
  );
};

export default SignIn;
