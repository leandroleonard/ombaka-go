import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import InvestmentClient from './_components/InvestmentClient';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function InvestirPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'investir' });

    const projects = [
        {
            name: t('projects.baia-azul.name'),
            location: t('projects.baia-azul.location'),
            progress: 45,
            investment: t('projects.baia-azul.investment'),
            sector: t('projects.baia-azul.sector'),
        },
        {
            name: t('projects.eco-resort.name'),
            location: t('projects.eco-resort.location'),
            progress: 20,
            investment: t('projects.eco-resort.investment'),
            sector: t('projects.eco-resort.sector'),
        },
        {
            name: t('projects.centro-convencoes.name'),
            location: t('projects.centro-convencoes.location'),
            progress: 65,
            investment: t('projects.centro-convencoes.investment'),
            sector: t('projects.centro-convencoes.sector'),
        },
        {
            name: t('projects.marina-lobito.name'),
            location: t('projects.marina-lobito.location'),
            progress: 30,
            investment: t('projects.marina-lobito.investment'),
            sector: t('projects.marina-lobito.sector'),
        },
    ];

    const incentives = [
        {
            title: t('incentives.isencao-fiscal.title'),
            description: t('incentives.isencao-fiscal.description'),
        },
        {
            title: t('incentives.apoio-importacao.title'),
            description: t('incentives.apoio-importacao.description'),
        },
        {
            title: t('incentives.formacao.title'),
            description: t('incentives.formacao.description'),
        },
        {
            title: t('incentives.credito.title'),
            description: t('incentives.credito.description'),
        },
    ];

    const zones = [
        {
            name: t('zones.zona-franca.name'),
            area: t('zones.zona-franca.area'),
            description: t('zones.zona-franca.description'),
        },
        {
            name: t('zones.zona-turistica.name'),
            area: t('zones.zona-turistica.area'),
            description: t('zones.zona-turistica.description'),
        },
        {
            name: t('zones.parque-natural.name'),
            area: t('zones.parque-natural.area'),
            description: t('zones.parque-natural.description'),
        },
    ];

    const labels = {
        // Hero
        heroTitle: t('hero.title'),
        heroSubtitle: t('hero.subtitle'),
        heroDescription: t('hero.description'),
        // Why Invest
        whyTitle: t('why.title'),
        whySubtitle: t('why.subtitle'),
        whyLocationTitle: t('why.location.title'),
        whyLocationDesc: t('why.location.description'),
        whyGrowthTitle: t('why.growth.title'),
        whyGrowthDesc: t('why.growth.description'),
        whyFiscalTitle: t('why.fiscal.title'),
        whyFiscalDesc: t('why.fiscal.description'),
        // Projects
        projectsTitle: t('projectsSection.title'),
        projectsSubtitle: t('projectsSection.subtitle'),
        progressLabel: t('projectsSection.progress'),
        investmentLabel: t('projectsSection.investment'),
        detailsButton: t('projectsSection.detailsButton'),
        // Incentives
        incentivesTitle: t('incentivesSection.title'),
        incentivesSubtitle: t('incentivesSection.subtitle'),
        // Zones
        zonesTitle: t('zonesSection.title'),
        zonesSubtitle: t('zonesSection.subtitle'),
        zonesMapPlaceholder: t('zonesSection.mapPlaceholder'),
        // Form
        formTitle: t('form.title'),
        formSubtitle: t('form.subtitle'),
        formName: t('form.fields.name'),
        formNamePlaceholder: t('form.fields.namePlaceholder'),
        formEmail: t('form.fields.email'),
        formEmailPlaceholder: t('form.fields.emailPlaceholder'),
        formCompany: t('form.fields.company'),
        formCompanyPlaceholder: t('form.fields.companyPlaceholder'),
        formPhone: t('form.fields.phone'),
        formPhonePlaceholder: t('form.fields.phonePlaceholder'),
        formSector: t('form.fields.sector'),
        formSectorOptions: [
            t('form.fields.sectors.hotelaria'),
            t('form.fields.sectors.sustentavel'),
            t('form.fields.sectors.infraestrutura'),
            t('form.fields.sectors.nautico'),
            t('form.fields.sectors.outro'),
        ],
        formMessage: t('form.fields.message'),
        formMessagePlaceholder: t('form.fields.messagePlaceholder'),
        formSubmit: t('form.submit'),
        // Contact
        contactEmailLabel: t('contact.emailLabel'),
        contactPhoneLabel: t('contact.phoneLabel'),
    };

    return (
        <InvestmentClient
            projects={projects}
            incentives={incentives}
            zones={zones}
            labels={labels}
        />
    );
}