import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function NotFound({ params }: Props) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: 'common' });

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto px-4 text-center">
        <AlertCircle className="w-24 h-24 mx-auto mb-6 text-[#D4A343]" />
        <h1 className="text-6xl mb-4 text-[#0B3B5B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {t('notFound.title')}
        </h1>
        <h2 className="text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('notFound.heading')}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('notFound.description')}
        </p>
        <Link
          href={`/${lang}`}
          className="inline-block bg-[#0B3B5B] text-white px-8 py-3 hover:bg-[#0B3B5B]/90 transition-colors"
        >
          {t('notFound.backButton')}
        </Link>
      </div>
    </div>
  );
}