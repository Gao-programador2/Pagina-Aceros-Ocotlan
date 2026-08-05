import { useState } from 'react';

const MAPA_EMBED_SRC =
  'https://www.google.com/maps/d/u/0/embed?mid=1oAqX_ZEgvfI3oz5uK8miq_re9H_kVKw&ehbc=2E312F';

function BranchesMap() {
  const [mapaActivo, setMapaActivo] = useState(false);

  return (
    <section id="sucursales" className="scroll-mt-28 bg-steel-50 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 max-w-2xl">
          <h2 className="mt-2 mb-6 text-3xl font-medium tracking-tight text-[#0d47a1] sm:text-4xl">
            Sucursales
          </h2>
        </header>

        <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm">
          <div
            className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]"
            onMouseLeave={() => setMapaActivo(false)}
          >
            <iframe
              title="Mapa de sucursales Aceros Ocotlán"
              src={MAPA_EMBED_SRC}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {!mapaActivo && (
              <button
                type="button"
                aria-label="Haz clic para usar el mapa"
                onClick={() => setMapaActivo(true)}
                className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-steel-950/25 transition-colors hover:bg-steel-950/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
              >
                <span className="rounded-lg bg-zinc-900/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 sm:text-base">
                  Haz clic para usar el mapa
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BranchesMap;
