import { PageSection } from '@components/shared/PageSection';
import React from 'react';
import { InView } from '@components/shared/Animations/InView';
import { Typography } from '@components/shared/Typography';
import { BentoFeatureStoryblok } from '../../types/component-types-sb';

export type TBentoFeatureBlokProps = {
  blok: BentoFeatureStoryblok;
};

export const BentoFeature = ({ blok }: TBentoFeatureBlokProps) => {
  const { Title: title, Subtext: subText } = blok;

  return (
    <PageSection className="flex flex-col align-center justify-center text-center mb-28 mt-52 max-w-5xl mx-auto">
      <InView>
        <Typography className="mb-5" as="h3" font="fjalla">
          {title}
        </Typography>
      </InView>
      <InView>
        <Typography variant="body-large">{subText}</Typography>
      </InView>
    </PageSection>
  );
};
