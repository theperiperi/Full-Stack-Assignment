'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import api from 'axios';

interface User {
  role: 'RECRUITER' | 'APPLICANT';
  email?: string;
  name?: string;
}

export default function OfferLetterDashboard() {
  const { data: session } = useSession();
  const [offers, setOffers] = useState([]);

  const userRole = (session?.user as User)?.role;

  return (
    <div>
      {userRole === 'RECRUITER' && (
        <div>
          <h2>Sent Offers</h2>
          {/* Display sent offers */}
        </div>
      )}
      
      {userRole === 'APPLICANT' && (
        <div>
          <h2>Received Offers</h2>
          {/* Display received offers with accept/reject buttons */}
        </div>
      )}
    </div>
  );
} 