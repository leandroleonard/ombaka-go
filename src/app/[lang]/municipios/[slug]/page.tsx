import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import MunicipalityClient from './../_components/MunicipalityClient';
import { gastronomyByCity } from '@/data/municipality/gastronomy';

type Props = {
    params: Promise<{ lang: string; slug: string }>;
};

type TouristZone = {
    name: string;
    description: string;
    image: string;
};

type Festivities = {
    name: string;
    description: string;
}

type LocalPartner = {
    name: string;
    type: string;
    rating: string
}

type Infrastructure = {
    icon: string,
    title: string,
    items: string[]
}


const validSlugs = [
    'lobito', 'benguela', 'baia-farta', 'catumbela', 'cubal',
    'ganda', 'balombo', 'chongoroi', 'bocoio', 'caimbambo',
    'babaera', 'biopio', 'bolonguera', 'canhamela', 'capupa',
    'catengue', 'chicuma', 'chila', 'chindumbo', 'dombe-grande',
    'egipto-praia', 'iambala', 'navegantes'
];


export default async function MunicipioPage({ params }: Props) {
    const { lang, slug } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    // if (!validSlugs.includes(slug)) {
    //     notFound();
    // }

    const t = await getTranslations({ locale, namespace: 'municipalities' });
    const tCommon = await getTranslations({ locale, namespace: 'municipalities-label' });

    const getTouristicZones = (slug: string): TouristZone[] => {
        return [0, 1, 2].map((i) => ({
            name: t(`list.${slug}.touristZones.${i}.name`),
            description: t(`list.${slug}.touristZones.${i}.description`),
            image: t(`list.${slug}.touristZones.${i}.image`)
        }));
    };

    const getGastronomy = (slug: string): string[] => {
        const items = gastronomyByCity[slug] || [];
        return items.map((key) => t(`list.${slug}.gastronomy.${key}`));
    };

     const getInfrastructureItems = (slug: string, index: Number): string[] => [
        t(`list.${slug}.infrastructure.${index}.items.0`),
        t(`list.${slug}.infrastructure.${index}.items.1`),
        t(`list.${slug}.infrastructure.${index}.items.2`),
        t(`list.${slug}.infrastructure.${index}.items.3`),
    ];

    const getFestivities = (slug: string): Festivities[] => {
        return [0, 1].map((i) => ({
            name: t(`list.${slug}.festivities.${i}.name`),
            description: t(`list.${slug}.festivities.${i}.description`),
        }));
    };

    const getLocalPartners = (slug: string): LocalPartner[] => {
        return [0, 1, 2].map((i) => ({
            name: t(`list.${slug}.localPartners.${i}.name`),
            type: t(`list.${slug}.localPartners.${i}.type`),
            rating: t(`list.${slug}.localPartners.${i}.rating`),
        }));
    };

    const getInfrastructures = (slug: string): Infrastructure[] => {
        return [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
            icon: t(`list.${slug}.infrastructure.${i}.icon`),
            title: t(`list.${slug}.infrastructure.${i}.title`),
            items: getInfrastructureItems(slug, i)
        }));
    };

    const municipio = {
        slug,
        name: t(`list.${slug}.name`),
        subtitle: t(`list.${slug}.subtitle`),
        history: t(`list.${slug}.history`),
        culture: t(`list.${slug}.culture`),
        touristZones: getTouristicZones(slug),
        gastronomy: getGastronomy(slug),
        festivities: getFestivities(slug),
        infrastructure: getInfrastructures(slug),
        climate: t(`list.${slug}.climate`),
        distances_first: t(`list.${slug}.distances_first`),
        distances_second: t(`list.${slug}.distances_second`),
        population: t(`list.${slug}.population`),
        avgTemp: t(`list.${slug}.avgTemp`),
        localPartners: getLocalPartners(slug),
        images: {hero: t(`list.${slug}.images.hero`)},
    };

    const labels = {
        breadcrumbHome: tCommon('breadcrumbHome'),
        breadcrumbMunicipios: tCommon('breadcrumbMunicipios'),
        historyTitle: tCommon('historyTitle'),
        cultureTitle: tCommon('cultureTitle'),
        touristZonesTitle: tCommon('touristZonesTitle'),
        gastronomyTitle: tCommon('gastronomyTitle'),
        festivitiesTitle: tCommon('festivitiesTitle'),
        infrastructureTitle: tCommon('infrastructureTitle'),
        practicalInfoTitle: tCommon('practicalInfoTitle'),
        localPartnersTitle: tCommon('localPartnersTitle'),
        locationTitle: tCommon('locationTitle'),
        exploreButton: tCommon('exploreButton'),
        population: tCommon('population'),
        distances: tCommon('distances'),
        climate: tCommon('climate'),
        averageTemp: tCommon('averageTemp'),
    };

    return (
        <MunicipalityClient
            municipio={municipio}
            labels={labels}
            locale={locale}
        />
    );
}