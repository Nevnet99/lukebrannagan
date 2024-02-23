'use client';

import { gql, useQuery } from '@apollo/client';
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import { PageStoryblok } from '../types/component-types-sb';

export default function Home() {
  const { data } = useQuery<{ PageItem: ISbStoryData<PageStoryblok> }>(query);

  const story = useStoryblokState(data?.PageItem || null);

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
