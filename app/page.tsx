import Hero from '../components/Hero';
import MouseInkTrail from '../components/MouseInkTrail';
import StartPitch from '../components/StartPitch';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAF9] text-[#FF2725] overflow-hidden">
      <Hero />
      <MouseInkTrail />
      <StartPitch />
    </main>
  );
}
