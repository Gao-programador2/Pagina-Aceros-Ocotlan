import { RUTA_CORRUGADOS } from './TituloRutaProductos.jsx';

import imagenAlambrePuas from '../../assets/Alambre de puas.jpg';
import tablaAlambrePuas from '../../assets/Alambre de puas-04.png';
import imagenAlambreGalvanizado from '../../assets/Alambre galvanizado.jpg';
import tablaAlambreGalvanizado from '../../assets/Alambre galvanizado suave-03.png';
import imagenAlambreRecocido from '../../assets/Alambre recocido.jpg';
import tablaAlambreRecocido from '../../assets/Alambre recocido_Mesa de trabajo 1.png';
import imagenAlambron from '../../assets/Alambron.jpg';
import tablaAlambron from '../../assets/Alambron-02.png';
import imagenCastilloArmex from '../../assets/Castillo armex.jpg';
import tablaCastilloArmex from '../../assets/Castillo armex-07.png';
import imagenConcertina from '../../assets/Concertina.jpg';
import tablaConcertina from '../../assets/Concertina comercial-20.png';
import imagenCribaPlata from '../../assets/Criba de gran de plata ligera.jpg';
import tablaCribaPlata from '../../assets/criba de grano de plata ligera-18.png';
import imagenMallaBorreguera from '../../assets/malla-borreguera.jpg';
import tablaMallaBorreguera from '../../assets/Malla borreguera-21.png';
import imagenMallaCriba from '../../assets/Malla criba ornamental.jpg';
import tablaMallaCriba from '../../assets/malla criba ornamental galvanizada-23.png';
import imagenMallaPajaro from '../../assets/Malla de pajaro.png';
import tablaMallaPajaro from '../../assets/Malla de pajaro-19.png';
import imagenMultimalla from '../../assets/Multimalla ferretera.jpg';
import tablaMultimalla from '../../assets/Multimalla ferretera-22.png';
import imagenVarilla from '../../assets/Varilla corrugada.jpg';
import tablaVarilla from '../../assets/Varilla Corrugada-33.png';

/**
 * Catálogo de Corrugados y Trefilados.
 * @typedef {{ slug: string, nombre: string, imagen: string, tabla: string, altImagen: string, altTabla: string, descripcion: string, palabrasClave?: string[] }} ProductoCorrugado
 */

