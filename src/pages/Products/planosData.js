import { RUTA_PLANOS } from './TituloRutaProductos.jsx';
import imagenAntiderrapante from '../../assets/Lamina antiderrapante.jpg';
import imagenGalvanizada from '../../assets/Lamina galvanizada.jpg';
import imagenNegra from '../../assets/Lamina negra.jpg';
import imagenPlacas from '../../assets/Placas.jpg';

/**
 * Catálogo de Planos (listado de categoría).
 * @typedef {{ slug: string, nombre: string, imagen: string }} ProductoPlano
 */

/** @type {ProductoPlano[]} */
export const PRODUCTOS_PLANOS = [
  {
    slug: 'lamina-antiderrapante',
    nombre: 'Lámina antiderrapante',
    imagen: imagenAntiderrapante,
  },
  {
    slug: 'lamina-galvanizada',
    nombre: 'Lámina galvanizada',
    imagen: imagenGalvanizada,
  },
  {
    slug: 'lamina-negra',
    nombre: 'Lámina negra',
    imagen: imagenNegra,
  },
  {
    slug: 'placas',
    nombre: 'Placas',
    imagen: imagenPlacas,
  },
];

export function rutaProductoPlano(slug) {
  return `${RUTA_PLANOS}/${slug}`;
}
