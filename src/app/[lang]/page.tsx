import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { DestinationCard } from '@/app/components/DestinationCard';
import { EventCard } from '@/app/components/EventCard';
import { StatsSection } from '@/app/components/StatsSection';
import { Leaf, Heart, TrendingUp, Mail } from 'lucide-react';
import { routing } from '@/i18n/routing';

import { destinations } from "@/data/destinations"
import { mapDestinations } from "@/lib/mappers/destination.mapper"

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

  const mappedDestinations = mapDestinations(destinations, tDest, locale);


  const events = [
    {
      name: tEvents('festivalCultural.name'),
      date: tEvents('festivalCultural.date'),
      location: tEvents('festivalCultural.location'),
      category: tEvents('festivalCultural.category'),
      imageUrl: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?...',
      link: `/${locale}/eventos/festival-cultural`,
    },
    {
      name: tEvents('feiraTurismo.name'),
      date: tEvents('feiraTurismo.date'),
      location: tEvents('feiraTurismo.location'),
      category: tEvents('feiraTurismo.category'),
      imageUrl: 'https://images.unsplash.com/photo-1758518727820-28491c194bee?...',
      link: `/${locale}/eventos/feira-turismo`,
    },
    {
      name: tEvents('festivalGastronomico.name'),
      date: tEvents('festivalGastronomico.date'),
      location: tEvents('festivalGastronomico.location'),
      category: tEvents('festivalGastronomico.category'),
      imageUrl: 'https://images.unsplash.com/photo-1609792790758-0994786ad983?...',
      link: `/${locale}/eventos/festival-gastronomico`,
    },
  ];

  const pillars = [
    {
      icon: Leaf,
      title: tPillars('sustainable.title'),
      description: tPillars('sustainable.description'),
    },
    {
      icon: Heart,
      title: tPillars('culture.title'),
      description: tPillars('culture.description'),
    },
    {
      icon: TrendingUp,
      title: tPillars('investment.title'),
      description: tPillars('investment.description'),
    },
  ];

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#D4A343]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/zonas-turisticas`}
              className="bg-[#D4A343] text-white px-8 py-4 rounded-full hover:bg-[#c89338] transition-colors text-lg"
            >
              {t('hero.btn-destinations')}
            </Link>
            <Link
              href={`/${locale}/investir`}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0B3B5B] transition-all text-lg"
            >
              {t('hero.btn-investiment')}
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-black-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('destinations.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('destinations.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappedDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

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
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/eventos`}
              className="inline-block bg-[#0B3B5B] text-white px-8 py-3 rounded-full hover:bg-[#094158] transition-colors"
            >
              {t('events.seeAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ombaka Go Section */}
      <section className="py-20 bg-[#F5F5F5]">
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
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B3B5B] rounded-full mb-6">
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
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('partners.title')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
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
            src="https://images.unsplash.com/photo-1653937270198-a8a676547fd0?..."
            alt="Newsletter Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B3B5B]/80" />
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
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4A343]"
            />
            <button className="bg-[#D4A343] text-white px-8 py-4 rounded-full hover:bg-[#c89338] transition-colors">
              {t('newsletter.button')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}