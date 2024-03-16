import { PageSection } from '@components/shared/PageSection';
import { Typography } from '@components/shared/Typography';
import Link from 'next/link';
import React from 'react';

const links = [
  {
    title: 'Pages',
    items: [
      { title: 'Home', href: '/', target: '_self' },
      { title: 'About', href: '/about', target: '_self' },
      { title: 'Blog', href: '/blog', target: '_self' },
      { title: 'Contact', href: '/contact', target: '_self' },
    ],
  },
  {
    title: 'Socials',
    items: [
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/luke-brannagan/',
        target: '_blank',
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/lukebrannagan/?hl=en',
        target: '_blank',
      },
      {
        title: 'Twitter/X',
        href: 'https://twitter.com/Nevnet99',
        target: '_blank',
      },
    ],
  },
  {
    title: 'Cool Stuff',
    items: [
      {
        title: 'CV',
        href: 'https://luke-b.notion.site/Luke-Brannagan-869774110fcd4d4bb20006db15965d8a',
        target: '_blank',
      },
      {
        title: 'Github',
        href: 'https://github.com/Nevnet99',
        target: '_blank',
      },
    ],
  },
];

export const Footer = () => (
  <footer className="max-w-[1440px] mx-auto">
    <PageSection
      className="border-t-0 py-8 md:pt-24 md:pb-5"
      as="div"
      variant="footer"
    >
      <ul className="w-[80%] gap-10 md:gap-0 mx-auto flex flex-col md:flex-row justify-between mb-10">
        {links.map((link) => (
          <li key={link.title}>
            <Typography variant="h6" className=" text-tertiary mb-4">
              {link.title}
            </Typography>
            <ul className="flex flex-col gap-2">
              {link.items.map((item) => (
                <Link key={item.title} href={item.href} target={item.target}>
                  <li>
                    <Typography variant="body-large" className=" text-tertiary">
                      {item.title}
                    </Typography>
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Typography className="text-tertiary text-center">
        Made with frog magic. <br /> Luke Brannagan &copy;{' '}
        {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </PageSection>
  </footer>
);
