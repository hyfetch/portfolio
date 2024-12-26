import React, { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { useLocalStorage } from 'react-use';

// Localization Context Types
interface Localization {
  [key: string]: string;
}

interface LocalizationContextType {
  localization: Localization | null;
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the Localization Context
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Custom hook to use Localization context
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
};

// Supported languages
const supportedLanguages = ['en', 'es', 'de', 'ru', 'pl', 'jp'];

// Helper function to get the browser's language
const getBrowserLanguage = (): string => {
  const browserLanguage = typeof window === 'undefined' ? 'en' : navigator.language
  const langCode = browserLanguage.split('-')[0];
  return supportedLanguages.includes(langCode) ? langCode : 'en';
};

// Function to fetch localization data
const fetchLocalization = async (lang: string, cache: { [key: string]: Localization }) => {
  if (cache[lang]) return cache[lang];

  try {
    const response = await fetch(`/localization/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to fetch localization for ${lang}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return await fetchFallbackLocalization(cache);
  }
};

// Fetch fallback localization if the language data is not available
const fetchFallbackLocalization = async (cache: { [key: string]: Localization }) => {
  try {
    const response = await fetch(`/localization/en.json`);
    if (response.ok) {
      const fallbackData = await response.json();
      cache['en'] = fallbackData;
      return fallbackData;
    }
  } catch (error) {
    console.error("Fallback fetch failed:", error);
  }
  return null;
};

// Localization Provider Component
export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage('language', '');
  const [language, setLanguage] = useState<string>(storedLanguage || getBrowserLanguage());
  const [localization, setLocalization] = useState<Localization | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cache, setCache] = useState<{ [key: string]: Localization }>({});

  // Set language and fetch localization data when language changes
  useEffect(() => {
    const loadLocalization = async () => {
      setLoading(true);
      const localizationData = await fetchLocalization(language, cache);
      setLocalization(localizationData);
      setLoading(false);
    };

    if (language) {
      loadLocalization();
      setStoredLanguage(language);
    }
  }, [language, cache, setStoredLanguage]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  // Memoize context value to avoid unnecessary renders
  const contextValue = useMemo(() => ({
    localization,
    setLanguage: handleLanguageChange,
    language,
  }), [localization, language]);

  if (loading) return <div>Loading localization...</div>;

  return (
    <LocalizationContext.Provider value={contextValue}>
      <div className="localization-provider">
        {children}
        {localization === null ? (
          <div className="missing-localization">
            TODO: Add localization for {language}
          </div>
        ) : (
          <CustomDropdown currentLang={language} onLangChange={handleLanguageChange} />
        )}
      </div>
    </LocalizationContext.Provider>
  );
};

// Custom Dropdown Component for Language Selection
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

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(prev => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
        <img src={languages.find(lang => lang.code === currentLang)?.flag} alt={currentLang} className="flag-icon" />
        {languages.find(lang => lang.code === currentLang)?.name}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="dropdown-item"
              onClick={() => onLangChange(lang.code)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onLangChange(lang.code)}
              aria-label={`Switch to ${lang.name}`}
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
