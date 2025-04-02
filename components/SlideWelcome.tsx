'use client';

import { useEffect, useState } from 'react';

export default function SlideWelcome({ onNext }: { onNext: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      onClick={onNext}
      className="w-full h-full flex flex-col justify-center items-start text-[#FF2725] px-6 pt-24 pb-8 overflow-hidden cursor-pointer"
    >
      {/* Hello there */}
      <div className="text-6xl sm:text-8xl font-reeniebeanie leading-snug text-left sm:pl-12 z-10">
        Hello
        <br />
        there!
      </div>

      {/* Bottom-left footer */}
      <div className="absolute bottom-8 left-6 sm:left-12 text-left text-xs sm:text-sm font-silkscreen leading-snug space-y-1 z-10">
        <p className="uppercase">Creativity in Motion</p>
        <p className="italic font-instrumentSerif">
          – Simple like a sketch,
          <br className="hidden sm:block" />
          interactive like a thought
        </p>
      </div>

      {/* Mouse-following START (visual only) */}
      <div
        className="fixed z-50 font-reeniebeanie text-[#FF2725] text-base sm:text-lg pointer-events-none"
        style={{
          top: pos.y + 10,
          left: pos.x + 10,
        }}
      >
        • START
      </div>
    </div>
  );
}
