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
import FloatingNav from './FloatingNavigation';
import MobileNavigation from './Mobile';
import { useCursorStore } from '../../stores/cursor';

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
  const { setCursorType } = useCursorStore();

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
        {showFloatingNav && <FloatingNav links={links} path={path} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showNav && (
          <MobileNavigation links={links} path={path} setShowNav={setShowNav} />
        )}
      </AnimatePresence>
      <nav className="relative z-[100] max-w-[1440px] mx-auto">
        <PageSection as="div" variant="navigation">
          <div className="relative flex justify-between w-[80%] mx-auto  py-6">
            <Link className="flex justify-center items-center" href="/">
              <Logo size="xs" animation={false} />
              <p className="sr-only">Homepage</p>
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
