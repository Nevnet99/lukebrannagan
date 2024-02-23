import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import React from "react"
import clsx from "clsx";
import { Manrope, Fjalla_One } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fjalla',
});


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'neo',
      values: [
        {
          name: 'neo',
          value: '#FAFAFA',
        },
        {
          name: 'primary',
          value: '#82AFFF',
        },
        {
          name: 'secondary',
          value: '#35CC9E',
        },
        {
          name: 'tertiary',
          value: '#F7D1F8',
        },
        {
          name: 'quaternary',
          value: '#FFAF61',
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={clsx(manrope.variable, fjallaOne.variable)}>
        <Story />
      </div>
    ),
  ]
};

export default preview;
