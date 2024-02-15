import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';
import { InView } from '@components/shared/Animations/InView';
import { HeroStoryblok } from '../../types/component-types-sb';

export type THeroProps = {
  blok: HeroStoryblok;
};

export const Hero = ({ blok }: THeroProps) => {
  const { Title: title, Subtext: subText } = blok;
  return (
    <PageSection className="relative flex flex-col align-center justify-center text-center mb-28 mt-28 max-w-5xl mx-auto ">
      <div className="z-[-1] absolute h-64 w-64 rounded-full bottom-0 right-72 translate-y-[-50%] bg-teal-300 blur-3xl" />
      <div className="z-[-1] absolute h-64 w-64 rounded-full bottom-0 right-96 bg-pink-300 blur-3xl" />
      <InView>
        <Typography className="mb-5" as="h1" font="fjalla">
          {title}
        </Typography>
      </InView>
      <InView>
        <Typography variant="body-large">{subText}</Typography>
      </InView>
    </PageSection>
  );
};
