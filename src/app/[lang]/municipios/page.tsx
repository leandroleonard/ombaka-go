import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, ChevronRight } from 'lucide-react';
import { routing } from '@/i18n/routing';

import { municipalities } from '@/data/municipalities';
import { mapMunicipalities } from '@/lib/mappers/municipality.mapper';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function MunicipiosPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'municipios' });

    const mappedMunicipalities = mapMunicipalities(municipalities, t);

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
                        <span className="text-[#0B3B5B]">{t('breadcrumbs.municipios')}</span>
                    </div>
                </div>
            </div> */}

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 bg-[#fff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8">
                        <h2 className="text-3xl mb-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#000' }}>
                            {t('map.title')}
                        </h2>
                        <div className="bg-gray-200 h-96 flex items-center justify-center border border-gray-300">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">{t('map.placeholder')}</p>
                                <p className="text-sm text-gray-400 mt-2">Mapa interativo em desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Municipalities Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mappedMunicipalities.map((mp) => (
                            <Link
                                key={mp.slug}
                                href={`/${locale}/municipios/${mp.slug}`}
                                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={mp.imageUrl}
                                        alt={mp.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {mp.name}
                                        </h3>
                                        <p className="text-[#D4A343] text-sm">{mp.subtitle}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-4 text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{mp.population} habitantes</span>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-500 mb-2">{t('attractions.title')}:</p>
                                        {mp.attractions.map((attraction, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-[#D4A343]" />
                                                <span className="text-sm text-gray-700">{attraction}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex items-center text-[#0B3B5B] group-hover:text-[#2E7D64] transition-colors">
                                        <span className="text-sm">{t('exploreButton')}</span>
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl text-[#D4A343] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                23
                            </div>
                            <p className="text-white/90">{t('stats.municipios')}</p>
                        </div>
                        <div>
                            <div className="text-5xl text-[#D4A343] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                2.0M+
                            </div>
                            <p className="text-white/90">{t('stats.population')}</p>
                        </div>
                        <div>
                            <div className="text-5xl text-[#D4A343] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                39K
                            </div>
                            <p className="text-white/90">{t('stats.area')}</p>
                        </div>
                        <div>
                            <div className="text-5xl text-[#D4A343] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                100+
                            </div>
                            <p className="text-white/90">{t('stats.zonas')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}