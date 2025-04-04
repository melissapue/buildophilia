// lib/moodStyleMap.ts

export const moodStyleMap: Record<
  string,
  {
    background: string;
    textColor: string;
    headingFont: string;
    bodyFont: string;
  }
> = {
  default: {
    background: '#FAFAF9',
    textColor: '#161616',
    headingFont: 'spacegrotesk',
    bodyFont: 'instrumentSerif',
  },
  bold: {
    background: '#FF2725',
    textColor: 'white',
    headingFont: 'bebas',
    bodyFont: 'instrumentSans',
  },
  calm: {
    background: '#0A00CF',
    textColor: 'white',
    headingFont: 'dmserif',
    bodyFont: 'instrumentSerif',
  },
  playful: {
    background: '#FFF5C3',
    textColor: '#FF2725',
    headingFont: 'fredoka',
    bodyFont: 'instrumentSans',
  },
  grounded: {
    background: '#094200',
    textColor: 'white',
    headingFont: 'cormorant',
    bodyFont: 'instrumentSerif',
  },
  mysterious: {
    background: '#1A1A1A',
    textColor: 'white',
    headingFont: 'gloock',
    bodyFont: 'instrumentSerif',
  },
  minimal: {
    background: '#FAFAF9',
    textColor: '#161616',
    headingFont: 'spacegrotesk',
    bodyFont: 'instrumentSerif',
  },
  dreamy: {
    background: '#F7E7FB',
    textColor: '#57171E',
    headingFont: 'unna',
    bodyFont: 'instrumentSerif',
  },
  futuristic: {
    background: '#0D0D0D',
    textColor: 'white',
    headingFont: 'orbitron',
    bodyFont: 'instrumentSans',
  },
};
