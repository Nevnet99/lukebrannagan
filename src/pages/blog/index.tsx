'use client';

import { gql, useQuery } from '@apollo/client';
import { ISbStoryData, useStoryblokState } from '@storyblok/react';
import { PageSection } from '@components/shared/PageSection';
import { BlogCards } from '@components/BlogCards';
import { PostFilters } from '@components/PostFilters';
import { Typography } from '@components/shared/Typography';
import { Skeleton } from '@components/shared/Skeleton';
import { PostStoryblok } from '../../types/component-types-sb';

export default function Blog() {
  const { data } = useQuery<{
    PostItems: ISbStoryData<PostStoryblok[]>;
  }>(query);

  // TODO: Look into why this is not pulling the correct type.

  const posts = useStoryblokState(data?.PostItems || null) as unknown as {
    items: PostStoryblok[];
  };

  return (
    <PageSection className="border-t-0">
      <div className="w-[80%] mx-auto">
        <Typography className="mb-10" as="h1" variant="h3" font="fjalla">
          Blog & Project Posts
        </Typography>
        {!posts && (
          <div className="w-[80%] mx-auto flex gap-5">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
        {/* <PostFilters /> */}
        {posts && <BlogCards cards={posts.items} />}
      </div>
    </PageSection>
  );
}

const query = gql`
  {
    PostItems {
      items {
        full_slug
        name
        first_published_at
        slug
        content {
          _uid
          component
          title
          image {
            filename
          }
        }
      }
    }
  }
`;
