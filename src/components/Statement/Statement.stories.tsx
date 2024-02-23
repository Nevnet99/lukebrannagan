import type { Meta, StoryObj } from '@storybook/react';

import { Statement } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/Statement',
  component: Statement,
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
      component: 'Statement',
      statement: 'Some example text.',
      cta: [
        {
          _uid: '123',
          component: 'CTA',
          text: 'Button text',
          href: {
            cached_url: 'https://example.com',
          },
        },
      ],
    },
  },
} satisfies Meta<typeof Statement>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
