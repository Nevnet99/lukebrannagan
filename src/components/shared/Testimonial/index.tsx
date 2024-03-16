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
    <li className="flex flex-col justify-center w-full px-[10%] text-center flex-shrink-0 text-lg">
      <div>
        <RichText document={testimonal} />
      </div>
      <Avatar className="mt-10" {...author} />
    </li>
  );
};
