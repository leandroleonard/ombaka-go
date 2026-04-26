'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { AfricanPattern } from './AfricanPattern';

export function Footer() {
  const currentLocale = useLocale();
  const t = useTranslations('footer');

  const quickLinks = [
    { name: t('quickLinks.about'),          path: `/${currentLocale}/sobre` },
    { name: t('quickLinks.municipios'),     path: `/${currentLocale}/municipios` },
    { name: t('quickLinks.touristicZones'), path: `/${currentLocale}/zonas-turisticas` },
    { name: t('quickLinks.events'),         path: `/${currentLocale}/eventos` },
    { name: t('quickLinks.invest'),         path: `/${currentLocale}/investir` },
  ];

  const supportLinks = [
    { name: t('support.guide'),    path: `/${currentLocale}/apoio-turista` },
    { name: t('support.partners'), path: `/${currentLocale}/parceiros` },
    { name: t('support.contact'),  path: `/${currentLocale}/contacto` },
  ];

  return (
    <footer className="bg-[#0B3B5B] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Padrão africano de fundo */}
      <div className="absolute inset-0 opacity-5">
        <AfricanPattern />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Sobre */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ombaka Go
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {t('about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#D4A343] transition-colors duration-300" aria-label="Facebook">
                {/* <Facebook className="w-5 h-5" /> */}
                Facebook
              </a>
              <a href="#" className="text-white/80 hover:text-[#D4A343] transition-colors duration-300" aria-label="Instagram">
                {/* <Instagram className="w-5 h-5" /> */}
                Insta
              </a>
              <a href="#" className="text-white/80 hover:text-[#D4A343] transition-colors duration-300" aria-label="LinkedIn">
                {/* <Linkedin className="w-5 h-5" /> */}
                Ln
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('quickLinks.title')}
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-[#D4A343] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apoio ao Turista */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('support.title')}
            </h4>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-[#D4A343] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:112"
                  className="text-white/80 hover:text-[#D4A343] transition-colors duration-300"
                >
                  {t('support.emergency')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('contact.title')}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D4A343]" />
                <span className="text-white/80">{t('contact.phone')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D4A343]" />
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  {t('contact.email')}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D4A343]" />
                <span className="text-white/80">{t('contact.address')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="w-full border-t border-white/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p className="text-white/60">
            {t('bottom.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${currentLocale}/privacidade`}
              className="text-white/60 hover:text-[#D4A343] transition-colors"
            >
              {t('bottom.privacy')}
            </Link>
            <span className="text-white/40">•</span>
            <Link
              href={`/${currentLocale}/termos`}
              className="text-white/60 hover:text-[#D4A343] transition-colors"
            >
              {t('bottom.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}