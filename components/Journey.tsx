'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ResultsIntro from './ResultsIntro';
import ResultsPage from './ResultsPage';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import SlideConfirm from './SlideConfirm';
import SlideContainer from './SlideContainer';
import SlideWelcome from './SlideWelcome';

// Define the shape of a generated result so TS + ESLint chill out
export type ResultType = {
  brandName: string;
  tagline: string;
  tone: string;
  origin: string;
  powerStatement: string;
  keywords: string[];
};

export default function Journey() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    brandName: '',
    description: '',
    audience: '',
    tone: '',
    extra: '',
    mood: '',
  });
  const [result, setResult] = useState<ResultType | null>(null);
  const router = useRouter();

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const slides = [
    {
      component: <SlideWelcome onNext={() => setSlideIndex(slideIndex + 1)} />, // 0
      background: '#FAFAF9',
      navTitle: 'O P :',
    },
    {
      component: (
        <Slide1
          value={formData.brandName}
          onChange={(v) => updateField('brandName', v)}
          onNext={() => setSlideIndex(slideIndex + 1)}
          onBack={() => setSlideIndex(slideIndex - 1)}
        />
      ),
      background: '#161616',
      navTitle: 'O P : W H O',
    },
    {
      component: (
        <Slide2
          value={formData.description}
          onChange={(v) => updateField('description', v)}
          onNext={() => setSlideIndex(slideIndex + 1)}
          onBack={() => setSlideIndex(slideIndex - 1)}
        />
      ),
      background: '#57171E',
      navTitle: 'O P : W H A T',
    },
    {
      component: (
        <Slide3
          value={formData.audience}
          onChange={(v) => updateField('audience', v)}
          onNext={() => setSlideIndex(slideIndex + 1)}
          onBack={() => setSlideIndex(slideIndex - 1)}
        />
      ),
      background: '#C93200',
      navTitle: 'O P : H O W',
    },
    {
      component: (
        <Slide4
          value={formData.tone}
          onChange={(v) => updateField('tone', v)}
          onNext={() => setSlideIndex(slideIndex + 1)}
          onBack={() => setSlideIndex(slideIndex - 1)}
        />
      ),
      background: '#094200',
      navTitle: 'O P : W H Y',
    },
    {
      component: (
        <Slide5
          value={formData.extra}
          onChange={(v) => updateField('extra', v)}
          onNext={() => setSlideIndex(slideIndex + 1)}
          onBack={() => setSlideIndex(slideIndex - 1)}
          formData={formData}
          setResult={setResult}
        />
      ),
      background: '#0A00CF',
      navTitle: 'O P : F E E L',
    },
    {
      component: (
        <SlideConfirm
          onGetResults={() => setSlideIndex(slideIndex + 1)}
          onCreateAccount={() => router.push('/signup?redirect=/journey')}
        />
      ),
      background: '#FF2725',
      navTitle: 'O P :',
    },
    {
      component: <ResultsIntro onSkip={() => setSlideIndex(slideIndex + 1)} />,
      background: '#FAFAF9',
      navTitle: 'O P :',
    },
    {
      component: <ResultsPage result={result ?? undefined} />, // ✅ cast null fallback to undefined to match prop type
      background: '#FFFFFF',
      navTitle: 'O P : R E S U L T S',
    },
  ];

  return (
    <div className="relative w-full h-full">
      {slideIndex > 0 && (
        <button
          onClick={() => setSlideIndex(slideIndex - 1)}
          className="absolute bottom-6 left-6 z-50 font-reeniebeanie text-white text-3xl sm:text-4xl hover:opacity-80 transition-all"
          aria-label="Go Back"
        >
          ←
        </button>
      )}

      {slides[slideIndex] && (
        <SlideContainer background={slides[slideIndex].background}>
          {slides[slideIndex].component}
        </SlideContainer>
      )}
    </div>
  );
}
