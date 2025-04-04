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
    brandName: 'Hex & Co.',
    brandTagline: 'Turning chaos into clarity — one spell at a time.',
    tone: 'Mystical, precise, bold',
    keywords: ['Ritual', 'Founders', 'Transformation'],
    origin: 'Born from late-night dreams and coffee-stained notebooks...',
    mood: 'Focused magic',
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

  // Optional: keyboard arrows (can be removed if not wanted)
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
      {/* ← Back Arrow */}
      {slideIndex > 0 && (
        <button
          onClick={goBack}
          className="absolute bottom-6 left-6 z-50 font-reeniebeanie text-white text-4xl sm:text-5xl hover:opacity-80 transition"
          aria-label="Previous Slide"
        >
          ←
        </button>
      )}

      {/* → Next Arrow */}
      {slideIndex < resultSlides.length - 1 && (
        <button
          onClick={goNext}
          className="absolute bottom-6 right-6 z-50 font-reeniebeanie text-white text-4xl sm:text-5xl hover:opacity-80 transition"
          aria-label="Next Slide"
        >
          →
        </button>
      )}

      {/* Current Slide */}
      <div className="h-full flex items-center justify-center">
        {resultSlides[slideIndex]}
      </div>
    </div>
  );
}
