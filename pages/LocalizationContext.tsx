import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Localization {
  title: string;
  description: string;
  headerText: string;
  footerText1: string;
  footerText2: string;
  contactLinkText: string;
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
  const [language, setLanguage] = useState<string>('en'); // Default language
  const [localization, setLocalization] = useState<Localization | null>(null);

  const fetchLocalization = async (lang: string) => {
    try {
      const response = await fetch(`/localization/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch localization file for ${lang}`);
      }
      const localizationData = await response.json();
      return localizationData;
    } catch (error) {
      console.error(error);
      const fallbackResponse = await fetch(`/localization/en.json`);
      return fallbackResponse.json();
    }
  };

  useEffect(() => {
    const loadLocalization = async () => {
      const localizationData = await fetchLocalization(language);
      setLocalization(localizationData);
    };

    loadLocalization();
  }, [language]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <LocalizationContext.Provider value={{ localization, setLanguage, language }}>
      <div className="localization-provider">
        {children}
        {/* Language Selector Dropdown */}
        <div className="language-selector">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
