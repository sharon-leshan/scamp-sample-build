import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" activeClassName="active">
            Resources
            <IconButton>
              <ArrowForwardIos id="resource-menu" />
            </IconButton>
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
