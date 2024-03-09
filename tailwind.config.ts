import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        fjalla: ['var(--font-fjalla)', 'sans-serif'],
      },
      colors: {
        base: '#FAFAFA',
        primary: '#82AFFF',
        secondary: '#35CC9E',
        tertiary: '#F7D1F8',
        quaternary: '#FFAF61',
        focus: '#000085',
      },
      dropShadow: {
        'neo-brutalist': '4px 4px 0px rgba(0, 0, 0, 1)',
      },
    },
    fontSize: {
      '5xl': '11.088rem',
      '4xl': '6.856rem',
      '3xl': '4.238rem',
      '2xl': '2.619rem',
      xl: '1.619rem',
      lg: '1.619rem',
      base: '1rem',
      small: '0.619rem',
    },
  },
  plugins: [],
};
export default config;
