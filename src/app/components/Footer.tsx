import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('header'); 

  return (
    <footer className="bg-[#0B3B5B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 
              className="text-xl mb-4" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ombaka Go
            </h3>
            <p className="text-sm text-white/80 mb-6">
              Plataforma oficial de promoção turística da Província de Benguela, Angola.
              Descubra o melhor que Benguela tem para oferecer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#D4A343] transition-colors"
                aria-label="Facebook"
              >
                {/* <Facebook className="w-5 h-5" /> */}
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#D4A343] transition-colors"
                aria-label="Instagram"
              >
                {/* <Instagram className="w-5 h-5" /> */}
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#D4A343] transition-colors"
                aria-label="LinkedIn"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
                LinkedIn
              </a>
            </div>
          </div>

          {/* Municípios Principais */}
          <div>
            <h4 className="mb-4 font-medium">Municípios Principais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href={`/${locale}/municipios/lobito`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Lobito
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/municipios/benguela`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Benguela
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/municipios/baia-farta`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Baía Farta
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/municipios/ganda`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Ganda
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/municipios`}
                  className="text-[#D4A343] hover:underline font-medium"
                >
                  Ver todos os municípios
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="mb-4 font-medium">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href={`/${locale}/faq`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/guias`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Guias Turísticos
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/privacidade`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/termos`}
                  className="text-white/80 hover:text-[#D4A343] transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto + Newsletter */}
          <div>
            <h4 className="mb-4 font-medium">Contacto & Newsletter</h4>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">+244 123 456 789</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">info@ombakago.ao</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Benguela, Angola</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D4A343] focus:bg-white/20"
              />
              <button className="mt-3 w-full bg-[#D4A343] text-[#0B3B5B] font-medium px-4 py-3 rounded-full text-sm hover:bg-[#c89338] transition-colors">
                Receber novidades
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 Ombaka Go. Todos os direitos reservados.
          </p>
          
          <div className="px-4 py-1.5 bg-[#2E7D64] rounded-full text-xs font-medium flex items-center gap-2">
            <span>🌱</span>
            Turismo Sustentável Certificado
          </div>
        </div>
      </div>
    </footer>
  );
}