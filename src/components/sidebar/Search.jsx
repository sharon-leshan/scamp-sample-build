import React from 'react';
import useInput from '../../hooks/useInput';
import CustomInput from '../customTags/Input/Input';

const Search = () => {
  const { value, handleChange } = useInput('');
  return (
    <CustomInput
      type="search"
      name="search-category"
      inputValue={value}
      handleChange={handleChange}
    />
  );
};

export default Search;
