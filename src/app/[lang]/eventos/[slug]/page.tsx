// app/[lang]/eventos/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import EventsDetailClient from './../_components/EventsDetailClient';

type Props = {
    params: Promise<{ lang: string; slug: string }>;
};

// Slugs válidos para eventos
const validSlugs = [
    'festival-cultural',
    'feira-turismo',
    'festival-gastronomico'
];

export default async function EventoDetalhePage({ params }: Props) {
    const { lang, slug } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    // Verificar se o evento existe
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: 'events-label' });
    const tEventos = await getTranslations({ locale, namespace: 'events-detail' });

    const getProgram = (slug: string): string[][] => [
        [tEventos(`${slug}.program.0.horario`), tEventos(`${slug}.program.0.atividade`)],
        [tEventos(`${slug}.program.1.horario`), tEventos(`${slug}.program.1.atividade`)],
        [tEventos(`${slug}.program.2.horario`), tEventos(`${slug}.program.2.atividade`)],
        [tEventos(`${slug}.program.3.horario`), tEventos(`${slug}.program.3.atividade`)],
        [tEventos(`${slug}.program.4.horario`), tEventos(`${slug}.program.4.atividade`)],
    ];

    const getEvents = (slug: string): string[] => [
        tEventos(`${slug}.info.0`),
        tEventos(`${slug}.info.1`),
        tEventos(`${slug}.info.2`),
        tEventos(`${slug}.info.3`),
    ];

    // Dados do evento específico
    const evento = {
        slug,
        nome: tEventos(`${slug}.name`),
        data: tEventos(`${slug}.date`),
        horario: tEventos(`${slug}.time`),
        local: tEventos(`${slug}.location`),
        municipio: tEventos(`${slug}.municipio`),
        tipo: tEventos(`${slug}.category`),
        descricao: tEventos(`${slug}.description`),
        descricaoCompleta: tEventos(`${slug}.fullDescription`),
        imagem: tEventos(`${slug}.image`),
        programa: getProgram(slug),
        informacoes: getEvents(slug),
    };

    const labels = {
        backToEvents: t('backToEvents'),
        aboutEvent: t('aboutEvent'),
        schedule: t('schedule'),
        importantInfo: t('importantInfo'),
        interested: t('interested'),
        contactInfo: t('contactInfo'),
        contactButton: t('contactButton'),
        eventNotFound: t('eventNotFound'),
        date: t('date'),
        time: t('time'),
        location: t('location'),
    };

    return (
        <EventsDetailClient
            evento={evento}
            labels={labels}
            locale={locale}
        />
    );
}