'use client';

import { moodStyleMap } from '@/lib/moodStyleMap';

interface ResultSlide4Props {
  keywords: string[];
  mood?: string;
}

export default function ResultSlide4({ keywords, mood }: ResultSlide4Props) {
  const style = moodStyleMap[mood ?? 'default'];

  return (
    <div
      className="w-full h-full flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12"
      style={{
        backgroundColor: style.background,
        color: style.textColor,
      }}
    >
      {/* Left: Label title */}
      <div className="text-[4rem] sm:text-[6rem] font-reeniebeanie leading-[1.1] text-left whitespace-pre-wrap sm:pl-24 sm:-ml-2">
        THE
        <br />
        SWEET
        <br />
        SPOT
      </div>

      {/* Right: keyword pills */}
      <div className="flex flex-wrap gap-3 max-w-md sm:max-w-lg mt-8 sm:mt-0">
        {keywords.map((word, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full border font-${style.bodyFont}`}
            style={{
              borderColor: style.textColor,
              color: style.textColor,
              backgroundColor: 'transparent',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
