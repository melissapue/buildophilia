'use client';

interface ResultsIntroProps {
  onSkip: () => void;
}

export default function ResultsIntro({ onSkip }: ResultsIntroProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-6 sm:px-20 py-12 gap-12 text-[#FF2725] bg-[#FAFAF9]">
      {/* Left: Headline */}
      <div className="text-[4rem] sm:text-[6rem] font-reeniebeanie leading-[1.1] text-left sm:pl-12">
        Thanks,
        <br />
        innovator!
      </div>

      {/* Right: Signup form UI */}
      <div className="flex flex-col justify-start items-start w-full max-w-md space-y-6">
        {/* ✅ FORM */}
        <form
          className="w-full space-y-4"
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            console.log('Form submitted');
          }}
        >
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-silkscreen">First name*</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-silkscreen">Email*</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-silkscreen">Password*</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF2725] text-white font-silkscreen text-sm sm:text-base px-6 py-3 rounded hover:opacity-90 transition w-full"
          >
            Sign Up
          </button>
        </form>

        {/* ✅ OUTSIDE THE FORM → SKIP */}
        <div className="w-full pt-2 space-y-2">
          <p className="text-sm text-center font-silkscreen italic text-[#FF2725]">
            Sign up to save your results and keep the momentum going.
          </p>

          <div className="w-full text-center">
            <button
              onClick={onSkip}
              className="text-xs sm:text-sm font-silkscreen text-[#FF2725] underline hover:opacity-80"
            >
              Skip and see results →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
