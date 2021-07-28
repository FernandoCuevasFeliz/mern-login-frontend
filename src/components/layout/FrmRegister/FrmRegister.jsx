import React from 'react';

import Input from '@common/Input/Input';

import './FrmRegister.css';
import {
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  MailIcon,
  PersonOutlineIcon,
  UserOutLinefIcon,
} from 'assets/icons/index';
import useTogglePassword from '@hooks/useTogglePassword';
import Button from '@common/Button/Button';
import BtnLink from '@common/BtnLink/BtnLink';
import BtnSocial from '@common/BtnsSocial/BtnSocial';
import OrSeparator from '@common/OrSeparator/OrSeparator';

const FrmRegister = () => {
  const { showPassword, toggleShowPassword } = useTogglePassword();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form__title">Sign Up Here</h2>

      <BtnSocial />
      <OrSeparator />
      <div className="control-double">
        <Input
          icon={<PersonOutlineIcon />}
          textLabel="Firstname:"
          placeholder="Writing your Firstname"
        />
        <Input
          icon={<PersonOutlineIcon />}
          textLabel="Lastname:"
          placeholder="Writing your lastname"
        />
      </div>
      <Input
        icon={<UserOutLinefIcon />}
        textLabel="Username:"
        placeholder="Exmple: fer02"
      />
      <Input
        icon={<MailIcon />}
        textLabel="Email:"
        placeholder="Example@example.com"
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
        type={!showPassword ? 'password' : 'text'}
      />
      <Input
        icon={<KeyIcon />}
        placeholder="Writing your password again"
        textLabel="Confirm Password"
        type={!showPassword ? 'password' : 'text'}
      />
      <Button className="btn__form">Register</Button>
      <p className="form-footer">
        Do you already have an account?{' '}
        <BtnLink className="link-form" to="/login">
          Log in
        </BtnLink>
      </p>
    </form>
  );
};

export default FrmRegister;
