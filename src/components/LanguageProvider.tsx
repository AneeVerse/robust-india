"use client";
import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createI18nInstance } from '@/lib/i18n';

interface LanguageProviderProps {
  children: ReactNode;
  locale?: string;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}



export function LanguageProvider({ children, locale = 'en' }: LanguageProviderProps) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  useEffect(() => {
    // Check for user's manually selected language preference
    const userPreferredLanguage = getCookie('user-preferred-language');
    
    // If user has manually selected a language, use that
    // Otherwise, always default to English regardless of auto-detection
    const finalLocale = userPreferredLanguage || 'en';
    
    if (finalLocale !== currentLocale) {
      setCurrentLocale(finalLocale);
    }
  }, [locale, currentLocale]);
  
  const i18n = createI18nInstance(currentLocale);
  
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 