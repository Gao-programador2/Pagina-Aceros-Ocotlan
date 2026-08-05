/**
 * Base URL del API FastAPI.
 * En desarrollo: vacío + proxy de Vite (/api → :8000).
 * En producción: VITE_API_URL=https://tu-api.dominio.com
 */
export const API_BASE = String(import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '');

/**
 * @param {string} path  ej. /api/contacto
 * @param {RequestInit} [options]
 */
export async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
  const respuesta = await fetch(url, options);
  let data = null;
  try {
    data = await respuesta.json();
  } catch {
    data = null;
  }
  if (!respuesta.ok) {
    const detalle =
      (data && (data.detail || data.mensaje || data.message)) ||
      `Error ${respuesta.status}`;
    const texto = Array.isArray(detalle)
      ? detalle.map((d) => d.msg || JSON.stringify(d)).join(', ')
      : String(detalle);
    throw new Error(texto);
  }
  return data;
}
