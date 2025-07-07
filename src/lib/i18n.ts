import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../public/locales/en/common.json';
import ru from '../../public/locales/ru/common.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: en,
  },
  ru: {
    common: ru,
  },
} as const;

export const defaultLocale = 'en';
export const locales = ['en', 'ru'] as const;

export function createI18nInstance(lng = defaultLocale): i18n {
  const i18nInstance = createInstance();
  i18nInstance.use(initReactI18next).init({
    lng,
    debug: false,
    resources,
    fallbackLng: defaultLocale,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
  return i18nInstance;
} 