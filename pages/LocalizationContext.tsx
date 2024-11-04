import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

interface Localization {
  [key: string]: string;
}

interface LocalizationContextType {
  localization: Localization | null;
  setLanguage: (lang: string) => void;
  language: string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
};

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage('language', '');
  const [language, setLanguage] = useState<string>(''); // Start with an empty string
  const [localization, setLocalization] = useState<Localization | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const supportedLanguages = ['en', 'es', 'de', 'ru', 'pl', 'jp'];

  // Get initial language based on browser settings
  const getBrowserLanguage = () => {
    const browserLanguage = navigator.language
    // Check for Japanese language
    if (browserLanguage === 'ja') {
      return 'jp'; // Set to 'jp' for Japanese
    }
    // Okay, so the reason why this is implemented, is that  browsers return JA as language code  on the navigator.language, which is frankly... weird, but who am i to judge?
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
  };

  useEffect(() => {
    const initialLanguage = storedLanguage || getBrowserLanguage(); // Get language based on stored or browser
    const finalLanguage = supportedLanguages.includes(initialLanguage) ? initialLanguage : 'en';

    console.log("Initial language set to:", finalLanguage); // Debug log
    setLanguage(finalLanguage);
    
    // Set stored language only if there was none
    if (!storedLanguage) {
      setStoredLanguage(finalLanguage); // Save the determined language to local storage
    }
  }, [storedLanguage, setStoredLanguage]);

  const fetchLocalization = async (lang: string) => {
    try {
      const response = await fetch(`/localization/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch localization file for ${lang}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      const fallbackResponse = await fetch(`/localization/en.json`);
      return fallbackResponse.ok ? await fallbackResponse.json() : null;
    }
  };

  useEffect(() => {
    const loadLocalization = async () => {
      setLoading(true);
      const localizationData = await fetchLocalization(language);
      setLocalization(localizationData);
      setLoading(false);
    };

    if (language) { // Only load localization if language is set
      loadLocalization();
    }
  }, [language]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setStoredLanguage(lang); // Update stored language on manual change
  };

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  return (
    <LocalizationContext.Provider value={{ localization, setLanguage: handleLanguageChange, language }}>
      <div className="localization-provider">
        {children}
        <div className="language-selector">
          <CustomDropdown currentLang={language} onLangChange={handleLanguageChange} />
        </div>
      </div>
    </LocalizationContext.Provider>
  );
};

const CustomDropdown: React.FC<{ currentLang: string; onLangChange: (lang: string) => void }> = ({ currentLang, onLangChange }) => {
  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
    { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w20/pl.png' },
    { code: 'jp', name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img
          src={languages.find(lang => lang.code === currentLang)?.flag}
          alt=""
          className="flag-icon"
        />
        {languages.find(lang => lang.code === currentLang)?.name}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="dropdown-item"
              onClick={() => {
                onLangChange(lang.code);
                setIsOpen(false);
              }}
            >
              <img src={lang.flag} alt={lang.name} className="flag-icon" />
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocalizationProvider;
