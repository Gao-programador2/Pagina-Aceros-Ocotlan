import sharp from 'sharp';

/**
 * Comprime y limita el ancho de imágenes raster en el build de producción.
 * No modifica los archivos de src/assets; solo los assets emitidos en dist/.
 *
 * @param {{ maxWidth?: number, quality?: number, minBytes?: number }} [opciones]
 */
export function optimizeRasterAssets({
  maxWidth = 1920,
  quality = 78,
  minBytes = 40 * 1024,
} = {}) {
  return {
    name: 'optimize-raster-assets',
    apply: 'build',
    async generateBundle(_options, bundle) {
      let ahorrado = 0;
      let procesadas = 0;

      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset') continue;
        if (!/\.(jpe?g|png|webp)$/i.test(asset.fileName)) continue;

        const entrada = toBuffer(asset.source);
        if (!entrada || entrada.length < minBytes) continue;

        try {
          const imagen = sharp(entrada, { failOn: 'none' }).rotate();
          const meta = await imagen.metadata();
          let pipeline = imagen;

          if (meta.width && meta.width > maxWidth) {
            pipeline = pipeline.resize({
              width: maxWidth,
              withoutEnlargement: true,
            });
          }

          let salida;
          if (/\.png$/i.test(asset.fileName)) {
            salida = await pipeline
              .png({ compressionLevel: 9, palette: false })
              .toBuffer();
          } else if (/\.webp$/i.test(asset.fileName)) {
            salida = await pipeline.webp({ quality }).toBuffer();
          } else {
            salida = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
          }

          if (salida.length < entrada.length) {
            ahorrado += entrada.length - salida.length;
            procesadas += 1;
            asset.source = salida;
          }
        } catch {
          // Si sharp no puede procesar un archivo, se deja el original.
        }
      }

      if (procesadas > 0) {
        const mb = (ahorrado / (1024 * 1024)).toFixed(2);
        console.log(
          `\n✓ Imágenes optimizadas: ${procesadas} archivo(s), −${mb} MB en dist/\n`,
        );
      }
    },
  };
}

/**
 * @param {string | Uint8Array | Buffer | undefined} source
 * @returns {Buffer | null}
 */
function toBuffer(source) {
  if (!source) return null;
  if (Buffer.isBuffer(source)) return source;
  if (source instanceof Uint8Array) return Buffer.from(source);
  if (typeof source === 'string') return Buffer.from(source);
  return null;
}
