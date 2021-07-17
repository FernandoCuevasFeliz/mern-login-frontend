import React from 'react';

import Button from '@common/Button/Button';

import './FrmLogin.css';
import Input from '@common/Input/Input';
import { PersonOutlineIcon } from 'assets/icons/index';

const FrmLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-form__title">Sign In Here</h2>
      <Input icon={<PersonOutlineIcon />} />
      <Button className="btn__form">Login</Button>
    </form>
  );
};

export default FrmLogin;
