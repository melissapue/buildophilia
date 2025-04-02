'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sloganLines = ['From Idea to Impact', 'Creativity in Motion'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 text-[#FF2725] overflow-hidden pb-14">
      {/* Logo */}
      <div className="w-full max-w-5xl relative z-10 mb-8">
        <Image
          src="/Ophilia_Landing_cropped.png"
          alt="O P H : I L I A"
          width={1500}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Animated slogan */}
      <div className="z-10 space-y-4 text-2xl sm:text-3xl font-silkscreen tracking-wider leading-normal">
        {sloganLines.map((line, lineIndex) => (
          <motion.p
            key={lineIndex}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: lineIndex * 1.5,
                },
              },
            }}
            className="flex justify-center"
          >
            {line.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="mr-2 flex">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}

            {lineIndex === sloganLines.length - 1 && (
              <motion.span
                className="ml-1 animate-blink"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                  delay: lineIndex * 1.5 + line.length * 0.05,
                }}
              >
                |
              </motion.span>
            )}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
