import React from 'react';
import { motion } from 'framer-motion';

const lAnimation = {
  initial: { scale: 0, rotate: 180 },
  animate: { scale: 1, rotate: 0 },
  transition: {
    type: 'spring',
    stiffness: 80,
    duration: 0.4,
    ease: 'easeInOut',
  },
  viewport: { once: true },
};

const uAnimation = {
  initial: { x: -500 },
  animate: { x: 0 },
  transition: {
    type: 'spring',
    stiffness: 80,
    duration: 0.4,
    ease: 'easeInOut',
    delay: 0.4,
  },
  viewport: { once: true },
};

const kAnimation = {
  initial: { x: 500 },
  animate: { x: 0 },
  transition: {
    type: 'spring',
    stiffness: 80,
    duration: 0.4,
    ease: 'easeInOut',
    delay: 0.8,
  },
  viewport: { once: true },
};

const eAnimation = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: [50, 0, -50, 0] },
  transition: {
    type: 'spring',
    stiffness: 80,
    duration: 0.4,
    ease: 'easeInOut',
    delay: 1.2,
  },
  viewport: { once: true },
};

const sizes = {
  xs: {
    width: 100,
    height: 30,
  },
  sm: {
    width: 200,
    height: 100,
  },
  md: {
    width: 300,
    height: 150,
  },
  lg: {
    width: 559,
    height: 201,
  },
  responsive: {
    width: '100%',
    height: 'auto',
  },
};

export type TLogoProps = {
  size?: keyof typeof sizes;
  animation?: boolean;
};

export const Logo = ({ size = 'lg', animation = true }: TLogoProps) => (
  <svg
    width={sizes[size].width}
    height={sizes[size].height}
    viewBox="0 0 600 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M386.5 3.5H525.5C542.621 3.5 556.5 17.3792 556.5 34.5V84.5C556.5 92.7843 549.784 99.5 541.5 99.5H522.235C507.047 99.5 494.735 111.812 494.735 127C494.735 142.188 507.047 154.5 522.235 154.5H537.382C547.941 154.5 556.5 163.059 556.5 173.618V176C556.5 187.874 546.874 197.5 535 197.5H386.5V3.5Z"
      fill="#FFAF61"
      stroke="black"
      strokeWidth="5"
      {...(animation && eAnimation)}
    />
    <motion.path
      d="M389.072 102.337L461.46 198.5H292.5V3.5H410.321H461.45L389.075 99.3272L387.938 100.831L389.072 102.337Z"
      fill="#82AFFF"
      stroke="black"
      strokeWidth="5"
      {...(animation && kAnimation)}
    />
    <mask id="path-3-inside-1_108_122" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M294.454 0.332275H117.983V140.917C117.983 173.726 144.58 200.323 177.389 200.323C191.201 200.323 204.648 195.89 215.751 187.675L234.746 173.621C237.75 171.398 240.85 169.317 244.034 167.384V175.113C244.034 189.036 255.321 200.323 269.244 200.323C283.167 200.323 294.454 189.036 294.454 175.113V26.2089C294.454 26.1842 294.454 26.1595 294.454 26.1348V0.332275Z"
      />
    </mask>
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M294.454 0.332275H117.983V140.917C117.983 173.726 144.58 200.323 177.389 200.323C191.201 200.323 204.648 195.89 215.751 187.675L234.746 173.621C237.75 171.398 240.85 169.317 244.034 167.384V175.113C244.034 189.036 255.321 200.323 269.244 200.323C283.167 200.323 294.454 189.036 294.454 175.113V26.2089C294.454 26.1842 294.454 26.1595 294.454 26.1348V0.332275Z"
      fill="#35CC8E"
      {...(animation && uAnimation)}
    />
    <motion.path
      d="M117.983 0.332275V-4.66772H112.983V0.332275H117.983ZM294.454 0.332275H299.454V-4.66772H294.454V0.332275ZM215.751 187.675L218.725 191.694L218.725 191.694L215.751 187.675ZM234.746 173.621L237.72 177.641L237.72 177.641L234.746 173.621ZM244.034 167.384H249.034V158.497L241.438 163.11L244.034 167.384ZM294.454 26.1348H289.454V26.1425L289.454 26.1502L294.454 26.1348ZM117.983 5.33228H294.454V-4.66772H117.983V5.33228ZM122.983 140.917V0.332275H112.983V140.917H122.983ZM177.389 195.323C147.342 195.323 122.983 170.965 122.983 140.917H112.983C112.983 176.488 141.819 205.323 177.389 205.323V195.323ZM212.777 183.655C202.535 191.233 190.13 195.323 177.389 195.323V205.323C192.272 205.323 206.761 200.546 218.725 191.694L212.777 183.655ZM231.772 169.602L212.777 183.655L218.725 191.694L237.72 177.641L231.772 169.602ZM241.438 163.11C238.124 165.123 234.899 167.288 231.772 169.602L237.72 177.641C240.602 175.508 243.575 173.512 246.629 171.657L241.438 163.11ZM249.034 175.113V167.384H239.034V175.113H249.034ZM269.244 195.323C258.082 195.323 249.034 186.275 249.034 175.113H239.034C239.034 191.798 252.559 205.323 269.244 205.323V195.323ZM289.454 175.113C289.454 186.275 280.405 195.323 269.244 195.323V205.323C285.928 205.323 299.454 191.798 299.454 175.113H289.454ZM289.454 26.2089V175.113H299.454V26.2089H289.454ZM289.454 26.1502C289.454 26.1688 289.454 26.1883 289.454 26.2089H299.454C299.454 26.1801 299.454 26.1502 299.454 26.1193L289.454 26.1502ZM289.454 0.332275V26.1348H299.454V0.332275H289.454Z"
      fill="black"
      mask="url(#path-3-inside-1_108_122)"
      {...(animation && uAnimation)}
    />
    <mask id="path-5-inside-2_108_122" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.092 0H0V175V200H25H131.092H156.513C170.32 200 181.513 188.807 181.513 175C181.513 161.193 170.32 150 156.513 150H131.092V0Z"
      />
    </mask>
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M131.092 0H0V175V200H25H131.092H156.513C170.32 200 181.513 188.807 181.513 175C181.513 161.193 170.32 150 156.513 150H131.092V0Z"
      fill="#F7D1F8"
      {...(animation && lAnimation)}
    />
    <motion.path
      d="M0 0V-5H-5V0H0ZM131.092 0H136.092V-5H131.092V0ZM0 200H-5V205H0V200ZM131.092 150H126.092V155H131.092V150ZM0 5H131.092V-5H0V5ZM5 175V0H-5V175H5ZM5 200V175H-5V200H5ZM25 195H0V205H25V195ZM131.092 195H25V205H131.092V195ZM156.513 195H131.092V205H156.513V195ZM176.513 175C176.513 186.046 167.558 195 156.513 195V205C173.081 205 186.513 191.569 186.513 175H176.513ZM156.513 155C167.558 155 176.513 163.954 176.513 175H186.513C186.513 158.431 173.081 145 156.513 145V155ZM131.092 155H156.513V145H131.092V155ZM126.092 0V150H136.092V0H126.092Z"
      fill="black"
      mask="url(#path-5-inside-2_108_122)"
      {...(animation && lAnimation)}
    />
  </svg>
);
