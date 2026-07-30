import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';

/**
 * Tarjeta reutilizable para mostrar un producto o categoría del catálogo.
 * Props:
 * - nombre:      nombre del producto/categoría
 * - descripcion: texto breve
 * - imagen:      URL opcional de la imagen (si no hay, muestra un ícono)
 * - icono:       componente de ícono de lucide-react opcional
 */
function TarjetaProducto({ nombre, descripcion, imagen, icono: Icono = Box }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-steel-200 bg-white transition-shadow hover:shadow-lg">
      <div className="flex h-44 items-center justify-center bg-steel-100">
        {imagen ? (
          <img
            src={imagen}
            alt={nombre}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <Icono size={56} className="text-steel-400 transition-colors group-hover:text-accent-500" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold uppercase tracking-wide text-steel-900">
          {nombre}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{descripcion}</p>
        <Link
          to="/contacto"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-600 hover:text-accent-700"
        >
          Cotizar
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

export default TarjetaProducto;
