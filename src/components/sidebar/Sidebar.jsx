import React from 'react';
import VerticalTab from '../verticalTab/VerticalTab';
import Search from './Search';


const Sidebar = ({ categories }) => {
  return (
    <aside className="sidebar">
      <Search />
      <VerticalTab title="Blog categories" categories={categories} />
    </aside>
  );
};

export default Sidebar;
