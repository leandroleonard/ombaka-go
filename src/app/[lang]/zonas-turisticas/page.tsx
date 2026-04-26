'use server'; 

import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import TouristZonesClient from './_components/TouristZonesClient';

import { zones } from '@/data/zones';
import { mapZones } from '@/lib/mappers/zone.mapper';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function TouristZonesPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'tourist-zones' });

    const mappedZones = mapZones(zones, t)

    const categories = [
        t('filters.all'),
        t('filters.beaches'),
        t('filters.mountains'),
        t('filters.naturalReserves'),
        t('filters.historical'),
        t('filters.cultural'),
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
            zones={mappedZones}
            translations={translations}
        />
    );
}