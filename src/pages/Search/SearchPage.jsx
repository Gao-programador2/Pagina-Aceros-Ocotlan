import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Phone, ExternalLink, Package, Wrench, Building2, LayoutGrid } from 'lucide-react';
import { buscarEnCatalogo, etiquetaTipo } from '../../data/catalogoBusqueda.js';

const ICONO = {
  producto: Package,
  servicio: Wrench,
  sucursal: Building2,
  seccion: LayoutGrid,
};

function ResultadoItem({ item }) {
  const Icono = ICONO[item.tipo] ?? LayoutGrid;
  const esSucursal = item.tipo === 'sucursal';

  return (
    <article className="rounded-xl border border-steel-200 bg-white p-4 shadow-sm transition-colors hover:border-[#0d47a1]/40">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d47a1]/10 text-[#0d47a1]">
          <Icono size={18} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <div className="flex flex-wrap items-center gap-2">
            {esSucursal ? (
              <h2 className="text-base font-semibold text-steel-900 sm:text-lg">{item.titulo}</h2>
            ) : (
              <Link
                to={item.to}
                className="text-base font-semibold text-steel-900 hover:text-[#0d47a1] sm:text-lg"
              >
                {item.titulo}
              </Link>
            )}
            <span className="rounded-full bg-steel-100 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-steel-600">
              {etiquetaTipo(item.tipo)}
            </span>
          </div>

          {item.descripcion ? (
            <p className="mt-1 flex items-start gap-1.5 text-sm leading-relaxed text-steel-600">
              {esSucursal ? <MapPin size={14} className="mt-0.5 shrink-0 text-[#0d47a1]" /> : null}
              <span>{item.descripcion}</span>
            </p>
          ) : null}

          {item.telefono ? (
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-steel-700">
              <Phone size={14} className="shrink-0 text-[#0d47a1]" />
              <a href={`tel:${item.telefono.replace(/\s/g, '')}`} className="hover:underline">
                {item.telefono}
              </a>
            </p>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-2">
            {!esSucursal ? (
              <Link
                to={item.to}
                className="inline-flex items-center rounded-lg bg-[#0d47a1] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0a3a85]"
              >
                Ver detalle
              </Link>
            ) : (
              <>
                <Link
                  to="/#sucursales"
                  className="inline-flex items-center rounded-lg bg-[#0d47a1] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0a3a85]"
                >
                  Ver en el mapa
                </Link>
                {item.mapsUrl ? (
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-steel-200 px-3 py-1.5 text-xs font-medium text-steel-700 hover:bg-steel-50"
                  >
                    Cómo llegar
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function SearchPage() {
  const [params] = useSearchParams();
  const consulta = (params.get('q') ?? '').trim();
  const resultados = consulta.length >= 2 ? buscarEnCatalogo(consulta) : [];

  const porTipo = {
    producto: resultados.filter((r) => r.tipo === 'producto'),
    servicio: resultados.filter((r) => r.tipo === 'servicio'),
    sucursal: resultados.filter((r) => r.tipo === 'sucursal'),
    seccion: resultados.filter((r) => r.tipo === 'seccion'),
  };

  const grupos = [
    { key: 'producto', titulo: 'Productos', items: porTipo.producto },
    { key: 'servicio', titulo: 'Servicios', items: porTipo.servicio },
    { key: 'sucursal', titulo: 'Sucursales', items: porTipo.sucursal },
    { key: 'seccion', titulo: 'Secciones', items: porTipo.seccion },
  ].filter((g) => g.items.length > 0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d47a1]">Búsqueda</p>
      <h1 className="mt-2 text-2xl font-bold text-steel-900 sm:text-3xl">
        {consulta ? (
          <>
            Resultados para <span className="text-[#0d47a1]">“{consulta}”</span>
          </>
        ) : (
          'Buscar en Aceros Ocotlán'
        )}
      </h1>
      <p className="mt-2 text-sm text-steel-600 sm:text-base">
        Encuentra productos, servicios y sucursales.
      </p>

      {!consulta || consulta.length < 2 ? (
        <div className="mt-8 rounded-xl border border-dashed border-steel-300 bg-steel-50 p-6 text-sm text-steel-600">
          Escribe al menos 2 caracteres en el buscador del menú para ver resultados.
        </div>
      ) : resultados.length === 0 ? (
        <div className="mt-8 rounded-xl border border-steel-200 bg-white p-6 text-sm text-steel-600 shadow-sm">
          <p className="font-medium text-steel-900">No encontramos coincidencias.</p>
          <p className="mt-2">
            Prueba con otro término, por ejemplo: <em>varilla</em>, <em>nivelado</em>,{' '}
            <em>Guadalajara</em> o <em>comerciales</em>.
          </p>
          <Link
            to="/#productos"
            className="mt-4 inline-flex text-[#0d47a1] underline-offset-2 hover:underline"
          >
            Ver productos
          </Link>
          <span className="mx-2 text-steel-300">·</span>
          <Link
            to="/#sucursales"
            className="inline-flex text-[#0d47a1] underline-offset-2 hover:underline"
          >
            Ver sucursales
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          <p className="text-sm text-steel-500">
            {resultados.length} resultado{resultados.length === 1 ? '' : 's'}
          </p>

          {grupos.map((grupo) => (
            <div key={grupo.key}>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-steel-500">
                {grupo.titulo}
              </h2>
              <ul className="space-y-3">
                {grupo.items.map((item) => (
                  <li key={item.id}>
                    <ResultadoItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchPage;
