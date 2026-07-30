import { useEffect, useMemo, useState } from 'react';
import { MapPinned, Phone } from 'lucide-react';
import MapLibreGL from 'maplibre-gl';
import {
  Map as MapView,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
  useMap,
} from '../../components/ui/map';
import { SUCURSALES_MAPA, CENTRO_MEXICO, ZOOM_INICIAL } from '../../data/sucursalesMapa.js';
import logoAcerosOcotlan from '../../assets/AO_Logo.png';

/**
 * Separa visualmente sucursales casi en la misma coordenada
 * (offset en píxeles; lat/lng reales se mantienen para el popup).
 */
function offsetsPorProximidad(sucursales) {
  /** @type {Record<string, string[]>} */
  const grupos = Object.create(null);

  sucursales.forEach((s) => {
    const clave = `${s.lat.toFixed(3)}|${s.lng.toFixed(3)}`;
    if (!grupos[clave]) grupos[clave] = [];
    grupos[clave].push(s.id);
  });

  /** @type {Record<string, [number, number]>} */
  const offsets = Object.create(null);

  Object.values(grupos).forEach((ids) => {
    if (ids.length === 1) {
      offsets[ids[0]] = [0, 0];
      return;
    }

    ids.forEach((id, i) => {
      const angulo = (Math.PI * 2 * i) / ids.length - Math.PI / 2;
      const radio = 14 + Math.floor(i / 8) * 10;
      offsets[id] = [Math.round(Math.cos(angulo) * radio), Math.round(Math.sin(angulo) * radio)];
    });
  });

  return offsets;
}

function FitSucursales({ puntos }) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded || !puntos.length) return;

    const bounds = new MapLibreGL.LngLatBounds();
    puntos.forEach((p) => bounds.extend([p.lng, p.lat]));
    map.fitBounds(bounds, { padding: 56, maxZoom: 5.5, duration: 700 });
  }, [map, isLoaded, puntos]);

  return null;
}

function MarcadorAO() {
  return (
    <button
      type="button"
      aria-label="Sucursal Aceros Ocotlán"
      className="group relative flex h-10 w-8 origin-bottom items-center justify-center focus:outline-none"
    >
      <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[7px] border-t-[9px] border-x-transparent border-t-[#0d47a1] drop-shadow-sm transition-transform group-hover:scale-105" />
      <span className="absolute bottom-[7px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#0d47a1] text-[10px] font-bold tracking-wider text-white shadow-md transition-transform group-hover:scale-105">
        AO
      </span>
    </button>
  );
}

function PopupSucursal({ sucursal }) {
  const telefonoLimpio = sucursal.telefono.replace(/\s+/g, '');

  return (
    <article className="w-[min(18.5rem,calc(100vw-2rem))] overflow-hidden rounded-xl bg-white text-left shadow-xl ring-1 ring-steel-200/90">
      <header className="bg-[#0d47a1] px-4 py-3 pr-11">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
          Sucursal
        </p>
        <h3 className="mt-0.5 text-sm font-semibold leading-snug text-white">{sucursal.nombre}</h3>
      </header>

      <div className="space-y-3 px-4 py-3.5">
        <div className="flex gap-2.5">
          <MapPinned className="mt-0.5 size-4 shrink-0 text-[#0d47a1]" aria-hidden />
          <p className="text-sm leading-relaxed text-steel-700">{sucursal.direccion}</p>
        </div>

        <a
          href={`tel:${telefonoLimpio}`}
          className="flex items-center gap-2.5 text-sm font-medium text-[#0d47a1] transition-colors hover:text-[#08306b]"
        >
          <Phone className="size-4 shrink-0" aria-hidden />
          <span className="underline-offset-2 hover:underline">{sucursal.telefono}</span>
        </a>

        <a
          href={sucursal.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#0d47a1] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#08306b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d47a1]/40"
        >
          Ver en Google Maps
        </a>
      </div>
    </article>
  );
}

function ContenidoMapa({ sucursales, offsets }) {
  return (
    <>
      <FitSucursales puntos={sucursales} />
      <MapControls position="bottom-right" showZoom showFullscreen showCompass={false} />

      {sucursales.map((sucursal) => (
        <MapMarker
          key={sucursal.id}
          longitude={sucursal.lng}
          latitude={sucursal.lat}
          offset={offsets[sucursal.id] ?? [0, 0]}
          anchor="bottom"
        >
          <MarkerContent>
            <MarcadorAO />
          </MarkerContent>
          <MarkerPopup
            closeButton
            offset={28}
            className="max-w-none border-0 bg-transparent p-0 shadow-none"
          >
            <PopupSucursal sucursal={sucursal} />
          </MarkerPopup>
        </MapMarker>
      ))}
    </>
  );
}

function BranchesMap() {
  const offsets = useMemo(() => offsetsPorProximidad(SUCURSALES_MAPA), []);
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
          {/* Barra superior estilo Google My Maps */}
          <div className="flex items-center gap-3 bg-zinc-900 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3">
            <img
              src={logoAcerosOcotlan}
              alt="Aceros Ocotlán"
              className="h-9 w-auto shrink-0 object-contain sm:h-10"
              width={120}
              height={40}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold leading-tight text-white sm:text-base">
                Aceros Ocotlán
              </p>
              <p className="mt-0.5 truncate text-xs leading-snug text-zinc-400 sm:text-sm">
                Aceros Ocotlán
              </p>
            </div>
          </div>

          <div
            className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]"
            onMouseLeave={() => setMapaActivo(false)}
          >
            <MapView
              center={[CENTRO_MEXICO[1], CENTRO_MEXICO[0]]}
              zoom={ZOOM_INICIAL}
              theme="light"
              className="h-full w-full"
            >
              <ContenidoMapa sucursales={SUCURSALES_MAPA} offsets={offsets} />
            </MapView>

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
