import React from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography';

export const ButtonDefaultType = 'p' as const;
export type TButtonDefaultType = typeof ButtonDefaultType;

export type TTypographyProps<E extends React.ElementType> = {
  /**
   * Polymorphic prop for the Typography component allowing you to choose valid HTML text elements
   */
  as?: E;
  /**
   * Add extra classes to the Typography component
   */
  className?: string;
  /**
   * The variant of the typography component this will override the styles for the as so you can have
   * a h1 with p styles
   */
  variant?: E;
  children: React.ReactNode;
};

interface TButtonProps<E extends React.ElementType> {
  /**
   * Polymorphic prop for the Typography component allowing you to choose valid HTML text elements
   */
  as?: E;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  className?: string;
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  quaternary: 'bg-quaternary',
};

export const Button = <E extends React.ElementType = TButtonDefaultType>({
  as,
  className,
  variant = 'primary',
  children,
  ...rest
}: TButtonProps<E>) => {
  const Component = as || 'button';

  return (
    <Component
      className={clsx(
        'px-8 py-2 rounded-full flex justify-center drop-shadow-neo-brutalist',
        {
          className,
          [variants[variant]]: true,
        },
      )}
      {...rest}
    >
      <Typography as="span" variant="body-large">
        {children}
      </Typography>
    </Component>
  );
};
