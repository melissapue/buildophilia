'use client';

export default function ResultSlide2() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12 overflow-hidden"
      style={{
        backgroundColor: '#FF850A',
        color: '#F5F5F5',
      }}
    >
      <div className="text-[6rem] sm:text-[9rem] font-reeniebeanie leading-[1.05] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE
        <br />
        NAME
        <br />
        THAT
        <br />
        STICKS
      </div>

      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <p className="text-base sm:text-lg leading-relaxed font-instrumentSans">
          “Ophilia” is a reinterpretation of the tragic — a name rooted in
          softness, madness, and beauty reclaimed. It’s about giving power to
          emotion. Feminine but sharp. A name that remembers, reframes, and
          reclaims.
        </p>
      </div>
    </div>
  );
}
