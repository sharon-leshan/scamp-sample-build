import React from 'react';

import {blogs as  blogCardData } from '../data/blogs';

import BlogPostCard from './blog/Card'
import CTAButton from './CTAButton';

import './morePosts.scss';

const MorePosts = () => (
  <div className="more-posts">
    {blogCardData
      .filter(data => data.id <= 4)
      .map(blog => (
        <BlogPostCard key={blog.id} blog={blog} />
      ))}
    <CTAButton text="View all posts" />
  </div>
);

export default MorePosts;
