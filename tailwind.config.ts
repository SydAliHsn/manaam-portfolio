import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#8c34eb',
      },
    },
    fontFamily: {
      rubik: 'var(--ff-rubik)',
      syne: 'var(--ff-syne)',
    },
  },
  plugins: [],
};
export default config;
