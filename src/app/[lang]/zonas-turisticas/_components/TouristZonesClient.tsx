'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Zone } from '@/types/zone';

type Props = {
  locale: string;
  categories: string[];
  zones: Zone[];
  translations: {
    heroTitle: string;
    heroSubtitle: string;
    viewDetails: string;
    noResults: string;
    mapTitle: string;
    mapPlaceholder: string;
    mapNote: string;
    difficulty: { easy: string; medium: string; hard: string };
  };
};

export default function TouristZonesClient({
  locale,
  categories,
  zones,
  translations,
}: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]); 

  const filteredZones = activeCategory === categories[0]
    ? zones
    : zones.filter((zone) => zone.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === translations.difficulty.easy) return 'bg-green-500';
    if (difficulty === translations.difficulty.medium) return 'bg-yellow-500';
    if (difficulty === translations.difficulty.hard) return 'bg-red-500';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[#0B3B5B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {translations.heroTitle}
          </h1>
          <p className="text-xl text-white/90">{translations.heroSubtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#0B3B5B] text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:shadow-xl'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredZones.map((zone) => (
              <div
                key={zone.id}
                className="group bg-white border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={zone.imageUrl}
                    alt={zone.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-medium">
                    {zone.category}
                  </div>
                  <div
                    className={`absolute top-4 left-4 ${getDifficultyColor(
                      zone.difficulty
                    )} text-white px-3 py-1 text-xs font-medium`}
                  >
                    {zone.difficulty}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl mb-2 text-black group-hover:text-[#0B3B5B] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {zone.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-[#0B3B5B]" />
                    <span>{zone.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {zone.description}
                  </p>
                  <Link
                    href={`/${locale}/zonas-turisticas/${zone.slug}`}
                    className="block w-full bg-[#D4A343] hover:bg-[#c89338] text-white text-center py-3 transition-colors font-medium"
                  >
                    {translations.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredZones.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{translations.noResults}</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl mb-8 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {translations.mapTitle}
          </h2>
          <div className="bg-white h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">{translations.mapPlaceholder}</p>
              <p className="text-sm text-gray-400 mt-2">{translations.mapNote}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}