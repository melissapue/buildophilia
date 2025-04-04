'use client';

import { moodStyleMap } from '@/lib/moodStyleMap';

interface ResultSlide2Props {
  tone: string;
  mood?: string;
}

export default function ResultSlide2({ tone, mood }: ResultSlide2Props) {
  const style = moodStyleMap[mood ?? 'default'];

  return (
    <div
      className="w-full h-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12"
      style={{
        backgroundColor: style.background,
        color: style.textColor,
      }}
    >
      {/* Left: title, sketch-style */}
      <div className="text-[4rem] sm:text-[6rem] font-reeniebeanie leading-[1.1] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE
        <br />
        NAME
        <br />
        THAT
        <br />
        STICKS
      </div>

      {/* Right: Tone / Voice summary */}
      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <h3 className="text-sm sm:text-base font-silkscreen uppercase tracking-wider opacity-80">
          You sound like...
        </h3>

        <p
          className={`text-base sm:text-lg leading-relaxed font-${style.bodyFont}`}
        >
          {tone}
        </p>
      </div>
    </div>
  );
}
