'use client';

import { moodStyleMap } from '@/lib/moodStyleMap';

interface ResultSlide1Props {
  brandName: string;
  tagline: string;
  mood?: string;
}

export default function ResultSlide1({
  brandName,
  tagline,
  mood,
}: ResultSlide1Props) {
  const style = moodStyleMap[mood ?? 'default'];

  return (
    <div
      className="w-full h-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12"
      style={{
        backgroundColor: style.background,
        color: style.textColor,
      }}
    >
      {/* Left: BIGGER & CENTERED “Who You Are” */}
      <div className="text-[6rem] sm:text-[9rem] font-reeniebeanie leading-[1.05] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE DESIGN
        <br />
        OF YOUR
        <br />
        IDENTITY
      </div>

      {/* Right: Brand identity from AI */}
      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <h3 className="text-xl sm:text-2xl font-silkscreen uppercase tracking-widest">
          {brandName}
        </h3>

        <p
          className={`text-base sm:text-lg leading-relaxed font-${style.bodyFont}`}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
}
