import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, FilePlus2 } from 'lucide-react';
import { apiFetch } from '../../config/api.js';
import {
  ACCEPT_ARCHIVOS,
  MAX_ARCHIVOS_TRANSPARENCIA,
  agregarArchivosTransparencia,
  validarListaArchivosTransparencia,
} from '../../utils/archivosTransparencia.js';
import {
  alertaDesdeError,
  mensajePrimerCampoInvalido,
  useModalAlerta,
} from '../../hooks/useModalAlerta.jsx';

const AZUL = '#1a4789';
const RUTA_TRANSPARENCIA = '/transparencia-ao/';

const CAMPO =
  'w-full rounded-lg border border-[#c5cdd8] bg-white px-3 py-2.5 text-sm text-[#333] outline-none transition-shadow focus:border-[#1a4789] focus:ring-2 focus:ring-[#1a4789]/25';

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

const CONSEJOS_FRAUDE = [
  'En Aceros Ocotlán antes de realizar cualquier transacción o devolución, nosotros nos identificamos con documentación oficial, ante cualquier duda comunícate con tu ejecutivo.',
  'Nuestras unidades y operadores siempre estarán identificados, evita robo de mercancía.',
  'Nuestro personal no está autorizado para recoger mercancía después de entrega.',
  'El dominio de nuestros correos electrónicos de nuestros colaboradores es @acerosocotlan.mx.',
  'Todas nuestras cuentas destinadas para el pago de tus cotizaciones nunca estarán a nombre de personas físicas, sino que estarán registradas a nombre de la razón social de nuestra sucursal.',
];

/**
 * Formulario de denuncia de fraudes.
 */
