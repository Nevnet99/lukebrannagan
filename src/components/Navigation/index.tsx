'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Button } from '@components/shared/Button';
import { Logo } from '@components/Logo';
import { useScroll, motion } from 'framer-motion';
import { PageSection } from '@components/shared/PageSection';

const links = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation = () => (
  <nav className="max-w-[1440px] mx-auto">
    <PageSection as="div" className="z-50" variant="navigation">
      <div className="flex justify-between w-[80%] mx-auto  py-6">
        <Link href="/">
          <Logo size="xs" animation={false} />
        </Link>
        <ul>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="inline mx-6">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  </nav>
);
