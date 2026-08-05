import { RUTA_TUBULARES } from './TituloRutaProductos.jsx';
import imagenLaminaGalvanizada from '../../assets/Lamina galvanizada.jpg';
import imagenPerfilTubular from '../../assets/Perfil tubular.jpg';
import imagenPtr from '../../assets/PTR.jpg';
import imagenTuboCedula from '../../assets/Tubo cedula.jpg';
import imagenTuboFluidos from '../../assets/Tubo conduccion de fluidos.jpg';
import imagenTuboEstructural from '../../assets/Tubo estructural.jpg';

/**
 * Catálogo de Perfiles tubulares y Tuberías (listado de categoría).
 * @typedef {{ slug: string, nombre: string, imagen: string }} ProductoTubular
 */

/** @type {ProductoTubular[]} */
export const PRODUCTOS_TUBULARES = [
  { slug: 'perfil-tubular', nombre: 'Perfil tubular', imagen: imagenPerfilTubular },
  { slug: 'ptr', nombre: 'PTR', imagen: imagenPtr },
  { slug: 'tubo-cedula', nombre: 'Tubo cédula', imagen: imagenTuboCedula },
  {
    slug: 'tubo-conduccion-de-fluidos',
    nombre: 'Tubo conducción de fluidos',
    imagen: imagenTuboFluidos,
  },
  { slug: 'tubo-estructural', nombre: 'Tubo estructural', imagen: imagenTuboEstructural },
];

export function rutaProductoTubular(slug) {
  return `${RUTA_TUBULARES}/${slug}`;
}
