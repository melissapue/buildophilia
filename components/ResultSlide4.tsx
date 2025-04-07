'use client';

export default function ResultSlide4() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12 overflow-hidden"
      style={{
        backgroundColor: '#0099FF',
        color: '#F5F5F5',
      }}
    >
      <div className="text-[6rem] sm:text-[9rem] font-reeniebeanie leading-[1.05] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE
        <br />
        SWEET
        <br />
        SPOT
      </div>

      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <p className="text-base sm:text-lg leading-relaxed font-instrumentSans">
          Ophilia isn't just about branding. It listens. It reframes. It asks
          the deeper questions most startups skip. It turns inner chaos into
          outer clarity — through language, design, and intuition.
        </p>
      </div>
    </div>
  );
}
