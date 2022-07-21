import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="blog-header">
      <div className="left">
        <img src="" alt="logo" />
      </div>
      <div className="right">
        <h6>Design 8min read</h6>
        <h1>UX review presentations</h1>
        <p>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div className="profile">
          <img src="" alt="profile" />
          <div>
            <h2>Olivia Rhye</h2>
            <p>20 Jan 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
