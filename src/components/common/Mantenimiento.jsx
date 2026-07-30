import { Link } from 'react-router-dom';
import aceronMecanico from '../../assets/aceron_mecanico.png';

/**
 * Vista de mantenimiento con el personaje Acerón mecánico.
 * Se usa en Blog y Transparencia mientras esas secciones no están listas.
 */
export default function Mantenimiento({ seccion = 'esta sección' }) {
  return (
    <div className="relative -mt-[7.5rem] flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0f172a] px-4 pb-16 pt-[8.5rem] md:-mt-32 sm:pt-44 md:pt-52">
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#0d47a1]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Personaje + globo de diálogo */}
        <div className="relative mb-6 flex flex-col items-center">
          <div className="relative mb-4 max-w-[280px] rounded-2xl border border-[#0d47a1]/40 bg-white px-4 py-3 text-left shadow-xl sm:max-w-sm sm:px-5 sm:py-4">
            <p className="text-sm font-semibold leading-snug text-[#0d47a1] sm:text-base">
              ¡Hola! {seccion} está en mantenimiento.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-steel-600 sm:text-sm">
              Estoy trabajando para dejarla lista. Vuelve pronto.
            </p>
            <span
              className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-r border-b border-[#0d47a1]/40 bg-white"
              aria-hidden="true"
            />
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0d47a1] to-blue-400 opacity-30 blur transition duration-1000 group-hover:opacity-60 animate-pulse" />
            <img
              src={aceronMecanico}
              alt="Acerón mecánico — mantenimiento Aceros Ocotlán"
              className="relative h-52 w-52 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] sm:h-64 sm:w-64"
              style={{ animation: 'aceron-float 4s ease-in-out infinite' }}
            />
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d47a1]/40 bg-[#0d47a1]/20 px-3.5 py-1.5 text-xs font-medium tracking-wide text-blue-400 uppercase sm:text-sm">
          <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
          Sistema en actualización
        </div>

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Estamos mejorando para ti
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
          Nuestro equipo de ingeniería realiza mantenimiento programado. Estaremos de regreso muy
          pronto.
        </p>

        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md sm:flex-row">
          <div className="text-left">
            <h3 className="text-sm font-semibold text-white">Gracias por tu paciencia</h3>
            <p className="text-xs text-slate-400">
              Mientras tanto, puedes seguir explorando el resto del sitio.
            </p>
          </div>
          <Link
            to="/"
            className="w-full rounded-lg bg-[#0d47a1] px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-700 sm:w-auto"
          >
            Ir al inicio
          </Link>
        </div>

        <p className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} Aceros Ocotlán. Todos los derechos reservados.
        </p>
      </div>

      <style>{`
        @keyframes aceron-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
