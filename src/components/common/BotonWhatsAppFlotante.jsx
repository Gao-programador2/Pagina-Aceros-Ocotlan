import { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/523339680608?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Aceros%20Ocotl%C3%A1n';
const TAMANO = 56;
const MARGEN = 20;
const UMBRAL_CLIC = 8;

function IconoWhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/** Anclado a bordes (right/bottom por defecto) para que al redimensionar no quede al centro. */
function anclaInicial() {
  return {
    horizontal: 'right',
    vertical: 'bottom',
    offsetX: MARGEN,
    offsetY: MARGEN + 24,
  };
}

function limitarOffset(valor, eje) {
  const max =
    eje === 'x'
      ? Math.max(MARGEN, window.innerWidth - TAMANO - MARGEN)
      : Math.max(MARGEN, window.innerHeight - TAMANO - MARGEN);
  return Math.min(max, Math.max(MARGEN, valor));
}

/** Convierte coords absolutas a ancla en el borde más cercano (nunca centro). */
function anclarDesdeAbsoluto(left, top) {
  const centroX = left + TAMANO / 2;
  const centroY = top + TAMANO / 2;
  const horizontal = centroX < window.innerWidth / 2 ? 'left' : 'right';
  const vertical = centroY < window.innerHeight / 2 ? 'top' : 'bottom';

  const offsetX =
    horizontal === 'left'
      ? limitarOffset(left, 'x')
      : limitarOffset(window.innerWidth - left - TAMANO, 'x');
  const offsetY =
    vertical === 'top'
      ? limitarOffset(top, 'y')
      : limitarOffset(window.innerHeight - top - TAMANO, 'y');

  return { horizontal, vertical, offsetX, offsetY };
}

function estiloDesdeAncla(ancla) {
  return {
    left: ancla.horizontal === 'left' ? ancla.offsetX : 'auto',
    right: ancla.horizontal === 'right' ? ancla.offsetX : 'auto',
    top: ancla.vertical === 'top' ? ancla.offsetY : 'auto',
    bottom: ancla.vertical === 'bottom' ? ancla.offsetY : 'auto',
  };
}

/**
 * Botón de WhatsApp fijo en el viewport (solo home).
 * Arrastrable; al soltar se ancla al borde más cercano para seguir el resize.
 */
function BotonWhatsAppFlotante() {
  const { pathname } = useLocation();
  const [ancla, setAncla] = useState(anclaInicial);
  const [arrastreAbs, setArrastreAbs] = useState(null);
  const [arrastrando, setArrastrando] = useState(false);
  const arrastre = useRef({
    activo: false,
    movio: false,
    origenX: 0,
    origenY: 0,
    inicioLeft: 0,
    inicioTop: 0,
  });

  const alPointerDown = useCallback(
    (evento) => {
      evento.currentTarget.setPointerCapture(evento.pointerId);

      const rect = evento.currentTarget.getBoundingClientRect();
      const inicioLeft = rect.left;
      const inicioTop = rect.top;

      arrastre.current = {
        activo: true,
        movio: false,
        origenX: evento.clientX,
        origenY: evento.clientY,
        inicioLeft,
        inicioTop,
      };
      setArrastreAbs({ left: inicioLeft, top: inicioTop });
      setArrastrando(true);
    },
    [],
  );

  const alPointerMove = useCallback((evento) => {
    if (!arrastre.current.activo) return;

    const dx = evento.clientX - arrastre.current.origenX;
    const dy = evento.clientY - arrastre.current.origenY;

    if (Math.abs(dx) > UMBRAL_CLIC || Math.abs(dy) > UMBRAL_CLIC) {
      arrastre.current.movio = true;
    }

    const left = Math.min(
      window.innerWidth - TAMANO - MARGEN,
      Math.max(MARGEN, arrastre.current.inicioLeft + dx),
    );
    const top = Math.min(
      window.innerHeight - TAMANO - MARGEN,
      Math.max(MARGEN, arrastre.current.inicioTop + dy),
    );

    setArrastreAbs({ left, top });
  }, []);

  const alPointerUp = useCallback((evento) => {
    if (!arrastre.current.activo) return;

    const fueClic = !arrastre.current.movio;
    arrastre.current.activo = false;
    setArrastrando(false);

    try {
      evento.currentTarget.releasePointerCapture(evento.pointerId);
    } catch {
      /* ya liberado */
    }

    setArrastreAbs((actual) => {
      if (actual) {
        setAncla(anclarDesdeAbsoluto(actual.left, actual.top));
      }
      return null;
    });

    if (fueClic) {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  }, []);

  if (pathname !== '/') return null;

  const estilo = arrastreAbs
    ? { left: arrastreAbs.left, top: arrastreAbs.top, right: 'auto', bottom: 'auto' }
    : estiloDesdeAncla(ancla);

  return (
    <button
      type="button"
      aria-label="Abrir WhatsApp (arrastra para mover)"
      title="WhatsApp — arrastra para mover"
      onPointerDown={alPointerDown}
      onPointerMove={alPointerMove}
      onPointerUp={alPointerUp}
      onPointerCancel={alPointerUp}
      className={`fixed z-[150] flex h-14 w-14 touch-none items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl ${
        arrastrando ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={estilo}
    >
      <IconoWhatsApp className="pointer-events-none h-8 w-8" />
    </button>
  );
}

export default BotonWhatsAppFlotante;
