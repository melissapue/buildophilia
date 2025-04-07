'use client';

export default function ResultSlide5() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12 overflow-hidden"
      style={{
        backgroundColor: '#FF2725',
        color: '#F5F5F5',
      }}
    >
      <div className="text-[6rem] sm:text-[9rem] font-reeniebeanie leading-[1.05] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE
        <br />
        SUPER
        <br />
        POWER
      </div>

      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <p className="text-base sm:text-lg leading-relaxed font-instrumentSans">
          You’re not building just a brand. You’re shaping how the world
          understands your mind. Ophilia helps you say the thing you’ve always
          known — but never had the words for.
        </p>
      </div>
    </div>
  );
}
