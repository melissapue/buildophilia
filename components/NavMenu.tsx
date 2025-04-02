'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic styling based on isOpen
  const logoColor = isOpen ? 'text-white' : 'text-[#FF2725]';
  const dotColor = isOpen ? 'bg-white' : 'bg-[#FF2725]';

  return (
    <>
      {/* Floating Dot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 w-4 h-4 rounded-full hover:scale-110 transition-all duration-300 ${dotColor}`}
        aria-label="Toggle Navigation"
      />

      {/* O P : Logo (top left) */}
      <Link
        href="/"
        className={`fixed top-4 left-4 z-50 font-francois text-xl tracking-wider transition-colors duration-300 ${logoColor}`}
      >
        O P :
      </Link>

      {/* Fullscreen Overlay Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 z-40 bg-[#FF2725] text-white flex flex-col items-center justify-center space-y-12 text-6xl sm:text-7xl font-instrumentSerif tracking-tight px-4 text-center leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/journey" onClick={() => setIsOpen(false)}>
              Start
            </Link>
            <Link href="/results" onClick={() => setIsOpen(false)}>
              Results
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
