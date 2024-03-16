import { PageSection } from '@components/shared/PageSection';
import { RichText } from '@components/shared/RichText';
import React from 'react';
import { CopyStoryblok } from '../../types/component-types-sb';

export type TCopy = {
  blok: CopyStoryblok;
};

export const Copy = ({ blok: { copy } }: TCopy) => (
  <PageSection className="border-y-0 pb-0">
    <div className="max-w-[80%] mx-auto text-lg font-light">
      <RichText variant="body-large" document={copy} />
    </div>
  </PageSection>
);
