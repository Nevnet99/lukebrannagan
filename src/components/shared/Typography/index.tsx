import React from 'react';
import clsx from 'clsx';

export const TypographyDefaultType = 'p' as const;
export type TTypographyDefaultType = typeof TypographyDefaultType;

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

const typographyStyles = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
  p: 'text-base',
  small: 'text-sm',
  span: 'text-base',
};

export type TAllowedTypographyTypes = keyof typeof typographyStyles;

export const Typography = <
  E extends React.ElementType = TTypographyDefaultType,
>({
  as,
  className,
  variant,
  children,
}: TTypographyProps<E>) => {
  const Component = as || 'p';

  return (
    <Component
      className={clsx({
        className,
        [typographyStyles[Component as TAllowedTypographyTypes]]:
          true && !variant,
        // ? variant overrides the styles via the as prop in case you want a h1 with p styles
        [typographyStyles[variant as TAllowedTypographyTypes]]: !!variant,
      })}
    >
      {children}
    </Component>
  );
};