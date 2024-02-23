import type { Meta, StoryObj } from '@storybook/react';

import { ThreeCardFeature } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/ThreeCardFeature',
  component: ThreeCardFeature,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    blok: {
      cards: [
        {
          _uid: '123',
          component: 'Card',
          title: 'Get insights that help your business grow.',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
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
          title: 'Get insights that help your business grow.',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
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
          title: 'Get insights that help your business grow.',
          copy: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        },
      ],
      cta: [
        {
          _uid: '123',
          component: 'CTA',
          text: 'Example Text',
          href: {
            cached_url: 'https://example.com',
          },
        },
      ],
      _uid: '123',
      component: 'ThreeCardFeature',
    },
  },
} satisfies Meta<typeof ThreeCardFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {};
