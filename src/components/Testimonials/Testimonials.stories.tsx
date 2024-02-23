import type { Meta, StoryObj } from '@storybook/react';

import { Testimonials } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main/Testimonials',
  component: Testimonials,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    blok: {
      _uid: '1',
      component: 'Testimonials',
      testimonials: [
        {
          _uid: '1',
          name: 'John Doe',
          role: 'CEO',
          component: 'Testimonial',
          testimonal: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                    ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                    on or to eat: it was a hobbit­hole, and that means comfort.
                    It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob
                    in the exact middle. The door opened on to a tube­shaped hall like a tunnel: a very comfortable
                    tunnel without smoke, with panelled walls, and floors tiled and carpeted, provided with polished
                    chairs, and lots and lots of pegs for hats and coats ­ the hobbit was fond of visitors. The tunnel
                    wound on and on, going fairly but not quite straight into the side of the hill ­ The Hill, as all the
                    people for many miles round called it ­ and many little round doors opened out of it, first on
                    one side and then on another. No going upstairs for the hobbit: bedrooms, bathrooms, cellars,
                    pantries (lots of these), wardrobes (he had whole rooms devoted to clothes), kitchens,
                    dining­rooms, all were on the same floor, and indeed on the same passage. The best rooms
                    were all on the left­hand side (going in), for these were the only ones to have windows,
                    deep­set round windows`,
                    type: 'text',
                  },
                ],
              },
            ],
          },
          author: [
            {
              _uid: '1',
              component: 'Author',
              company: 'Company',
              jobTitle: 'Job Title',
              name: 'Example Name',
              profilePicture: {
                id: 1,
                name: 'image.jpg',
                filename: 'image.jpg',
                alt: 'Example Name',
              },
            },
          ],
          image: {
            filename: 'image.jpg',
            alt: 'John Doe',
          },
        },
        {
          _uid: '1',
          name: 'John Doe',
          role: 'CEO',
          component: 'Testimonial',
          testimonal: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                    ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                    on or to eat: it was a hobbit­hole, and that means comfort.
                    It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob
                    in the exact middle. The door opened on to a tube­shaped hall like a tunnel: a very comfortable
                    tunnel without smoke, with panelled walls, and floors tiled and carpeted, provided with polished
                    chairs, and lots and lots of pegs for hats and coats ­ the hobbit was fond of visitors. The tunnel
                    wound on and on, going fairly but not quite straight into the side of the hill ­ The Hill, as all the
                    people for many miles round called it ­ and many little round doors opened out of it, first on
                    one side and then on another. No going upstairs for the hobbit: bedrooms, bathrooms, cellars,
                    pantries (lots of these), wardrobes (he had whole rooms devoted to clothes), kitchens,
                    dining­rooms, all were on the same floor, and indeed on the same passage. The best rooms
                    were all on the left­hand side (going in), for these were the only ones to have windows,
                    deep­set round windows`,
                    type: 'text',
                  },
                ],
              },
            ],
          },
          author: [
            {
              _uid: '1',
              component: 'Author',
              company: 'Company',
              jobTitle: 'Job Title',
              name: 'Example Name',
              profilePicture: {
                id: 1,
                name: 'image.jpg',
                filename: 'image.jpg',
                alt: 'Example Name',
              },
            },
          ],
          image: {
            filename: 'image.jpg',
            alt: 'John Doe',
          },
        },
        {
          _uid: '1',
          name: 'John Doe',
          role: 'CEO',
          component: 'Testimonial',
          testimonal: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the
                    ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down
                    on or to eat: it was a hobbit­hole, and that means comfort.
                    It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob
                    in the exact middle. The door opened on to a tube­shaped hall like a tunnel: a very comfortable
                    tunnel without smoke, with panelled walls, and floors tiled and carpeted, provided with polished
                    chairs, and lots and lots of pegs for hats and coats ­ the hobbit was fond of visitors. The tunnel
                    wound on and on, going fairly but not quite straight into the side of the hill ­ The Hill, as all the
                    people for many miles round called it ­ and many little round doors opened out of it, first on
                    one side and then on another. No going upstairs for the hobbit: bedrooms, bathrooms, cellars,
                    pantries (lots of these), wardrobes (he had whole rooms devoted to clothes), kitchens,
                    dining­rooms, all were on the same floor, and indeed on the same passage. The best rooms
                    were all on the left­hand side (going in), for these were the only ones to have windows,
                    deep­set round windows`,
                    type: 'text',
                  },
                ],
              },
            ],
          },
          author: [
            {
              _uid: '1',
              component: 'Author',
              company: 'Company',
              jobTitle: 'Job Title',
              name: 'Example Name',
              profilePicture: {
                id: 1,
                name: 'image.jpg',
                filename: 'image.jpg',
                alt: 'Example Name',
              },
            },
          ],
          image: {
            filename: 'image.jpg',
            alt: 'John Doe',
          },
        },
      ],
    },
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
