import React, { ReactNode } from 'react';
import {
  MARK_LINK,
  NODE_HEADING,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer';
import { Typography } from '../Typography';
import { Link, TLinkProps } from '../Link';

export type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

const schemas = {
  default: {
    nodeResolvers: {
      [NODE_HEADING]: (children: ReactNode, { level }: { level: TLevel }) => (
        <Typography variant={`h${level}`}>{children}</Typography>
      ),
    },
  },
  'blog-post': {
    markResolvers: {
      [MARK_LINK]: (children: ReactNode, props: TLinkProps) => (
        <Link {...props}>{children}</Link>
      ),
    },
    nodeResolvers: {
      [NODE_PARAGRAPH]: (children: ReactNode) => (
        <Typography className="mb-5" variant="body-large">
          {children}
        </Typography>
      ),

      [NODE_HEADING]: (children: ReactNode, { level }: { level: TLevel }) => {
        if (level === 2) {
          return (
            <Typography className="mt-14 mb-5 font-bold" as="h2" variant="h4">
              {children}
            </Typography>
          );
        }

        if (level === 3) {
          return (
            <Typography className="mt-10 mb-5 font-bold" as="h3" variant="h5">
              {children}
            </Typography>
          );
        }
        return (
          <Typography variant={`h${level as TLevel}`}>{children}</Typography>
        );
      },
    },
  },
};

export type RichTextProps = {
  document: unknown;
  variant?: keyof typeof schemas;
};

export const RichText = ({ document, variant = 'default' }: RichTextProps) =>
  // @ts-expect-error its because the props from the link dont match the props from the rich text
  render(document, schemas[variant]) as ReactNode[];
