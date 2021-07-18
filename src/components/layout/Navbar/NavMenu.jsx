import React from 'react';

import BtnLink from '@common/BtnLink/BtnLink';
import { LoginIcon, PersonAddOutlineIcon } from 'assets/icons/index';

import NavItem from './NavItem';
import NavDropDownItem from './NavDropDownItem';

const NavMenu = ({ closeMenu, screen }) => {
  return (
    <ul className="navbar__menu">
      <NavItem text="Home" to="/" onClick={closeMenu} />
      <NavItem text="Profile" to="/profile" onClick={closeMenu} />
      <NavDropDownItem text="DropDown">
        <NavItem text="Item 1" onClick={screen && closeMenu} />
        <NavItem text="Item 2" onClick={screen && closeMenu} />
        <NavItem text="Item 3" onClick={screen && closeMenu} />
      </NavDropDownItem>

      {!screen && (
        <>
          <NavItem
            text="Login"
            to="/login"
            onClick={closeMenu}
            className="login"
          />
          <NavItem
            text="Register"
            to="/register"
            onClick={closeMenu}
            className="register"
          />
        </>
      )}
      {screen && (
        <div className="btns-auth">
          <BtnLink className="btn-auth" onClick={closeMenu} to="/login">
            <LoginIcon />
            Login
          </BtnLink>
          <BtnLink className="btn-auth" onClick={closeMenu} to="/register">
            <PersonAddOutlineIcon />
            Register
          </BtnLink>
        </div>
      )}
    </ul>
  );
};

export default NavMenu;
