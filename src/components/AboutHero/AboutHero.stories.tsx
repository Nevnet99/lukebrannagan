import type { Meta, StoryObj } from '@storybook/react';

import { AboutHero } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/AboutHero',
  component: AboutHero,
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
      component: 'AboutHero',
      title: "Hi I'm Luke",
      copy: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'We help businesses grow by creating digital experiences that people love.',
                type: 'text',
              },
            ],
          },
        ],
      },
    },
  },
} satisfies Meta<typeof AboutHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
