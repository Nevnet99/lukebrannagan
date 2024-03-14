import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@components/shared/Button';

export type TMobileNavigation = {
  links: { href: string; label: string }[];
  path: string;
  setShowNav: (show: boolean) => void;
};

const MobileNavigation = ({ links, path, setShowNav }: TMobileNavigation) => (
  <motion.nav
    initial={{ y: -1000 }}
    animate={{ y: 0 }}
    exit={{ y: -1000 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="fixed z-[105] w-full h-full bg-base"
  >
    <div className="flex flex-col justify-center items-center h-full">
      <ul className="flex flex-col justify-center items-center">
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
                <motion.span className="absolute inset-0 block h-full w-full bg-tertiary rounded-full z-[101]" />
              )}
              <Link
                className="z-[102] relative"
                href={href}
                onClick={() => setShowNav(false)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button className="mt-8" size="small" onClick={() => setShowNav(false)}>
        CLOSE
      </Button>
    </div>
  </motion.nav>
);

export default MobileNavigation;
