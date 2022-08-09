import React from 'react';


const Footer = ({ children, ...otherProps }) => {
  return (
    <footer className="footer__container" {...otherProps}>
      <div className="footer">{children}</div>
    </footer>
  );
};

export default Footer;
