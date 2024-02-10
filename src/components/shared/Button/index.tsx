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
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'nav';
  className?: string;
  children: React.ReactNode;
}

const sizes = {
  small: 'px-2 py-1',
  medium: 'px-4 py-2',
  large: 'px-6 py-3',
};

const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-gray-700',
  nav: 'text-white',
};

export const Button = <E extends React.ElementType = TButtonDefaultType>({
  as,
  className,
  size = 'medium',
  variant = 'primary',
  children,
  ...rest
}: TButtonProps<E>) => {
  const Component = as || 'button';

  return (
    <Component
      className={clsx({
        className,
        [sizes[size]]: true,
        [variants[variant]]: true,
      })}
      {...rest}
    >
      <Typography as="span">{children}</Typography>
    </Component>
  );
};
