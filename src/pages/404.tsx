import { Button } from '@components/shared/Button';

import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';

const FourOhFour = () => (
  <PageSection className="border-t-0">
    <div className="max-w-[80%] mx-auto flex flex-col justify-center">
      <Typography className="mb-10" as="h1" variant="h2" font="fjalla">
        404 - Page Not Found
      </Typography>

      <img
        className="w-1/2 mx-auto rounded-lg"
        src="404.gif"
        alt="404 - Page Not Found"
      />

      <Typography className="text-center mt-10" as="h2" variant="h4">
        Lost your way have you?
      </Typography>

      <Link className="mx-auto mt-10" href="/">
        <Button as="span" variant="secondary">
          TO SAFETY
        </Button>
      </Link>
    </div>
  </PageSection>
);

export default FourOhFour;
