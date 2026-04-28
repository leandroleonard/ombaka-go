// app/[lang]/layout.tsx

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Montserrat, Poppins, Open_Sans, Lato } from 'next/font/google';
import "./../globals.css";

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

// Configurar as fontes (fora do componente)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
  variable: '--font-lato',
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const locale = routing.locales.includes(lang as any) ? lang : routing.defaultLocale;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} ${lato.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}