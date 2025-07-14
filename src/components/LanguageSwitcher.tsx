'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

type Props = {
  currentLocale: string;
  className?: string;
};

const languages = {
  id: {
    name: 'Bahasa Indonesia',
    flag: '🇮🇩',
    code: 'ID'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    code: 'EN'
  }
};

export default function LanguageSwitcher({ currentLocale, className = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      // Remove current locale from pathname
      const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
      
      // Create new path with new locale
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      
      // Set cookie for persistence
      document.cookie = `NEXT_LOCALE=${newLocale}; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`;
      
      // Navigate to new locale
      router.push(newPath);
      setIsOpen(false);
    });
  };

  const currentLanguage = languages[currentLocale as keyof typeof languages] || languages.id;
  const otherLanguage = currentLocale === 'id' ? languages.en : languages.id;

  return (
    <div className={`relative ${className}`}>
      {/* Mobile/Simple Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => switchLanguage(currentLocale === 'id' ? 'en' : 'id')}
          disabled={isPending}
          className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 disabled:opacity-50 min-w-[44px] min-h-[44px]"
          aria-label={`Switch to ${otherLanguage.name}`}
        >
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="text-sm font-medium">{currentLanguage.code}</span>
        </button>
      </div>

      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 disabled:opacity-50"
          aria-label="Select language"
        >
          <span>{currentLanguage.flag}</span>
          <span className="font-medium">{currentLanguage.name}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Content */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
              {Object.entries(languages).map(([locale, lang]) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  disabled={isPending}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 disabled:opacity-50 ${
                    locale === currentLocale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {locale === currentLocale && (
                    <span className="ml-auto">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Loading indicator */}
      {isPending && (
        <div className="absolute inset-0 bg-white/20 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
} 