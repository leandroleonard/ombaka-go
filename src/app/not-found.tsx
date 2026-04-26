// app/not-found.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GlobalNotFound() {
  const pathname = usePathname();
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const pathSegments = pathname?.split('/') || [];
    const firstSegment = pathSegments[1];
    const validLocales = ['pt', 'en', 'fr'];
    if (firstSegment && validLocales.includes(firstSegment)) {
      setLang(firstSegment);
    } else {
      setLang('pt');
    }
  }, [pathname]);

  const texts = {
    pt: {
      title: '404',
      heading: 'Página não encontrada',
      description: 'Desculpe, a página que você está procurando não existe ou foi movida.',
      backButton: 'Voltar para a página inicial'
    },
    en: {
      title: '404',
      heading: 'Page not found',
      description: 'Sorry, the page you are looking for does not exist or has been moved.',
      backButton: 'Back to home page'
    },
    fr: {
      title: '404',
      heading: 'Page non trouvée',
      description: 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.',
      backButton: 'Retour à la page d\'accueil'
    }
  };

  const t = texts[lang as keyof typeof texts] || texts.pt;

  // Estilos inline para garantir que sejam aplicados
  const styles = {
    container: {
      minHeight: '100vh',
      paddingTop: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
    },
    content: {
      maxWidth: '28rem',
      margin: '0 auto',
      padding: '0 1rem',
      textAlign: 'center' as const,
    },
    icon: {
      width: '6rem',
      height: '6rem',
      margin: '0 auto 1.5rem',
      color: '#D4A343',
    },
    title: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#0B3B5B',
      fontFamily: 'Montserrat, sans-serif',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      fontFamily: 'Poppins, sans-serif',
      color: '#1f2937',
    },
    description: {
      color: '#6b7280',
      marginBottom: '2rem',
      fontSize: '1rem',
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#0B3B5B',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.375rem',
      transition: 'background-color 0.3s',
      textDecoration: 'none',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <AlertCircle style={styles.icon} />
        <h1 style={styles.title}>
          {t.title}
        </h1>
        <h2 style={styles.heading}>
          {t.heading}
        </h2>
        <p style={styles.description}>
          {t.description}
        </p>
        <Link
          href={`/${lang}`}
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#094158';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0B3B5B';
          }}
        >
          {t.backButton}
        </Link>
      </div>
    </div>
  );
}