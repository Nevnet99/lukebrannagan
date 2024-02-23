import React, { ReactNode } from 'react';
import {
  NODE_HEADING,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer';
import { Typography } from '../Typography';

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
  render(document, schemas[variant]) as ReactNode[];
