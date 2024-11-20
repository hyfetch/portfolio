import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

// Define the Localization type for key-value pairs
interface Localization {
  [key: string]: string;
}

// Define the context type for Localization
interface LocalizationContextType {
  localization: Localization | null;
  setLanguage: (lang: string) => void;
  language: string;
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

// LocalizationProvider component
export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage('language', '');
  const [language, setLanguage] = useState<string>('');
  const [localization, setLocalization] = useState<Localization | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cache, setCache] = useState<{ [key: string]: Localization }>({});

  // List of supported languages
  const supportedLanguages = ['en', 'es', 'de', 'ru', 'pl', 'jp']

  // Function to determine the browser's language
  const getBrowserLanguage = () => {
    const browserLanguage = navigator.language;
    let languageCode;

    console.log(`Navigator language: ${browserLanguage}`);

    // Check if the full language code is supported
    if (supportedLanguages.includes(browserLanguage)) {
      console.log(`Using navigator language ${browserLanguage}`);
      return browserLanguage === 'ja' ? 'jp' : browserLanguage; // Map 'ja' to 'jp'
    }

    // Extract primary language code
    const langCode = browserLanguage.split('-')[0];
    console.log(`Using primary language code ${langCode}`);

    if (langCode === 'ja') {
      console.log(`Using language code jp for ja`);
      return 'jp';
    }

    // Return the primary language code if it's supported, otherwise default to 'en'
    if (supportedLanguages.includes(langCode)) {
      console.log(`Using language code ${langCode}`);
      return langCode;
    } else {
      console.error(`Language ${browserLanguage} not supported, defaulting to English`);
      return 'en';
    }
  };

  // Initialize language and localization on component mount
  useEffect(() => {
    const initialLanguage = storedLanguage || getBrowserLanguage();
    const finalLanguage = supportedLanguages.includes(initialLanguage) ? initialLanguage : 'en';

    setLanguage(finalLanguage);

    if (!storedLanguage) {
      setStoredLanguage(finalLanguage);
    }
  }, [storedLanguage, setStoredLanguage]);

  // Fetch localization data based on the selected language
  const fetchLocalization = async (lang: string) => {
    if (cache[lang]) {
      return cache[lang];
    }

    const fetchLocalizationData = async (language: string) => {
      const response = await fetch(`/localization/${language}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch localization file for ${language}`);
      }
      return await response.json();
    };

    try {
      const data = await fetchLocalizationData(lang);
      setCache((prevCache) => ({ ...prevCache, [lang]: data }));
      return data;
    } catch (error) {
      console.error(error);
      return await fetchFallbackLocalization();
    }
  };

  const fetchFallbackLocalization = async () => {
    try {
      const fallbackResponse = await fetch(`/localization/en.json`);
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        setCache((prevCache) => ({ ...prevCache, en: fallbackData }));
        return fallbackData;
      }
    } catch (fallbackError) {
      console.error("Fallback fetch failed:", fallbackError);
    }
    return null;
  };



  // Load localization data whenever the language changes
  useEffect(() => {
    const loadLocalization = async () => {
      setLoading(true);
      const localizationData = await fetchLocalization(language);
      setLocalization(localizationData);
      setLoading(false);
    };

    if (language) {
      loadLocalization();
    }
  }, [language]);

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setStoredLanguage(lang);
  };

  // Memoize context value to prevent unnecessary renders
  const contextValue = useMemo(() => ({
    localization,
    setLanguage: handleLanguageChange,
    language,
  }), [localization, language]);

  // Show loading state while localization data is being fetched
  if (loading) {
    return <div>Loading localization...</div>;
  }

  return (
    <LocalizationContext.Provider value={contextValue}>
      <div className="localization-provider">
        {children}
        {localization === null ? (
          <div className="missing-localization">
            TODO: Add localization {language} key
          </div>
        ) : (
          <CustomDropdown currentLang={language} onLangChange={handleLanguageChange} />
        )}
      </div>
    </LocalizationContext.Provider>
  );
};

// Custom dropdown component for language selection
const CustomDropdown: React.FC<{ currentLang: string; onLangChange: (lang: string) => void }> = ({ currentLang, onLangChange }) => {
  // Define available languages and their flags
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
  const handleOutsideClick = (event: MouseEvent) => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
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

