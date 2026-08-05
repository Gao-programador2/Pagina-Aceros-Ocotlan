/**
 * Destinatarios de Transparencia viven en el backend:
 *   fastapi/.env → CORREOS_IRREGULARIDADES / CORREOS_FRAUDES
 *
 * Este archivo se mantiene por compatibilidad; el envío real va a FastAPI.
 */

function parsearCorreos(valor) {
  return String(valor ?? '')
    .split(/[,;]+/)
    .map((correo) => correo.trim())
    .filter(Boolean);
}

/** @deprecated Usar configuración del backend (fastapi/.env) */
export const CORREOS_IRREGULARIDADES = parsearCorreos(
  import.meta.env.VITE_TRANSPARENCIA_IRREGULARIDADES_CORREOS,
);

/** @deprecated Usar configuración del backend (fastapi/.env) */
export const CORREOS_FRAUDES = parsearCorreos(
  import.meta.env.VITE_TRANSPARENCIA_FRAUDES_CORREOS,
);
