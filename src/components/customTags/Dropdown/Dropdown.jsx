import React, { useEffect, useState } from 'react';

import './dropdown.scss';

const Dropdown = ({ categories }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(categories[0]);
  }, [categories]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-dropdown">
      <select value={inputValue} onChange={handleChange}>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
