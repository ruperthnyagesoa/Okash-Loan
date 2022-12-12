import { useState, useEffect } from 'react';

export default function useWindowInnerWidth() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resetInnerWidthOnResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', resetInnerWidthOnResize);

    return () => window.removeEventListener('resize', resetInnerWidthOnResize);
  }, [windowInnerWidth]);

  return windowInnerWidth;
}
