/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
// TODO: LOOK INTO WHY THIS AUTO GENERATED TYPE IS WRONG
import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';
import { PostStoryblok } from '../../../types/component-types-sb';

export const Card = ({
  content: { title, image },
  first_published_at: firstPublishedAt,
  slug,
}: PostStoryblok) => (
  <li className="md:w-[calc(33.33%-0.85rem)]">
    <Link href={`/blog/${slug}`}>
      <div>
        <img src={image?.filename} alt="" />
      </div>
      <Typography>{firstPublishedAt}</Typography>
      <Typography className="font-bold" as="h2" variant="body-regular">
        {title}
      </Typography>
    </Link>
  </li>
);
