import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Award, Users } from 'lucide-react';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function About({ params }: Props) {
  const { lang } = await params;
  const locale = routing.locales.includes(lang as any) ? lang : 'pt';

  const t = await getTranslations({ locale, namespace: 'about' });

  const team = [
    {
      name: t('team.admin.name'),
      role: t('team.admin.role'),
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhbSUyMG1lZXRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzYyNDM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: t('team.tourism.name'),
      role: t('team.tourism.role'),
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhbSUyMG1lZXRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzYyNDM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: t('team.partners.name'),
      role: t('team.partners.role'),
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVhbSUyMG1lZXRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzYyNDM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const values = [
    {
      icon: Target,
      title: t('values.sustainability.title'),
      description: t('values.sustainability.description'),
    },
    {
      icon: Users,
      title: t('values.inclusion.title'),
      description: t('values.inclusion.description'),
    },
    {
      icon: Award,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
    },
    {
      icon: Eye,
      title: t('values.transparency.title'),
      description: t('values.transparency.description'),
    },
  ];

  const milestones = [
    { year: '2023', event: t('milestones.2023') },
    { year: '2024', event: t('milestones.2024') },
    { year: '2025', event: t('milestones.2025') },
    { year: '2026', event: t('milestones.2026') },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumbs */}
      {/* <div className="bg-[#F5F5F5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-[#0B3B5B]">
              {t('breadcrumbs.home')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0B3B5B]">{t('breadcrumbs.about')}</span>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1760904050658-e05a50a4d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjaXR5JTIwdXJiYW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MjQzNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Benguela"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64] p-8 rounded-2xl text-white">
              <Target className="w-12 h-12 text-[#D4A343] mb-4" />
              <h2 className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('mission.title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('mission.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2E7D64] to-[#D4A343] p-8 rounded-2xl text-white">
              <Eye className="w-12 h-12 text-white mb-4" />
              <h2 className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('vision.title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <Icon className="w-12 h-12 text-[#0B3B5B] mx-auto mb-4" />
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('journey.title')}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D4A343] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-white text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/investir`}
              className="bg-[#0B3B5B] text-white px-8 py-4 rounded-full hover:bg-[#2E7D64] transition-colors font-medium"
            >
              {t('cta.investButton')}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="bg-[#D4A343] text-white px-8 py-4 rounded-full hover:bg-[#c89338] transition-colors font-medium"
            >
              {t('cta.contactButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}