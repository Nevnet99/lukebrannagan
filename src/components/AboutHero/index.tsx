/* eslint-disable @next/next/no-img-element */
import { PageSection } from '@components/shared/PageSection';
import { RichText } from '@components/shared/RichText';
import { Typography } from '@components/shared/Typography';
import Image from 'next/image';
import { AboutHeroStoryblok } from '../../types/component-types-sb';

export type TAboutHeroProps = {
  blok: AboutHeroStoryblok;
};
export const AboutHero = ({ blok }: TAboutHeroProps) => (
  <PageSection className="flex items-center flex-col border-y-0">
    <div className="h-[20rem] md:h-[30vw] lg:h-[25vw] w-[80%] mx-auto drop-shadow-neo-brutalist">
      <Image
        className="object-cover rounded-xl"
        src="/LUKE_PROFILE.JPG"
        alt="Luke"
        fill
      />
    </div>

    <div className="flex items-center flex-col ">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-14 justify-between">
        <div className="md:w-[50%] mb-5 md:mb-0">
          <Typography as="h1" variant="h4">
            {blok.title}
          </Typography>
        </div>

        <div className="md:w-[45%]">
          <div>
            <RichText variant="body-large" document={blok.copy} />
          </div>
        </div>
      </div>
    </div>
  </PageSection>
);
