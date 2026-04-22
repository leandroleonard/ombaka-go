import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import EventsClient from './_components/EventsClient';

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function EventsPage({ params }: Props) {
    const { lang } = await params;
    const locale = routing.locales.includes(lang as any) ? lang : 'pt';

    const t = await getTranslations({ locale, namespace: 'eventos' });

    const eventos = [
        {
            nome: t('list.festival-cultural.nome'),
            data: t('list.festival-cultural.data'),
            local: t('list.festival-cultural.local'),
            municipio: t('list.festival-cultural.municipio'),
            tipo: t('list.festival-cultural.tipo'),
            descricao: t('list.festival-cultural.descricao'),
            imagem: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc2MjQzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.feira-turismo.nome'),
            data: t('list.feira-turismo.data'),
            local: t('list.feira-turismo.local'),
            municipio: t('list.feira-turismo.municipio'),
            tipo: t('list.feira-turismo.tipo'),
            descricao: t('list.feira-turismo.descricao'),
            imagem: 'https://images.unsplash.com/photo-1758518727820-28491c194bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludmVzdG1lbnQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzc2MjQzMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.festival-gastronomico.nome'),
            data: t('list.festival-gastronomico.data'),
            local: t('list.festival-gastronomico.local'),
            municipio: t('list.festival-gastronomico.municipio'),
            tipo: t('list.festival-gastronomico.tipo'),
            descricao: t('list.festival-gastronomico.descricao'),
            imagem: 'https://images.unsplash.com/photo-1609792790758-0994786ad983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3Vpc2luZSUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NjI0MzAxNnww&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.carnaval-lobito.nome'),
            data: t('list.carnaval-lobito.data'),
            local: t('list.carnaval-lobito.local'),
            municipio: t('list.carnaval-lobito.municipio'),
            tipo: t('list.carnaval-lobito.tipo'),
            descricao: t('list.carnaval-lobito.descricao'),
            imagem: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc2MjQzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.feira-artesanato.nome'),
            data: t('list.feira-artesanato.data'),
            local: t('list.feira-artesanato.local'),
            municipio: t('list.feira-artesanato.municipio'),
            tipo: t('list.feira-artesanato.tipo'),
            descricao: t('list.feira-artesanato.descricao'),
            imagem: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc2MjQzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.maratona-restinga.nome'),
            data: t('list.maratona-restinga.data'),
            local: t('list.maratona-restinga.local'),
            municipio: t('list.maratona-restinga.municipio'),
            tipo: t('list.maratona-restinga.tipo'),
            descricao: t('list.maratona-restinga.descricao'),
            imagem: 'https://images.unsplash.com/photo-1762571471526-e96c60cebe12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmUlMjBjb2FzdGFsJTIwdG91cmlzbXxlbnwxfHx8fDE3NzYyNDMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.festival-musica.nome'),
            data: t('list.festival-musica.data'),
            local: t('list.festival-musica.local'),
            municipio: t('list.festival-musica.municipio'),
            tipo: t('list.festival-musica.tipo'),
            descricao: t('list.festival-musica.descricao'),
            imagem: 'https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc2MjQzMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            nome: t('list.conferencia-sustentabilidade.nome'),
            data: t('list.conferencia-sustentabilidade.data'),
            local: t('list.conferencia-sustentabilidade.local'),
            municipio: t('list.conferencia-sustentabilidade.municipio'),
            tipo: t('list.conferencia-sustentabilidade.tipo'),
            descricao: t('list.conferencia-sustentabilidade.descricao'),
            imagem: 'https://images.unsplash.com/photo-1681139635899-434516500ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwcGFyayUyMHdpbGRsaWZlJTIwcmVzZXJ2ZXxlbnwxfHx8fDE3NzYyNDMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
    ];

    const municipios = [
        t('filters.municipios.lobito'),
        t('filters.municipios.benguela'),
        t('filters.municipios.baia-farta'),
        t('filters.municipios.catumbela'),
        t('filters.municipios.ganda'),
        t('filters.municipios.cubal'),
        t('filters.municipios.balombo'),
    ];

    const tiposEvento = [
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
        filterByMunicipio: t('filters.byMunicipio'),
        filterByTipo: t('filters.byTipo'),
        clearFilters: t('filters.clear'),
        saberMais: t('card.saberMais'),
        emptyState: t('emptyState'),
    };

    return (
        <EventsClient
            eventos={eventos}
            municipios={municipios}
            tiposEvento={tiposEvento}
            labels={labels}
        />
    );
}