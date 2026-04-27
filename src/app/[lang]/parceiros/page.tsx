import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ParceirosClient from './_components/PartnersClient';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function ParceirosPage({ params }: Props) {
  const { lang } = await params;
  const locale = routing.locales.includes(lang as any) ? lang : 'pt';

  const t = await getTranslations({ locale, namespace: 'partners' });
  const tCategories = await getTranslations({ locale, namespace: 'partners.categories' });
  const tMunicipios = await getTranslations({ locale, namespace: 'partners.municipios' });
  const tBenefits = await getTranslations({ locale, namespace: 'partners.benefits' });

  const categories = [
    { id: 'todos', name: tCategories('all') },
    { id: 'alojamento', name: tCategories('accommodation') },
    { id: 'gastronomia', name: tCategories('gastronomy') },
    { id: 'operadores', name: tCategories('operators') },
    { id: 'transporte', name: tCategories('transport') },
    { id: 'cultura', name: tCategories('culture') },
  ];

  const municipiosList = [
    'todos', 'Benguela', 'Lobito', 'Catumbela', 'Baía Farta', 
    'Cubal', 'Ganda', 'Balombo', 'Chongorói', 'Bocoio', 'Caimbambo'
  ];

  const partnersData = [
    {
      id: 1,
      name: t('partners.hotelTerminus.name'),
      category: 'alojamento',
      municipio: 'Lobito',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3NzY1NzgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.hotelTerminus.description'),
      phone: '+244 272 222 XXX',
      email: 'reservas@hotelterminus.ao',
      website: 'www.hotelterminus.ao',
      address: t('partners.hotelTerminus.address'),
    },
    {
      id: 2,
      name: t('partners.marisqueira.name'),
      category: 'gastronomia',
      municipio: 'Lobito',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1766812782166-e243111f703d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NzY1NzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.marisqueira.description'),
      phone: '+244 272 223 XXX',
      email: 'info@marisqueira.ao',
      website: 'www.marisqueira.ao',
      address: t('partners.marisqueira.address'),
    },
    {
      id: 3,
      name: t('partners.benguelaTours.name'),
      category: 'operadores',
      municipio: 'Benguela',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1770753896796-353db8c7de17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjBhZHZlbnR1cmUlMjB0cmF2ZWx8ZW58MXx8fHwxNzc2NTc4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.benguelaTours.description'),
      phone: '+244 272 224 XXX',
      email: 'reservas@benguelatours.ao',
      website: 'www.benguelatours.ao',
      address: t('partners.benguelaTours.address'),
    },
    {
      id: 4,
      name: t('partners.praiaMorena.name'),
      category: 'alojamento',
      municipio: 'Benguela',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3NzY1NzgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.praiaMorena.description'),
      phone: '+244 272 225 XXX',
      email: 'reservas@praiamorena.ao',
      website: 'www.praiamorena.ao',
      address: t('partners.praiaMorena.address'),
    },
    {
      id: 5,
      name: t('partners.saborAngola.name'),
      category: 'gastronomia',
      municipio: 'Benguela',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1766812782166-e243111f703d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NzY1NzgxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.saborAngola.description'),
      phone: '+244 272 226 XXX',
      email: 'info@sabordeangola.ao',
      website: 'www.sabordeangola.ao',
      address: t('partners.saborAngola.address'),
    },
    {
      id: 6,
      name: t('partners.catumbelaAdventures.name'),
      category: 'operadores',
      municipio: 'Catumbela',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1770753896796-353db8c7de17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjBhZHZlbnR1cmUlMjB0cmF2ZWx8ZW58MXx8fHwxNzc2NTc4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.catumbelaAdventures.description'),
      phone: '+244 272 227 XXX',
      email: 'info@catumbelaadventures.ao',
      website: 'www.catumbelaadventures.ao',
      address: t('partners.catumbelaAdventures.address'),
    },
    {
      id: 7,
      name: t('partners.baiaFartaLodge.name'),
      category: 'alojamento',
      municipio: 'Baía Farta',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3NzY1NzgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.baiaFartaLodge.description'),
      phone: '+244 272 228 XXX',
      email: 'reservas@baiafarta.ao',
      website: 'www.baiafarta.ao',
      address: t('partners.baiaFartaLodge.address'),
    },
    {
      id: 8,
      name: t('partners.lobitoRentCar.name'),
      category: 'transporte',
      municipio: 'Lobito',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1770753896796-353db8c7de17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjBhZHZlbnR1cmUlMjB0cmF2ZWx8ZW58MXx8fHwxNzc2NTc4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t('partners.lobitoRentCar.description'),
      phone: '+244 272 229 XXX',
      email: 'reservas@lobitocars.ao',
      website: 'www.lobitocars.ao',
      address: t('partners.lobitoRentCar.address'),
    },
  ];

  const benefits = [
    {
      icon: 'Globe',
      title: tBenefits('visibility.title'),
      description: tBenefits('visibility.description'),
      bgColor: '#0B3B5B',
    },
    {
      icon: 'Star',
      title: tBenefits('certification.title'),
      description: tBenefits('certification.description'),
      bgColor: '#2E7D64',
    },
    {
      icon: 'MapPin',
      title: tBenefits('reach.title'),
      description: tBenefits('reach.description'),
      bgColor: '#D4A343',
    },
  ];

  const labels = {
    breadcrumbHome: t('breadcrumbHome'),
    breadcrumbPartners: t('breadcrumbPartners'),
    heroTitle: t('heroTitle'),
    heroSubtitle: t('heroSubtitle'),
    searchPlaceholder: t('searchPlaceholder'),
    allMunicipios: t('allMunicipios'),
    partnersFound: t('partnersFound'),
    partnerFound: t('partnerFound'),
    noPartnersFound: t('noPartnersFound'),
    viewDetails: t('viewDetails'),
    contact: t('contact'),
    becomePartnerTitle: t('becomePartnerTitle'),
    becomePartnerSubtitle: t('becomePartnerSubtitle'),
    applyNow: t('applyNow'),
    learnMore: t('learnMore'),
    benefitsTitle: t('benefitsTitle'),
  };

  return (
    <ParceirosClient
      partners={partnersData}
      categories={categories}
      municipios={municipiosList}
      benefits={benefits}
      labels={labels}
      locale={locale}
    />
  );
}