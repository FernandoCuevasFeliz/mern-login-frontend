import React, { useContext, useState } from 'react';

import Button from '@common/Button/Button';

import './FrmLogin.css';
import Input from '@common/Input/Input';
import {
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  PersonOutlineIcon,
} from 'assets/icons/index';

import OrSeparator from '@common/OrSeparator/OrSeparator';
import BtnSocial from '@common/BtnsSocial/BtnSocial';
import BtnLink from '@common/BtnLink/BtnLink';
import useTogglePassword from '@hooks/useTogglePassword';
import { AuthContext } from 'context/Auth/AuthProvider';
import { Error } from '@common/Error/Error';

const FrmLogin = () => {
  const { showPassword, toggleShowPassword } = useTogglePassword();
  const [dataLogin, setDataLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('sasasas');

  const { login } = useContext(AuthContext);

  const handlerChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dataLogin.username && dataLogin.password) {
      const response = await login(dataLogin.username, dataLogin.password);

      if (response.status === 'Error') {
        setError(true);
        setMessage(response.message);
        return;
      }
      setError(false);
      setMessage('');
      setDataLogin({ username: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <Error message={message} />}
      <h2 className="login-form__title">Sign In Here</h2>

      <BtnSocial />

      <OrSeparator />
      <Input
        icon={<PersonOutlineIcon />}
        textLabel="Email or Username:"
        name="username"
        value={dataLogin.username}
        onChange={handlerChange}
        placeholder="Writing your Email or Username"
      />
      <Input
        icon={
          <>
            <KeyIcon />
            {!showPassword ? (
              <EyeOffIcon
                className="btn-password"
                onClick={toggleShowPassword}
              />
            ) : (
              <EyeIcon className="btn-password" onClick={toggleShowPassword} />
            )}
          </>
        }
        name="password"
        value={dataLogin.password}
        onChange={handlerChange}
        placeholder="Writing your password"
        textLabel="Password:"
        type={!showPassword ? 'password' : 'text'}
      />

      <Button className="btn__form">Login</Button>
      <div className="links-container">
        <BtnLink className="link-form">Log in by email</BtnLink>
        <BtnLink className="link-form">Forgot password?</BtnLink>
      </div>

      <p className="form-footer">
        Do you already have an account?{' '}
        <BtnLink className="link-form" to="/register">
          Sign up
        </BtnLink>
      </p>
    </form>
  );
};

export default FrmLogin;
