import React, { useState } from 'react';
import profiles from '../data/berlin.json';

export default function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = profiles.reduce((acc, profile) => {
    if (!acc.includes(profile.country)) {
      acc.push(profile.country);
    }
    return acc;
  }, []);

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook-page">
      <div className="country-buttons">
        {countries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleClick(country)}
            className={selectedCountry === country ? 'profile-active' : ''}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        {profiles.map((profile) => (
          <div
            key={profile.firstName}
            className={
              selectedCountry === profile.country
                ? 'profile-active facebook-container'
                : 'profile facebook-container'
            }
          >
            <img src={profile.img} alt={profile.firstName} />
            <div className="facebook-user-container">
              <p>First Name: {profile.firstName}</p>
              <p>Last Name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
