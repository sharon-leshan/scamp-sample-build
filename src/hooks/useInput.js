import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = e => {
    setValue(e.target.value);
  };
  return { value, handleInputChange };
};

export default useInput;
