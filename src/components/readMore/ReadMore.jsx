import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as IconWrap } from '../../assets/icons/Icon-wrap.svg';

import './readMore.scss';

const ReadMore = ({ id }) => {
  const navigateTo = useNavigate();
  return (
    <div className="read-more" onClick={() => navigateTo(`/blog-post/${id}`)}>
      <span>Read Post</span>
      <IconWrap />
    </div>
  );
};

export default ReadMore;
