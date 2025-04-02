import Hero from '@/components/Hero';
import MouseInkTrail from '@/components/MouseInkTrail';
import StartPitch from '@/components/StartPitch';

export default function HomePage() {
  return (
    <main className="relative w-full bg-paper bg-cover bg-center overflow-hidden">
      {/* Light white veil over paper */}
      <div className="absolute inset-0 bg-white opacity-60 pointer-events-none z-0" />

      {/* Page content (above the veil) */}
      <div className="relative z-10">
        <MouseInkTrail />
        <Hero />
        <StartPitch />
      </div>
    </main>
  );
}
