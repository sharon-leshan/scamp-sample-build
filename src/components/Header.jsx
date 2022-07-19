import React from 'react';
import Nav from './Nav';
import './header.css';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <header>
      <div className="left">
        <div>
          <img src="" alt="logo" />
          Untitled UI
        </div>
        <Nav />
      </div>
      <div className="right">
        <Button variant="text">Log in</Button>
        <Button variant="contained" id="signup">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
