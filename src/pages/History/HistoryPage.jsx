import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import fondoInicio from '../../assets/inicio.jpg';
import miniaturaInicio from '../../assets/1. Inicio.jpg';
import fondoMadero from '../../assets/MADERO 2.png';
import miniaturaMadero from '../../assets/2. Madero.jpg';
import fondoAyotlan from '../../assets/Ayotlan.jpg';
import miniaturaAyotlan from '../../assets/3. Ayotlán.jpg';

const SLIDES = [
  {
    id: 'inicio',
    etiqueta: 'Inicio',
    miniatura: miniaturaInicio,
    fondo: fondoInicio,
    tipo: 'intro',
    titulo: 'NUESTRA HISTORIA',
    textos: [
      'En el Grupo Aceros Ocotlán nos sentimos orgullosos de ser una empresa 100% mexicana con 43 años en el mercado. Siendo líderes en distribución de una amplia gama de productos de acero al carbón para las Industrias de construcción y transformación.',
      'Durante este tiempo, hemos mantenido un crecimiento constante y sólido con más de 66 puntos de Venta y Centros de Servicio en diferentes áreas; como habilitado de varilla, nivelado y corte de lámina, fabricación de polines, acanalado de lámina y corte slitter.',
      'Estamos comprometidos con el crecimiento de nuestro país, por eso, día a día trabajamos para ser LO QUE HACE FUERTE A MÉXICO.',
      'Contribuimos en proyectos importantes de Infraestructura suministrando grandes cantidades de acero de la más alta calidad para la construcción de: presas, puentes, carreteras, puertos, aeropuertos, infraestructura hidráulica, plantas industriales y de tratamiento de aguas residuales, edificios públicos y privados y conjuntos habitacionales.',
    ],
    resaltarFrase: 'LO QUE HACE FUERTE A MÉXICO',
    cta: {
      label: 'Ver video institucional',
      href: 'https://www.youtube.com/@acerosocotlan',
      externo: true,
    },
  },
  {
    id: 'madero',
    etiqueta: '1980',
    anio: '1980',
    miniatura: miniaturaMadero,
    fondo: fondoMadero,
    tipo: 'epoca',
    titulo: 'MADERO',
    textos: [
      'En el Grupo Aceros Ocotlán nos sentimos orgullosos de ser una empresa 100% mexicana con 43 años en el mercado.',
      'Siendo líderes en distribución de una amplia gama de productos de acero al carbón para las Industrias de construcción y transformación. Durante este tiempo, hemos mantenido un crecimiento constante y sólido con mas de 66 puntos de Venta y Centros de Servicio en diferentes áreas; como habilitado de varilla, nivelado y corte de lámina, fabricación de polines, acanalado de lámina y corte slitter.',
    ],
    cta: {
      label: 'Ubicación de la sucursal',
      href: 'https://www.google.com/maps/search/?api=1&query=Madero%20785%20Col.%20Florida%20Ocotl%C3%A1n%20Jalisco',
      externo: true,
    },
  },
  {
    id: 'ayotlan',
    etiqueta: '1985',
    anio: '1985',
    miniatura: miniaturaAyotlan,
    fondo: fondoAyotlan,
    tipo: 'epoca',
    titulo: 'AYOTLÁN',
    textos: [
      'En el Grupo Aceros Ocotlán nos sentimos orgullosos de ser una empresa 100% mexicana con 43 años en el mercado.',
      'Siendo líderes en distribución de una amplia gama de productos de acero al carbón para las Industrias de construcción y transformación. Durante este tiempo, hemos mantenido un crecimiento constante y sólido con mas de 66 puntos de Venta y Centros de Servicio en diferentes áreas; como habilitado de varilla, nivelado y corte de lámina, fabricación de polines, acanalado de lámina y corte slitter.',
    ],
    cta: {
      label: 'Ubicación de la sucursal',
      href: 'https://www.google.com/maps/search/?api=1&query=Gonz%C3%A1lez%20Gallo%20179%20Col.%20Centro%20Ayotl%C3%A1n%20Jalisco',
      externo: true,
    },
  },
];

/** Años de la línea temporal (incluye preview del siguiente hito sin slide aún). */
const LINEA_ANIOS = [
  { anio: '1980', slideId: 'madero' },
  { anio: '1985', slideId: 'ayotlan' },
  { anio: '1986', slideId: null },
];

/**
 * Página de historia.
 * Al cambiar, la miniatura anterior se oculta hacia la izquierda;
 * la nueva seleccionada se desliza al primer lugar y se resalta.
 * Los años de época se desplazan en sincronía.
 */
