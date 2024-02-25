import { cn } from '@utils/cn';
import { motion, UseInViewOptions, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export type TInViewProps = {
  inViewOptions?: UseInViewOptions;
  className?: string;
  children: React.ReactNode;
};

const fadeIn = (inView: boolean) => ({
  opacity: inView ? 1 : 0,
  y: inView ? 0 : 20,
  transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
});

export const InView = ({
  inViewOptions,
  className,
  children,
}: TInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <motion.div className={cn(className)} ref={ref} style={fadeIn(isInView)}>
      {children}
    </motion.div>
  );
};
