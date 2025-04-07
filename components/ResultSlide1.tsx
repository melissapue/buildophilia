'use client';

export default function ResultSlide1() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col sm:flex-row justify-between items-center px-6 sm:px-20 py-12 gap-12 overflow-hidden"
      style={{
        backgroundColor: '#EDA8A8',
        color: '#F5F5F5',
      }}
    >
      <div className="text-[6rem] sm:text-[9rem] font-reeniebeanie leading-[1.05] text-left whitespace-pre-wrap sm:pl-28 sm:-ml-2">
        THE DESIGN
        <br />
        OF YOUR
        <br />
        IDENTITY
      </div>

      <div className="flex flex-col justify-center items-start space-y-4 max-w-md sm:max-w-lg w-full text-left mt-8 sm:mt-0">
        <h3 className="text-xl sm:text-2xl font-silkscreen uppercase tracking-widest">
          Ophilia
        </h3>
        <p className="text-base sm:text-lg leading-relaxed font-instrumentSans">
          You specialize in turning early-stage chaos into narrative clarity —
          helping founders go from foggy ideas to distinct, market-ready
          identities.
        </p>
      </div>
    </div>
  );
}
