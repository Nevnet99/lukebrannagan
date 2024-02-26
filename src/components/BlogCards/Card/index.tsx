import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PostStoryblok } from '../../../types/component-types-sb';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Card = ({
  content: { title, image },
  first_published_at: firstPublishedAt,
  slug,
}: PostStoryblok) => (
  <motion.li
    key={title}
    className="md:w-[calc(33.33%-0.85rem)]"
    variants={variants}
  >
    <Link href={`/blog/${slug}`}>
      <div>
        <Image
          className="rounded-lg"
          src={image?.filename}
          alt=""
          width="400"
          height="300"
          placeholder="blur"
          blurDataURL={image?.filename}
        />
      </div>
      <Typography className="py-2 opacity-80">
        Updated: {format(firstPublishedAt, 'do MMM yyyy p')}
      </Typography>
      <Typography className="font-bold" as="h2" variant="body-large">
        {title}
      </Typography>
    </Link>
  </motion.li>
);
