import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Typography } from '../Typography';

export const BlogBreadcrumb = () => {
  const router = useRouter();

  return (
    <div className="mb-5">
      <Link href="/" className="text-blue-600 hover:text-blue-800">
        <Typography as="span">Home</Typography>
      </Link>
      <Typography as="span">
        <span className="mx-2">/</span>
      </Typography>
      <Link href="/blog" className="text-blue-600 hover:text-blue-800">
        <Typography as="span">Blog</Typography>
      </Link>
      {router.asPath !== '/blog' && (
        <>
          <Typography as="span">
            <span className="mx-2">/</span>
          </Typography>
          <Typography as="span">{router.asPath.split('/').pop()}</Typography>
        </>
      )}
    </div>
  );
};
