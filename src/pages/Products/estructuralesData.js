import { RUTA_ESTRUCTURALES } from './TituloRutaProductos.jsx';
import imagenAngulos from '../../assets/Angulos.jpg';
import imagenCanales from '../../assets/Canales.jpg';
import imagenHssCuadrado from '../../assets/HSS CUADRADO.jpg';
import imagenHssRectangular from '../../assets/HSS rectangular.jpg';
import imagenPlacas from '../../assets/Placas.jpg';
import imagenVigaIpr from '../../assets/Viga IPR.jpg';
import imagenVigaIps from '../../assets/Viga IPS.jpg';
import imagenPolinMonten from '../../assets/Polin Monten.jpg';

/**
 * Catálogo de Estructurales (listado de categoría).
 * @typedef {{ slug: string, nombre: string, imagen: string }} ProductoEstructural
 */

/** @type {ProductoEstructural[]} */
export const PRODUCTOS_ESTRUCTURALES = [
  { slug: 'angulos', nombre: 'Ángulos', imagen: imagenAngulos },
  { slug: 'canales', nombre: 'Canales', imagen: imagenCanales },
  { slug: 'hss-cuadrado', nombre: 'HSS Cuadrado', imagen: imagenHssCuadrado },
  { slug: 'hss-rectangular', nombre: 'HSS Rectangular', imagen: imagenHssRectangular },
  { slug: 'placas', nombre: 'Placas', imagen: imagenPlacas },
  { slug: 'viga-ipr', nombre: 'Viga IPR', imagen: imagenVigaIpr },
  { slug: 'viga-ips', nombre: 'Viga IPS', imagen: imagenVigaIps },
  { slug: 'polin-monten', nombre: 'Polín Monten', imagen: imagenPolinMonten },
];

export function rutaProductoEstructural(slug) {
  return `${RUTA_ESTRUCTURALES}/${slug}`;
}
