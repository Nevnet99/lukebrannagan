// eslint-disable-next-line import/no-named-default
import { cn } from '@utils/cn';
// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';

export type TLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const sharedClasses = 'text-secondary hover:underline visited:text-primary';

export const Link = ({ href, className, children, ...rest }: TLinkProps) => {
  const isInternal = /^\/(?!\/)/.test(href);

  if (isInternal) {
    return (
      <NextLink className={cn(sharedClasses, className)} href={href} {...rest}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={cn(sharedClasses, className)} href={href} {...rest}>
      {children}
    </a>
  );
};
