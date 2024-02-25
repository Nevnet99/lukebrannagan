'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { Page } from '@components/Page';
import { Hero } from '@components/Hero';
import { Marquee } from '@components/Marquee';
import { ThreeCardFeature } from '@components/ThreeCardFeature';
import { Testimonials } from '@components/Testimonials';
import { Testimonial } from '@components/shared/Testimonial';
import { Statement } from '@components/Statement';
import { AboutHero } from '@components/AboutHero';
import { Copy } from '@components/Copy';
import { FourCardFeature } from '@components/FourCardFeature';
import { HalfAndHalfImage } from '@components/HalfAndHalfImage';

const components = {
  Page,
  Hero,
  Marquee,
  ThreeCardFeature,
  Testimonials,
  Testimonial,
  Statement,
  AboutHero,
  Copy,
  FourCardFeature,
  HalfAndHalfImage,
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
