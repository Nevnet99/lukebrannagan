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
  <PageSection className="border-t-0">
    <div className="max-w-[80%] mx-auto lg:mb-10">
      <Typography variant="h2" className="text-center" font="fjalla">
        {blok.title}
      </Typography>
    </div>
    <div className="flex flex-col lg:flex-row lg:gap-5  max-w-[80%] mx-auto">
      {blok.profile && (
        <Image
          className="mb-10 lg:mb-0 min-w-[330px] max-w-[330px] max-h-[440px] mx-auto"
          src={blok.profile.filename}
          width={330}
          height={440}
          alt=""
          placeholder="blur"
          blurDataURL={blok.profile.filename}
        />
      )}
      <div>
        <div className="mb-10 lg:mb-5">
          <RichText document={blok.subTitle} />
        </div>
        <div className="text-lg font-light">
          <RichText document={blok.copy} />
        </div>
      </div>
    </div>
  </PageSection>
);
