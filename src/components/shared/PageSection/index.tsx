import React from 'react';
import clsx from 'clsx';

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
};

export const PageSection = <
  E extends React.ElementType = TTypographyDefaultType,
>({
  as,
  children,
  className,
}: TPageSectionProps<E>) => {
  const Component = as || 'section';

  return (
    <Component className={clsx(className, 'px-5 md:px-24')}>
      {children}
    </Component>
  );
};
