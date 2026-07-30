/**
 * Destinatarios del buzón de Transparencia (desde .env / example.env).
 * Varios correos: sepáralos con coma en la variable.
 */

/**
 * @param {string | undefined} valor
 * @returns {string[]}
 */
function parsearCorreos(valor) {
  return String(valor ?? '')
    .split(/[,;]+/)
    .map((correo) => correo.trim())
    .filter(Boolean);
}

/** Primer botón: Irregularidades, abusos o mal servicio */
export const CORREOS_IRREGULARIDADES = parsearCorreos(
  import.meta.env.VITE_TRANSPARENCIA_IRREGULARIDADES_CORREOS,
);

/** Segundo botón: Fraudes */
export const CORREOS_FRAUDES = parsearCorreos(
  import.meta.env.VITE_TRANSPARENCIA_FRAUDES_CORREOS,
);
