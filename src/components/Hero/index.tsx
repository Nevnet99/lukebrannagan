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
      <div className="scale-50 md:scale-100">
        <Logo />
      </div>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-36 justify-between">
        <div className="mb-10 md:mb-0 md:w-[50%]">
          <RichText document={copy1} />
        </div>

        <div className="md:w-[45%]">
          <RichText document={copy2} />
        </div>
      </div>
    </PageSection>
  );
};
