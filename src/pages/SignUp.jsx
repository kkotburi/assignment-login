import React from 'react';
import SignUpForm from '../components/sign/SignUpForm';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      SignUp
      <SignUpForm />
      <button onClick={() => navigate('/signin')}>signin</button>
    </div>
  );
};

export default SignUp;
