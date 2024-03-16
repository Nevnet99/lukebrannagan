import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from '@utils/cn';
import { Typography } from '../Typography';
import { useCursorStore } from '../../../stores/cursor';

export const buttonDefault = 'button' as const;
export type TButtonDefaultType = typeof buttonDefault;

type TButtonProps<E extends React.ElementType = TButtonDefaultType> = {
  as?: E;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & ComponentPropsWithoutRef<E>;

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
  const { setCursorType } = useCursorStore();
  const Component = as || buttonDefault;

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
      onMouseOver={() => setCursorType('CLICKABLE')}
      onMouseLeave={() => setCursorType('DEFAULT')}
      onClick={onClick}
      {...rest}
    >
      <Typography as="span" variant="button">
        {children}
      </Typography>
    </Component>
  );
};