function FraudesPage() {
  const navegar = useNavigate();
  const inputArchivoRef = useRef(null);
  const { mostrarAlerta, ModalAlertaFormulario } = useModalAlerta();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [archivos, setArchivos] = useState([]);
  const [formulario, setFormulario] = useState({
    correo: '',
    nombre: '',
    narracion: '',
    enlaceFraudulento: '',
  });

  const actualizar = (campo) => (evento) => {
    setFormulario((prev) => ({ ...prev, [campo]: evento.target.value }));
  };

  const mostrarErrorArchivo = (mensaje) => {
    mostrarAlerta(alertaDesdeError(mensaje, 'archivo'));
  };

  const incorporarArchivos = (lista) => {
    const { archivos: actualizados, error } = agregarArchivosTransparencia(archivos, lista);
    if (error) {
      mostrarErrorArchivo(error);
      return;
    }
    setArchivos(actualizados);
  };

  const alSoltarArchivos = (evento) => {
    evento.preventDefault();
    const lista = Array.from(evento.dataTransfer?.files ?? []);
    if (lista.length) incorporarArchivos(lista);
  };

  const alElegirArchivos = (evento) => {
    const lista = Array.from(evento.target.files ?? []);
    if (lista.length) incorporarArchivos(lista);
    evento.target.value = '';
  };

  const alEnviar = async (evento) => {
    evento.preventDefault();
    const formularioHtml = evento.currentTarget;

    if (!formularioHtml.checkValidity()) {
      const mensaje = mensajePrimerCampoInvalido(formularioHtml);
      mostrarAlerta(alertaDesdeError(mensaje, 'formulario'));
      formularioHtml.querySelector(':invalid')?.focus();
      return;
    }

    if (archivos.length === 0) {
      mostrarErrorArchivo('Debes adjuntar al menos un archivo PDF o JPG como evidencia.');
      inputArchivoRef.current?.focus();
      return;
    }

    const errorAdjuntos = validarListaArchivosTransparencia(archivos);
    if (errorAdjuntos) {
      mostrarErrorArchivo(errorAdjuntos);
      return;
    }

    setEnviando(true);

    try {
      const datos = new FormData();
      datos.append('correo', formulario.correo);
      datos.append('nombre', formulario.nombre);
      datos.append('narracion', formulario.narracion);
      datos.append('enlace_fraudulento', formulario.enlaceFraudulento);
      archivos.forEach((archivo) => datos.append('archivos', archivo));

      await apiFetch('/api/transparencia/fraudes', {
        method: 'POST',
        body: datos,
      });

      setEnviado(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      mostrarAlerta(alertaDesdeError(error?.message, 'envio'));
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <section className="relative bg-[#f3f4f6] pb-12 pt-6 sm:pt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-10">
            <h1 className="text-2xl font-bold sm:text-3xl" style={{ color: AZUL }}>
              Gracias por tu denuncia
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#555] sm:text-base">
              Hemos recibido tu información. En Grupo Aceros Ocotlán trabajamos por la
              transparencia, la honestidad y el servicio.
            </p>
            <Link
              to={RUTA_TRANSPARENCIA}
              className="mt-8 inline-flex rounded-full bg-[#1a4789] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163a70]"
            >
              Volver a Transparencia
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#f3f4f6] pb-12 pt-6 sm:pt-8">
      <ModalAlertaFormulario />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-4 flex min-w-0 items-center gap-3 sm:mb-5 sm:gap-4">
          <button
            type="button"
            onClick={() => navegar(RUTA_TRANSPARENCIA)}
            aria-label="Regresar a Transparencia"
            className="-ml-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#1a4789] transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={32} strokeWidth={1.75} />
          </button>
          <h1
            className="flex-1 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
            style={{ color: AZUL }}
          >
            Fraudes
          </h1>
          <span className="h-10 w-10 shrink-0" aria-hidden="true" />
        </div>

        <div className="mb-6 space-y-1 text-center text-sm sm:text-base" style={{ color: AZUL }}>
          <p>En Grupo Aceros Ocotlán trabajamos por la transparencia, la honestidad y el servicio.</p>
          <p>Protege tus datos y evita fraudes en línea.</p>
        </div>

        <div className="mb-6 rounded-2xl bg-[#8fa6c9] px-4 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-sm leading-relaxed text-white sm:text-base">
            Te invitamos a seguir nuestras redes sociales oficiales, donde podrás contactarnos y
            saber más sobre nuestros productos, soluciones y servicios que tenemos a tu disposición.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {REDES_SOCIALES.map(({ etiqueta, href, d }) => (
              <a
                key={etiqueta}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={etiqueta}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a4789] transition-colors hover:bg-white/85"
              >
                <IconoSvg d={d} />
              </a>
            ))}
          </div>
        </div>

        <form
          noValidate
          onSubmit={alEnviar}
          className="rounded-2xl bg-white px-4 py-6 shadow-sm sm:px-8 sm:py-8"
        >
          <h2 className="text-center text-base font-bold sm:text-lg" style={{ color: AZUL }}>
            Garantizamos la confidencialidad de tus datos y de la información que proporcionas
          </h2>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Correo electrónico
              </span>
              <input
                type="email"
                value={formulario.correo}
                onChange={actualizar('correo')}
                placeholder="Opcional"
                className={CAMPO}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">Nombre</span>
              <input
                type="text"
                value={formulario.nombre}
                onChange={actualizar('nombre')}
                placeholder="Opcional"
                className={CAMPO}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Narración de los hechos:*
              </span>
              <textarea
                value={formulario.narracion}
                onChange={actualizar('narracion')}
                required
                rows={5}
                placeholder="Escribe un mensaje..."
                className={`${CAMPO} resize-y`}
              />
            </label>
            <p className="text-xs leading-relaxed text-[#777] sm:text-sm">
              Nota: Para que su denuncia acredite el filtro, deberá de explicar detalladamente su
              denuncia, aportando hechos objetivos verídicos para que no quede duda alguna.
            </p>

            <div>
              <p className="mb-1.5 text-sm font-medium text-[#333]">Compártenos la evidencia:*</p>
              <p className="mb-2 text-xs leading-relaxed text-[#777] sm:text-sm">
                Solo PDF o JPG · máximo {MAX_ARCHIVOS_TRANSPARENCIA} archivos · 8 MB por archivo.
              </p>
              <input
                ref={inputArchivoRef}
                type="file"
                multiple
                accept={ACCEPT_ARCHIVOS}
                className="hidden"
                onChange={alElegirArchivos}
              />
              <button
                type="button"
                onClick={() => inputArchivoRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={alSoltarArchivos}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#1a4789]/70 bg-[#fafbfc] px-4 py-10 transition-colors hover:border-[#1a4789] hover:bg-[#f3f6fb]"
              >
                <FilePlus2 size={40} className="text-[#1a4789]" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#1a4789]">
                  Sube o arrastra algún archivo
                </span>
              </button>
              {archivos.length > 0 && (
                <ul className="mt-3 space-y-1 text-left text-sm text-[#555]">
                  {archivos.map((archivo) => (
                    <li key={`${archivo.name}-${archivo.size}`}>{archivo.name}</li>
                  ))}
                </ul>
              )}
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-[#333]">
                Link o enlace de la red social fraudulenta:*
              </span>
              <input
                type="url"
                value={formulario.enlaceFraudulento}
                onChange={actualizar('enlaceFraudulento')}
                required
                placeholder="Ej: http://www...."
                className={CAMPO}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="mt-8 w-full rounded-full bg-[#1a4789] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#163a70] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {enviando ? 'Enviando…' : 'Enviar'}
          </button>

          <h3 className="mt-10 text-base font-bold sm:text-lg" style={{ color: AZUL }}>
            Evita fraudes utilizando únicamente nuestros canales oficiales:
          </h3>

          <div className="mt-4 rounded-2xl bg-[#8fa6c9] px-5 py-6 sm:px-7 sm:py-7">
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white sm:text-base">
              {CONSEJOS_FRAUDE.map((consejo) => (
                <li key={consejo}>{consejo}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FraudesPage;
