import useClickOutSide from '@hooks/useClickOutSide';
import useWidthScreen from '@hooks/useWidthScreen';
import { ArrowDropDownIcon, ArrowDropUpIcon } from 'assets/icons/index';
import { DESKTOP } from 'consts/index';
import React, { useState } from 'react';
import NavItem from './NavItem';

const NavDropDownItem = ({ text, icon, children, clickOutSide }) => {
  const [isShow, setIsShow] = useState(false);
  const width = useWidthScreen();
  const dropMenuRef = useClickOutSide(() => {
    if (width > DESKTOP && clickOutSide) setIsShow(false);
  });

  const toggleDropDown = () => setIsShow(!isShow);

  const handleMouseEnter = () => {
    if (width > DESKTOP) setIsShow(true);
  };

  const handleMouseLeave = () => {
    if (width > DESKTOP) setIsShow(false);
  };

  const navItemProp = {
    to: '#',
    text,
    leftIcon: icon,
    rightIcon: isShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />,
    onClick: !clickOutSide && width <= DESKTOP && toggleDropDown,
    className: 'navbar__dropdown',
    onMouseEnter: !clickOutSide && handleMouseEnter,
    onMouseLeave: !clickOutSide && handleMouseLeave,
    myRef: clickOutSide && dropMenuRef,
  };

  return (
    <NavItem {...navItemProp}>
      {isShow && <ul className="navbar__submenu">{children}</ul>}
    </NavItem>
  );
};

export default NavDropDownItem;
