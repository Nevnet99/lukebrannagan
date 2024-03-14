import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBreakpoint('sm');
      } else if (window.innerWidth < 768) {
        setBreakpoint('md');
      } else if (window.innerWidth < 1024) {
        setBreakpoint('lg');
      } else {
        setBreakpoint('xl');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return breakpoint;
};
