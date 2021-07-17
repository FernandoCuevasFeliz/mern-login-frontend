import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({
  to = '#',
  onClick,
  text,
  leftIcon,
  rightIcon,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  myRef,
}) => {
  return (
    <li
      ref={myRef}
      className={'navbar__item ' + className}
      onMouseEnter={onMouseEnter || undefined}
      onMouseLeave={onMouseLeave || undefined}
      onClick={onClick || undefined}
    >
      <NavLink exact to={to} className="navbar__link">
        {leftIcon && leftIcon}
        {text}
        {rightIcon && rightIcon}
      </NavLink>
      {children}
    </li>
  );
};

export default NavItem;
