'use client';

import { gql, useQuery } from '@apollo/client';
import { PageSection } from '@components/shared/PageSection';
import { ISbStoryData, useStoryblokState } from '@storyblok/react';
import { Typography } from '@components/shared/Typography';
import { RichText } from '@components/shared/RichText';
import { Avatar } from '@components/shared/Avatar';
import { PostStoryblok } from '../../../types/component-types-sb';

export default function BlogPost({ params: { slug } }: PostStoryblok) {
  const { data } = useQuery<{
    PostItem: ISbStoryData<PostStoryblok>;
  }>(query, {
    variables: { fullSlug: `blog-posts/${slug}` },
  });
  const post = useStoryblokState(data?.PostItem || null);

  if (!post) return <PageSection>Loading...</PageSection>;

  const author = post.content.author[0];

  return (
    <PageSection className="border-t-0">
      <div className="w-[80%] mx-auto">
        <Typography className="mb-12" as="h1" variant="h3" font="fjalla">
          {post.content.title}
        </Typography>
        {author && <Avatar className="mb-12" orientation="left" {...author} />}
        {post?.content.image?.filename && (
          <img
            className="rounded-3xl mb-14"
            src={post?.content.image.filename}
            alt=""
          />
        )}
        <RichText document={post?.content.copy} variant="blog-post" />
      </div>
    </PageSection>
  );
}

const query = gql`
  query GetPostItemById($fullSlug: ID!) {
    PostItem(id: $fullSlug) {
      content {
        component
        copy
        image {
          filename
          alt
        }
        title
        author
      }
      full_slug
    }
  }
`;
