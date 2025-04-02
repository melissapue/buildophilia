'use client';

interface Slide4Props {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Slide4({
  value,
  onChange,
  onNext,
  onBack,
}: Slide4Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-6 sm:px-20 py-12 gap-12 text-white">
      {/* Left: stacked headline */}
      <div className="text-[5rem] sm:text-[7rem] font-reeniebeanie leading-[1.1] text-left sm:pl-20">
        Why
        <br />
        Should
        <br />
        Your Brand
        <br />
        Exist
      </div>

      {/* Right: prompt + input */}
      <div className="flex flex-col justify-end items-start w-full max-w-2xl h-full">
        <div className="space-y-6 w-full max-w-xl">
          {/* Prompt */}
          <p className="text-sm sm:text-base font-instrumentSans text-white leading-snug opacity-80 text-left">
            What’s the drama your brand was born to solve?
            <span className="italic font-normal"> One sentence only.</span>
          </p>

          {/* Input card */}
          <div className="bg-white text-black rounded-xl shadow-lg p-6 relative h-[20rem] sm:h-[24rem] border border-[#DCDCDC]">
            {/* Dots */}
            <div className="flex space-x-2 absolute top-3 left-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Label */}
            <p className="uppercase text-sm sm:text-base font-silkscreen text-[#FF2725] pl-8 pt-8 mb-4">
              Explain the "Why"
            </p>

            {/* Textarea */}
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="So glad you asked..."
              className="w-full h-full resize-none bg-transparent outline-none font-reeniebeanie text-lg sm:text-xl placeholder:text-[#C2B59B] tracking-wide"
              style={{
                lineHeight: '1.75rem',
                paddingTop: '1.25rem',
              }}
            />

            {/* CTA */}
            <div className="absolute bottom-4 right-4 font-silkscreen text-[#FF2725] text-sm sm:text-base cursor-pointer hover:opacity-80 uppercase tracking-widest">
              <button onClick={onNext}>Continue . . .</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
