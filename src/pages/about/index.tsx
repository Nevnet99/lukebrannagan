import { gql } from '@apollo/client';
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import React from 'react';
import { client } from '@components/Providers/ApolloClient';
import { PageStoryblok } from '../../types/component-types-sb';

export type TAboutPageResponse = {
  PageItem: ISbStoryData<PageStoryblok>;
};

export type TAboutPageProps = {
  pageProps: {
    storyblok: TAboutPageResponse;
  };
};

export default function About({ pageProps: { storyblok } }: TAboutPageProps) {
  const story = useStoryblokState(storyblok?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = (await client.query({
    query,
  })) as { data: TAboutPageResponse };

  return {
    props: {
      storyblok: { ...data },
    },
  };
};

const query = gql`
  {
    PageItem(id: "about") {
      content {
        components
        component
        _uid
        _editable
      }
    }
  }
`;
