/**
 * Imagen con carga diferida por defecto (mejor rendimiento en producción).
 * Usa `prioridad` en héroes / LCP para forzar carga inmediata.
 *
 * @param {{
 *   prioridad?: boolean,
 *   loading?: 'lazy' | 'eager',
 *   decoding?: 'async' | 'auto' | 'sync',
 *   fetchPriority?: 'high' | 'low' | 'auto',
 * } & React.ImgHTMLAttributes<HTMLImageElement>} props
 */
function Imagen({
  prioridad = false,
  loading,
  decoding = 'async',
  fetchPriority,
  alt = '',
  ...rest
}) {
  const carga = loading ?? (prioridad ? 'eager' : 'lazy');
  const prioridadFetch = fetchPriority ?? (prioridad ? 'high' : undefined);

  return (
    <img
      alt={alt}
      loading={carga}
      decoding={decoding}
      {...(prioridadFetch ? { fetchPriority: prioridadFetch } : {})}
      {...rest}
    />
  );
}

export default Imagen;
