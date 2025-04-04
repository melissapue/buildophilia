'use client';

import { moodStyleMap } from '@/lib/moodStyleMap';

interface ResultSlide5Props {
  mood?: string;
  powerStatement?: string;
}

export default function ResultSlide5({
  mood,
  powerStatement,
}: ResultSlide5Props) {
  const safeMood = (mood ?? 'default').toLowerCase();
  const style = moodStyleMap[safeMood] || moodStyleMap['default'];

  return (
    <div
      className="w-screen h-screen overflow-hidden relative p-0 m-0"
      style={{ backgroundColor: '#C93200' /* or your fixed Slide5 color */ }}
    >
      {/* LEFT: Section Title */}
      <div className="absolute top-12 left-12 z-20 text-[4rem] sm:text-[6rem] font-reeniebeanie leading-[1.1] text-white">
        The
        <br />
        Super
        <br />
        Power
      </div>

      {/* Background texture (optional) */}
      <div className="absolute inset-0 z-0 bg-[url('/paper.webp')] bg-cover opacity-10 mix-blend-soft-light pointer-events-none" />

      {/* Rubbed Mood Reveal */}
      <div
        className="absolute z-10 w-[75%] sm:w-[60%] h-[60%] rounded-[80px] shadow-2xl p-8 flex flex-col justify-center items-center border-2 border-white/30 backdrop-blur-sm"
        style={{
          right: '10%',
          top: '20%',
          backgroundColor: style.background,
          color: style.textColor,
          clipPath:
            'polygon(15% 10%, 85% 5%, 95% 45%, 85% 90%, 15% 85%, 5% 50%)',
        }}
      >
        <h2
          className={`text-3xl sm:text-4xl font-${style.headingFont} text-center drop-shadow-md`}
        >
          Your Brand's Superpower
        </h2>

        <p
          className={`mt-4 text-base sm:text-lg font-${style.bodyFont} text-center leading-relaxed max-w-xl`}
        >
          {powerStatement ||
            'You turn hesitation into movement, and vision into reality. That’s your magic.'}
        </p>
      </div>
    </div>
  );
}
