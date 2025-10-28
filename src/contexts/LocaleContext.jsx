import { createContext, useContext, useState, useEffect } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    // Get locale from localStorage or default to 'en'
    return localStorage.getItem('locale') || 'en';
  });

  useEffect(() => {
    // Save locale to localStorage whenever it changes
    localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
