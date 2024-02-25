import { AnimatePresence, motion } from 'framer-motion';
import { Card } from './Card';
import { PostStoryblok } from '../../types/component-types-sb';

export type TBlogCards = {
  cards: PostStoryblok[];
};

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
export const BlogCards = ({ cards }: TBlogCards) => (
  <motion.ul
    className="flex flex-col gap-5 md:flex-row md:flex-wrap"
    variants={variants}
    initial="hidden"
    animate="visible"
  >
    {cards.map((card) => (
      <Card key={card.slug as string} {...card} />
    ))}
  </motion.ul>
);
