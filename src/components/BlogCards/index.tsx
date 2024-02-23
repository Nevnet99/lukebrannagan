import React from 'react';
import { Card } from './Card';
import { PostStoryblok } from '../../types/component-types-sb';

export type TBlogCards = {
  cards: PostStoryblok[];
};

export const BlogCards = ({ cards }: TBlogCards) => (
  <ul className="flex flex-col gap-5 md:flex-row md:flex-wrap ">
    {cards.map((card) => (
      <Card key={card.slug as string} {...card} />
    ))}
  </ul>
);
