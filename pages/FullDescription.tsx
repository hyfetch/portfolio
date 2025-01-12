import React from 'react';
import { useLocalization } from './LocalizationContext';

const FullDescription: React.FC = () => {
  const { localization } = useLocalization();

  if (localization === null) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="full-description mb-8">
      <h2 className="text-2xl font-bold mb-4">{localization.title}</h2>
      <p className="mb-4">{localization.description}</p>
    </div>
  );
};

export default FullDescription;

