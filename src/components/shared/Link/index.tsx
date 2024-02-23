// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';

export type TLinkProps = {
  internal?: boolean;
  children: React.ReactNode;
};

export const Link = ({ internal, children }: TLinkProps) => {
  if (internal) {
    return <NextLink href="/">{children}</NextLink>;
  }

  return <a>{children}</a>;
};
