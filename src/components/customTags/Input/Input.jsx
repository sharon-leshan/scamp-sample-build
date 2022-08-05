import React from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-lg.svg';

import './input.scss';

const Input = ({ inputValue, handleChange, ...otherProps }) => {
  const { type } = otherProps;

  return (
    <div className="input-search">
      {type === 'search' && <SearchIcon />}
      <input value={inputValue} onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default Input;
