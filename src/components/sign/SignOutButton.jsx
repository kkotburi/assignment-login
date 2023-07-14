import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signOut } from '../../redux/modules/usersSlice';
import { useMutation, useQueryClient } from 'react-query';
import { updateUser } from '../../api/users';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    }
  });

  const users = useSelector((state) => {
    return state.usersSlice;
  });
  const currnetUser = users.find((user) => user.isSignIn);

  const onClickSignOut = () => {
    const isComfirmed = window.confirm('Do you want to sign out?');
    if (isComfirmed) {
      mutation.mutate(currnetUser);
      dispatch(signIn(currnetUser));

      navigate('/signin');
    }
  };

  return (
    <div>
      <button onClick={onClickSignOut}>signout</button>
    </div>
  );
};

export default SignOutButton;
