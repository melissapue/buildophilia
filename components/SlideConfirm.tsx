'use client';

interface SlideConfirmProps {
  onGetResults: () => void;
  onCreateAccount: () => void;
}

export default function SlideConfirm({
  onGetResults,
  onCreateAccount,
}: SlideConfirmProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-6 sm:px-20 py-12 gap-12 text-white">
      {/* Left: sketchy visual statement */}
      <div className="text-[5rem] sm:text-[8rem] font-reeniebeanie leading-[1.05] text-left sm:pl-20 whitespace-pre-wrap">
        IDEA
        <br />
        {'<>'}
        <br />
        IMPACT
      </div>

      {/* Right: call to action */}
      <div className="flex flex-col justify-center items-start space-y-6 max-w-md w-full">
        <p className="font-instrumentSans text-base sm:text-lg text-white">
          Ophilia confirmed potential.
          <br />
          Building begins now . . .
        </p>

        <div className="flex flex-row gap-4">
          <button
            onClick={onGetResults}
            className="bg-white text-[#FF2725] font-silkscreen text-sm sm:text-base px-6 py-3 rounded hover:opacity-90 transition"
          >
            Get Results
          </button>

          <button
            onClick={onCreateAccount}
            className="bg-[#ffffff22] text-white font-silkscreen text-sm sm:text-base px-6 py-3 rounded border border-white/20 hover:opacity-90 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
