import React from 'react';
import { RichText } from '../RichText';
import { Avatar } from '../Avatar';
import { TestimonialStoryblok } from '../../../types/component-types-sb';

export const Testimonial = ({
  testimonal,
  author: authors,
}: TestimonialStoryblok) => {
  const [author] = authors;

  return (
    <li className="flex flex-col justify-center w-full px-[10%] text-center flex-shrink-0 mb-28 text-lg">
      <RichText document={testimonal} />
      <Avatar className="mt-10" {...author} />
    </li>
  );
};
