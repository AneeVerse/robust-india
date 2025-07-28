"use client";
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className={`px-4 py-2 rounded-lg font-semibold text-base flex items-center gap-2 bg-[#6164F6] text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6164F6]`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {current.label}
          <svg className={`ml-1 w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <div className="absolute right-0 mt-3 w-32 bg-white border border-[#6164F6] rounded-xl shadow-lg py-2 z-50 flex flex-col gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-5 py-2 font-semibold text-base transition-all duration-150 flex items-center gap-2
                  ${i18n.language === lang.code
                    ? 'bg-[#f0f2ff] text-[#6164F6] border-l-4 border-[#6164F6]'
                    : 'text-[#6164F6] hover:bg-[#f5f7ff] border-l-4 border-transparent'}
                `}
                role="option"
                aria-selected={i18n.language === lang.code}
                style={{ borderRadius: 0 }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 