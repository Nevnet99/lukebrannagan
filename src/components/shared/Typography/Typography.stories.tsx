import type { Meta, StoryObj } from '@storybook/react';

import { TAllowedTypographyTypes, Typography } from '.';

const options = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'span'];
/**
 * Typography component for use of all typography in the app this allows for easy movement over
 * to a design system in the future.
 */
const meta = {
  title: 'Shared/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children:
      'It is the small things, everyday deeds of ordinary folk, that keeps the darkness at bay.',
  },
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      defaultValue: 'p',
      options,
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'p',
      options,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneralUsage: Story = {};

export const AllVariants: Story = {
  render: ({ children }) => (
    <div>
      {options.map((variant) => (
        <Typography key={variant} as={variant as TAllowedTypographyTypes}>
          {variant}: {children}
        </Typography>
      ))}
    </div>
  ),
};
