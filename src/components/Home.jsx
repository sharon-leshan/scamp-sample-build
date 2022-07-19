import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import './home.css';

const Home = () => {
  return (
    <section>
      <div className="subheader">
        <h6>Our blog</h6>
        <h1>Resources and insights</h1>
        <p>
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <footer>
        <div className="newsletter">
          <div className="left">
            <h2>Sign up for our newsletter</h2>
            <p>
              Be the first to know about releases and industry news and
              insights.
            </p>
          </div>
          <div className="right">
            <FormControl>
              <OutlinedInput placeholder="Enter your email" />
            </FormControl>
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="footer-links">
          <div className="left">
            <h3>Untitled UI</h3>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Home;
