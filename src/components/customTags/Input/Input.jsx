import React from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search-lg.svg';


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
