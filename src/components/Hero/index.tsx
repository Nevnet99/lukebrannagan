import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';
import { HeroStoryblok } from '../../types/component-types-sb';

export type THeroProps = {
  blok: HeroStoryblok;
};

export const Hero = ({ blok }: THeroProps) => {
  const { Title: title, Subtext: subText } = blok;
  return (
    <PageSection className="flex flex-col align-center justify-center text-center mb-24 mt-40 ">
      <Typography as="h1" font="fjalla">
        {title}
      </Typography>
      <Typography variant="body-large">{subText}</Typography>
    </PageSection>
  );
};
