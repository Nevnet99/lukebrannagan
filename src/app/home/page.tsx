'use client';

import { gql, useQuery } from '@apollo/client';
import {
  ISbStoryData,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import { PageStoryblok } from '../../types/component-types-sb';

export default function Home() {
  const { data } = useQuery<PageStoryblok>(query);

  const story: ISbStoryData<void> | null = useStoryblokState(data?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  console.log(story, 'Story');

  return <StoryblokComponent blok={story.content} />;
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
