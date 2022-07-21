import React from 'react';
import Blog from './blog/Blog';
import BlogMenu from './blog/BlogMenu';
import './home.css';
import SearchUI from './SearchUI';

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
      <div className="content">
        <div className="left">
          <SearchUI />
          <BlogMenu />
        </div>
        <div className="right">
          <Blog />
        </div>
      </div>
    </section>
  );
};

export default Home;
