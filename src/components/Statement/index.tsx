import { Button } from '@components/shared/Button';
import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';
import { StatementStoryblok } from '../../types/component-types-sb';

export type TStatement = {
  blok: StatementStoryblok;
};

export const Statement = ({ blok: { statement, cta: ctas } }: TStatement) => {
  const [cta] = ctas;

  return (
    <PageSection className="border-t-0">
      <div className="flex flex-col max-w-[80%] mx-auto">
        <Typography as="h2" variant="h4" className="mb-10">
          {statement}
        </Typography>
        <Link href={cta.href.cached_url || ''}>
          <Button variant="secondary">{cta.text}</Button>
        </Link>
      </div>
    </PageSection>
  );
};
