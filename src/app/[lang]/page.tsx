import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';   
import { Leaf, Heart, TrendingUp, Mail } from 'lucide-react';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  const locale = routing.locales.includes(lang as any) ? lang : 'pt';

  const t = await getTranslations({ locale, namespace: 'home' });


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1762571471526-e96c60cebe12?..."
            alt="Benguela Coast"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#D4A343]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/zonas-turisticas`}
              className="bg-[#D4A343] text-white px-8 py-4 rounded-full hover:bg-[#c89338] transition-colors text-lg font-medium"
            >
              Explorar Destinos
            </Link>
            <Link
              href={`/${locale}/investir`}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0B3B5B] transition-all text-lg font-medium"
            >
              Investir em Benguela
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}