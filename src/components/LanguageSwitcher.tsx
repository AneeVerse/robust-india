"use client";
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // We no longer persist language preference across page reloads to
    // ensure the site always defaults back to the geo-detected language.
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
              i18n.language === 'en' 
                ? 'bg-[#6164F6] text-white' 
                : 'bg-white text-[#6164F6] border border-[#6164F6] hover:bg-[#6164F6] hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className={`px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${
              i18n.language === 'ru' 
                ? 'bg-[#6164F6] text-white' 
                : 'bg-white text-[#6164F6] border border-[#6164F6] hover:bg-[#6164F6] hover:text-white'
            }`}
          >
            RU
          </button>
        </div>
      </div>
    </div>
  );
} 