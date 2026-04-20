// app/[lang]/municipios/page.tsx
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, ChevronRight } from 'lucide-react';
import { routing } from '@/i18n/routing';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function MunicipiosPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'municipios' });

    const getAttractions = (municipioKey: string): string[] => [
        t(`list.${municipioKey}.attractions.1`),
        t(`list.${municipioKey}.attractions.2`),
        t(`list.${municipioKey}.attractions.3`),
    ];

    const municipios = [
        {
            slug: 'benguela',
            name: t('list.benguela.name'),
            subtitle: t('list.benguela.subtitle'),
            population: '~550.000',
            image: 'https://images.unsplash.com/photo-1760904050658-e05a50a4d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjaXR5JTIwdXJiYW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MjQzNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('benguela'),
        },
        {
            slug: 'lobito',
            name: t('list.lobito.name'),
            subtitle: t('list.lobito.subtitle'),
            population: '~350.000',
            image: 'https://images.unsplash.com/photo-1762571471526-e96c60cebe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmUlMjBjb2FzdGFsJTIwdG91cmlzbXxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('lobito'),
        },
        {
            slug: 'catumbela',
            name: t('list.catumbela.name'),
            subtitle: t('list.catumbela.subtitle'),
            population: '~175.000',
            image: 'https://images.unsplash.com/photo-1617476745502-5a0940bf4051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjb2FzdGFsJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzc2MjQzNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('catumbela'),
        },
        {
            slug: 'baia-farta',
            name: t('list.baiaFarta.name'),
            subtitle: t('list.baiaFarta.subtitle'),
            population: '~50.000',
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('baiaFarta'),
        },
        {
            slug: 'cubal',
            name: t('list.cubal.name'),
            subtitle: t('list.cubal.subtitle'),
            population: '~140.000',
            image: 'https://images.unsplash.com/photo-1760904050658-e05a50a4d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjaXR5JTIwdXJiYW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MjQzNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('cubal'),
        },
        {
            slug: 'ganda',
            name: t('list.ganda.name'),
            subtitle: t('list.ganda.subtitle'),
            population: '~180.000',
            image: 'https://images.unsplash.com/photo-1617476745502-5a0940bf4051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjb2FzdGFsJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzc2MjQzNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('ganda'),
        },
        {
            slug: 'balombo',
            name: t('list.balombo.name'),
            subtitle: t('list.balombo.subtitle'),
            population: '~15.000',
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('balombo'),
        },
        {
            slug: 'chongoroi',
            name: t('list.chongoroi.name'),
            subtitle: t('list.chongoroi.subtitle'),
            population: '~30.000',
            image: 'https://images.unsplash.com/photo-1760904050658-e05a50a4d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjaXR5JTIwdXJiYW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc2MjQzNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('chongoroi'),
        },
        {
            slug: 'bocoio',
            name: t('list.bocoio.name'),
            subtitle: t('list.bocoio.subtitle'),
            population: '~25.000',
            image: 'https://images.unsplash.com/photo-1617476745502-5a0940bf4051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdvbGElMjBjb2FzdGFsJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzc2MjQzNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('bocoio'),
        },
        {
            slug: 'caimbambo',
            name: t('list.caimbambo.name'),
            subtitle: t('list.caimbambo.subtitle'),
            population: '~18.000',
            image: 'https://images.unsplash.com/photo-1653937270198-a8a676547fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwc2FuZHxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            attractions: getAttractions('caimbambo'),
        },
    ];

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
            <section className="py-12 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {t('map.title')}
                        </h2>
                        <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center border border-gray-300">
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
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {municipios.map((municipio) => (
                            <Link
                                key={municipio.slug}
                                href={`/${locale}/municipios/${municipio.slug}`}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={municipio.image}
                                        alt={municipio.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {municipio.name}
                                        </h3>
                                        <p className="text-[#D4A343] text-sm">{municipio.subtitle}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-4 text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{municipio.population} habitantes</span>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-500 mb-2">{t('attractions.title')}:</p>
                                        {municipio.attractions.map((attraction, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-[#D4A343] rounded-full" />
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
                                10
                            </div>
                            <p className="text-white/90">{t('stats.municipios')}</p>
                        </div>
                        <div>
                            <div className="text-5xl text-[#D4A343] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                1.5M+
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