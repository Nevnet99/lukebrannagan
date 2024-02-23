import type { Meta, StoryObj } from '@storybook/react';

import { FourCardFeature } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/FourCardFeature',
  component: FourCardFeature,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    blok: {
      _uid: '123',
      component: 'FourCardFeature',
      cards: [
        {
          _uid: '123',
          component: 'Card',
          title: 'Card title',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Some example copy text this is a paragraph',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        },
        {
          _uid: '123',
          component: 'Card',
          title: 'Card title',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Some example copy text this is a paragraph',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        },
        {
          _uid: '123',
          component: 'Card',
          title: 'Card title',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Some example copy text this is a paragraph',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        },
        {
          _uid: '123',
          component: 'Card',
          title: 'Card title',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Some example copy text this is a paragraph',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
} satisfies Meta<typeof FourCardFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
