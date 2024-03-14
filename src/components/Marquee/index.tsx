import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { PageSection } from '@components/shared/PageSection';
import { MarqueeStoryblok } from '../../types/component-types-sb';
import { useCursorStore } from '../../stores/cursor';

export type TMarqueeProps = {
  blok: MarqueeStoryblok;
};

export const Marquee = ({
  blok: { text = 'Blog posts this way!', href },
}: TMarqueeProps) => {
  const { setCursorType } = useCursorStore();
  const copyString = Array(8).fill(text).join(' ~ ');

  return (
    <PageSection variant="marquee">
      <Link
        href={href.cached_url || ''}
        onMouseOver={() => setCursorType('CLICKABLE')}
        onMouseLeave={() => setCursorType('DEFAULT')}
      >
        <div className="mx-auto bg-quaternary border-black border-2 overflow-hidden whitespace-nowrap p-2">
          <motion.div
            animate={{ x: [0, -310] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            <Typography
              className=" uppercase max-w-[1440px]"
              variant="body-large"
            >
              {copyString}
            </Typography>
          </motion.div>
        </div>
      </Link>
    </PageSection>
  );
};
