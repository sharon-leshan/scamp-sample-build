import React from 'react';

import useWindowSize from '../../hooks/useWindowSize';


const Button = ({ children, text, className }) => {
  const { width } = useWindowSize();
  return (
    <button
      type="button"
      className={` ${className ? className : 'pagination__btn'}`}
    >
      <>{children}</>
      {width >= 900 && (
        <span className="medium-text pagination__btn--text">{text}</span>
      )}
    </button>
  );
};

export default Button;
