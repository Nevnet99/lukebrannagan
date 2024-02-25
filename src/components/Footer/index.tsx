import { Button } from '@components/shared/Button';
import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import React from 'react';

export const Footer = () => (
  <footer className="max-w-[1440px] mx-auto">
    <PageSection className="border-t-0" as="div" variant="footer">
      <div className="w-[80%] mx-auto">
        <Typography variant="h3" font="fjalla">
          Interesting project, up for a chat or want to play some Chess?
        </Typography>
      </div>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row mt-16 justify-between">
        <Typography className="mb-10 md:mb-0 md:w-[50%]" variant="body-large">
          I’m currently looking for opportunities for <b>perm</b>,{' '}
          <b>freelance</b> or <b>contract</b> work, hit me up!
        </Typography>

        <div className="md:w-[45%]">
          In specific I’m looking for <b>remote working</b>, an{' '}
          <b>awesome culture</b>, a place to grow and learn and an interesting
          challenge.
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-12">
        <Button variant="quaternary">Get in touch</Button>
      </div>
    </PageSection>
  </footer>
);
