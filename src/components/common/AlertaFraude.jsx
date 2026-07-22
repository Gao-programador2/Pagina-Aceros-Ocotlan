import { useEffect, useState } from 'react';
import { X, Globe } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

const CLAVE_SESION = 'ao-alerta-fraude-vista';

const IconoSvg = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
    <path d={d} />
  </svg>
);

const CANALES = [
  {
    etiqueta: 'Instagram',
    handle: '@grupoacerosocotlan',
    href: 'https://www.instagram.com/acerosocotlan',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    etiqueta: 'Facebook',
    handle: 'Acerosocotlanmx',
    href: 'https://www.facebook.com/acerosocotlan',
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    etiqueta: 'Sitio web',
    handle: 'acerosocotlan.mx',
    href: 'https://acerosocotlan.mx',
    Icono: Globe,
  },
  {
    etiqueta: 'X',
    handle: 'acerosocotlan.mx',
    href: 'https://x.com/acerosocotlan',
    d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
];

const PUNTOS = [
  <>
    En <span className="font-semibold text-[#f5c518]">Aceros Ocotlán</span> antes de realizar
    cualquier transacción o devolución, nosotros{' '}
    <span className="font-semibold text-[#f5c518]">
      nos identificamos con documentación oficial
    </span>
    , ante cualquier duda comunícate con tu ejecutivo.
  </>,
  <>
    Nuestras unidades y operadores siempre estarán identificados,{' '}
    <span className="font-semibold text-[#f5c518]">evita robo de mercancía</span>.
  </>,
  <>Nuestro personal no está autorizado para recoger mercancía después de entrega.</>,
  <>
    El dominio de nuestros correos electrónicos de nuestros colaboradores es{' '}
    <span className="font-semibold text-[#f5c518]">@acerosocotlan.mx</span>.
  </>,
  <>
    Todas nuestras cuentas destinadas para el pago de tus cotizaciones{' '}
    <span className="font-semibold text-[#f5c518]">nunca estarán a nombre de personas físicas</span>,
    sino que estarán registradas a nombre de la razón social de nuestras sucursales.
  </>,
];

/**
 * Alerta anti-fraude al abrir el sitio.
 * Usa sessionStorage: aparece una vez por sesión de pestaña, no en cada refresh.
 */
function AlertaFraude() {
  const [abierta, setAbierta] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CLAVE_SESION) === '1') return;
      sessionStorage.setItem(CLAVE_SESION, '1');
      setAbierta(true);
    } catch {
      setAbierta(true);
    }
  }, []);

  const cerrar = () => setAbierta(false);

  useEffect(() => {
    if (!abierta) return undefined;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const alPresionarEscape = (evento) => {
      if (evento.key === 'Escape') cerrar();
    };
    window.addEventListener('keydown', alPresionarEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', alPresionarEscape);
    };
  }, [abierta]);

  if (!abierta) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="alerta-fraude-titulo"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 p-3 sm:p-6"
      onClick={cerrar}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-x-hidden overflow-y-auto rounded-2xl bg-[#1b3d8f] px-5 py-6 text-white shadow-2xl sm:px-10 sm:py-8 lg:px-12"
        onClick={(evento) => evento.stopPropagation()}
      >
        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar alerta"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-4 sm:top-4"
        >
          <X size={20} />
        </button>

        <div className="flex min-w-0 items-center justify-between gap-2 pr-10 sm:gap-8">
          <img
            src={logoAcerosOcotlan}
            alt="Aceros Ocotlán"
            className="h-10 w-auto max-w-[40%] shrink-0 object-contain sm:h-16 sm:max-w-none"
          />

          <div className="flex min-w-0 shrink flex-nowrap items-center justify-end gap-x-1.5 sm:gap-x-5">
            {CANALES.map(({ etiqueta, handle, href, d, Icono }) => (
              <a
                key={etiqueta}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={etiqueta}
                className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-white/95 transition-opacity hover:opacity-80 sm:text-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
                  {Icono ? <Icono className="h-3.5 w-3.5" /> : <IconoSvg d={d} />}
                </span>
                <span className="hidden sm:inline">{handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <h2
            id="alerta-fraude-titulo"
            className="text-2xl font-extrabold uppercase tracking-wide text-[#f5c518] sm:text-3xl lg:text-4xl"
          >
            ¡No te dejes engañar!
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
            Evita fraudes utilizando únicamente nuestros canales oficiales
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-left text-sm leading-relaxed text-white/95 sm:mt-8 sm:space-y-3.5 sm:text-base">
          {PUNTOS.map((punto, indice) => (
            <li key={indice} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5c518]" aria-hidden="true" />
              <span>{punto}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlertaFraude;