function HistoryPage() {
  const [indice, setIndice] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetAnios, setOffsetAnios] = useState(0);
  const trackRef = useRef(null);
  const aniosTrackRef = useRef(null);
  const slide = SLIDES[indice];
  const total = SLIDES.length;

  const indiceAnio = useMemo(() => {
    if (slide.tipo !== 'epoca') return 0;
    const i = LINEA_ANIOS.findIndex((a) => a.slideId === slide.id);
    return i >= 0 ? i : 0;
  }, [slide]);

  const sincronizarOffset = () => {
    const track = trackRef.current;
    const hijo = track?.children?.[indice];
    if (!track || !hijo) return;
    setOffsetX(hijo.offsetLeft);
  };

  const sincronizarAnios = () => {
    const track = aniosTrackRef.current;
    const hijo = track?.children?.[indiceAnio];
    if (!track || !hijo || slide.tipo !== 'epoca') return;
    setOffsetAnios(hijo.offsetLeft);
  };

  useLayoutEffect(() => {
    sincronizarOffset();
    sincronizarAnios();

    const t = window.setTimeout(() => {
      sincronizarOffset();
      sincronizarAnios();
    }, 720);
    const onResize = () => {
      sincronizarOffset();
      sincronizarAnios();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('resize', onResize);
    };
  }, [indice, indiceAnio, slide.tipo]);

  const irAnterior = () => {
    setIndice((actual) => (actual - 1 + total) % total);
  };

  const irSiguiente = () => {
    setIndice((actual) => (actual + 1) % total);
  };

  return (
    <section className="relative -mt-[7.5rem] flex min-h-[100svh] flex-col overflow-x-clip text-white md:-mt-32">
      {/* Fondos con crossfade fluido */}
      <div className="pointer-events-none absolute inset-0">
        {SLIDES.map((item, i) => (
          <img
            key={item.id}
            src={item.fondo}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-[center_42%] transition-opacity duration-700 ease-in-out ${
              i === indice ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 content-center gap-8 px-4 pb-10 pt-[8.5rem] sm:gap-10 sm:px-6 sm:pb-12 sm:pt-44 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:pb-14 lg:pt-52">
        {/* Texto + fechas: misma transición deslizante que las miniaturas */}
        <div className="max-w-xl min-w-0 overflow-hidden">
          {/* Línea de años (solo en épocas) */}
          <div
            className={`mb-9 overflow-hidden transition-all duration-700 ease-in-out ${
              slide.tipo === 'epoca' ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div
              ref={aniosTrackRef}
              className="flex items-baseline gap-4 transition-transform duration-700 ease-in-out will-change-transform sm:gap-5"
              style={{ transform: `translateX(-${offsetAnios}px)` }}
            >
              {LINEA_ANIOS.map((item, i) => {
                const activo = slide.tipo === 'epoca' && i === indiceAnio;
                const tieneSlide = Boolean(item.slideId);

                return (
                  <button
                    key={item.anio}
                    type="button"
                    disabled={!tieneSlide}
                    onClick={() => {
                      if (!tieneSlide) return;
                      const idx = SLIDES.findIndex((s) => s.id === item.slideId);
                      if (idx >= 0) setIndice(idx);
                    }}
                    className={`shrink-0 tracking-wide transition-all duration-700 ease-in-out ${
                      activo
                        ? 'text-3xl font-bold text-white sm:text-4xl lg:text-7xl'
                        : 'text-2xl font-bold text-white/35 sm:text-3xl lg:text-5xl'
                    } ${tieneSlide ? 'cursor-pointer' : 'cursor-default'}`}
                    aria-current={activo ? 'true' : undefined}
                    aria-label={tieneSlide ? `Ir al año ${item.anio}` : `Año ${item.anio}`}
                  >
                    {item.anio}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {SLIDES.map((item) => (
              <div key={item.id} className="w-full min-w-full shrink-0">
                <h1 className="text-3xl font-bold tracking-wide sm:text-4xl lg:text-[2.75rem]">
                  {item.titulo}
                </h1>

                <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                  {item.textos.map((texto, i) => {
                    if (item.resaltarFrase && texto.includes(item.resaltarFrase)) {
                      const [antes, despues] = texto.split(item.resaltarFrase);
                      return (
                        <p key={`${item.id}-p-${i}`}>
                          {antes}
                          <strong className="font-bold text-white">{item.resaltarFrase}</strong>
                          {despues}
                        </p>
                      );
                    }

                    return <p key={`${item.id}-p-${i}`}>{texto}</p>;
                  })}
                </div>

                <a
                  href={item.cta.href}
                  {...(item.cta.externo
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1a4789] shadow-md transition-transform hover:scale-[1.02]"
                >
                  {item.cta.label}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a4789] text-white">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Miniaturas + línea + botones */}
        <div className="flex min-w-0 flex-col justify-center pt-4 sm:pt-8 lg:mt-24 lg:pl-8 lg:pt-16 xl:mt-28 xl:pl-12">
          <div className="w-full overflow-hidden py-2 pl-2 pb-3 sm:pl-16 lg:pl-2">
            <div
              ref={trackRef}
              className="flex flex-nowrap items-end gap-3 transition-transform duration-700 ease-in-out will-change-transform sm:gap-4"
              style={{ transform: `translateX(-${offsetX}px)` }}
            >
              {SLIDES.map((item, i) => {
                const activo = i === indice;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndice(i)}
                    aria-label={`Ver época ${item.etiqueta}`}
                    aria-current={activo ? 'true' : undefined}
                    className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${
                      activo
                        ? 'h-[168px] w-[112px] ring-2 ring-white shadow-[0_0_18px_rgba(255,255,255,0.45)] sm:h-[200px] sm:w-[135px] lg:h-[220px] lg:w-[148px]'
                        : 'h-[100px] w-[72px] opacity-70 ring-1 ring-white/20 hover:opacity-90 sm:h-[120px] sm:w-[90px]'
                    }`}
                  >
                    <img
                      src={item.miniatura}
                      alt={item.etiqueta}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex min-w-0 items-center gap-3 sm:mt-8 sm:gap-4 lg:mt-10 lg:gap-5">
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={irAnterior}
                aria-label="Anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={irSiguiente}
                aria-label="Siguiente"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="h-px min-w-[2rem] flex-1 bg-white/45" aria-hidden="true" />

            <div className="relative h-8 w-24 overflow-hidden sm:h-9 sm:w-28 lg:h-10 lg:w-32">
              <div
                className="flex transition-transform duration-700 ease-in-out will-change-transform"
                style={{ transform: `translateX(-${indice * 100}%)` }}
              >
                {SLIDES.map((item) => (
                  <p
                    key={`label-${item.id}`}
                    className="w-full min-w-full shrink-0 text-right text-xl font-bold tracking-wide sm:text-2xl lg:text-3xl"
                  >
                    {item.etiqueta}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryPage;
