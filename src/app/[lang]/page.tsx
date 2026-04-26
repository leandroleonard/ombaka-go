import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { DestinationCard } from '@/app/components/DestinationCard';
import { EventCard } from '@/app/components/EventCard';
import { StatsSection } from '@/app/components/StatsSection';
import { routing } from '@/i18n/routing';
import { AfricanPattern, AfricanBorder } from '@/app/components/AfricanPattern';
import { Mail, ArrowRight, MapPin } from 'lucide-react';

import { destinations } from "@/data/destinations"
import { mapDestinations } from "@/lib/mappers/destination.mapper"

import { events } from '@/data/events';
import { mapEvents } from '@/lib/mappers/event.mapper';

import { mapPillars } from '@/lib/mappers/pillar.mapper';

import { mapStats } from '@/lib/mappers/stats.mapper';


type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale = routing.locales.includes(lang as any) ? lang : 'pt';

  const t = await getTranslations({ locale, namespace: 'home' });
  const tDest = await getTranslations({ locale, namespace: 'destinationsData' });
  const tEvents = await getTranslations({ locale, namespace: 'eventsData' });
  const tPillars = await getTranslations({ locale, namespace: 'pillars' });
  const tStats = await getTranslations({ locale, namespace: 'stats' });
  const tCards = await getTranslations({ locale, namespace: 'cards' }); 

  const mappedDestinations = mapDestinations(destinations, tDest, locale);
  const mappedEvents = mapEvents(events, tEvents, locale);
  const pillars = mapPillars(tPillars);
  const stats = mapStats(tStats);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1762571471526-e96c60cebe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmUlMjBjb2FzdGFsJTIwdG91cmlzbXxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Benguela Coast"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B3B5B]/80 via-[#0B3B5B]/60 to-[#0B3B5B]/80" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-3 text-[#D4A343]">
            <div className="h-px w-12 bg-[#D4A343]"></div>
            <MapPin className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">
              {t('hero.location')}
            </span>
            <div className="h-px w-12 bg-[#D4A343]"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/zonas-turisticas`}
              className="group inline-flex items-center gap-2 bg-[#D4A343] text-white px-8 py-4 hover:bg-[#D4A343]/90 transition-all duration-300 text-lg shadow-lg"
            >
              {t('hero.btn-destinations')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/investir`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 hover:bg-white/20 transition-all duration-300 text-lg"
            >
              {t('hero.btn-investiment')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 text-[#0B3B5B] opacity-20 pointer-events-none">
          <AfricanPattern />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#000' }}>
              {t('destinations.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('destinations.subtitle')}
            </p>
            <div className="mt-6 max-w-xs mx-auto text-[#D4A343]">
              <AfricanBorder />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappedDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} exploreText={tCards('exploreButton')} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#000' }}>
              {t('events.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('events.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {mappedEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/eventos`}
              className="inline-block bg-[#0B3B5B] text-white px-8 py-3 hover:bg-[#094158] transition-colors"
            >
              {t('events.seeAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ombaka Go Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#000' }}>
              {t('why.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#D4A343]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B3B5B] mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#F5F5F5] relative overflow-hidden">
        {/* Padrão africano de fundo */}
        <div className="absolute inset-0 text-[#0B3B5B] opacity-10 pointer-events-none">
          <AfricanPattern />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('partners.title')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-gray-400 text-xs">{t('partners.word')} {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Newsletter Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3B5B]/80" />
        </div>
        
        {/* Padrão africano sobreposto */}
        <div className="absolute inset-0 text-white opacity-10 pointer-events-none">
          <AfricanPattern />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-6 text-[#D4A343]" />
          <h2 className="text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('newsletter.title')}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {t('newsletter.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4A343] border-2 border-white/20 bg-white/90"
            />
            <button className="bg-[#D4A343] text-white px-8 py-4 hover:bg-[#c89338] transition-colors border-2 border-[#D4A343]">
              {t('newsletter.button')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}