import { StoryblokStory } from 'storyblok-generate-ts';

export interface BentoFeatureStoryblok {
  Title?: string;
  Subtext?: string;
  _uid: string;
  component: 'BentoFeature';
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface CopyStoryblok {
  copy?: RichtextStoryblok;
  _uid: string;
  component: 'Copy';
  [k: string]: any;
}

export interface HeroStoryblok {
  Title?: string;
  Subtext?: string;
  _uid: string;
  component: 'Hero';
  [k: string]: any;
}

export interface PageStoryblok {
  components?: (
    | BentoFeatureStoryblok
    | CopyStoryblok
    | HeroStoryblok
    | PageStoryblok
    | PersonStoryblok
    | PostStoryblok
    | TestimonialStoryblok
    | TestimonialsStoryblok
  )[];
  _uid: string;
  component: 'Page';
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface PersonStoryblok {
  name?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: 'Person';
  [k: string]: any;
}

export interface PostStoryblok {
  copy?: RichtextStoryblok;
  _uid: string;
  component: 'Post';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  copy?: string;
  author_image?: AssetStoryblok;
  author_name?: string;
  company?: string;
  _uid: string;
  component: 'Testimonial';
  [k: string]: any;
}

export interface TestimonialsStoryblok {
  Testimonials?: (
    | BentoFeatureStoryblok
    | CopyStoryblok
    | HeroStoryblok
    | PageStoryblok
    | PersonStoryblok
    | PostStoryblok
    | TestimonialStoryblok
    | TestimonialsStoryblok
  )[];
  _uid: string;
  component: 'Testimonials';
  [k: string]: any;
}
