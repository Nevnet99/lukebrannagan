import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import React from "react"
import clsx from "clsx";
import { Manrope, Fjalla_One } from 'next/font/google';
const manrope = Manrope({ subsets: ['latin'] });
const fjallaOne = Fjalla_One({ subsets: ['latin'], weight: '400'});


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
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
      <div className={clsx(manrope.className, fjallaOne.className)}>
        <Story />
      </div>
    ),
  ]
};

export default preview;
