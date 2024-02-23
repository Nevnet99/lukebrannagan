import { Button } from '@components/shared/Button';
import { Card } from '@components/ThreeCardFeature/Card';
import { PageSection } from '@components/shared/PageSection';
import Link from 'next/link';
import React from 'react';
import { ThreeCardFeatureStoryblok } from '../../types/component-types-sb';

export const ThreeCardFeature = ({
  blok,
}: {
  blok: ThreeCardFeatureStoryblok;
}) => {
  const { cards, cta } = blok;

  const [singleCTA] = cta;

  return (
    <PageSection variant="threeCardFeature">
      <ul className="flex flex-col lg:flex-row gap-5 max-w-[80%] mx-auto">
        {cards && cards.map((card) => <Card key={card._uid} {...card} />)}
      </ul>

      <Link className="mt-10" href={singleCTA?.href?.cached_url ?? ''}>
        <Button as="span">{singleCTA.text}</Button>
      </Link>
    </PageSection>
  );
};
