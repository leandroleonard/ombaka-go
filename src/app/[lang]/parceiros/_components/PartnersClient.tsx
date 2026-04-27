'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Search, Star, MapPin, Phone, Mail, Globe, Filter } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  category: string;
  municipio: string;
  rating: number;
  image: string;
  description: string;
  phone: string;
  email: string;
  website: string;
  address: string;
}

interface Category {
  id: string;
  name: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

interface Props {
  partners: Partner[];
  categories: Category[];
  municipios: string[];
  benefits: Benefit[];
  labels: {
    breadcrumbHome: string;
    breadcrumbPartners: string;
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    allMunicipios: string;
    partnersFound: string;
    partnerFound: string;
    noPartnersFound: string;
    viewDetails: string;
    contact: string;
    becomePartnerTitle: string;
    becomePartnerSubtitle: string;
    applyNow: string;
    learnMore: string;
    benefitsTitle: string;
  };
  locale: string;
}

const IconComponent = ({ name, className, color }: { name: string; className: string, color: string }) => {
  switch (name) {
    case 'Globe':
      return <Globe className={className} style={{ color: color }} />;
    case 'Star':
      return <Star className={className} style={{ color: color }} />;
    case 'MapPin':
      return <MapPin className={className} style={{ color: color }} />;
    default:
      return <Globe className={className} style={{ color: color }} />;
  }
};

export default function PartnersClient({ partners, categories, municipios, benefits, labels, locale }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedMunicipio, setSelectedMunicipio] = useState('todos');

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || partner.category === selectedCategory;
    const matchesMunicipio = selectedMunicipio === 'todos' || partner.municipio === selectedMunicipio;
    
    return matchesSearch && matchesCategory && matchesMunicipio;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumbs */}
      {/* <div className="bg-[#F5F5F5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-[#0B3B5B]">{labels.breadcrumbHome}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0B3B5B]">{labels.breadcrumbPartners}</span>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc3NjU3ODEyMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt={labels.heroTitle}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.heroTitle}
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {labels.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white  sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={labels.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#0B3B5B] text-black"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#0B3B5B] appearance-none bg-white text-black"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Municipio Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedMunicipio}
                onChange={(e) => setSelectedMunicipio(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#0B3B5B] appearance-none bg-white text-black"
              >
                <option value="todos">{labels.allMunicipios}</option>
                {municipios.filter(m => m !== 'todos').map(mun => (
                  <option key={mun} value={mun}>{mun}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            {filteredPartners.length} {filteredPartners.length === 1 ? labels.partnerFound : labels.partnersFound}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-16 bg-white ">
              <p className="text-xl text-gray-500">{labels.noPartnersFound}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="bg-white   overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-2 h-64 md:h-auto relative">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl mb-1 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {partner.name}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{partner.municipio}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < partner.rating
                                  ? 'fill-[#D4A343] text-[#D4A343]'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {partner.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Phone className="w-4 h-4 text-[#0B3B5B]" />
                          <span>{partner.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Mail className="w-4 h-4 text-[#0B3B5B]" />
                          <span className="truncate">{partner.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Globe className="w-4 h-4 text-[#0B3B5B]" />
                          <span className="truncate">{partner.website}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 border-2 border-[#0B3B5B] text-[#0B3B5B] py-2 px-4  hover:bg-[#0B3B5B] hover:text-white transition-colors text-sm">
                          {labels.contact}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {labels.becomePartnerTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {labels.becomePartnerSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/investir`}
              className="bg-[#D4A343] text-white px-8 py-4  hover:bg-[#c89338] transition-colors"
            >
              {labels.applyNow}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="bg-white text-[#0B3B5B] px-8 py-4  hover:bg-gray-100 transition-colors"
            >
              {labels.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {labels.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#FFF] p-8   text-center hover:shadow-xl transition-shadow">
                <div 
                  className="w-16 h-16  flex items-center justify-center mx-auto mb-4"
                >
                  <IconComponent name={benefit.icon} className="w-8 h-8" color={benefit.bgColor} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}