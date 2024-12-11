'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import api from 'axios';

export default function OfferLetterForm() {
  const [formData, setFormData] = useState({
    applicantEmail: '',
    position: '',
    salary: '',
    startDate: '',
    additionalDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/offer-letters', formData);
      toast.success('Offer letter sent successfully!');
    } catch (error) {
      toast.error('Failed to send offer letter');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Applicant Email"
        onChange={(e) => setFormData({...formData, applicantEmail: e.target.value})}
        className="w-full p-2 border rounded"
      />
      {/* Add other form fields */}
    </form>
  );
} 