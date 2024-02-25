import { motion } from 'framer-motion';

export const Skeleton = () => (
  <motion.div
    initial={{
      opacity: 0.8,
      background: 'linear-gradient(to right, #f2f2f2, #FFF)',
      backgroundSize: '200% 100%',
      backgroundPosition: '100% 0',
    }}
    animate={{
      backgroundPosition: '200% 0',
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    }}
    className="w-full h-72"
  />
);
