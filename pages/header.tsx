import React, { useEffect, useState } from 'react';
import { useLocalization } from './LocalizationContext';

const names = ['Mero', 'mstrv', 'merowo', 'Mae'];

const Header: React.FC = () => {
  const { localization } = useLocalization();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      const totalLength = displayedText.length + currentName.length;

      let deleteIndex = displayedText.length; // Start with the full current displayed text
      let newText = '';

      const interval = setInterval(() => {
        if (deleteIndex > 0) {
          // Delete one letter
          newText = displayedText.slice(0, deleteIndex - 1);
          setDisplayedText(newText);
          deleteIndex--;
        } else if (newText.length < currentName.length) {
          // Add one letter
          newText += currentName[newText.length];
          setDisplayedText(newText);
        } else {
          clearInterval(interval);
          // Update the current index to move to the next name
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, 150); // Change name every 150 milliseconds

      // Clear the interval when finished
      return () => clearInterval(interval);
    };

    const intervalId = setInterval(animateText, 3600); // Change name every 3.6 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [displayedText, currentIndex]);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2" aria-live="polite">
          {localization?.headerText} <span>{displayedText}</span>
          <span className="cursor">|</span>
        </h1>
        {/* Image */}
        <div className="image-container">
          <img
            src="https://cdn.discordapp.com/avatars/852891241125117962/b013add19a2dfcc0af6fd82abc070b33.webp?size=1024&width=4096&height=4096"
            alt="Profile picture"
            height="200"
            width="200"
          />
        </div>
        <p>
          I go by{' '}
          <span className="pronoun">
            <a href="https://en.pronouns.page/@mstrv" target="_blank" rel="noopener noreferrer">
              any/all
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
