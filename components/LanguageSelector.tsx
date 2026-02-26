"use client";

import { useState, useEffect } from "react";
import { Languages } from "lucide-react";

export type Language = 'en' | 'om';

export function LanguageSelector() {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.setAttribute('lang', savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'om' : 'en';
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.setAttribute('lang', newLang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-semibold">{language === 'en' ? 'EN' : 'OM'}</span>
    </button>
  );
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
    }

    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
}
