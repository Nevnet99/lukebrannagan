import { cn } from '@utils/cn';
import React, { ComponentPropsWithoutRef } from 'react';

export const TypographyDefaultType = 'p' as const;
export type TTypographyDefaultType = typeof TypographyDefaultType;
export type TAllowedTypographyTypes = keyof typeof typographyStyles;

export type TTypographyProps<E extends React.ElementType = 'p'> = {
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
  htmlFor?: string;
} & ComponentPropsWithoutRef<E>;

const typographyStyles = {
  h1: 'text-heading1 md:text-heading1Desktop font-fjalla',
  h2: 'text-heading2 md:text-heading2Desktop font-fjalla',
  h3: 'text-heading3 md:text-heading3Desktop font-fjalla',
  h4: 'text-heading4 md:text-heading4Desktop font-fjalla',
  h5: 'text-heading5 md:text-heading5Desktop font-fjalla',
  h6: 'text-heading6 md:text-heading6Desktop font-fjalla',
  'body-large': 'text-bodyLarge md:text-bodyLargeDesktop',
  'body-regular': 'text-body md:text-bodyDesktop',
  caption: 'text-caption md:text-captionDesktop',
  overline: 'text-overline md:text-overlineDesktop',
  button: 'text-button md:text-buttonDesktop font-bold uppercase',
};

export const Typography = <
  E extends React.ElementType = TTypographyDefaultType,
>({
  as,
  className,
  variant = 'body-regular',
  children,
  ...rest
}: TTypographyProps<E>) => {
  const Component = as || 'p';

  return (
    <Component
      className={cn(
        typographyStyles[variant as TAllowedTypographyTypes],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
