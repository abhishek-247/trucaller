"use client"
import { getTruecallerProfile } from '@/app/api/route';
import React, { useState } from 'react';

const TruecallerComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profile, setProfile] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchProfile = async () => {
    const result = await getTruecallerProfile(phoneNumber);
    if ('firstName' in result) {
      setProfile(result);
      setError(null);
    } else {
      setError(result.message);
      setProfile(null);
    }
  };

  return (
    <div>
      <h1>Truecaller Profile Fetcher</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleFetchProfile}>Fetch Profile</button>
      {profile && (
        <div>
          <h2>Profile Details</h2>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Phone Number: {profile.phoneNumber}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TruecallerComponent;
