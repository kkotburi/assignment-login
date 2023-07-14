import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/modules/usersSlice';
import shortid from 'shortid';
import { useMutation, useQueryClient } from 'react-query';
import { addUser } from '../../api/users';

const SignUpForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });

  const onSubmitSignUp = (e) => {
    e.preventDefault();

    const newUser = {
      id: shortid.generate(),
      email,
      password,
      isSignIn: false
    };

    mutation.mutate(newUser);
    dispatch(signUp(newUser));

    navigate('/signin');
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      SignUpForm
      <form onSubmit={onSubmitSignUp}>
        <input placeholder="email" type="email" name="email" value={email} onChange={onChangeEmail} />
        <input placeholder="password" type="password" name="password" value={password} onChange={onChangePassword} />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default SignUpForm;
