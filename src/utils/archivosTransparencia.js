/** Reglas compartidas con el backend (transparencia). */
export const MAX_ARCHIVOS_TRANSPARENCIA = 8;
export const MAX_BYTES_ARCHIVO = 8 * 1024 * 1024;
export const ACCEPT_ARCHIVOS = '.pdf,.jpg,.jpeg,application/pdf,image/jpeg';

const EXTENSIONES = new Set(['.pdf', '.jpg', '.jpeg']);
const MIME_PERMITIDOS = new Set(['application/pdf', 'image/jpeg']);

function extensionDe(nombre) {
  const idx = nombre.lastIndexOf('.');
  if (idx <= 0) return '';
  return nombre.slice(idx).toLowerCase();
}

/**
 * @param {File} archivo
 * @returns {string|null} Mensaje de error o null si es válido
 */
export function validarArchivoTransparencia(archivo) {
  if (!(archivo instanceof File)) {
    return 'Archivo no válido.';
  }

  const nombre = archivo.name || 'archivo';
  const ext = extensionDe(nombre);

  if (!EXTENSIONES.has(ext)) {
    return `"${nombre}": solo se permiten archivos PDF o JPG.`;
  }

  const mime = (archivo.type || '').toLowerCase();
  if (mime && !MIME_PERMITIDOS.has(mime)) {
    return `"${nombre}": tipo de archivo no permitido (usa PDF o JPG).`;
  }

  if (archivo.size <= 0) {
    return `"${nombre}": el archivo está vacío.`;
  }

  if (archivo.size > MAX_BYTES_ARCHIVO) {
    return `"${nombre}": supera el límite de 8 MB.`;
  }

  return null;
}

/**
 * @param {File[]} archivos
 * @returns {string|null}
 */
export function validarListaArchivosTransparencia(archivos) {
  if (!archivos?.length) return null;

  if (archivos.length > MAX_ARCHIVOS_TRANSPARENCIA) {
    return `Máximo ${MAX_ARCHIVOS_TRANSPARENCIA} archivos por envío.`;
  }

  for (const archivo of archivos) {
    const error = validarArchivoTransparencia(archivo);
    if (error) return error;
  }

  return null;
}

/**
 * @param {File[]} actuales
 * @param {File[]} nuevos
 * @returns {{ archivos: File[], error: string|null }}
 */
export function agregarArchivosTransparencia(actuales, nuevos) {
  const combinados = [...actuales, ...nuevos];
  const error = validarListaArchivosTransparencia(combinados);
  if (error) {
    return { archivos: actuales, error };
  }
  return { archivos: combinados, error: null };
}
