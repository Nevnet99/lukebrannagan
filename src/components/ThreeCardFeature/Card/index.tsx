import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../shared/Typography';
import { RichText } from '../../shared/RichText';
import { CardStoryblok } from '../../../types/component-types-sb';

export const Card = ({ title, copy }: CardStoryblok) => (
  <motion.li className="list-none xl:w-1/3">
    <article className="bg-base rounded-xl p-8 lg:min-h-[30rem] drop-shadow-neo-brutalist">
      <Typography as="h2" variant="h6" className="font-bold mb-5">
        {title}
      </Typography>
      <div>
        <RichText document={copy} />
      </div>
    </article>
  </motion.li>
);
