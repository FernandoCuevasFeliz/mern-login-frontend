import React from 'react';

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

const FrmLogin = () => {
  const { showPassword, toggleShowPassword } = useTogglePassword();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-form__title">Sign In Here</h2>

      <BtnSocial />

      <OrSeparator />
      <Input
        icon={<PersonOutlineIcon />}
        textLabel="Email or Username:"
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
        placeholder="Writing your password"
        textLabel="Password:"
        type={showPassword ? 'password' : 'text'}
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
