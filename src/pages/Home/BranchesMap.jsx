import { useState } from 'react';

/**
 * Mapa interactivo de sucursales (Google My Maps oficial).
 * En escritorio el scroll de la página no activa el zoom del mapa
 * hasta que el usuario hace clic para interactuar.
 */
function BranchesMap() {
  const [mapaActivo, setMapaActivo] = useState(false);

  return (
    <section id="sucursales" className="scroll-mt-28 bg-white px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-[#0d47a1] sm:text-4xl">
            Sucursales
          </h2>
        </header>

        <div
          className="relative isolate overflow-hidden overscroll-contain rounded-xl border border-steel-200 bg-white shadow-lg touch-manipulation"
          onMouseLeave={() => setMapaActivo(false)}
        >
          <iframe
            title="Mapa de sucursales Aceros Ocotlán"
            src="https://www.google.com/maps/d/embed?mid=1oAqX_ZEgvfI3oz5uK8miq_re9H_kVKw&ehbc=2E312F"
            className="h-[560px] w-full border-0 sm:h-[400px] lg:h-[600px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Capa que bloquea rueda/scroll hasta que el usuario hace clic */}
          {!mapaActivo && (
            <button
              type="button"
              aria-label="Activar mapa para interactuar"
              onClick={() => setMapaActivo(true)}
              className="absolute inset-0 z-10 cursor-pointer bg-transparent"
            />
          )}

          {!mapaActivo && (
            <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 rounded-full bg-black/55 px-4 py-1.5 text-xs text-white lg:block">
              Haz clic para usar el mapa
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BranchesMap;
