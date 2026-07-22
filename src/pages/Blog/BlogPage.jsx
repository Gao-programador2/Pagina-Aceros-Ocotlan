import { CalendarDays, ArrowRight } from 'lucide-react';

const ARTICULOS = [
  {
    titulo: 'Cómo elegir el perfil estructural correcto para tu proyecto',
    fecha: '10 de julio, 2026',
    resumen:
      'Diferencias entre IPR, IPS y CPS, y los criterios de carga que debes considerar antes de comprar.',
  },
  {
    titulo: 'Varilla G-42 vs G-52: ¿cuál conviene en losas y castillos?',
    fecha: '28 de junio, 2026',
    resumen:
      'Comparativa práctica de grados de acero de refuerzo y su impacto en costo y desempeño.',
  },
  {
    titulo: 'Tendencias del precio del acero en 2026',
    fecha: '15 de junio, 2026',
    resumen:
      'Análisis del mercado nacional e internacional y recomendaciones de compra para constructores.',
  },
];

function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
        Blog técnico
      </p>
      <h1 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">
        Artículos y noticias de la industria
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ARTICULOS.map((articulo) => (
          <article
            key={articulo.titulo}
            className="flex flex-col rounded-sm border border-steel-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-steel-500">
              <CalendarDays size={14} className="text-accent-500" />
              {articulo.fecha}
            </p>
            <h2 className="mt-3 text-lg font-semibold leading-snug text-steel-900">
              {articulo.titulo}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
              {articulo.resumen}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-600">
              Leer artículo
              <ArrowRight size={15} />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
