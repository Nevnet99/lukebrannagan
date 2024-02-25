import type { Meta, StoryObj } from '@storybook/react';

import { HalfAndHalfImage } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/HalfAndHalfImage',
  component: HalfAndHalfImage,
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
      component: 'HalfAndHalfImage',
      image1: {
        id: 1,
        name: 'placeholder image',
        filename: 'https://via.placeholder.com/600x300',
        alt: 'placeholder image',
      },
      image2: {
        id: 1,
        name: 'placeholder image',
        filename: 'https://via.placeholder.com/500',
        alt: 'placeholder image',
      },
      flavourImage: {
        id: 1,
        name: 'placeholder image',
        filename: 'https://via.placeholder.com/150',
        alt: 'placeholder image',
      },
    },
  },
} satisfies Meta<typeof HalfAndHalfImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
