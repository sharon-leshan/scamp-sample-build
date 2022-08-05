import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { blogs as blogCardData } from '../../data/blogs';
import BlogPostCard from './Card';
import './overview.scss';

const Overview = () => {
  const { width } = useWindowSize();

  const count = width < 900 ? 6 : blogCardData.length;
  return (
    <main className="blog-overview">
      {blogCardData
        .filter(blogPost => blogPost.id <= count)
        .map(blogPost => (
          <BlogPostCard key={blogPost.id} blog={blogPost} />
        ))}

      {/* return <BlogPostCard key={blogPost.id} blog={blogPost} />;
      })} */}
    </main>
  );
};

export default Overview;
