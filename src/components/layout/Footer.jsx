import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

/* Iconos de marca como SVG (lucide-react ya no incluye iconos de redes sociales) */
const IconoSvg = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
    <path d={d} />
  </svg>
);

const REDES_SOCIALES = [
  {
    etiqueta: 'Instagram',
    href: 'https://www.instagram.com/acerosocotlan',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    etiqueta: 'Facebook',
    href: 'https://www.facebook.com/acerosocotlan',
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    etiqueta: 'TikTok',
    href: 'https://www.tiktok.com/@acerosocotlan',
    d: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    etiqueta: 'YouTube',
    href: 'https://www.youtube.com/@acerosocotlan',
    d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    etiqueta: 'X',
    href: 'https://x.com/acerosocotlan',
    d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    etiqueta: 'LinkedIn',
    href: 'https://www.linkedin.com/company/acerosocotlan',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

function Footer() {
  return (
    <footer className="bg-[#1b3d8f] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10">
        {/* Escritorio: logo + redes en la misma fila | Móvil: solo redes centradas */}
        <div className="flex items-center justify-center lg:justify-between">
          <Link to="/" className="hidden flex-shrink-0 lg:block">
            <img
              src={logoAcerosOcotlan}
              alt="Aceros Ocotlán"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {REDES_SOCIALES.map(({ etiqueta, href, d }) => (
              <a
                key={etiqueta}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={etiqueta}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1b3d8f] transition-colors hover:bg-white/80"
              >
                <IconoSvg d={d} />
              </a>
            ))}
          </div>
        </div>

        {/* Línea gradiente blanca */}
        <div
          className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          aria-hidden="true"
        />

        {/* Móvil: grid 2 columnas | Escritorio: 3 secciones centradas */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:justify-center lg:gap-24">
          {/* Logo (solo móvil, en escritorio ya está arriba) */}
          <div className="flex items-start lg:hidden">
            <Link to="/">
              <img
                src={logoAcerosOcotlan}
                alt="Aceros Ocotlán"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Recursos */}
          <div className="text-sm">
            <h3 className="font-semibold text-white/80">Recursos</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/transparencia-ao/" className="underline underline-offset-2 hover:text-white/80">
                  Transparencia
                </Link>
              </li>
              <li>
                <Link to="/bolsa-de-trabajo" className="underline underline-offset-2 hover:text-white/80">
                  Bolsa de Trabajo
                </Link>
              </li>
              <li>
                <Link to="/blog" className="underline underline-offset-2 hover:text-white/80">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Compañía */}
          <div className="text-sm">
            <h3 className="font-semibold text-white/80">Compañía</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/historia" className="underline underline-offset-2 hover:text-white/80">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="underline underline-offset-2 hover:text-white/80">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-white/80">
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="min-w-0 text-sm">
            <h3 className="font-semibold text-white/80">Contacto</h3>
            <ul className="mt-3 space-y-2 break-words">
              <li>
                <a
                  href="tel:3339680608"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-white/80"
                >
                  <Phone size={14} />
                  33 3968 0608
                </a>
              </li>
              <li>(33) 3884-1300</li>
              <li>FAX. (01) (33) 3811-1771</li>
              <li>
                <a
                  href="mailto:ventas@acerosocotlan.mx"
                  className="block break-all underline underline-offset-2 hover:text-white/80"
                >
                  ventas@acerosocotlan.mx
                </a>
              </li>
              <li>
                <a
                  href="mailto:corporativo.ventas@acerosocotlan.mx"
                  className="block break-all text-[0.8rem] leading-snug underline underline-offset-2 hover:text-white/80 sm:text-sm"
                >
                  corporativo.ventas@acerosocotlan.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Razón social */}
        <div className="mt-12 text-center text-xs font-medium uppercase leading-relaxed tracking-wide">
          <p>
            GRUPO ACEROS OCOTLÁN S.A. DE C.V. GUADALAJARA, JALISCO: AV. LÁZARO CÁRDENAS
          </p>
          <p>
            NO. 2257. COL. LAS TORRES C.P. 44920. GUADALAJARA, JALISCO, MÉXICO
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
