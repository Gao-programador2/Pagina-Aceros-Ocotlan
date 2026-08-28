import imagenNivelado from '../../assets/Niveladora-scaled.jpg';
import imagenCorteSlitter from '../../assets/Corte-slitter-scaled.jpg';
import imagenCizalla from '../../assets/Cizalla-1-scaled.jpg';
import imagenFabricacionDePolin from '../../assets/Fabricacion-de-polin-1-scaled.jpg';
import imagenAcanaladoDeLamina from '../../assets/Acanalado-de-lamina-2.jpg';
import imagenHabilitadoDeVarilla from '../../assets/Habilitado-de-varilla-1-scaled.jpg';

export const RUTA_SERVICIOS = '/servicios';
export const AZUL_SERVICIOS = '#1a4789';

/**
 * Catálogo de servicios (listado y carrusel del inicio).
 * @typedef {{ nombre: string, imagen: string, to: string }} ServicioItem
 */

/** @type {ServicioItem[]} */
export const SERVICIOS = [
  {
    nombre: 'Nivelado',
    imagen: imagenNivelado,
    to: '/servicios/nivelado',
  },
  {
    nombre: 'Corte Slitter',
    imagen: imagenCorteSlitter,
    to: '/servicios/corte-slitter',
  },
  {
    nombre: 'Cizalla',
    imagen: imagenCizalla,
    to: '/servicios/cizalla',
  },
  {
    nombre: 'Fabricación de Polín',
    imagen: imagenFabricacionDePolin,
    to: '/servicios/fabricacion-de-polin',
  },
  {
    nombre: 'Acanalado de Lámina',
    imagen: imagenAcanaladoDeLamina,
    to: '/servicios/acanalado-de-lamina',
  },
  {
    nombre: 'Habilitado de Varilla',
    imagen: imagenHabilitadoDeVarilla,
    to: '/servicios/habilitado-de-varilla',
  },
];
