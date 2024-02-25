import { PageSection } from '@components/shared/PageSection';
import React from 'react';
import { Card } from './Card';
import { FourCardFeatureStoryblok } from '../../types/component-types-sb';

export type TFourCardFeature = {
  blok: FourCardFeatureStoryblok;
};

export const FourCardFeature = ({ blok }: TFourCardFeature) => {
  const { cards } = blok;
  return (
    <PageSection className="border-t-0" variant="fourCardFeature">
      <div className="max-w-[80%] mx-auto">
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-5">
          {cards.map((card, index) => (
            <Card key={index} index={index} {...card} />
          ))}
        </ul>
      </div>
    </PageSection>
  );
};
