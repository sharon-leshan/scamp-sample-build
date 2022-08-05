import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import CustomDropdown from '../customTags/Dropdown/Dropdown'
import Sidebar from '../sidebar/Sidebar';

const Categories = () => {
  const { width } = useWindowSize();

  const categories = [
    'view all',
    'design',
    'product',
    'software engineering',
    'customer success',
    'leadership',
    'management',
  ];

  return (
    <>
      {width < 900 ? (
        <CustomDropdown categories={categories} />
      ) : (
        <Sidebar categories={categories} />
      )}
    </>
  );
};

export default Categories;
