import { RUTA_GALVANIZADOS } from './TituloRutaProductos.jsx';
import imagenClavos from '../../assets/Clavos.jpg';
import imagenGrapas from '../../assets/Grapas.jpg';
import imagenAlambrePuas from '../../assets/Alambre de puas.jpg';
import imagenAlambreGalvanizado from '../../assets/Alambre galvanizado.jpg';
import imagenConcertina from '../../assets/Concertina.jpg';
import imagenCribaPlata from '../../assets/Criba de gran de plata ligera.jpg';
import imagenMallaBorreguera from '../../assets/malla-borreguera.jpg';
import imagenMallaCriba from '../../assets/Malla criba ornamental.jpg';
import imagenMallaPajaro from '../../assets/Malla de pajaro.png';
import imagenMultimalla from '../../assets/Multimalla ferretera.jpg';
import imagenLaminaGalvanizada from '../../assets/Lamina galvanizada.jpg';

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
  {
    slug: 'alambre-de-puas',
    nombre: 'Alambre de púas',
    imagen: imagenAlambrePuas,
  },
  {
    slug: 'alambre-galvanizado',
    nombre: 'Alambre galvanizado',
    imagen: imagenAlambreGalvanizado,
  },
  {
    slug: 'concertina',
    nombre: 'Concertina',
    imagen: imagenConcertina,
  },
  {
    slug: 'criba-grano-de-plata-ligera',
    nombre: 'Criba de grano de plata ligera',
    imagen: imagenCribaPlata,
  },
  {
    slug: 'malla-borreguera',
    nombre: 'Malla borreguera',
    imagen: imagenMallaBorreguera,
  },
  {
    slug: 'malla-de-pajaro',
    nombre: 'Malla de pájaro',
    imagen: imagenMallaPajaro,
  },
  {
    slug: 'malla-criba-ornamental',
    nombre: 'Malla criba ornamental',
    imagen: imagenMallaCriba,
  },
  {
    slug: 'multimalla-ferretera',
    nombre: 'Multimalla ferretera',
    imagen: imagenMultimalla,
  },
  {
    slug: 'lamina-galvanizada',
    nombre: 'Lámina galvanizada',
    imagen: imagenLaminaGalvanizada,
  },
];

export function rutaProductoGalvanizado(slug) {
  return `${RUTA_GALVANIZADOS}/${slug}`;
}
