'use client';

import { useState } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import SlideConfirm from './SlideConfirm';
import SlideContainer from './SlideContainer';
import SlideWelcome from './SlideWelcome';

export default function Journey() {
  const [slideIndex, setSlideIndex] = useState(0);

  const [formData, setFormData] = useState({
    brandName: '',
    description: '',
    audience: '',
    tone: '',
    extra: '',
  });

  const goNext = () => {
    if (slideIndex < slides.length - 1) setSlideIndex(slideIndex + 1);
  };

  const goBack = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const slides = [
    {
      component: <SlideWelcome onNext={goNext} />,
      background: '#FAFAF9',
      navTitle: 'O P :',
    },
    {
      component: (
        <Slide1
          value={formData.brandName}
          onChange={(v) => updateField('brandName', v)}
          onNext={goNext}
          onBack={goBack}
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
          onNext={goNext}
          onBack={goBack}
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
          onNext={goNext}
          onBack={goBack}
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
          onNext={goNext}
          onBack={goBack}
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
          onNext={goNext}
          onBack={goBack}
        />
      ),
      background: '#0A00CF',
      navTitle: 'O P : F E E L',
    },
    {
      component: (
        <SlideConfirm
          onGetResults={() => console.log('Go to results')}
          onCreateAccount={() => console.log('Go to signup')}
        />
      ),
      background: '#FF2725',
      navTitle: 'O P :',
    },
  ];

  return (
    <div className="relative w-full h-full">
      {slideIndex > 0 && (
        <button
          onClick={goBack}
          className="absolute bottom-6 left-6 z-50 font-reeniebeanie text-white text-3xl sm:text-4xl hover:opacity-80 transition-all"
          aria-label="Go Back"
        >
          ←
        </button>
      )}

      <SlideContainer background={slides[slideIndex].background}>
        {slides[slideIndex].component}
      </SlideContainer>
    </div>
  );
}
