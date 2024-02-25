import type { Meta, StoryObj } from '@storybook/react';

import { BlogCards } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/BlogCards',
  component: BlogCards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    cards: [
      {
        content: {
          title: 'Test Title',
          component: 'Post',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Test content',
                    marks: [],
                    data: {},
                    type: '',
                  },
                ],
              },
            ],
          },
          image: {
            id: 0,
            filename: '',
            name: '',
          },
          author: [],
        },
        image: {
          id: 0,
          filename: '',
          name: '',
        },
        title: '',
        author: [],
        _uid: '',
        component: 'Post',
        full_slug: '',
        published_at: '',
      },
    ],
  },
} satisfies Meta<typeof BlogCards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
