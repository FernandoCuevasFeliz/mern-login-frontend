import React from 'react';
import { Link } from 'react-router-dom';

import './BtnLink.css';

const BtnLink = ({ to = '#', onClick, className, children }) => {
  const btnLinkProps = {
    to,
    className: `btn-link ${className}`,
    onClick,
  };
  return <Link {...btnLinkProps}>{children}</Link>;
};

export default BtnLink;
