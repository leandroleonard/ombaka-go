'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function ZonasTuristicasPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'turistic-zones' });

    const [activeCategory, setActiveCategory] = useState('Todas');

    const categories = [
        t('filters.all'),
        t('filters.beaches'),
        t('filters.mountains'),
        t('filters.naturalReserves'),
        t('filters.historical'),
        t('filters.cultural')
    ];

    const zones = [
        {
            id: 1,
            name: t('zones.restingaLobito.name'),
            category: t('zones.restingaLobito.category'),
            location: t('zones.restingaLobito.location'),
            difficulty: t('zones.restingaLobito.difficulty'),
            image: 'https://images.unsplash.com/photo-1762571471526-e96c60cebe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmUlMjBjb2FzdGFsJTIwdG91cmlzbXxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.restingaLobito.description'),
            slug: 'restinga-do-lobito'
        },
        {
            id: 2,
            name: t('zones.praiaMorena.name'),
            category: t('zones.praiaMorena.category'),
            location: t('zones.praiaMorena.location'),
            difficulty: t('zones.praiaMorena.difficulty'),
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.praiaMorena.description'),
            slug: 'praia-morena'
        },
        {
            id: 3,
            name: t('zones.serraLeba.name'),
            category: t('zones.serraLeba.category'),
            location: t('zones.serraLeba.location'),
            difficulty: t('zones.serraLeba.difficulty'),
            image: 'https://images.unsplash.com/photo-1648804536048-0a7d8b103bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pYyUyMGFmcmljYXxlbnwxfHx8fDE3NzYyNDMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.serraLeba.description'),
            slug: 'serra-da-leba'
        },
        {
            id: 4,
            name: t('zones.reservaBufalo.name'),
            category: t('zones.reservaBufalo.category'),
            location: t('zones.reservaBufalo.location'),
            difficulty: t('zones.reservaBufalo.difficulty'),
            image: 'https://images.unsplash.com/photo-1681139635899-434516500ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcGFyayUyMHdpbGRsaWZlJTIwcmVzZXJ2ZXxlbnwxfHx8fDE3NzYyNDMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.reservaBufalo.description'),
            slug: 'reserva-natural-do-bufalo'
        },
        {
            id: 5,
            name: t('zones.forteSaoPedro.name'),
            category: t('zones.forteSaoPedro.category'),
            location: t('zones.forteSaoPedro.location'),
            difficulty: t('zones.forteSaoPedro.difficulty'),
            image: 'https://images.unsplash.com/photo-1645319639077-0834f959fafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpzdG9yaWMlMjBjb2xvbmllbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNDMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.forteSaoPedro.description'),
            slug: 'forte-de-sao-pedro-da-barra'
        },
        {
            id: 6,
            name: t('zones.mercadoCentral.name'),
            category: t('zones.mercadoCentral.category'),
            location: t('zones.mercadoCentral.location'),
            difficulty: t('zones.mercadoCentral.difficulty'),
            image: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc2MjQzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.mercadoCentral.description'),
            slug: 'mercado-central-de-benguela'
        },
        {
            id: 7,
            name: t('zones.baiaAzul.name'),
            category: t('zones.baiaAzul.category'),
            location: t('zones.baiaAzul.location'),
            difficulty: t('zones.baiaAzul.difficulty'),
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.baiaAzul.description'),
            slug: 'baia-azul'
        },
        {
            id: 8,
            name: t('zones.cascataBiopio.name'),
            category: t('zones.cascataBiopio.category'),
            location: t('zones.cascataBiopio.location'),
            difficulty: t('zones.cascataBiopio.difficulty'),
            image: 'https://images.unsplash.com/photo-1648804536048-0a7d8b103bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pYyUyMGFmcmljYXxlbnwxfHx8fDE3NzYyNDMwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.cascataBiopio.description'),
            slug: 'cascata-de-biopio'
        },
        {
            id: 9,
            name: t('zones.vilaCultural.name'),
            category: t('zones.vilaCultural.category'),
            location: t('zones.vilaCultural.location'),
            difficulty: t('zones.vilaCultural.difficulty'),
            image: 'https://images.unsplash.com/photo-1645319639077-0834f959fafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpzdG9yaWMlMjBjb2xvbmllbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNDMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.vilaCultural.description'),
            slug: 'vila-cultural'
        }
    ];

    const filteredZones = activeCategory === t('filters.all')
        ? zones
        : zones.filter(zone => zone.category === activeCategory);

    const getDifficultyColor = (difficulty: string) => {
        if (difficulty === t('difficulty.easy')) return 'bg-green-500';
        if (difficulty === t('difficulty.medium')) return 'bg-yellow-500';
        if (difficulty === t('difficulty.hard')) return 'bg-red-500';
        return 'bg-gray-500';
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="bg-[#0B3B5B] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-white/90">
                        {t('hero.subtitle')}
                    </p>
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
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                        ? 'bg-[#0B3B5B] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zones Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredZones.map((zone) => (
                            <div
                                key={zone.id}
                                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={zone.image}
                                        alt={zone.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow">
                                        {zone.category}
                                    </div>
                                    <div className={`absolute top-4 left-4 ${getDifficultyColor(zone.difficulty)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                                        {zone.difficulty}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl mb-2 group-hover:text-[#0B3B5B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                                        className="block w-full bg-[#D4A343] hover:bg-[#c89338] text-white text-center py-3 rounded-full transition-colors font-medium"
                                    >
                                        {t('viewDetails')}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredZones.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">{t('noResults')}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t('map.title')}
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p className="text-gray-500">{t('map.placeholder')}</p>
                            <p className="text-sm text-gray-400 mt-2">{t('map.note')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}