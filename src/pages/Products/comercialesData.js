import { RUTA_COMERCIALES } from './TituloRutaProductos.jsx';
import imagenRedondos from '../../assets/Redondos.jpg';
import imagenCuadrados from '../../assets/Cuadrados.jpg';
import imagenAngulos from '../../assets/Angulos.jpg';
import imagenTeeZeta from '../../assets/Tee y Zeta.jpg';
import imagenPolinMonten from '../../assets/Polin Monten.jpg';
import imagenSoleras from '../../assets/Soleras.jpg';

/**
 * Catálogo de Comerciales (listado de categoría).
 * @typedef {{ slug: string, nombre: string, imagen: string, to?: string, palabrasClave?: string[] }} ProductoComercial
 */

/** @type {ProductoComercial[]} */
export const PRODUCTOS_COMERCIALES = [
  {
    slug: 'redondos',
    nombre: 'Redondos',
    imagen: imagenRedondos,
    to: `${RUTA_COMERCIALES}/redondos`,
    palabrasClave: ['barra redonda'],
  },
  {
    slug: 'cuadrados',
    nombre: 'Cuadrados',
    imagen: imagenCuadrados,
    to: `${RUTA_COMERCIALES}/cuadrados`,
    palabrasClave: ['barra cuadrada'],
  },
  {
    slug: 'angulos',
    nombre: 'Ángulos',
    imagen: imagenAngulos,
    to: `${RUTA_COMERCIALES}/angulos`,
    palabrasClave: ['angulo', 'angular'],
  },
  {
    slug: 'tee-y-zeta',
    nombre: 'Tee y Zeta',
    imagen: imagenTeeZeta,
    to: `${RUTA_COMERCIALES}/tee-y-zeta`,
    palabrasClave: ['tee', 'zeta', 't y z'],
  },
  {
    slug: 'polin-monten',
    nombre: 'Polín Monten',
    imagen: imagenPolinMonten,
    to: `${RUTA_COMERCIALES}/polin-monten`,
    palabrasClave: ['polin', 'monten'],
  },
  {
    slug: 'soleras',
    nombre: 'Soleras',
    imagen: imagenSoleras,
    to: `${RUTA_COMERCIALES}/soleras`,
    palabrasClave: ['solera', 'plana'],
  },
];

export function rutaProductoComercial(slug) {
  const producto = PRODUCTOS_COMERCIALES.find((item) => item.slug === slug);
  return producto?.to ?? RUTA_COMERCIALES;
}
