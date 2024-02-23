import React from 'react';
import { Typography } from '../../shared/Typography';
import { RichText } from '../../shared/RichText';
import { CardStoryblok } from '../../../types/component-types-sb';

export const Card = ({ title, copy }: CardStoryblok) => (
  <li className="list-none lg:w-1/3">
    <article className="bg-base rounded-xl p-8 lg:min-h-[29rem] drop-shadow-neo-brutalist">
      <Typography variant="h6" className="font-bold mb-5">
        {title}
      </Typography>
      <RichText document={copy} />
    </article>
  </li>
);
