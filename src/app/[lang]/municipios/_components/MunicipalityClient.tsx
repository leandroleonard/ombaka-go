'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Thermometer, ChevronRight, MessageCircle, Star } from 'lucide-react';
import { InfrastructureSection } from '@/app/components/InfrastructureSection';

interface TouristZone {
  name: string;
  description: string;
  image: string;
}

interface Festivity {
  name: string;
  description: string;
}

interface InfrastructureCategory {
  icon: string;
  title: string;
  items: string[];
}

interface PracticalInfo {
  population: string;
  distances: string[];
  climate: string;
  avgTemp: string;
}

type LocalPartner = {
    name: string;
    type: string;
    rating: string
}

interface Municipio {
  slug: string;
  name: string;
  subtitle: string;
  history: string;
  culture: string;
  touristZones: TouristZone[];
  gastronomy: string[];
  festivities: Festivity[];
  infrastructure: InfrastructureCategory[];
  population: string;
  distances_first: string;
  distances_second: string;
  climate: string;
  avgTemp: string;
  localPartners: LocalPartner[];
  images: {
    hero: string;
  };
}

interface Props {
  municipio: Municipio;
  labels: {
    breadcrumbHome: string;
    breadcrumbMunicipios: string;
    historyTitle: string;
    cultureTitle: string;
    touristZonesTitle: string;
    gastronomyTitle: string;
    festivitiesTitle: string;
    infrastructureTitle: string;
    practicalInfoTitle: string;
    localPartnersTitle: string;
    locationTitle: string;
    exploreButton: string;
    population: string;
    distances: string;
    climate: string;
    averageTemp: string;
  };
  locale: string;
}

export default function MunicipalityClient({ municipio, labels, locale }: Props) {
  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumbs */}
      {/* <div className="bg-[#F5F5F5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-[#0B3B5B]">{labels.breadcrumbHome}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${locale}/municipios`} className="hover:text-[#0B3B5B]">{labels.breadcrumbMunicipios}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0B3B5B]">{municipio.name}</span>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={municipio.images.hero}
            alt={municipio.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {municipio.name}
            </h1>
            <p className="text-2xl text-[#D4A343]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {municipio.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#FFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* History */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.historyTitle}
                </h2>
                <p className="text-gray-700 leading-relaxed">{municipio.history}</p>
              </div>

              {/* Culture */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.cultureTitle}
                </h2>
                <p className="text-gray-700 leading-relaxed">{municipio.culture}</p>
              </div>

              {/* Tourist Zones */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.touristZonesTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {municipio.touristZones.map((zone, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-48 overflow-hidden mb-3">
                        <Image
                          src={zone.image}
                          alt={zone.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {zone.name}
                      </h3>
                      <p className="text-sm text-gray-600">{zone.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gastronomy */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.gastronomyTitle}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {municipio.gastronomy.map((dish, index) => (
                    <div key={index} className="flex items-center space-x-3 border p-4">
                      <div className="w-2 h-2 bg-[#D4A343]" />
                      <span className="text-gray-700">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Festivities */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.festivitiesTitle}
                </h2>
                <div className="space-y-4">
                  {municipio.festivities.map((festivity, index) => (
                    <div key={index} className="border p-6">
                      <h4 className="text-lg mb-2 font-semibold text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {festivity.name}
                      </h4>
                      <p className="text-gray-600">{festivity.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-white p-8 hover:shadow-md">
                <h2 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.infrastructureTitle}
                </h2>
                <InfrastructureSection data={municipio.infrastructure} />
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Practical Information */}
              <div className="bg-white p-6 hover:shadow-lg sticky top-24">
                <h3 className="text-xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.practicalInfoTitle}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-[#0B3B5B] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{labels.population}</p>
                      <p className="text-lg font-semibold text-gray-900">{municipio.population}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#0B3B5B] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{labels.distances}</p>
                        <p className="text-sm text-gray-900">{municipio.distances_first}</p>
                        <p className="text-sm text-gray-900">{municipio.distances_second}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Thermometer className="w-5 h-5 text-[#0B3B5B] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{labels.climate}</p>
                      <p className="text-sm text-gray-900">{municipio.climate}</p>
                      <p className="text-sm text-gray-900">{labels.averageTemp}: {municipio.avgTemp}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-[#D4A343] text-white py-3 hover:bg-[#c89338] transition-colors">
                    {labels.exploreButton}
                  </button>
                </div>
              </div>

              {/* Local Partners */}
              {municipio.localPartners.length > 0 && (
                <div className="bg-white p-6 hover:shadow-md">
                  <h3 className="text-xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {labels.localPartnersTitle}
                  </h3>
                  <div className="space-y-4">
                    {municipio.localPartners.map((partner, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <h4 className="font-semibold mb-1 text-gray-900">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.type}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < partner.rating ? 'text-[#D4A343] fill-[#D4A343]' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Map placeholder */}
              <div className="bg-white p-6 hover:shadow-md">
                <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {labels.locationTitle}
                </h3>
                <div className="h-48 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-[#2E7D64] text-white p-4 shadow-lg hover:bg-[#256654] transition-colors z-40">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}