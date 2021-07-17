import React, { useState } from 'react';
import './Navbar.css';

import NavMenu from './NavMenu';
import Button from '@common/Button/Button';
import Logo from '@common/Logo/Logo';
import { CancelIcon, MenuIcon } from 'assets/icons/index';
import { DESKTOP } from 'consts/index';
import useWidthScreen from '@hooks/useWidthScreen';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const width = useWidthScreen();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <Logo onClick={closeMenu} />
        {width <= DESKTOP ? (
          <>
            {isOpen && (
              <NavMenu screen={width <= DESKTOP} closeMenu={closeMenu} />
            )}
          </>
        ) : (
          <NavMenu />
        )}

        {width <= DESKTOP && (
          <Button className="btn-menu" onClick={toggleMenu}>
            {isOpen ? <CancelIcon /> : <MenuIcon />}
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
