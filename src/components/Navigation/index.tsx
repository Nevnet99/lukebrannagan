import Link from 'next/link';
import React, { useState } from 'react';
import { Logo } from '@components/Logo';
import { PageSection } from '@components/shared/PageSection';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Button } from '@components/shared/Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
const HEADER_HEIGHT = 100;

export const Navigation = () => {
  const path = usePathname();
  const { scrollY } = useScroll();
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > HEADER_HEIGHT) {
      setShowFloatingNav(true);
    } else {
      setShowFloatingNav(false);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {showFloatingNav && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 50 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
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
                    <Link className="z-[102] relative" href={href}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Mobile navigation */}
      <AnimatePresence mode="wait">
        {showNav && (
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
                      <Link className="z-[102] relative" href={href}>
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Button
                className="mt-8"
                size="small"
                onClick={() => setShowNav(false)}
              >
                CLOSE
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <nav className="relative z-[100] max-w-[1440px] mx-auto ">
        <PageSection as="div" variant="navigation">
          <div className="relative flex justify-between w-[80%] mx-auto  py-6">
            <Link className="flex justify-center items-center" href="/">
              <Logo size="xs" animation={false} />
            </Link>
            {/* desktop */}
            <ul className="hidden md:block">
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
                      <motion.span
                        layoutId="underline"
                        className="absolute inset-0 block h-full w-full bg-tertiary rounded-full z-[101]"
                      />
                    )}
                    <Link className="z-[102] relative" href={href}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button
              className="md:hidden"
              size="small"
              onClick={() => setShowNav(true)}
            >
              MENU
            </Button>
          </div>
        </PageSection>
      </nav>
    </>
  );
};
