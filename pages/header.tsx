import React, { useEffect, useState } from 'react';
import { useLocalization } from './LocalizationContext'; // Adjust the path as necessary

const names = ['Mero', 'mstrv', 'merowo', 'Mae'];
export default function Header() {
  const { localization } = useLocalization();
  const [displayedText, setDisplayedText] = useState('');
  let currentIndex = 0;

  useEffect(() => {
    const textElement = document.getElementById('name');

    if (!textElement) return; // Check if element is not null

    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      let text = textElement.textContent || '';

      // Delete previous name letter by letter
      for (let i = text.length; i >= 0; i--) {
        setTimeout(() => {
          text = textElement.textContent?.slice(0, -1) || ''; // Remove the last character safely
          if (textElement) {
            textElement.textContent = text;
          }
        }, (text.length - i) * 150); // Delete one letter every 150 milliseconds
      }

      // Add new name letter by letter
      for (let i = 0; i < currentName.length; i++) {
        setTimeout(() => {
          text += currentName[i];
          if (textElement) {
            textElement.textContent = text;
            setDisplayedText(text);
          }
        }, (text.length + i) * 150); // Add one letter every 150 milliseconds after deleting previous name
      }

      currentIndex++; // Move to the next name
    };

    const interval = setInterval(animateText, 3600); // Change name every 3.6 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2">
          {localization?.headerText} <span id="name">{displayedText}</span>
          <span className="cursor">|</span>
        </h1>
        {/* Image */}
        <div className="image-container">
          <img
            src="https://cdn.discordapp.com/avatars/852891241125117962/a_31120f0f322c9e1127cb613ef059dc32.gif?size=4096"
            alt="PFP"
            height="200"
            width="200"
          />
        </div>
        <p>
          I go by{' '}
          <span className="pronoun">
            <a href="https://en.pronoun.page/@mstrv" target="_blank" rel="noopener noreferrer">
              any/all
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

