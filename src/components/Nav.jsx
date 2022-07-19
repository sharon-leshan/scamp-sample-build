import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" activeClassName="active">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active">
            Pricing
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
