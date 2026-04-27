import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import EventsClient from './_components/EventsClient';

import { events } from '@/data/events';
import { mapEvents } from '@/lib/mappers/event.mapper';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function EventsPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'eventos' });
    const tEvents = await getTranslations({ locale, namespace: 'eventsData' });
    
    const mappedEvents = mapEvents(events, tEvents, locale);

    const municipalities = [
        t('filters.municipios.lobito'),
        t('filters.municipios.benguela'),
        t('filters.municipios.baia-farta'),
        t('filters.municipios.catumbela'),
        t('filters.municipios.ganda'),
        t('filters.municipios.cubal'),
        t('filters.municipios.balombo'),
    ];

    const eventsType = [
        t('filters.tipos.festas'),
        t('filters.tipos.feiras'),
        t('filters.tipos.empresariais'),
        t('filters.tipos.religiosos'),
        t('filters.tipos.culturais'),
        t('filters.tipos.desportivos'),
    ];

    const labels = {
        heroTitle: t('hero.title'),
        heroSubtitle: t('hero.subtitle'),
        searchPlaceholder: t('search.placeholder'),
        filtersTitle: t('filters.title'),
        filterByMunicipalities: t('filters.byMunicipio'),
        filterByType: t('filters.byTipo'),
        clearFilters: t('filters.clear'),
        viewMore: t('card.saberMais'),
        emptyState: t('emptyState'),
    };

    return (
        <EventsClient
            events={mappedEvents}
            municipalities={municipalities}
            eventTypes={eventsType}
            labels={labels}
        />
    );
}