import { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      const initialLang = savedLang || 'en';
      setLanguage(initialLang);
      setIsRTL(initialLang === 'ar');
      document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = initialLang;
      setIsInitialized(true);
    }
  }, []);

  
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      setIsRTL(language === 'ar');
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <TranslationContext.Provider value={{ language, isRTL, toggleLanguage, isInitialized }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);