import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import HelpTouristsClient from './_components/HelpTouristsClient';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function HelpTouristsPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'help-tourist' });
    const tEmergency = await getTranslations({ locale, namespace: 'help-tourist.emergency' });
    const tGuide = await getTranslations({ locale, namespace: 'help-tourist.guide' });
    const tFaq = await getTranslations({ locale, namespace: 'help-tourist.faqs' });
    const tPlaces = await getTranslations({ locale, namespace: 'help-tourist.places' });

    const emergencyContacts = [
        {
            name: tEmergency('medical.name'),
            number: '112',
            icon: 'Heart',
            description: tEmergency('medical.description'),
        },
        {
            name: tEmergency('police.name'),
            number: '113',
            icon: 'Shield',
            description: tEmergency('police.description'),
        },
        {
            name: tEmergency('firefighters.name'),
            number: '115',
            icon: 'AlertCircle',
            description: tEmergency('firefighters.description'),
        },
        {
            name: tEmergency('hospital.name'),
            number: '+244 272 232 123',
            icon: 'Hospital',
            description: tEmergency('hospital.description'),
        },
    ];

    const quickGuide = [
        {
            icon: 'Coins',
            title: tGuide('currency.title'),
            description: tGuide('currency.description'),
            details: tGuide('currency.details'),
        },
        {
            icon: 'Umbrella',
            title: tGuide('climate.title'),
            description: tGuide('climate.description'),
            details: tGuide('climate.details'),
        },
        {
            icon: 'Navigation',
            title: tGuide('transport.title'),
            description: tGuide('transport.description'),
            details: tGuide('transport.details'),
        },
        {
            icon: 'Languages',
            title: tGuide('language.title'),
            description: tGuide('language.description'),
            details: tGuide('language.details'),
        },
    ];

    const faqs = [
        { question: tFaq('visa.question'), answer: tFaq('visa.answer') },
        { question: tFaq('bestTime.question'), answer: tFaq('bestTime.answer') },
        { question: tFaq('safety.question'), answer: tFaq('safety.answer') },
        { question: tFaq('currencyExchange.question'), answer: tFaq('currencyExchange.answer') },
        { question: tFaq('vaccines.question'), answer: tFaq('vaccines.answer') },
        { question: tFaq('transportation.question'), answer: tFaq('transportation.answer') },
    ];

    const usefulPlaces = [
        {
            name: tPlaces('provincialGovernment.name'),
            address: tPlaces('provincialGovernment.address'),
            phone: '+244 272 232 000',
        },
        {
            name: tPlaces('airport.name'),
            address: tPlaces('airport.address'),
            phone: '+244 272 260 100',
        },
        {
            name: tPlaces('busStation.name'),
            address: tPlaces('busStation.address'),
            phone: '+244 272 235 500',
        },
    ];

    const labels = {
        heroTitle: t('heroTitle'),
        heroSubtitle: t('heroSubtitle'),
        emergencyTitle: t('emergencyTitle'),
        emergencySubtitle: t('emergencySubtitle'),
        quickGuideTitle: t('quickGuideTitle'),
        quickGuideSubtitle: t('quickGuideSubtitle'),
        faqTitle: t('faqTitle'),
        faqSubtitle: t('faqSubtitle'),
        usefulPlacesTitle: t('usefulPlacesTitle'),
        usefulPlacesSubtitle: t('usefulPlacesSubtitle'),
        helpTitle: t('helpTitle'),
        helpSubtitle: t('helpSubtitle'),
        email: t('email'),
        phone: t('phone'),
        hours: t('hours'),
    };

    return (
        <HelpTouristsClient
            emergencyContacts={emergencyContacts}
            quickGuide={quickGuide}
            faqs={faqs}
            usefulPlaces={usefulPlaces}
            labels={labels}
            locale={locale}
        />
    );
}