'use client';

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
} 