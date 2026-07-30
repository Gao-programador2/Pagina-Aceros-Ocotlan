import { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, Plus, Minus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';
import imagenArenaGdl from '../../assets/Arena GDL.jpg';
import imagenMacroBus from '../../assets/Estaciones de MacroBus.jpg';
import imagenHardRock from '../../assets/Hotel Hard Rock.jpg';
import imagenEncatameTower from '../../assets/Encátame Tower.jpg';
import imagenEstadioOlimpico from '../../assets/Estadio Olímpico Pascual Guerrero.jpg';
import imagenEstadioSaraperos from '../../assets/Estadios Saraperos de Saltillo.png';
import imagenEntrebosques from '../../assets/Entrebosques.jpg';
import imagenDuo24 from '../../assets/Duo 24 Living.jpg';
import imagenBecton from '../../assets/Becton Dickinson.jpeg';
import imagenHotelBaruk from '../../assets/Hotel Baruk.jpg';
import imagenHotelDreams from '../../assets/Hotel Dreams.jpg';
import imagenIkea from '../../assets/IKEA.jpg';
import imagenLaboratorioPisa from '../../assets/Laboratorios Pisa.jpg';
import imagenLinea3 from '../../assets/Línea 3 tren ligero.png';
import imagenLiverpool from '../../assets/Liverpool.jpg';
import imagenMidtown from '../../assets/Midtown Fashion Mall.png';
import imagenNestle from '../../assets/Nestlé.jpg';
import imagenPalacio from '../../assets/Palacio Municipal Ensenada.jpg';

const OBRAS_INICIALES = [
  {
    nombre: 'Arena GDL',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenArenaGdl,
  },
  {
    nombre: 'Estaciones del Macro Bus',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenMacroBus,
  },
  {
    nombre: 'Hotel Hard Rock',
    ubicacion: '',
    imagen: imagenHardRock,
  },
  {
    nombre: 'Encátame Tower',
    ubicacion: '',
    imagen: imagenEncatameTower,
   },
  {
    nombre: 'Estadio Olímpico Pascual Guerrero',
    ubicacion: 'Cali, Colombia',
    imagen: imagenEstadioOlimpico,
  },
  {
    nombre: 'Estadios Saraperos de Saltillo',
    ubicacion: 'Saltillo, Mx.',
    imagen: imagenEstadioSaraperos,
    },
];

const OBRAS_EXTRA = [
  {
    nombre: 'Entre bosques',
    ubicacion: '',
    imagen: imagenEntrebosques,
  },
  {
    nombre: 'Duo 24 Living',
    ubicacion: '',
    imagen: imagenDuo24,
  },
  {
    nombre: 'Becton Dickinson',
    ubicacion: '',
    imagen: imagenBecton,
  },
  {
    nombre: 'Hotel Baruk',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenHotelBaruk,
  },
  {
    nombre: 'Hotel Dreams',
    ubicacion: '',
    imagen: imagenHotelDreams,
  },
  {
    nombre: 'IKEA',
    ubicacion: '',
    imagen: imagenIkea,
  },
];

const OBRAS_EXTRA3 = [
  {
    nombre: 'Laboratorios Pisa',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenLaboratorioPisa,
  },
  {
    nombre: 'Línea 3 tren ligero',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenLinea3,
  },
  {
    nombre: 'Liverpool',
    ubicacion: '',
    imagen: imagenLiverpool,
  },
  {
    nombre: 'Midtown Fashion Mall',
    ubicacion: 'Guadalajara, Mx.',
    imagen: imagenMidtown,
  },
  {
    nombre: 'Nestlé',
    ubicacion: '',
    imagen: imagenNestle,
  },
  {
    nombre: 'Palacio Municipal Ensenada',
    ubicacion: 'Ensenada, Mx.',
    imagen: imagenPalacio,
  },
];
const UMBRAL_DESLIZAR = 50;

function TarjetaObra({ nombre, ubicacion, imagen, onAbrir }) {
  return (
    <button
      type="button"
      onClick={onAbrir}
      className="group relative aspect-[2/1] w-full cursor-pointer overflow-hidden rounded-2xl text-left"
    >
      <img
        src={imagen}
        alt={nombre}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="text-sm font-bold leading-snug sm:text-base">{nombre}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-white/90 sm:text-sm">
          <MapPin size={14} className="shrink-0" />
          {ubicacion}
        </p>
      </div>
    </button>
  );
}

function ModalObra({ obras, indice, onCambiar, onCerrar }) {
  const obra = obras[indice];
  const toqueInicioX = useRef(null);

  const irAnterior = useCallback(() => {
    onCambiar((indice - 1 + obras.length) % obras.length);
  }, [indice, obras.length, onCambiar]);

  const irSiguiente = useCallback(() => {
    onCambiar((indice + 1) % obras.length);
  }, [indice, obras.length, onCambiar]);

  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const alPresionarTecla = (evento) => {
      if (evento.key === 'Escape') {
        onCerrar();
        return;
      }
      if (evento.key === 'ArrowLeft') {
        evento.preventDefault();
        irAnterior();
        return;
      }
      if (evento.key === 'ArrowRight') {
        evento.preventDefault();
        irSiguiente();
      }
    };
    window.addEventListener('keydown', alPresionarTecla);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', alPresionarTecla);
    };
  }, [onCerrar, irAnterior, irSiguiente]);

  const alIniciarToque = (evento) => {
    toqueInicioX.current = evento.changedTouches[0]?.clientX ?? null;
  };

  const alTerminarToque = (evento) => {
    if (toqueInicioX.current == null) return;
    const finX = evento.changedTouches[0]?.clientX ?? toqueInicioX.current;
    const delta = finX - toqueInicioX.current;
    toqueInicioX.current = null;

    if (Math.abs(delta) < UMBRAL_DESLIZAR) return;
    if (delta > 0) irAnterior();
    else irSiguiente();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={obra.nombre}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={onCerrar}
    >
      <button
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar"
        className="absolute right-3 top-3 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-5 sm:top-5"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={(evento) => {
          evento.stopPropagation();
          irAnterior();
        }}
        aria-label="Obra anterior"
        className="absolute left-2 top-1/2 z-[110] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:left-4 sm:flex"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={(evento) => {
          evento.stopPropagation();
          irSiguiente();
        }}
        aria-label="Obra siguiente"
        className="absolute right-2 top-1/2 z-[110] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-4 sm:flex"
      >
        <ChevronRight size={28} />
      </button>

      <div
        className="relative w-full max-w-5xl touch-pan-y overflow-hidden rounded-xl bg-[#1a1a1a] shadow-2xl"
        onClick={(evento) => evento.stopPropagation()}
        onTouchStart={alIniciarToque}
        onTouchEnd={alTerminarToque}
      >
        <img
          src={obra.imagen}
          alt={obra.nombre}
          loading="eager"
          decoding="async"
          className="mx-auto max-h-[85vh] w-full select-none object-contain object-center"
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/13 via-black/14 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 bg-black/25 backdrop-blur-[1px]">
          <div className="flex items-end justify-between gap-4 p-4 sm:p-8">
            <div className="min-w-0 text-white">
              <h3 className="text-lg font-bold leading-snug sm:text-2xl lg:text-3xl">
                {obra.nombre}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/95 sm:text-base">
                <MapPin size={16} className="shrink-0" />
                {obra.ubicacion}
              </p>
            </div>

            <img
              src={logoAcerosOcotlan}
              alt="Aceros Ocotlán"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto shrink-0 object-contain drop-shadow-md sm:h-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ObrasConstruidas() {
  // 0 = solo iniciales, 1 = iniciales + OBRAS_EXTRA, 2 = todo completo
  const [pasoObras, setPasoObras] = useState(0);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
  const seccionRef = useRef(null);

  // Construir el listado dinámicamente según el paso actual
  const obras = (() => {
    if (pasoObras === 0) return OBRAS_INICIALES;
    if (pasoObras === 1) return [...OBRAS_INICIALES, ...OBRAS_EXTRA];
    return [...OBRAS_INICIALES, ...OBRAS_EXTRA, ...OBRAS_EXTRA3];
  })();

  const manejarBotonObras = () => {
    if (pasoObras < 2) {
      // Avanzar al siguiente bloque de obras
      setPasoObras((prev) => prev + 1);
    } else {
      // Si ya está en el máximo, contraer de regreso al inicio y hacer scroll suave
      setPasoObras(0);
      setIndiceSeleccionado(null);
      requestAnimationFrame(() => {
        seccionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const estaTodoMostrado = pasoObras === 2;

  return (
    <section ref={seccionRef} className="scroll-mt-4 bg-[#0d47a1] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
          Obras construidas con Acero Ocotlán
        </h2>
        <p className="mt-2 text-sm text-white sm:text-base">
          <span className="font-semibold uppercase tracking-wide">Haciendo sólido a México</span>
          {' '}así como en el extranjero.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {obras.map((obra, indice) => (
              <TarjetaObra
                key={`${obra.nombre}-${obra.imagen}-${indice}`}
                {...obra}
                onAbrir={() => setIndiceSeleccionado(indice)}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={manejarBotonObras}
              aria-label={estaTodoMostrado ? 'Ver menos obras' : 'Ver más obras'}
              aria-expanded={estaTodoMostrado}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d47a1] text-white shadow-md transition-transform hover:scale-105 hover:bg-[#0a3a85]"
            >
              {estaTodoMostrado ? <Minus size={22} strokeWidth={2.5} /> : <Plus size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {indiceSeleccionado !== null && (
        <ModalObra
          obras={obras}
          indice={indiceSeleccionado}
          onCambiar={setIndiceSeleccionado}
          onCerrar={() => setIndiceSeleccionado(null)}
        />
      )}
    </section>
  );
}

export default ObrasConstruidas;