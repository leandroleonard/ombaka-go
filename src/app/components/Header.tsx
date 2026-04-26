'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Locale } from 'next-intl';

const localeFlags: Record<string, { flag: string; label: string }> = {
  pt: { flag: '🇦🇴', label: 'PT' },
  en: { flag: '🇬🇧', label: 'EN' },
  fr: { flag: '🇫🇷', label: 'FR' },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations('header');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-switcher')) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav.home'),           path: `/${currentLocale}` },
    { name: t('nav.about'),          path: `/${currentLocale}/sobre` },
    { name: t('nav.municipios'),     path: `/${currentLocale}/municipios` },
    { name: t('nav.touristicZones'), path: `/${currentLocale}/zonas-turisticas` },
    { name: t('nav.events'),         path: `/${currentLocale}/eventos` },
    { name: t('nav.partners'),       path: `/${currentLocale}/parceiros` },
    { name: t('nav.invest'),         path: `/${currentLocale}/investir` },
    { name: t('nav.help-tourist'),   path: `/${currentLocale}/apoio-turista` },
    { name: t('nav.contact'),        path: `/${currentLocale}/contacto` },
  ];

  const changeLocale = (newLocale: Locale) => {
    const newPath = (pathname || '/').replace(/^\/(pt|en|fr)/, `/${newLocale}`);
    window.location.href = newPath;
  };

  const current = localeFlags[currentLocale];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-gray-200'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2 group">
            <div>
              <div
                className="text-2xl text-[#0B3B5B] group-hover:text-[#D4A343] transition-colors duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ombaka Go
              </div>
              <div className="text-xs text-[#D4A343]">{ t('logo.description') }</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-bold transition-all duration-300 relative group ${
                    isActive ? 'text-[#0B3B5B]' : 'text-gray-600 hover:text-[#0B3B5B]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4A343] transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher — Desktop */}
          <div id="lang-switcher" className="hidden lg:flex items-center relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#0B3B5B] hover:text-[#D4A343] transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              <span className="text-lg">{current.flag}</span>
              <span>{current.label}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden min-w-[120px] z-50">
                {routing.locales.map((locale) => {
                  const info = localeFlags[locale];
                  const isSelected = locale === currentLocale;
                  return (
                    <button
                      key={locale}
                      onClick={() => { changeLocale(locale as Locale); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                        isSelected
                          ? 'bg-[#0B3B5B]/5 text-[#0B3B5B] font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#0B3B5B]'
                      }`}
                    >
                      <span className="text-lg">{info.flag}</span>
                      <span>{info.label}</span>
                      {isSelected && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4A343]" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0B3B5B] hover:text-[#D4A343] transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1 border-t border-gray-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-[#0B3B5B] bg-[#D4A343]/10 border-l-4 border-[#D4A343] font-semibold'
                      : 'text-gray-600 hover:text-[#0B3B5B] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Language Switcher — Mobile */}
            <div className="px-4 pt-4 border-t border-gray-100 mt-2">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Idioma</p>
              <div className="flex gap-2">
                {routing.locales.map((locale) => {
                  const info = localeFlags[locale];
                  const isSelected = locale === currentLocale;
                  return (
                    <button
                      key={locale}
                      onClick={() => { changeLocale(locale as Locale); setIsMobileMenuOpen(false); }}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        isSelected
                          ? 'bg-[#0B3B5B] text-white font-semibold'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span>{info.flag}</span>
                      <span>{info.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}