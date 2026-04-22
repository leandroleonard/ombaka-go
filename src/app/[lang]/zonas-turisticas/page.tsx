'use server'; 

import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import TouristZonesClient from './_components/TouristZonesClient';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function TouristZonesPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'tourist-zones' });

    const categories = [
        t('filters.all'),
        t('filters.beaches'),
        t('filters.mountains'),
        t('filters.naturalReserves'),
        t('filters.historical'),
        t('filters.cultural'),
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
            slug: 'restinga-do-lobito',
        },
        {
            id: 2,
            name: t('zones.praiaMorena.name'),
            category: t('zones.praiaMorena.category'),
            location: t('zones.praiaMorena.location'),
            difficulty: t('zones.praiaMorena.difficulty'),
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            description: t('zones.praiaMorena.description'),
            slug: 'praia-morena',
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

    const translations = {
        heroTitle: t('hero.title'),
        heroSubtitle: t('hero.subtitle'),
        viewDetails: t('viewDetails'),
        noResults: t('noResults'),
        mapTitle: t('map.title'),
        mapPlaceholder: t('map.placeholder'),
        mapNote: t('map.note'),
        difficulty: {
            easy: t('difficulty.easy'),
            medium: t('difficulty.medium'),
            hard: t('difficulty.hard'),
        },
    };

    return (
        <TouristZonesClient
            locale={locale}
            categories={categories}
            zones={zones}
            translations={translations}
        />
    );
}