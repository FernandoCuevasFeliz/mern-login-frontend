import { useEffect, useRef } from 'react';

const useClickOutSide = (handler) => {
  const domRef = useRef();

  useEffect(() => {
    const mouseDown = (e) => {
      if (!domRef?.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', mouseDown);

    return () => {
      document.removeEventListener('mousedown', mouseDown);
    };
  }, [handler]);

  return domRef;
};

export default useClickOutSide;
