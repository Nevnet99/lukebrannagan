import { gql } from '@apollo/client';
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import { client } from '@components/Providers/ApolloClient';
import Head from 'next/head';
import { PageStoryblok } from '../types/component-types-sb';

export type THomePageResponse = {
  PageItem: ISbStoryData<PageStoryblok>;
};

export type TIndexPageProps = {
  pageProps: {
    storyblok: THomePageResponse;
  };
};

export default function Home({ pageProps: { storyblok } }: TIndexPageProps) {
  const story = useStoryblokState(storyblok?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Luke Brannagan | Software Developer</title>
        <meta name="title" content="Luke Brannagan | Software Developer" />
        <meta
          name="description"
          content="Website and blog that offers advice on indie hacking and software development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukebrannagan.com/" />
        <meta
          property="og:title"
          content="Luke Brannagan | Software Developer"
        />
        <meta
          property="og:description"
          content="Website and blog that offers advice on indie hacking and software development"
        />
        <meta property="og:image" content="/META.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

const query = gql`
  {
    PageItem(id: "home") {
      content {
        components
        component
        _uid
        _editable
      }
    }
  }
`;

export const getStaticProps = async () => {
  const { data } = (await client.query({
    query,
  })) as { data: THomePageResponse };

  return {
    props: {
      storyblok: { ...data },
    },
  };
};
