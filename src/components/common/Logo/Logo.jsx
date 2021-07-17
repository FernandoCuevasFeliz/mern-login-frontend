import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from 'assets/img/logo.png';

const Logo = ({ onClick }) => {
  return (
    <div className="logo" onClick={onClick}>
      <Link to="/">
        <img className="logo__img" src={logoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
