import type { Meta, StoryObj } from '@storybook/react';

import { Testimonial } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Testimonial',
  component: Testimonial,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    testimonal: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              text: "I can't write enough good words about Luke. He joined Dept in a junior position, but with a thirst for knowledge, a can do attitude and great demeanour. All three improved constantly during his time at Dept.",
              type: 'text',
              marks: [{ type: 'textStyle', attrs: { color: '' } }],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "Articulate, assertive and very immersed in web development, Luke's absorption of frameworks and speed to pick new things up astonishes me. His understanding of business requirements vs code approach improved a lot whilst working with the teams and I, and this has improved his decision making and the maturity of his code.",
              type: 'text',
              marks: [{ type: 'textStyle', attrs: { color: '' } }],
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text: "He's also a talented musician and fun to spend time with, not fair, is it? Some people get it all!",
              type: 'text',
              marks: [{ type: 'textStyle', attrs: { color: '' } }],
            },
          ],
        },
      ],
    },
    author: [
      {
        _uid: '123',
        component: 'Author',
        name: 'Example Name',
        company: 'Example Company',
        jobTitle: 'Example Job Title',
        profilePicture: {
          id: 123,
          name: 'example',
          filename: 'https://via.placeholder.com/150',
          alt: 'Example Alt',
        },
      },
    ],
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
