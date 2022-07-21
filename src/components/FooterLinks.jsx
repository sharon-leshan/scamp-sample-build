import React from 'react';
import { Link } from 'react-router-dom';
import './footerlinks.css';

const FooterLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
