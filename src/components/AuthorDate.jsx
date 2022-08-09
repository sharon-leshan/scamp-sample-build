import React from 'react';


const AuthorDate = ({ author, date }) => {
  return (
    <div className="author-date">
      <h3 className="medium-text">{author}</h3>
      <span className="date medium-text">{date}</span>
    </div>
  );
};

export default AuthorDate;
