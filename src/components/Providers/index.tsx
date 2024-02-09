'use client';

import React, { ReactNode } from 'react';
import { StoryblokProvider } from './Storyblok';
import { AProvider } from './ApolloClient';

export type TProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: TProvidersProps) => (
  <StoryblokProvider>
    <AProvider>{children}</AProvider>
  </StoryblokProvider>
);
