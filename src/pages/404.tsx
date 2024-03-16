import { Button } from '@components/shared/Button';

import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FourOhFour = () => (
  <PageSection className="border-t-0">
    <div className="max-w-[80%] mx-auto flex flex-col justify-center">
      <Typography className="mb-5 mx-auto" as="h1" variant="h4" font="fjalla">
        404 - Page Not Found
      </Typography>

      <div className="h-[20rem] md:h-[20vw] w-full md:w-[30%] mx-auto drop-shadow-neo-brutalist">
        <Image
          className="rounded-xl"
          src="/404.gif"
          alt="404 - Page Not Found"
          fill
        />
      </div>

      <Typography className="text-center mt-10" as="h2" variant="h6">
        Lost your way have you?
      </Typography>

      <Link className="mx-auto mt-10" href="/">
        <Button as="span" variant="secondary">
          BACK TO SAFETY
        </Button>
      </Link>
    </div>
  </PageSection>
);

export default FourOhFour;
