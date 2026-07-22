import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import fondoInicio from '../../assets/inicio.jpg';
import miniaturaInicio from '../../assets/1. Inicio.jpg';

const SLIDES = [
  {
    id: 'inicio',
    etiqueta: 'Inicio',
    miniatura: miniaturaInicio,
    fondo: fondoInicio,
  },
];

/**
 * Página de historia.
 * Fondo detrás del navbar (mismo -mt que el banner del home).
 * Foto + controles en zona media-derecha.
 */
function HistoryPage() {
  const [indice, setIndice] = useState(0);
  const slide = SLIDES[indice];
  const total = SLIDES.length;

  const irAnterior = () => {
    setIndice((actual) => (actual - 1 + total) % total);
  };

  const irSiguiente = () => {
    setIndice((actual) => (actual + 1) % total);
  };

  return (
    <section className="relative -mt-[7.5rem] flex min-h-[100svh] flex-col text-white md:-mt-32">
      <div className="pointer-events-none absolute inset-0">
        <img
          key={slide.fondo}
          src={slide.fondo}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 content-center gap-10 px-4 pb-10 pt-[8.5rem] sm:px-6 sm:pb-12 sm:pt-44 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pb-14 lg:pt-52">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-wide sm:text-4xl lg:text-[2.75rem]">
            NUESTRA HISTORIA
          </h1>

          <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
            <p>
              En el Grupo Aceros Ocotlán nos sentimos orgullosos de ser una empresa 100% mexicana
              con 43 años en el mercado. Siendo líderes en distribución de una amplia gama de
              productos de acero al carbón para las Industrias de construcción y transformación.
            </p>
            <p>
              Durante este tiempo, hemos mantenido un crecimiento constante y sólido con más de 66
              puntos de Venta y Centros de Servicio en diferentes áreas; como habilitado de varilla,
              nivelado y corte de lámina, fabricación de polines, acanalado de lámina y corte
              slitter.
            </p>
            <p>
              Estamos comprometidos con el crecimiento de nuestro país, por eso, día a día
              trabajamos para ser{' '}
              <strong className="font-bold text-white">LO QUE HACE FUERTE A MÉXICO</strong>.
            </p>
            <p>
              Contribuimos en proyectos importantes de Infraestructura suministrando grandes
              cantidades de acero de la más alta calidad para la construcción de: presas, puentes,
              carreteras, puertos, aeropuertos, infraestructura hidráulica, plantas industriales y
              de tratamiento de aguas residuales, edificios públicos y privados y conjuntos
              habitacionales.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@acerosocotlan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1a4789] shadow-md transition-transform hover:scale-[1.02]"
          >
            Ver video institucional
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a4789] text-white">
              <ArrowRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Foto + controles: zona media-derecha */}
        <div className="flex min-w-0 flex-col justify-center lg:pl-6">
          <div className="flex items-center gap-3 sm:gap-4">
            {SLIDES.map((item, i) => {
              const activo = i === indice;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndice(i)}
                  aria-label={`Ver época ${item.etiqueta}`}
                  aria-current={activo ? 'true' : undefined}
                  className={`shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ${
                    activo
                      ? 'h-[140px] w-[220px] ring-2 ring-white shadow-[0_0_28px_rgba(255,255,255,0.45)] sm:h-[160px] sm:w-[250px]'
                      : 'h-[120px] w-[90px] opacity-70 ring-1 ring-white/20 sm:h-[140px] sm:w-[100px]'
                  }`}
                >
                  <img
                    src={item.miniatura}
                    alt={item.etiqueta}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex max-w-[280px] items-center gap-3 sm:mt-5 sm:gap-4">
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={irAnterior}
                aria-label="Anterior"
                disabled={total <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white/10 disabled:cursor-default disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={irSiguiente}
                aria-label="Siguiente"
                disabled={total <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white/10 disabled:cursor-default disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="h-px min-w-[2.5rem] flex-1 bg-white/45" aria-hidden="true" />
            <p className="shrink-0 text-2xl font-bold tracking-wide sm:text-3xl lg:text-4xl">
              {slide.etiqueta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryPage;
