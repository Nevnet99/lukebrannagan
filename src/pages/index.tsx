import { gql } from '@apollo/client';
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import { client } from '@components/Providers/ApolloClient';
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
