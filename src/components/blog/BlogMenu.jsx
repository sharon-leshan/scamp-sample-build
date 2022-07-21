import React from 'react';
import './blogMenu.css';

const BlogMenu = () => {
  return (
    <div className="blog-menu">
      <h1>Blog categories</h1>
      <ul>
        <li>View all</li>
        <li>Design</li>
        <li>Product</li>
        <li>Software Engineering</li>
        <li>Customer Success</li>
        <li>Leadership</li>
        <li>Management</li>
      </ul>
    </div>
  );
};

export default BlogMenu;
