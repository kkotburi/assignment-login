import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/modules/usersSlice';

const SignInForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const users = useSelector((state) => {
  //   return state.usersSlice;
  // });
  // const signInUser = users.find((user) => user.isSignIn);
  // console.log(signInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    dispatch(
      signIn({
        email,
        password
      })
    );

    navigate('/');

    // if (signInUser) {
    //   navigate('/');
    // } else {
    //   alert('Please sign in.');
    //   return false;
    // }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      SignInForm
      <form onSubmit={onSubmitSignIn}>
        <input placeholder="email" type="email" name="email" value={email} onChange={onChangeEmail} />
        <input placeholder="password" type="password" name="password" value={password} onChange={onChangePassword} />
        <button type="submit">signin</button>
      </form>
    </div>
  );
};

export default SignInForm;
