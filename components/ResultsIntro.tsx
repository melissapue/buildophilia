'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ResultsIntroProps {
  onSkip: () => void;
}

export default function ResultsIntro({ onSkip }: ResultsIntroProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      try {
        const res = await fetch('/api/me');
        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      }
    }
    checkUser();
  }, []);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        onSkip(); // Continue to results
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-6 sm:px-20 py-12 gap-12 text-[#FF2725] bg-[#FAFAF9]">
      <div className="text-[4rem] sm:text-[6rem] font-reeniebeanie leading-[1.1] text-left sm:pl-12">
        Thanks,
        <br />
        innovator!
      </div>

      <div className="flex flex-col justify-start items-start w-full max-w-md space-y-6">
        {!isLoggedIn && (
          <form className="w-full space-y-4" onSubmit={handleSignup}>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-silkscreen">First name*</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-silkscreen">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-silkscreen">Password*</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-[#f3f3f3] text-sm"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF2725] text-white font-silkscreen text-sm sm:text-base px-6 py-3 rounded hover:opacity-90 transition w-full"
              disabled={loading}
            >
              {loading ? 'Signing up…' : 'Sign Up'}
            </button>
          </form>
        )}

        <div className="w-full pt-2 space-y-2">
          <p className="text-sm text-center font-silkscreen italic text-[#FF2725]">
            {isLoggedIn
              ? 'You are already logged in — continue to your results ✨'
              : 'Sign up to save your results and keep the momentum going.'}
          </p>

          <div className="w-full text-center">
            <button
              onClick={onSkip}
              className="text-xs sm:text-sm font-silkscreen text-[#FF2725] underline hover:opacity-80"
            >
              {isLoggedIn ? 'Continue →' : 'Skip and see results →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
