import { useEffect } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2, FileWarning, X } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

const ESTILOS = {
  error: {
    icono: AlertCircle,
    acento: '#b91c1c',
    fondoIcono: 'bg-red-50',
    bordeIcono: 'border-red-100',
    etiqueta: 'Algo salió mal',
  },
  advertencia: {
    icono: FileWarning,
    acento: '#c2410c',
    fondoIcono: 'bg-orange-50',
    bordeIcono: 'border-orange-100',
    etiqueta: 'Revisa tu archivo',
  },
  exito: {
    icono: CheckCircle2,
    acento: '#15803d',
    fondoIcono: 'bg-green-50',
    bordeIcono: 'border-green-100',
    etiqueta: 'Listo',
  },
  info: {
    icono: AlertTriangle,
    acento: '#1a4789',
    fondoIcono: 'bg-blue-50',
    bordeIcono: 'border-blue-100',
    etiqueta: 'Información',
  },
};

/**
 * Modal de alerta acorde al diseño Aceros Ocotlán.
 *
 * @param {object} props
 * @param {boolean} props.abierta
 * @param {() => void} props.onCerrar
 * @param {'error'|'advertencia'|'exito'|'info'} [props.tipo]
 * @param {string} props.titulo
 * @param {string} props.mensaje
 * @param {string} [props.textoBoton]
 */
function ModalAlerta({
  abierta,
  onCerrar,
  tipo = 'error',
  titulo,
  mensaje,
  textoBoton = 'Entendido',
}) {
  const estilo = ESTILOS[tipo] ?? ESTILOS.error;
  const Icono = estilo.icono;

  useEffect(() => {
    if (!abierta) return undefined;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const alPresionarEscape = (evento) => {
      if (evento.key === 'Escape') onCerrar();
    };
    window.addEventListener('keydown', alPresionarEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', alPresionarEscape);
    };
  }, [abierta, onCerrar]);

  if (!abierta) return null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="modal-alerta-titulo"
      aria-describedby="modal-alerta-mensaje"
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[#1a4789]/40 p-4 backdrop-blur-[2px] sm:p-6"
      onClick={onCerrar}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_rgba(26,71,137,0.22)]"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div
          className="px-6 py-5 text-white sm:px-7"
          style={{
            background: 'linear-gradient(135deg, #1a4789 0%, #0d3a73 100%)',
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logoAcerosOcotlan}
                alt=""
                aria-hidden="true"
                className="h-9 w-auto shrink-0 object-contain brightness-0 invert"
              />
              <div className="min-w-0">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/75">
                  Aceros Ocotlán
                </p>
                <p className="text-xs text-white/90">{estilo.etiqueta}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onCerrar}
              aria-label="Cerrar alerta"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-7 sm:py-7">
          <div
            className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border ${estilo.fondoIcono} ${estilo.bordeIcono}`}
          >
            <Icono size={28} style={{ color: estilo.acento }} strokeWidth={1.75} />
          </div>

          <h2
            id="modal-alerta-titulo"
            className="text-center text-lg font-semibold text-[#1a4789] sm:text-xl"
          >
            {titulo}
          </h2>
          <p
            id="modal-alerta-mensaje"
            className="mt-3 text-center text-sm leading-relaxed text-[#555] sm:text-[0.95rem]"
          >
            {mensaje}
          </p>

          <button
            type="button"
            onClick={onCerrar}
            className="mt-6 w-full rounded-full bg-[#1a4789] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#163a70]"
          >
            {textoBoton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAlerta;
