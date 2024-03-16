import { RichText } from '@components/shared/RichText';
import { Typography } from '@components/shared/Typography';
import React from 'react';
import { CardStoryblok } from '../../../types/component-types-sb';

export const Card = ({ title, copy, index }: CardStoryblok) => (
  <li className="list-none relative w-full bg-base p-8 drop-shadow-neo-brutalist rounded-xl md:w-[calc(50%-10px)] min-h-[500px]">
    <Typography variant="h6" className="font-bold mb-5">
      {title}
    </Typography>
    <RichText document={copy} />
    <p className="text-heading3Desktop font-fjalla absolute bottom-0 left-5 drop-shadow-neo-brutalist text-primary">
      0{index + 1}
    </p>
  </li>
);
