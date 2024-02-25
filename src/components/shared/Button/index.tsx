import React from 'react';
import { cn } from '@utils/cn';
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
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const variants = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  quaternary: 'bg-quaternary',
};

const sizes = {
  small: 'px-4 py-1',
  medium: 'px-8 py-2',
  large: 'px-8 py-3',
};

export const Button = <E extends React.ElementType = TButtonDefaultType>({
  as,
  className,
  variant = 'primary',
  children,
  size = 'medium',
  onClick,
  ...rest
}: TButtonProps<E>) => {
  const Component = as || 'button';

  return (
    <Component
      className={cn(
        'rounded-full flex justify-center drop-shadow-neo-brutalist',
        className,
        {
          [sizes[size]]: true,
          [variants[variant]]: true,
        },
      )}
      onClick={onClick}
      {...rest}
    >
      <Typography
        as="span"
        variant={size === 'small' ? 'body-regular' : 'body-large'}
      >
        {children}
      </Typography>
    </Component>
  );
};
