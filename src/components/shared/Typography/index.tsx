import React from 'react';
import clsx from 'clsx';

export const TypographyDefaultType = 'p' as const;
export type TTypographyDefaultType = typeof TypographyDefaultType;
export type TAllowedTypographyTypes = keyof typeof typographyStyles;

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
  variant?: TAllowedTypographyTypes;
  /**
   * The font type you want to use for the typography component
   */
  font?: 'manrope' | 'fjalla';
  children: React.ReactNode;
};

const typographyStyles = {
  h1: 'text-4xl md:text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
  p: 'text-base',
  'body-large': 'text-lg',
  'body-regular': 'text-base',
  small: 'text-sm',
  span: 'text-base',
};

export const Typography = <
  E extends React.ElementType = TTypographyDefaultType,
>({
  as,
  className,
  variant,
  children,
  font = 'manrope',
}: TTypographyProps<E>) => {
  const Component = as || 'p';

  return (
    <Component
      className={clsx({
        [className as string]: !!className,
        [typographyStyles[Component as TAllowedTypographyTypes]]:
          true && !variant,
        // ? variant overrides the styles via the as prop in case you want a h1 with p styles
        [typographyStyles[variant as TAllowedTypographyTypes]]: !!variant,
        'font-manrope': font === 'manrope',
        'font-fjalla': font === 'fjalla',
      })}
    >
      {children}
    </Component>
  );
};
