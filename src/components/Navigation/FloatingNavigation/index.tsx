import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCursorStore } from '../../../stores/cursor';

export type TFloatingNav = {
  links: { href: string; label: string }[];
  path: string;
};

const FloatingNav = ({ links, path }: TFloatingNav) => {
  const { setCursorType } = useCursorStore();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 50 }}
      exit={{ y: -100 }}
      transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="hidden fixed z-[105] w-full md:flex justify-center "
    >
      <ul className="flex justify-center bg-base shadow-md py-2 border-primary border-2 rounded-3xl">
        {links.map(({ href, label }) => {
          let isBlogPost;
          if (path.includes('/blog/')) {
            isBlogPost = href === '/blog';
          }
          const isActive = href === path || isBlogPost;

          return (
            <li
              key={`${href}${label}`}
              className="relative inline mx-6 px-4 py-2 "
            >
              {isActive && (
                <span className="absolute inset-0 block h-full w-full bg-tertiary rounded-full z-[101]" />
              )}
              <Link
                className="z-[102] relative"
                href={href}
                onMouseOver={() => setCursorType('CLICKABLE')}
                onMouseLeave={() => setCursorType('DEFAULT')}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default FloatingNav;
