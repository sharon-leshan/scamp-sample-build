import React from 'react';

import AuthorDate from './AuthorDate';


const AvatarGroup = ({ imageURL, author, date, ...otherProps }) => {
  return (
    <section
      aria-label="author details"
      className="avatar-card"
      {...otherProps}
    >
      <img
        className="avatar-card__image"
        src={require(`../../${imageURL}`)}
        alt=""
      />
      <AuthorDate author={author} date={date} />
    </section>
  );
};

export default AvatarGroup;
