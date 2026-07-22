import { useState, useRef, useEffect } from 'react';
import { MapPin, Plus, Minus, X } from 'lucide-react';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

const OBRAS_INICIALES = [
  {
    nombre: 'Centro Médico Puerta de Hierro',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Mid Town',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Palacio Municipal Ensenada B.C.',
    ubicacion: 'Baja California, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Estaciones del Macro Bus',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Liverpool',
    ubicacion: 'Toluca, Puebla, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1555636222-cae9630d4d0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Puente Matute Remus',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
  },
];

const OBRAS_EXTRA = [
  {
    nombre: 'Torre Aura Altitude',
    ubicacion: 'Zapopan, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Andares Corporativo',
    ubicacion: 'Zapopan, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Hospital Civil Nuevo',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Plaza Galerías',
    ubicacion: 'Guadalajara, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Aeropuerto Internacional',
    ubicacion: 'Tijuana, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cab0?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Centro Cultural',
    ubicacion: 'Puerto Vallarta, Mx.',
    imagen:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80',
  },
];

function TarjetaObra({ nombre, ubicacion, imagen, onAbrir }) {
  return (
    <button
      type="button"
      onClick={() => onAbrir({ nombre, ubicacion, imagen })}
      className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl text-left"
    >
      <img
        src={imagen}
        alt={nombre}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
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

function ModalObra({ obra, onCerrar }) {
  useEffect(() => {
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
  }, [onCerrar]);

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

      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl"
        onClick={(evento) => evento.stopPropagation()}
      >
        <img
          src={obra.imagen}
          alt={obra.nombre}
          className="max-h-[85vh] w-full object-cover object-center"
        />

        {/* Gradiente inferior para legibilidad */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/13 via-black/14 to-transparent" />

        {/* Capa transparente detrás del texto y logo */}
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
              className="h-10 w-auto shrink-0 object-contain drop-shadow-md sm:h-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ObrasConstruidas() {
  const [mostrarMas, setMostrarMas] = useState(false);
  const [obraSeleccionada, setObraSeleccionada] = useState(null);
  const seccionRef = useRef(null);
  const obras = mostrarMas ? [...OBRAS_INICIALES, ...OBRAS_EXTRA] : OBRAS_INICIALES;

  const alternarMasObras = () => {
    if (mostrarMas) {
      setMostrarMas(false);
      // Vuelve a la parte superior de la sección (las primeras imágenes)
      requestAnimationFrame(() => {
        seccionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    setMostrarMas(true);
  };

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
            {obras.map((obra) => (
              <TarjetaObra
                key={obra.nombre}
                {...obra}
                onAbrir={setObraSeleccionada}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={alternarMasObras}
              aria-label={mostrarMas ? 'Ver menos obras' : 'Ver más obras'}
              aria-expanded={mostrarMas}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d47a1] text-white shadow-md transition-transform hover:scale-105 hover:bg-[#0a3a85]"
            >
              {mostrarMas ? <Minus size={22} strokeWidth={2.5} /> : <Plus size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {obraSeleccionada && (
        <ModalObra
          obra={obraSeleccionada}
          onCerrar={() => setObraSeleccionada(null)}
        />
      )}
    </section>
  );
}

export default ObrasConstruidas;
