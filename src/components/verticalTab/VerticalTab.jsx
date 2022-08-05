import React from 'react';
import NavListItem from '../nav/NavListItem';
import NavList from '../nav/NavList';

import './verticalTab.scss';

const VerticalTab = ({ title, categories }) => {
  return (
    <nav className="vertical-tab">
      <h3 className="vertical-tab__heading medium-text">{title}</h3>
      <NavList className="vertical-tab__list">
        {categories.map((item, index) => (
          <NavListItem
            className="vertical-tab__list__item"
            key={index}
            text={item}
          />
        ))}
      </NavList>
    </nav>
  );
};

export default VerticalTab;
