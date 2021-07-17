import React from 'react';

import './Button.css';

const Button = ({ type, onClick, className, children }) => {
  const btnProps = {
    type,
    onClick,
    className: `btn ${className}`,
  };

  return <button {...btnProps}>{children}</button>;
};

export default Button;
