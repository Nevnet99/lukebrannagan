'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { Page } from '@components/Page';
import { Hero } from '@components/Hero';
import { BentoFeature } from '@components/BentoFeature';

const components = {
  Page,
  Hero,
  BentoFeature,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export type TStoryblokProviderProps = {
  children: React.ReactNode;
};

export function StoryblokProvider({ children }: TStoryblokProviderProps) {
  return children;
}
