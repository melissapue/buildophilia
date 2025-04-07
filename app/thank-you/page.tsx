'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#FAFAF9] bg-cover bg-center"
      style={{ backgroundImage: "url('/paper-bg.png')" }}
    >
      <h1 className="text-3xl font-bold mb-2 text-red-600">
        Thank you for signing up!
      </h1>
      <p className="text-gray-600 animate-pulse">
        We’re getting your brand insights ready…
      </p>
    </div>
  );
}
