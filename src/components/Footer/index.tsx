import { Button } from '@components/shared/Button';
import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';

export const Footer = () => (
  <footer className="max-w-[1440px] mx-auto">
    <PageSection className="border-t-0" as="div" variant="footer">
      <div className="w-[80%] mx-auto">
        <Typography variant="h5" font="fjalla">
          Interesting project, up for a chat or want to play some Chess?
        </Typography>
      </div>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-16 justify-between">
        <Typography className="mb-10 md:mb-0 md:w-[50%]" variant="h6">
          I’m currently looking for opportunities for perm, freelance or
          contract work, hit me up!
        </Typography>

        <Typography className="mb-10 md:mb-0 md:w-[45%]" variant="body-large">
          In specific I’m looking for <b>remote working</b>, an{' '}
          <b>awesome culture</b>, a place to grow and learn and an interesting
          challenge.
        </Typography>
      </div>
      <div className="w-[80%] mx-auto mt-12">
        <Button variant="quaternary">Get in touch</Button>
      </div>
    </PageSection>
  </footer>
);
