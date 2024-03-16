/* eslint-disable @next/next/no-img-element */
import { PageSection } from '@components/shared/PageSection';
import { RichText } from '@components/shared/RichText';
import { Typography } from '@components/shared/Typography';
import { motion } from 'framer-motion';
import { AboutHeroStoryblok } from '../../types/component-types-sb';

export type TAboutHeroProps = {
  blok: AboutHeroStoryblok;
};
export const AboutHero = ({ blok }: TAboutHeroProps) => (
  <PageSection className="flex items-center flex-col border-y-0">
    <div className="overflow-hidden rounded-xl drop-shadow-neo-brutalist w-[80%]">
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
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.img
          className="block object-cover max-w-full object-center w-full h-auto"
          src="/LUKE_PROFILE.JPG"
          alt="Luke"
        />
      </motion.div>
    </div>

    <div className="flex items-center flex-col ">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-14 justify-between">
        <motion.div className="md:w-[50%] mb-5 md:mb-0 overflow-hidden">
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
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Typography as="h1" variant="h4">
              {blok.title}
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div className="md:w-[45%] overflow-hidden">
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
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <RichText variant="body-large" document={blok.copy} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </PageSection>
);
