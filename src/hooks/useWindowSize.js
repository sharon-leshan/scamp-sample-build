import { useState, useLayoutEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleWindowSizeChange = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useLayoutEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);
  return windowSize;
};

export default useWindowSize;
