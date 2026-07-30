import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const AZUL_PRODUCTOS = '#1a4789';
export const RUTA_PRODUCTOS = '/productos';
export const RUTA_COMERCIALES = '/categoria-producto/productos/comerciales';
export const RUTA_CORRUGADOS =
  '/categoria-producto/productos/corrugados-y-trefilados';
export const RUTA_GALVANIZADOS = '/categoria-producto/productos/galvanizados';
export const RUTA_ESTRUCTURALES = '/categoria-producto/productos/estructurales';
export const RUTA_TUBULARES =
  '/categoria-producto/productos/perfiles-tubulares-y-tuberias';
export const RUTA_PLANOS = '/categoria-producto/productos/planos';

/**
 * Título tipo ruta: Productos / Comerciales / Redondos
 * Los segmentos con `to` son clicables y regresan a esa vista.
 *
 * @param {{ segmentos: Array<{ label: string, to?: string }>, className?: string }} props
 */
export function TituloRutaProductos({ segmentos, className = '' }) {
  return (
    <h1
      className={`flex flex-wrap items-baseline text-xl font-bold leading-tight break-words sm:text-2xl lg:text-3xl xl:text-4xl ${className}`}
      style={{ color: AZUL_PRODUCTOS }}
    >
      {segmentos.map((segmento, indice) => {
        const esUltimo = indice === segmentos.length - 1;
        const contenido =
          segmento.to && !esUltimo ? (
            <Link
              to={segmento.to}
              className="transition-opacity hover:opacity-70 hover:underline hover:underline-offset-4"
            >
              {segmento.label}
            </Link>
          ) : (
            <span>{segmento.label}</span>
          );

        return (
          <Fragment key={`${segmento.label}-${indice}`}>
            {indice > 0 ? (
              <span className="mx-1.5 font-semibold text-[#1a4789]/70 sm:mx-2" aria-hidden="true">
                /
              </span>
            ) : null}
            {contenido}
          </Fragment>
        );
      })}
    </h1>
  );
}
