'use client';

import { useSession } from 'next-auth/react';
import LoginButton from '../components/LoginButton';
import OfferLetterForm from '../components/OfferLetterForm';
import OfferLetterDashboard from '../components/OfferLetterDashboard';

interface User {
  role: 'RECRUITER' | 'APPLICANT';
  email?: string;
  name?: string;
}

export default function Home() {
  const { data: session } = useSession();
  const userRole = (session?.user as User)?.role;

  return (
    <main className="min-h-screen p-8">
      {!session ? (
        <LoginButton />
      ) : (
        <div className="space-y-8">
          <h1>Welcome, {session.user?.name}</h1>
          
          {userRole === 'RECRUITER' && (
            <div>
              <h2>Create New Offer Letter</h2>
              <OfferLetterForm />
            </div>
          )}
          
          <OfferLetterDashboard />
        </div>
      )}
    </main>
  );
} 