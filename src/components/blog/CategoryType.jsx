import React from 'react';
import { Badge } from '../BadgeGroup';

const CategoryTyoe = ({ categories }) => {
  const categoriesArray = categories.split(', ');

  return (
    <section aria-label="article category" className="blog-type-categories">
      {categoriesArray.map((category, index) => (
        <Badge key={index} badge={category} />
      ))}
    </section>
  );
};

export default CategoryTyoe;
