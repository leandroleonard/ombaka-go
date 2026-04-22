import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ContactClient from './_components/ContactClient';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function ContactoPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'contacto' });

    const contactInfo = [
        {
            type: 'address' as const,
            title: t('info.address.title'),
            details: [t('info.address.line1'), t('info.address.line2')],
        },
        {
            type: 'phone' as const,
            title: t('info.phone.title'),
            details: [t('info.phone.line1'), t('info.phone.line2')],
        },
        {
            type: 'email' as const,
            title: t('info.email.title'),
            details: [t('info.email.line1'), t('info.email.line2')],
        },
        {
            type: 'clock' as const,
            title: t('info.hours.title'),
            details: [t('info.hours.line1'), t('info.hours.line2')],
        },
    ];

    const departments = [
        {
            name: t('departments.tourism.name'),
            email: t('departments.tourism.email'),
            description: t('departments.tourism.description'),
        },
        {
            name: t('departments.partnerships.name'),
            email: t('departments.partnerships.email'),
            description: t('departments.partnerships.description'),
        },
        {
            name: t('departments.support.name'),
            email: t('departments.support.email'),
            description: t('departments.support.description'),
        },
        {
            name: t('departments.press.name'),
            email: t('departments.press.email'),
            description: t('departments.press.description'),
        },
    ];

    const faqs = [
        {
            question: t('faq.response-time.question'),
            answer: t('faq.response-time.answer'),
        },
        {
            question: t('faq.partner.question'),
            answer: t('faq.partner.answer'),
        },
        {
            question: t('faq.visit.question'),
            answer: t('faq.visit.answer'),
        },
    ];

    const labels = {
        // Breadcrumbs
        breadcrumbHome: t('breadcrumbs.home'),
        breadcrumbCurrent: t('breadcrumbs.current'),
        // Hero
        heroTitle: t('hero.title'),
        heroSubtitle: t('hero.subtitle'),
        // Form
        formTitle: t('form.title'),
        formName: t('form.fields.name'),
        formNamePlaceholder: t('form.fields.namePlaceholder'),
        formEmail: t('form.fields.email'),
        formEmailPlaceholder: t('form.fields.emailPlaceholder'),
        formSubject: t('form.fields.subject'),
        formSubjectDefault: t('form.fields.subjectDefault'),
        formSubjectOptions: [
            { value: 'informacoes', label: t('form.fields.subjects.tourism') },
            { value: 'parcerias',   label: t('form.fields.subjects.partnerships') },
            { value: 'suporte',     label: t('form.fields.subjects.support') },
            { value: 'imprensa',    label: t('form.fields.subjects.press') },
            { value: 'outro',       label: t('form.fields.subjects.other') },
        ],
        formMessage: t('form.fields.message'),
        formMessagePlaceholder: t('form.fields.messagePlaceholder'),
        formSubmit: t('form.submit'),
        formSuccessAlert: t('form.successAlert'),
        // Departments
        departmentsTitle: t('departments.title'),
        departmentsSubtitle: t('departments.subtitle'),
        // Map
        mapTitle: t('map.title'),
        mapPlaceholder: t('map.placeholder'),
        mapAddress: t('map.address'),
        // FAQ
        faqTitle: t('faq.title'),
        // Partner FAQ link label
        faqPartnerLinkLabel: t('faq.partner.linkLabel'),
        locale,
    };

    return (
        <ContactClient
            contactInfo={contactInfo}
            departments={departments}
            faqs={faqs}
            labels={labels}
        />
    );
}