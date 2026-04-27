'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, MapPin, Mail, MessageCircle, Plus, Minus,
  AlertCircle, Heart, Umbrella, Coins, Navigation, Shield,
  Hospital, Building2, Clock, Languages
} from 'lucide-react';
import { AfricanPattern } from '@/app/components/AfricanPattern';

interface EmergencyContact {
  name: string;
  number: string;
  icon: string;
  description: string;
}

interface QuickGuideItem {
  icon: string;
  title: string;
  description: string;
  details: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface UsefulPlace {
  name: string;
  address: string;
  phone: string;
}

interface Props {
  emergencyContacts: EmergencyContact[];
  quickGuide: QuickGuideItem[];
  faqs: Faq[];
  usefulPlaces: UsefulPlace[];
  labels: {
    heroTitle: string;
    heroSubtitle: string;
    emergencyTitle: string;
    emergencySubtitle: string;
    quickGuideTitle: string;
    quickGuideSubtitle: string;
    faqTitle: string;
    faqSubtitle: string;
    usefulPlacesTitle: string;
    usefulPlacesSubtitle: string;
    helpTitle: string;
    helpSubtitle: string;
    email: string;
    phone: string;
    hours: string;
  };
  locale: string;
}

const IconComponent = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'Heart':
      return <Heart className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    case 'Hospital':
      return <Hospital className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Umbrella':
      return <Umbrella className={className} />;
    case 'Navigation':
      return <Navigation className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    default:
      return <Heart className={className} />;
  }
};

export default function ApoioTuristaClient({ 
  emergencyContacts, 
  quickGuide, 
  faqs, 
  usefulPlaces, 
  labels,
  locale 
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#0B3B5B] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <AfricanPattern />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.heroTitle}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {labels.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contactos de Emergência */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0B3B5B] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.emergencyTitle}
            </h2>
            <p className="text-gray-600">{labels.emergencySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 hover:border-[#D4A343] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <IconComponent name={contact.icon} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-gray-700">{contact.name}</h3>
                      <a 
                        href={`tel:${contact.number}`}
                        className="text-2xl text-[#0B3B5B] hover:text-[#D4A343] transition-colors"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {contact.number}
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guia Rápido */}
      <section className="py-16 bg-[#FFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0B3B5B] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.quickGuideTitle}
            </h2>
            <p className="text-gray-600">{labels.quickGuideSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickGuide.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 hover:border-[#2E7D64] transition-all"
                >
                  <div className="w-14 h-14 bg-[#2E7D64]/10 text-[#2E7D64] flex items-center justify-center mb-4">
                    <IconComponent name={item.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg text-[#0B3B5B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600">{item.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0B3B5B] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.faqTitle}
            </h2>
            <p className="text-gray-600">{labels.faqSubtitle}</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#0B3B5B] pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-[#D4A343] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#D4A343] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locais Úteis */}
      <section className="py-16 bg-[#FFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0B3B5B] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {labels.usefulPlacesTitle}
            </h2>
            <p className="text-gray-600">{labels.usefulPlacesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usefulPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 hover:border-[#D4A343] transition-all"
              >
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-[#D4A343] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#0B3B5B] mb-3 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {place.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{place.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <a 
                          href={`tel:${place.phone}`}
                          className="hover:text-[#0B3B5B] transition-colors"
                        >
                          {place.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat/Contacto Rápido */}
      <section className="py-16 bg-gradient-to-r from-[#0B3B5B] to-[#2E7D64] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <AfricanPattern />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {labels.helpTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {labels.helpSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:apoio@ombakago.ao"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B3B5B] px-8 py-3 hover:bg-gray-100 transition-all rounded-md"
            >
              <Mail className="w-5 h-5" />
              apoio@ombakago.ao
            </a>
            <a
              href="tel:+244272232456"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A343] text-white px-8 py-3 hover:bg-[#D4A343]/90 transition-all rounded-md"
            >
              <Phone className="w-5 h-5" />
              +244 272 232 456
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            <Clock className="w-4 h-4 inline mr-2" />
            {labels.hours}
          </p>
        </div>
      </section>
    </div>
  );
}