/** @type {ProductoCorrugado[]} */
export const PRODUCTOS_CORRUGADOS = [
  {
    slug: 'alambre-de-puas',
    nombre: 'Alambre de púas',
    imagen: imagenAlambrePuas,
    tabla: tablaAlambrePuas,
    altImagen: 'Rollo de alambre de púas galvanizado',
    altTabla: 'Tabla de especificaciones de Alambre de púas',
    descripcion:
      'Alambre de púas galvanizado de dos hilos retorcidos, ideal para cercos perimetrales, potreros y protección de predios. Ofrece alta resistencia mecánica y cumple con la norma ASTM A-121.',
    palabrasClave: ['puas', 'cerco', 'potrero', 'alambrado'],
  },
  {
    slug: 'alambre-galvanizado',
    nombre: 'Alambre galvanizado',
    imagen: imagenAlambreGalvanizado,
    tabla: tablaAlambreGalvanizado,
    altImagen: 'Rollos de alambre galvanizado suave',
    altTabla: 'Tabla de especificaciones de Alambre galvanizado suave',
    descripcion:
      'Alambre galvanizado suave con capa de zinc uniforme, disponible en distintos calibres para amarre, cercado ligero y usos generales en obra. Incluye identificador de calibre en cada rollo y cumple con la especificación ASTM A-641.',
    palabrasClave: ['galvanizado', 'alambre suave', 'zinc', 'calibre'],
  },
  {
    slug: 'alambre-recocido',
    nombre: 'Alambre recocido',
    imagen: imagenAlambreRecocido,
    tabla: tablaAlambreRecocido,
    altImagen: 'Rollos de alambre recocido negro',
    altTabla: 'Tabla de especificaciones de Alambre recocido',
    descripcion:
      'Alambre recocido negro, dúctil y fácil de trabajar, utilizado para amarre de acero de refuerzo, embobinado y usos generales en construcción e industria.',
    palabrasClave: ['recocido', 'negro', 'amarre', 'alambre negro'],
  },
  {
    slug: 'alambron',
    nombre: 'Alambrón',
    imagen: imagenAlambron,
    tabla: tablaAlambron,
    altImagen: 'Bobinas de alambrón de acero',
    altTabla: 'Tabla de especificaciones de Alambrón',
    descripcion:
      'Alambrón de acero en bobina, materia prima para trefilado y fabricación de alambres. Disponible en distintos diámetros para procesos industriales y de transformación.',
    palabrasClave: ['alambron', 'bobina', 'trefilado'],
  },
  {
    slug: 'castillo-armex',
    nombre: 'Castillo Armex',
    imagen: imagenCastilloArmex,
    tabla: tablaCastilloArmex,
    altImagen: 'Armaduras prefabricadas Castillo Armex',
    altTabla: 'Tabla de especificaciones de Castillos Armex Grado 6000',
    descripcion:
      'Castillos Armex prefabricados grado 6000 para columnas y refuerzos de concreto. Disponibles en geometrías de línea, triángulo, cuadrado y rectángulo, en piezas estándar de 6.00 m.',
    palabrasClave: ['armex', 'castillo', 'armadura', 'columna', 'estribo'],
  },
  {
    slug: 'concertina',
    nombre: 'Concertina',
    imagen: imagenConcertina,
    tabla: tablaConcertina,
    altImagen: 'Concertina comercial con cuchillas tipo arpón',
    altTabla: 'Información de Concertina comercial',
    descripcion:
      'Concertina comercial galvanizada con cuchillas tipo arpón de filo de bisturí, fabricada para protección en bardas y cercas de residencias, deportivos, aeropuertos, bodegas y más. Se empaca en cajas de cartón para un manejo seguro.',
    palabrasClave: ['concertina', 'cuchilla', 'seguridad', 'barda', 'razor'],
  },
  {
    slug: 'criba-grano-de-plata-ligera',
    nombre: 'Criba de grano de plata ligera',
    imagen: imagenCribaPlata,
    tabla: tablaCribaPlata,
    altImagen: 'Rollo de criba de grano de plata ligera',
    altTabla: 'Tabla de especificaciones de Criba de grano de plata ligera',
    descripcion:
      'Criba de grano de plata ligera galvanizada, con distintas aberturas y diámetros de alambre. Ideal para filtrado, cribado y usos industriales ligeros en rollos de 30 m.',
    palabrasClave: ['criba', 'grano de plata', 'malla', 'abertura'],
  },
  {
    slug: 'malla-borreguera',
    nombre: 'Malla borreguera',
    imagen: imagenMallaBorreguera,
    tabla: tablaMallaBorreguera,
    altImagen: 'Rollos de malla borreguera galvanizada',
    altTabla: 'Tabla de especificaciones de Malla borreguera',
    descripcion:
      'Malla borreguera galvanizada para cercado de potreros y ganado. Disponible en distintas alturas, con alambres de calibre superior e intermedio y abertura uniforme.',
    palabrasClave: ['borreguera', 'ganado', 'cerco', 'potrero', 'campo'],
  },
  {
    slug: 'malla-criba-ornamental',
    nombre: 'Malla criba ornamental',
    imagen: imagenMallaCriba,
    tabla: tablaMallaCriba,
    altImagen: 'Rollo de malla criba ornamental galvanizada',
    altTabla: 'Tabla de especificaciones de Malla criba ornamental galvanizada',
    descripcion:
      'Malla criba ornamental galvanizada para protección y acabados. Disponible en aberturas de 50×50 mm y 38×38 mm, calibre 10.5, en rollos de 10 m de largo.',
    palabrasClave: ['criba ornamental', 'ornamental', 'malla galvanizada'],
  },
  {
    slug: 'malla-de-pajaro',
    nombre: 'Malla de pájaro',
    imagen: imagenMallaPajaro,
    tabla: tablaMallaPajaro,
    altImagen: 'Rollo de malla de pájaro hexagonal',
    altTabla: 'Tabla de especificaciones de Malla de pájaro',
    descripcion:
      'Malla de pájaro (hexagonal) galvanizada para aviarios, jardinería y protección ligera. Disponible en distintas aberturas, alturas y calibres.',
    palabrasClave: ['pajaro', 'hexagonal', 'gallinera', 'aviario'],
  },
  {
    slug: 'multimalla-ferretera',
    nombre: 'Multimalla ferretera',
    imagen: imagenMultimalla,
    tabla: tablaMultimalla,
    altImagen: 'Paneles de multimalla ferretera electrosoldada',
    altTabla: 'Tabla de especificaciones de Multimalla ferretera',
    descripcion:
      'Multimalla ferretera galvanizada electrosoldada para refuerzo, cercado y usos ferreteros. Disponible en varias aberturas, calibres y alturas en rollos de 20 m.',
    palabrasClave: ['multimalla', 'ferretera', 'electrosoldada', 'malla'],
  },
  {
    slug: 'varilla-corrugada',
    nombre: 'Varilla corrugada',
    imagen: imagenVarilla,
    tabla: tablaVarilla,
    altImagen: 'Varillas corrugadas de acero de refuerzo',
    altTabla: 'Tabla de especificaciones de Varilla corrugada',
    descripcion:
      'Varilla corrugada de alta resistencia para refuerzo de concreto. Disponible en grados ASTM A-615 y G-6000, con distintos diámetros, pesos unitarios y presentaciones estándar.',
    palabrasClave: ['varilla', 'corrugada', 'refuerzo', 'concreto', 'rebar'],
  },
];

export function obtenerProductoCorrugado(slug) {
  return PRODUCTOS_CORRUGADOS.find((p) => p.slug === slug) ?? null;
}

export function rutaProductoCorrugado(slug) {
  return `${RUTA_CORRUGADOS}/${slug}`;
}
