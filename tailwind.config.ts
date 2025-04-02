import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        francois: ['"Francois One"', 'sans-serif'],
        instrumentSans: ['"Instrument Sans"', 'sans-serif'],
        instrumentSerif: ['"Instrument Serif"', 'serif'],
        reeniebeanie: ['"Reenie Beanie"', 'cursive'],
        silkscreen: ['"Silkscreen"', 'sans-serif'],
      },
      backgroundImage: {
        paper: "url('/paper.webp')",
      },
    },
  },
  plugins: [],
};

export default config;
