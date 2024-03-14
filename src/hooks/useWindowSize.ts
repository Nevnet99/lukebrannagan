import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      setBreakpoint(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return breakpoint;
};
