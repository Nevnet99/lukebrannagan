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
      heading1: '3.3125rem',
      heading2: '3rem',
      heading3: '2.5rem',
      heading4: '2.0625rem',
      heading5: '1.75rem',
      heading6: '1.4375rem',
      bodyLarge: '1.1875rem',
      body: '1rem',
      caption: '.8125rem',
      overline: '.6875rem',
      button: '1rem',

      heading1Desktop: '17rem',
      heading2Desktop: '11.375rem',
      heading3Desktop: '8.1875rem',
      heading4Desktop: '5.0625rem',
      heading5Desktop: '3.375rem',
      heading6Desktop: '2.25rem',
      bodyLargeDesktop: '1.5rem',
      bodyDesktop: '1rem',
      captionDesktop: '0.625rem',
      overlineDesktop: '0.4375rem',
      buttonDesktop: '1rem',
    },
  },
  plugins: [],
};
export default config;
