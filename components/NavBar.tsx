'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blretuhadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-francois text-xl tracking-wider">
          O P :
        </Link>
        <div className="space-x-6 font-instrumentSans text-sm sm:text-base">
          <Link
            href="/"
            className={`hover:underline ${
              pathname === '/' ? 'underline font-bold' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/journey"
            className={`hover:underline ${
              pathname === '/journey' ? 'underline font-bold' : ''
            }`}
          >
            Journey
          </Link>
          <Link
            href="/results"
            className={`hover:underline ${
              pathname === '/results' ? 'underline font-bold' : ''
            }`}
          >
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
}
