import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/modules/usersSlice';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickSignOut = () => {
    const isComfirmed = window.confirm('Do you want to sign out?');
    if (isComfirmed) {
      dispatch(signOut(signInUser.id));
      navigate('/signin');
    }
  };

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const signInUser = users.find((user) => user.isSignIn);
  console.log(signInUser);

  return (
    <div>
      <button onClick={onClickSignOut}>signout</button>
    </div>
  );
};

export default SignOutButton;
