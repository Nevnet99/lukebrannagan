import { Footer } from '@components/Footer';
import { Navigation } from '@components/Navigation';
import React, { ReactNode, useEffect } from 'react';
// eslint-disable-next-line camelcase
import { Manrope, Fjalla_One } from 'next/font/google';
import clsx from 'clsx';
import Lenis from '@studio-freight/lenis';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fjalla',
});

export const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // ! Adds smoothscroll to the project
    if (typeof window === 'undefined') return;
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={clsx(manrope.variable, fjallaOne.variable)}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
