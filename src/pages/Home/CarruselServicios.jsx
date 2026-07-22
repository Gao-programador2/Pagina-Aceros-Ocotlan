import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ChevronLeft, ChevronRight, FileDown } from 'lucide-react';
import imagenNivelado from '../../assets/Niveladora-scaled.jpg';
import imagenCorteSlitter from '../../assets/Corte-Slitter-scaled.jpg';
import imagenCizalla from '../../assets/Cizalla-1-scaled.jpg';
import imagenFabricacionDePolin from '../../assets/Fabricacion-de-Polin-1-scaled.jpg';
import imagenAcanaladoDeLamina from '../../assets/Acanalado-de-Lamina-2.jpg';
import imagenHabilitadoDeVarilla from '../../assets/Habilitado-de-Varilla-1-scaled.jpg';


const SERVICIOS = [
  {
    nombre: 'Nivelado',
    imagen: imagenNivelado,
    to: '/servicios/nivelado',
  },
  {
    nombre: 'Corte Slitter',
    imagen:imagenCorteSlitter,
    to: '/servicios/corte-slitter',
  },
  {
    nombre: 'Cizalla',
    imagen:imagenCizalla,
    to: '/servicios/cizalla',
  },
  {
    nombre: 'Fabricación de Polín',
    imagen: imagenFabricacionDePolin,
    to: '/servicios/fabricacion-de-polin',
  },
  {
    nombre: 'Acanalado de Lámina',
    imagen: imagenAcanaladoDeLamina,
    to: '/servicios/acanalado-de-lamina',
  },
  {
    nombre: 'Habilitado de Varilla',
    imagen: imagenHabilitadoDeVarilla,
    to: '/servicios/habilitado-de-varilla',
  },
];

function CarruselServicios() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [WheelGesturesPlugin()],
  );

  const desplazarAnterior = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const desplazarSiguiente = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-12 sm:pb-16">
      <div className="relative">
        <h2 className="mb-6 text-3xl font-medium text-[#0d47a1] sm:text-4xl">Servicios</h2>

        <button
          type="button"
          onClick={desplazarAnterior}
          aria-label="Servicios anteriores"
          className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-steel-700 shadow-md transition-colors hover:bg-steel-50 sm:left-2 sm:h-16 sm:w-16"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SERVICIOS.map((servicio) => (
              <article
                key={servicio.nombre}
                className="min-w-0 shrink-0 grow-0 basis-[78%] pl-0 pr-5 sm:basis-[46%] lg:basis-[31%]"
              >
                <div className="flex h-full flex-col rounded-2xl bg-[#ebedf2] p-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-steel-200">
                    <img
                      src={servicio.imagen}
                      alt={servicio.nombre}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <Link
                    to={servicio.to}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#1a4a8a] px-5 py-2.5 text-sm font-medium text-white underline underline-offset-2 transition-colors hover:bg-[#163d73]"
                  >
                    {servicio.nombre}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={desplazarSiguiente}
          aria-label="Servicios siguientes"
          className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-steel-700 shadow-md transition-colors hover:bg-steel-50 sm:right-2 sm:h-16 sm:w-16"
        >
          <ChevronRight size={22} />
        </button>

        <div className="mt-10 flex justify-center">
          <a
            href="/catalogo-servicios.pdf"
            download
            className="inline-flex items-center gap-2.5 rounded-full bg-[#0d47a1] px-8 py-3 text-sm font-medium text-white underline underline-offset-2 shadow-md transition-colors hover:bg-[#0a3a85] sm:text-base"
          >
            <FileDown size={18} />
            Descargar catálogo de Servicios
          </a>
        </div>
      </div>
    </section>
  );
}

export default CarruselServicios;
