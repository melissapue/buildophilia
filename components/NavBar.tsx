'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isDark = pathname.startsWith('/results');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className={`font-francois text-xl tracking-wider transition-all ${
            isDark ? 'text-white' : 'text-[#FF2725]'
          }`}
        >
          O P :
        </Link>

        <div
          className={`space-x-8 font-instrumentSans text-lg sm:text-xl tracking-wide ${
            isDark ? 'text-white' : 'text-[#FF2725]'
          }`}
        >
          <Link href="/">
            <span className="uppercase">ABOUT</span>
          </Link>
          <Link href="/journey">
            <span className="uppercase">START</span>
          </Link>
          <Link href="/results">
            <span className="uppercase">RESULTS</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
