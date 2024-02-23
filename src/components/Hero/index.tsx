import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';
import { Logo } from '@components/Logo';
import { RichText } from '@components/shared/RichText';
import { HeroStoryblok } from '../../types/component-types-sb';

export type THeroProps = {
  blok: HeroStoryblok;
};

export const Hero = ({ blok }: THeroProps) => {
  const { copy1, copy2 } = blok;

  return (
    <PageSection className="flex items-center flex-col border-y-0">
      <Logo />
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-36 justify-between">
        <Typography className="mb-10 md:mb-0 md:w-[50%]" variant="body-large">
          <RichText document={copy1} />
        </Typography>

        <div className="md:w-[45%]">
          <RichText document={copy2} />
        </div>
      </div>
    </PageSection>
  );
};
