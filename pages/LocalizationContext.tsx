import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

// Define Localization and LocalizationContextType interfaces
interface Localization {
  [key: string]: string;
}

interface LocalizationContextType {
  localization: Localization | null;
  setLanguage: (lang: string) => void;
  language: string;
}

// Create context
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Custom hook to use the localization context
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
};

// Define LocalizationProvider component
export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage('language', 'en');
  const initialLanguage = storedLanguage || 'en'; // Ensure consistent initial value
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [localization, setLocalization] = useState<Localization | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  // Fetch localization data from the server
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
      const localizationData = await fetchLocalization(language);
      setLocalization(localizationData);
      setLoading(false); // Set loading to false after fetching
    };

    loadLocalization();
  }, [language]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setStoredLanguage(lang);
  };

  // Show a loading state if localization is not yet loaded
  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  return (
    <LocalizationContext.Provider value={{ localization, setLanguage: handleLanguageChange, language }}>
      <div className="localization-provider">
        {children}
        {/* Language Selector Dropdown */}
        <div className="language-selector">
          <CustomDropdown currentLang={language} onLangChange={handleLanguageChange} />
        </div>
      </div>
    </LocalizationContext.Provider>
  );
};

// Custom dropdown component
const CustomDropdown: React.FC<{ currentLang: string; onLangChange: (lang: string) => void }> = ({ currentLang, onLangChange }) => {
  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
    { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w20/pl.png' },
    { code: 'jp', name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
  ];
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

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
