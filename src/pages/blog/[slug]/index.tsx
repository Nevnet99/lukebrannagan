import { gql } from '@apollo/client';
import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import { RichText } from '@components/shared/RichText';
import { Avatar } from '@components/shared/Avatar';
import { client } from '@components/Providers/ApolloClient';
import Link from 'next/link';
import Image from 'next/image';
import { PostStoryblok } from '../../../types/component-types-sb';

export type TBlogPostsPagesResponse = {
  PostItems: {
    items: PostStoryblok[];
  };
};
export type TBlogPostPageResponse = {
  PostItem: PostStoryblok;
};

export type TBlogPostProps = {
  pageProps: {
    storyblok: TBlogPostPageResponse;
  };
};

export default function BlogPost({ pageProps: { storyblok } }: TBlogPostProps) {
  const post = storyblok.PostItem;
  if (!post) return <PageSection>Loading...</PageSection>;

  const [author] = post.content.author;

  return (
    <PageSection className="border-t-0">
      <div className="w-[80%] mx-auto">
        <Typography className="mb-12" as="h1" variant="h3" font="fjalla">
          {post.content.title}
        </Typography>
        {author && (
          <Avatar
            className="mb-12"
            orientation="left"
            updatedAt={post.published_at}
            {...author}
          />
        )}
        {post?.content.image?.filename && (
          <Image
            width={970}
            height={545}
            className="rounded-3xl mb-14"
            src={post?.content.image.filename}
            alt=""
            placeholder="blur"
            blurDataURL={post?.content.image.filename}
          />
        )}
        <RichText document={post?.content.copy} variant="blog-post" />
      </div>
    </PageSection>
  );
}

export async function getStaticPaths() {
  const { data } = (await client.query({
    query: gql`
      {
        PostItems {
          items {
            full_slug
          }
        }
      }
    `,
  })) as { data: TBlogPostsPagesResponse };

  const paths = data.PostItems.items.map(
    ({ full_slug: slug }: PostStoryblok) => ({
      params: { slug: slug.split('/').pop() },
    }),
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = (await client.query({
    query,
    variables: { fullSlug: `blog-posts/${params.slug}` },
  })) as { data: TBlogPostPageResponse };

  return {
    props: {
      storyblok: { ...data },
    },
    revalidate: 10,
  };
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
      published_at
    }
  }
`;
