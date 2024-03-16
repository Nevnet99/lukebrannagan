import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';
import { Logo } from '@components/Logo';
import { RichText } from '@components/shared/RichText';
import { motion } from 'framer-motion';
import { HeroStoryblok } from '../../types/component-types-sb';

export type THeroProps = {
  blok: HeroStoryblok;
};

export const Hero = ({ blok }: THeroProps) => {
  const { copy1, copy2 } = blok;

  return (
    <PageSection className="flex items-center flex-col border-y-0">
      <div className="scale-50 lg:scale-100">
        <Logo />
        <Typography className="sr-only" as="h1">
          Luke Brannagan ~ Javascript Developer
        </Typography>
      </div>
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row mt-2 lg:mt-24 justify-between overflow-hidden">
        <motion.div
          className="mb-10 lg:mb-0 lg:w-[50%]"
          initial={{
            translateY: 100,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <RichText document={copy1} />
        </motion.div>

        <div className="lg:w-[45%] overflow-hidden">
          <motion.div
            initial={{
              translateY: 100,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <RichText variant="body-large" document={copy2} />
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
};
