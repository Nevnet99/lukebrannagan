import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../../stores/cursor';

const animationVariants = {
  DEFAULT: {
    scale: 1,
    rotate: 0,
  },
  CLICKABLE: {
    scale: 3,
    rotate: 0,
  },
  TYPEABLE: {
    scale: 0.8,
    rotate: 0,
  },
};

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { cursorType } = useCursorStore();

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    <motion.div
      variants={animationVariants}
      animate={cursorType}
      className="bg-[#ff5757] h-6 w-6 rounded-full  z-[50000]"
      style={{
        position: 'fixed',
        top: position.y - 12,
        left: position.x - 12,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transitionDelay: 'calc(sin((var(1) / 12) * 45deg) * 0.475s)',
        mixBlendMode: 'difference',
      }}
    />
  );
};
