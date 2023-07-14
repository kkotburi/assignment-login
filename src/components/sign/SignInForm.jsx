import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { signIn } from '../../redux/modules/usersSlice';
import { updateUser } from '../../api/users';

const SignInForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
  const currnetUser = users.find((user) => user.email === email && user.password === password);
  console.log('sign', currnetUser);

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    if (
      currnetUser
      // && !currnetUser.isSignIn
    ) {
      mutation.mutate(currnetUser);
      dispatch(signIn(currnetUser));

      navigate('/');
    } else {
      alert('Please confirm your email and password.');
      return false;
    }
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
