import React from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import CTAButton from '../CTAButton';
import MenuBtn from '../MenuBtn';
import NavListItem from '../nav/NavListItem';
import NavList from '../nav/NavList';


const Header = () => {
  const headerData = [
    { title: 'Home' },
    { title: 'resources', isDropdown: 'isDropdown' },
    { title: 'resources', isDropdown: 'isDropdown' },
    { title: 'Pricing' },
  ];
  return (
    <>
      <header className="container header">
        <div className="header__logo">
          <Logo />
        </div>
        <button aria-label="menu" className="header__nav-menu">
          <MenuBtn />
        </button>
        <nav className="nav">
          <NavList className="nav__list">
            {headerData.map(({ title, isDropdown }, index) => (
              <NavListItem
                key={index}
                className="nav__list__item"
                text={title}
                isDropdown={isDropdown}
              />
            ))}
          </NavList>
          <div className="nav__actions">
            <CTAButton text="log in" isFlatBtn={true} />
            <CTAButton text="sign up" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
