'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/shared/Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation = () => (
  <nav className="relative py-12">
    <ul className="relative flex justify-center">
      {links.map(({ href, label }) => {
        const isActive = href === window.location.pathname;

        return (
          <li
            className={clsx(
              'flex justify-center min-w-28',
              isActive && 'border-b-2 border-blue-500',
            )}
            key={`${href}${label}`}
          >
            <Link href={href}>
              <Button as="span" variant="nav">
                {label}
              </Button>
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
