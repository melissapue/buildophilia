'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Slide5Props {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
  formData: {
    mood: string;
    description: string;
    audience: string;
    tone: string;
  };
  setResult: (data: any) => void;
}

export default function Slide5({
  value,
  onChange,
  onNext,
  onBack,
  formData,
  setResult,
}: Slide5Props) {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/me');
        if (res.ok) {
          const data = await res.json();
          setUserId(data.user.id);
        } else {
          setUserId(null);
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    }

    fetchUser();
  }, []);

  async function handleGenerate() {
    if (!userId) {
      onNext(); // ➡️ take them to SlideConfirm instead of blocking
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          ...formData,
          mood: value, // final mood comes from this slide
        }),
      });

      const data = await res.json();
      setResult(data.result);
      onNext();
    } catch (err) {
      console.error('Generation failed:', err);
      alert('Something went wrong while generating 🙁');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-6 sm:px-20 py-12 gap-12 text-white">
      {/* Left: headline */}
      <div className="text-[6rem] sm:text-[8rem] font-reeniebeanie leading-[1.1] text-left sm:pl-20">
        Feel
        <br />
        Your
        <br />
        Brand
      </div>

      {/* Right: prompt + input */}
      <div className="flex flex-col justify-end items-start w-full max-w-2xl h-full">
        <div className="space-y-6 w-full max-w-xl">
          <p className="text-sm sm:text-base font-instrumentSans text-white leading-snug opacity-80 text-left">
            What’s the one word that captures your brand’s energy?
          </p>

          <div className="bg-white text-black rounded-xl shadow-lg p-6 relative h-[20rem] sm:h-[24rem] border border-[#DCDCDC]">
            <div className="flex space-x-2 absolute top-3 left-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            <p className="uppercase text-sm sm:text-base font-silkscreen text-[#FF2725] pl-8 pt-8 mb-4">
              Explain the "Feeling"
            </p>

            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="So glad you asked..."
              className="w-full h-full resize-none bg-transparent outline-none font-reeniebeanie text-lg sm:text-xl placeholder:text-[#C2B59B] tracking-wide"
              style={{ lineHeight: '1.75rem', paddingTop: '1.25rem' }}
            />

            <div className="absolute bottom-4 right-4 font-silkscreen text-[#FF2725] text-sm sm:text-base cursor-pointer hover:opacity-80 uppercase tracking-widest">
              <button onClick={handleGenerate} disabled={loading}>
                {loading ? 'Generating . . .' : 'See your brand →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
