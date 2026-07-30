import { RUTA_GALVANIZADOS } from './TituloRutaProductos.jsx';
import imagenClavos from '../../assets/Clavos.jpg';
import imagenGrapas from '../../assets/Grapas.jpg';

/**
 * Catálogo de Galvanizados (listado de categoría).
 * @typedef {{ slug: string, nombre: string, imagen: string }} ProductoGalvanizado
 */

/** @type {ProductoGalvanizado[]} */
export const PRODUCTOS_GALVANIZADOS = [
  {
    slug: 'clavos',
    nombre: 'Clavos',
    imagen: imagenClavos,
  },
  {
    slug: 'grapas',
    nombre: 'Grapas',
    imagen: imagenGrapas,
  },
];

export function rutaProductoGalvanizado(slug) {
  return `${RUTA_GALVANIZADOS}/${slug}`;
}
