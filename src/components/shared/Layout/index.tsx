import { Footer } from '@components/Footer';
import { Navigation } from '@components/Navigation';
import React, { ReactNode } from 'react';
// eslint-disable-next-line camelcase
import { Manrope, Fjalla_One } from 'next/font/google';
import clsx from 'clsx';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fjalla',
});

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className={clsx(manrope.variable, fjallaOne.variable)}>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);
