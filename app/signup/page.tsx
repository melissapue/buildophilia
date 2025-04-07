'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const password = formData.password;

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/thank-you'); // 🔁 Replace later with actual register call
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-[#FAFAF9] bg-cover bg-center"
      style={{ backgroundImage: "url('/paper-bg.png')" }}
    >
      <form onSubmit={handleSubmit} className="max-w-md w-full p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-red-600 font-semibold">
            Full name*
          </label>
          <input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-red-600 font-semibold">
            Email*
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-red-600 font-semibold"
          >
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2 text-xl"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <button className="bg-red-500 text-white py-2 w-full rounded mt-4">
          Sign Up
        </button>

        <ul className="text-sm text-gray-600 mt-4 space-y-1">
          <li className={validations.length ? 'text-green-600' : ''}>
            • At least 8 characters
          </li>
          <li className={validations.uppercase ? 'text-green-600' : ''}>
            • One uppercase letter
          </li>
          <li className={validations.lowercase ? 'text-green-600' : ''}>
            • One lowercase letter
          </li>
          <li className={validations.digit ? 'text-green-600' : ''}>
            • One digit
          </li>
          <li className={validations.special ? 'text-green-600' : ''}>
            • One special character
          </li>
        </ul>
      </form>
    </div>
  );
}
