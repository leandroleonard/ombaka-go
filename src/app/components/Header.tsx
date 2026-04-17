'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { routing, Locale } from '@/i18n/routing';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations('header'); // Vamos criar este namespace

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: `/${currentLocale}` },
    { name: t('nav.about'), path: `/${currentLocale}/sobre` },
    { name: t('nav.municipios'), path: `/${currentLocale}/municipios` },
    { name: t('nav.touristicZones'), path: `/${currentLocale}/zonas-turisticas` },
    { name: t('nav.events'), path: `/${currentLocale}/eventos` },
    { name: t('nav.partners'), path: `/${currentLocale}/parceiros` },
    { name: t('nav.invest'), path: `/${currentLocale}/investir` },
    { name: t('nav.contact'), path: `/${currentLocale}/contacto` },
  ];

  // Função para mudar idioma
  const changeLocale = (newLocale: Locale) => {
    const currentPath = pathname || '/';
    const newPath = currentPath.replace(/^\/(pt|en|fr)/, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B3B5B] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <div className="text-white">
              <div className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ombaka Go
              </div>
              <div className="text-xs text-[#D4A343]">Descubra Benguela</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || 
                              (link.path === `/${currentLocale}` && pathname === `/${currentLocale}`);

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-[#D4A343] font-medium'
                      : 'text-white hover:text-[#D4A343]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side - Icons + Language Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search Button */}
            <button className="text-white hover:text-[#D4A343] transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <Globe className="w-4 h-4" />
              <select
                value={currentLocale}
                onChange={(e) => changeLocale(e.target.value as Locale)}
                className="bg-transparent border-none text-white cursor-pointer focus:outline-none"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0B3B5B] border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-1 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#D4A343] bg-white/10'
                        : 'text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}