import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Local fonts
        francois: ['"Francois One"', 'sans-serif'],
        instrumentSans: ['"Instrument Sans"', 'sans-serif'],
        instrumentSerif: ['"Instrument Serif"', 'serif'],
        reeniebeanie: ['"Reenie Beanie"', 'cursive'],
        silkscreen: ['"Silkscreen"', 'sans-serif'],

        // Google Fonts ✨
        bebas: ['"Bebas Neue"', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        gloock: ['"Gloock"', 'serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        spacegrotesk: ['"Space Grotesk"', 'sans-serif'],
        unna: ['"Unna"', 'serif'],
      },

      backgroundImage: {
        paper: "url('/paper.webp')",
      },
    },
  },
  plugins: [],
};

export default config;
