import React from 'react';

import BtnLink from '@common/BtnLink/BtnLink';
import { FacebookRectIcon, GoogleIcon } from 'assets/icons/index';

import './BtnSocial.css';

const BtnSocial = () => {
  return (
    <div className="auth-btn__container">
      <BtnLink className="btn-form__link">
        <GoogleIcon />
        Google
      </BtnLink>
      <BtnLink className="btn-form__link">
        <FacebookRectIcon />
        Facebook
      </BtnLink>
    </div>
  );
};

export default BtnSocial;
