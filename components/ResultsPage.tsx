// --- components/ResultsPage.tsx ---
'use client';

import { useEffect, useState } from 'react';
import ResultsIntro from './ResultsIntro';
import ResultSlide1 from './ResultSlide1';
import ResultSlide2 from './ResultSlide2';
import ResultSlide3 from './ResultSlide3';
import ResultSlide4 from './ResultSlide4';
import ResultSlide5 from './ResultSlide5';

export default function ResultsPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  const resultData = {
    brandName: 'Ophilia',
    brandTagline: 'From Idea to Impact — Where Creativity Finds Its Flow.',
    tone: 'Direct, imaginative, emotionally intelligent—with a touch of fire and flow.',
    keywords: ['Clarity', 'Transformation', 'Empowerment'],
    origin:
      'Born from founder frustration. Built by a creative mind, for creative minds.',
    mood: 'Clean, bold, slightly nostalgic. A modern take on early internet creativity with a rebellious edge.',
  };

  const resultSlides = [
    <ResultsIntro onSkip={() => setSlideIndex(1)} />,
    <ResultSlide1
      brandName={resultData.brandName}
      tagline={resultData.brandTagline}
    />,
    <ResultSlide2 tone={resultData.tone} />,
    <ResultSlide3 origin={resultData.origin} />,
    <ResultSlide4 keywords={resultData.keywords} />,
    <ResultSlide5 mood={resultData.mood} />,
  ];

  const goNext = () => {
    if (slideIndex < resultSlides.length - 1) setSlideIndex(slideIndex + 1);
  };

  const goBack = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goBack();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [slideIndex]);

  return (
    <div className="relative w-screen h-screen bg-[#FAFAF9] text-[#FF2725] px-6 py-12">
      {slideIndex > 0 && (
        <button
          onClick={goBack}
          className="absolute bottom-6 left-6 z-50 font-reeniebeanie text-white text-4xl sm:text-5xl hover:opacity-80 transition"
          aria-label="Previous Slide"
        >
          ←
        </button>
      )}

      {slideIndex < resultSlides.length - 1 && (
        <button
          onClick={goNext}
          className="absolute bottom-6 right-6 z-50 font-reeniebeanie text-white text-4xl sm:text-5xl hover:opacity-80 transition"
          aria-label="Next Slide"
        >
          →
        </button>
      )}

      <div className="h-full flex items-center justify-center">
        {resultSlides[slideIndex]}
      </div>
    </div>
  );
}
