import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as IconWrap } from '../../assets/icons/Icon-wrap.svg';

import './heading.scss';

const Heading = ({ title, id }) => {
  const navigateTo = useNavigate();
  return (
    <div
      className="heading-icon-wrap"
      onClick={() => navigateTo(`/blog-post/${id}`)}
    >
      <h4>{title}</h4>
      <IconWrap />
    </div>
  );
};

export default Heading;
