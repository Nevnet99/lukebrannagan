'use client';

import { gql, useQuery } from '@apollo/client';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
import { useEffect } from 'react';

export default function Home() {
  const { data } = useQuery(query);

  const story = useStoryblokState(data?.PageItem);

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
      }
    }
  }
`;
