import React from 'react';
import { cn } from '@utils/cn';

export const PageSectionDefaultType = 'section' as const;
export type TTypographyDefaultType = typeof PageSectionDefaultType;
export type TPageSectionDefaultType = typeof PageSectionDefaultType;

export type TPageSectionProps<E extends React.ElementType> = {
  /**
   * Polymorphic prop for the PageSection component allowing you to choose valid HTML text elements
   */
  as?: E;
  /**
   * Add extra classes to the PageSection component
   */
  className?: string;
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'ghost'
    | 'marquee'
    | 'navigation'
    | 'threeCardFeature'
    | 'footer'
    | 'fourCardFeature';
};

export const PageSection = <
  E extends React.ElementType = TTypographyDefaultType,
>({
  as,
  children,
  className,
  variant = 'default',
}: TPageSectionProps<E>) => {
  const Component = as || 'section';

  // TODO: refactor this and find out why styles are not being overridden
  return (
    <Component
      className={cn(
        variant === 'default' &&
          'bg-white mx-5 md:mx-10 lg:mx-28 py-28 border-black border-2',
        variant === 'ghost' && 'bg-transparent border-none p-0',
        variant === 'marquee' &&
          'bg-transparent border-none p-0 mx-5 md:mx-10 lg:mx-28',
        variant === 'navigation' &&
          'bg-white p-0 mx-5 md:mx-10 lg:mx-28 border-black border-2',
        variant === 'threeCardFeature' &&
          'mx-5 md:mx-10 lg:mx-28 py-28 bg-tertiary border-y-0 border-black border-2 flex flex-col items-center',
        variant === 'footer' &&
          'bg-primary mx-5 md:mx-10 lg:mx-28 py-28 border-black border-2',
        variant === 'fourCardFeature' &&
          'bg-tertiary mx-5 md:mx-10 lg:mx-28 py-28 border-black border-2',
        className,
      )}
    >
      {children}
    </Component>
  );
};
