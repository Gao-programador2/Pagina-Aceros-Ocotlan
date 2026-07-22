import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ChevronLeft, ChevronRight, FileDown } from 'lucide-react';
import iconoTransparencia from '../../assets/bi_transparency.png';
import imagenPlanos from '../../assets/Planos.png';
import imagenPerfilesTubulares from '../../assets/Tubulares-y-Tuberias.png';
import imagenEstructurales from '../../assets/Estructurales.png';
import imagenComerciales from '../../assets/Comerciales.png';

const PRODUCTOS = [
  {
    nombre: 'Planos',
    imagen: imagenPlanos,
    to: '/categoria-producto/productos/planos',
  },
  {
    nombre: 'Perfiles tubulares y Tuberías',
    imagen: imagenPerfilesTubulares,
    to: '/categoria-producto/productos/perfiles-tubulares',
  },
  {
    nombre: 'Estructurales',
    imagen: imagenEstructurales,
    to: '/categoria-producto/productos/estructurales',
  },
  {
    nombre: 'Comerciales',
    imagen: imagenComerciales,
    to: '/categoria-producto/productos/comerciales',
  },
];

function BannerTransparencia() {
  return (
    <div className="rounded-2xl bg-[#ebedf2] px-6 py-6 shadow-sm sm:px-14 sm:py-6 lg:px-20">
      {/* Móvil: icono + título, texto, botón centrado */}
      <div className="flex flex-col sm:hidden">
        <div className="flex items-center gap-3">
          <img
            src={iconoTransparencia}
            alt=""
            aria-hidden="true"
            className="h-10 w-auto shrink-0 object-contain"
          />
          <h2 className="text-[1.5rem] font-semibold leading-tight text-[#4a5568] sm:text-[1.65rem]">
            Transparencia
          </h2>
        </div>

        <p className="mt-4 text-left text-[0.95rem] leading-snug text-[#555]">
          Comparte información y hechos sobre irregularidades, abusos, mal servicio y fraudes.
          Garantizamos la confidencialidad de tus datos y de la información que proporcionas.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/transparencia-ao/"
            className="inline-flex items-center justify-center rounded-full bg-[#0d47a1] px-10 py-2.5 text-[0.95rem] font-medium text-white underline underline-offset-2 shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#0a3a85]"
          >
            Denunciar
          </Link>
        </div>
      </div>

      {/* Escritorio: layout horizontal actual */}
      <div className="hidden items-center gap-6 sm:flex">
        <img
          src={iconoTransparencia}
          alt=""
          aria-hidden="true"
          className="h-16 w-auto shrink-0 object-contain sm:ml-2"
        />

        <div className="min-w-0 flex-1 pl-2 text-left">
          <h2 className="text-[1.65rem] font-semibold leading-tight text-[#4a5568] sm:text-[1.85rem]">
            Transparencia
          </h2>
          <p className="mt-1 text-[0.95rem] leading-snug text-[#555]">
            Comparte información y hechos sobre irregularidades, abusos, mal servicio y fraudes.
            <br />
            Garantizamos la confidencialidad de tus datos y de la información que proporcionas.
          </p>
        </div>

        <Link
          to="/transparencia-ao/"
          className="inline-flex h-13 shrink-0 items-center justify-center rounded-xl bg-[#0d47a1] px-8 text-[0.95rem] font-medium text-white shadow-[0_2px_6px_rgba(13,71,161,0.35)] transition-colors hover:bg-[#0a3a85] sm:mr-2"
        >
          Denunciar
        </Link>
      </div>
    </div>
  );
}

function CarruselProductos() {
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
    <div id="productos" className="relative mt-14 scroll-mt-28">
      <h2 className="mb-6 text-3xl font-medium text-[#0d47a1] sm:text-4xl">Productos</h2>

      {/* Botón izquierdo */}
      <button
        type="button"
        onClick={desplazarAnterior}
        aria-label="Productos anteriores"
        className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-steel-700 shadow-md transition-colors hover:bg-steel-50 sm:left-2 sm:h-16 sm:w-16"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Pista Embla: loop infinito, PRODUCTOS se declara una sola vez */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {PRODUCTOS.map((producto) => (
            <article
              key={producto.nombre}
              className="min-w-0 shrink-0 grow-0 basis-[78%] pl-0 pr-5 sm:basis-[46%] lg:basis-[31%]"
            >
              <div className="flex h-full flex-col rounded-2xl bg-[#ebedf2] p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-steel-200">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <Link
                  to={producto.to}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#1a4a8a] px-5 py-2.5 text-sm font-medium text-white underline underline-offset-2 transition-colors hover:bg-[#163d73]"
                >
                  {producto.nombre}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Botón derecho */}
      <button
        type="button"
        onClick={desplazarSiguiente}
        aria-label="Productos siguientes"
        className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-steel-700 shadow-md transition-colors hover:bg-steel-50 sm:right-2 sm:h-16 sm:w-16"
      >
        <ChevronRight size={22} />
      </button>

      {/* Descargar catálogo */}
      <div className="mt-10 flex justify-center">
        <a
          href="/catalogo-productos.pdf"
          download
          className="inline-flex items-center gap-2.5 rounded-full bg-[#0d47a1] px-8 py-3 text-sm font-medium text-white underline underline-offset-2 shadow-md transition-colors hover:bg-[#0a3a85] sm:text-base"
        >
          <FileDown size={18} />
          Descargar catálogo de Productos
        </a>
      </div>
    </div>
  );
}

function ListaProductos() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <BannerTransparencia />
      <CarruselProductos />
    </section>
  );
}

export default ListaProductos;
