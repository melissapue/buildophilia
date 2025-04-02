'use client';

import { ReactNode } from 'react';

export default function SlideContainer({
  children,
  background,
}: {
  children: ReactNode;
  background: string;
}) {
  return (
    <section
      style={{ backgroundColor: background }}
      className="w-screen h-screen overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-6">
        {children}
      </div>
    </section>
  );
}
