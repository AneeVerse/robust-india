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

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ru', label: 'RU', name: 'Русский' },
  ];

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className={`
            group relative overflow-hidden
            px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-5 md:py-3 
            rounded-lg sm:rounded-xl md:rounded-2xl 
            font-semibold text-xs sm:text-sm 
            flex items-center gap-1 sm:gap-2 md:gap-3
            bg-gradient-to-r from-[#6164F6] to-[#7C3AED] 
            text-white shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl
            transform transition-all duration-300 ease-out
            hover:scale-105 hover:-translate-y-0.5
            focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#6164F6]/30
            active:scale-95
            backdrop-blur-sm
            ${open ? 'shadow-lg sm:shadow-2xl scale-105 -translate-y-0.5' : ''}
          `}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#6164F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative flex items-center gap-1 sm:gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
            </div>
            <span className="font-bold tracking-wide">{current.label}</span>
            <svg 
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Dropdown */}
        <div className={`
          absolute right-0 mt-2 sm:mt-3 w-36 sm:w-44 md:w-48
          bg-white/95 backdrop-blur-xl
          border border-white/20 rounded-xl sm:rounded-2xl 
          shadow-xl sm:shadow-2xl shadow-[#6164F6]/20
          transition-all duration-300 ease-out origin-top-right
          ${open 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}>
          {/* Dropdown arrow */}
          <div className="absolute -top-2 right-4 sm:right-6 w-4 h-4 bg-white/95 backdrop-blur-xl border-l border-t border-white/20 rotate-45" />
          
          <div className="relative py-2 sm:py-3">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  group w-full text-left px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
                  font-semibold text-xs sm:text-sm
                  transition-all duration-200 ease-out
                  flex items-center justify-between
                  relative overflow-hidden
                  ${i18n.language === lang.code
                    ? 'bg-gradient-to-r from-[#6164F6]/10 to-[#7C3AED]/10 text-[#6164F6]'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#6164F6]/5 hover:to-[#7C3AED]/5 hover:text-[#6164F6]'
                  }
                  ${index === 0 ? 'rounded-t-xl sm:rounded-t-2xl' : ''}
                  ${index === languages.length - 1 ? 'rounded-b-xl sm:rounded-b-2xl' : ''}
                `}
                role="option"
                aria-selected={i18n.language === lang.code}
              >
                {/* Active indicator */}
                {i18n.language === lang.code && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gradient-to-b from-[#6164F6] to-[#7C3AED] rounded-r-full" />
                )}
                
                <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                  <div className={`
                    w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center
                    transition-all duration-200
                    ${i18n.language === lang.code
                      ? 'bg-gradient-to-r from-[#6164F6] to-[#7C3AED] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-[#6164F6]/10 group-hover:text-[#6164F6]'
                    }
                  `}>
                    <span className="text-xs font-bold">{lang.label}</span>
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-bold">{lang.label}</div>
                    <div className="text-xs opacity-70">{lang.name}</div>
                  </div>
                  {/* Mobile: Show only label */}
                  <div className="sm:hidden">
                    <div className="font-bold text-sm">{lang.name}</div>
                  </div>
                </div>

                {/* Check icon for active language */}
                {i18n.language === lang.code && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6164F6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 