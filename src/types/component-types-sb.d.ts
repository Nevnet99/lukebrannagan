import { StoryblokStory } from 'storyblok-generate-ts';

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

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AboutHeroStoryblok {
  profile?: AssetStoryblok;
  title?: string;
  subTitle?: RichtextStoryblok;
  copy?: RichtextStoryblok;
  _uid: string;
  component: 'AboutHero';
  [k: string]: any;
}

export interface AuthorStoryblok {
  name?: string;
  profilePicture?: AssetStoryblok;
  jobTitle?: string;
  company?: string;
  _uid: string;
  component: 'Author';
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  copy?: RichtextStoryblok;
  _uid: string;
  component: 'Card';
  [k: string]: any;
}

export interface CopyStoryblok {
  copy?: RichtextStoryblok;
  _uid: string;
  component: 'Copy';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      [k: string]: any;
    };

export interface CtaStoryblok {
  text: string;
  href: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  _uid: string;
  component: 'CTA';
  [k: string]: any;
}

export interface FourCardFeatureStoryblok {
  cards: CardStoryblok[];
  _uid: string;
  component: 'FourCardFeature';
  [k: string]: any;
}

export interface HalfAndHalfImageStoryblok {
  image1: AssetStoryblok;
  image2: AssetStoryblok;
  flavourImage: AssetStoryblok;
  _uid: string;
  component: 'HalfAndHalfImage';
  [k: string]: any;
}

export interface HeroStoryblok {
  copy1: RichtextStoryblok;
  copy2: RichtextStoryblok;
  _uid: string;
  component: 'Hero';
  [k: string]: any;
}

export interface MarqueeStoryblok {
  text: string;
  href: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  _uid: string;
  component: 'Marquee';
  [k: string]: any;
}

export interface PageStoryblok {
  components?: (
    | AboutHeroStoryblok
    | AuthorStoryblok
    | CardStoryblok
    | CopyStoryblok
    | CtaStoryblok
    | FourCardFeatureStoryblok
    | HalfAndHalfImageStoryblok
    | HeroStoryblok
    | MarqueeStoryblok
    | PageStoryblok
    | PersonStoryblok
    | PostStoryblok
    | StatementStoryblok
    | TestimonialStoryblok
    | TestimonialsStoryblok
    | ThreeCardFeatureStoryblok
  )[];
  _uid: string;
  component: 'Page';
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
  full_slug: string;
  published_at: string;
  content: {
    component: 'Post';
    copy: RichtextStoryblok;
    image: AssetStoryblok;
    title: string;
    author: AuthorStoryblok[];
  };
  [k: string]: any;
}

export interface StatementStoryblok {
  statement: string;
  cta: CtaStoryblok[];
  _uid: string;
  component: 'Statement';
  [k: string]: any;
}

export interface TestimonialStoryblok {
  testimonal?: RichtextStoryblok;
  author: AuthorStoryblok[];
  _uid: string;
  component: 'Testimonial';
  [k: string]: any;
}

export interface TestimonialsStoryblok {
  testimonials: TestimonialStoryblok[];
  _uid: string;
  component: 'Testimonials';
  [k: string]: any;
}

export interface ThreeCardFeatureStoryblok {
  cards: CardStoryblok[];
  cta: CtaStoryblok[];
  _uid: string;
  component: 'ThreeCardFeature';
  [k: string]: any;
}
