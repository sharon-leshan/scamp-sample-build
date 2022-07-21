import { Button, FormControl, OutlinedInput } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <div className="left">
          <h2>Sign up for our newsletter</h2>
          <p>
            Be the first to know about releases and industry news and insights.
          </p>
        </div>
        <div className="right">
          <div>
            <FormControl>
              <OutlinedInput placeholder="Enter your email" />
            </FormControl>
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </div>
          <p>
            We care about your data in our{' '}
            <Link to="/privacy">
              <u>privacy policy</u>
            </Link>
          </p>
        </div>
      </div>
      <div className="footer-links">
        <div className="left">
          <h3>Untitled UI</h3>
          <FooterLinks />
        </div>
        <div className="right">
          <h3>Stay up to date</h3>
          <div>
            <FormControl>
              <OutlinedInput placeholder="Enter your email" />
            </FormControl>
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <div>
          &copy;2077 <Link to="/">Untitled UI</Link>. All rights reserved.
        </div>
        <div>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
