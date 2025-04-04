'use client';

import { moodStyleMap } from '@/lib/moodStyleMap';

interface ResultSlide3Props {
  tagline: string;
  mood?: string;
}

export default function ResultSlide3({ tagline, mood }: ResultSlide3Props) {
  const style = moodStyleMap[mood ?? 'default'];

  return (
    <div
      className="w-full h-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12"
      style={{
        backgroundColor: style.background,
        color: style.textColor,
      }}
    >
      {/* Left: slide label title */}
      <div className="text-[3.5rem] sm:text-[5rem] font-reeniebeanie leading-[1.1] text-left whitespace-pre-wrap sm:pl-24 sm:-ml-2">
        THE
        <br />
        CATCHIEST
        <br />
        PHRASE
      </div>

      {/* Right: Tagline */}
      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <p
          className={`text-xl sm:text-2xl leading-snug font-${style.bodyFont}`}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
}
