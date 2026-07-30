import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { optimizeRasterAssets } from './plugins/optimizeRasterAssets.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Solo en `pnpm run build`: reduce peso de JPG/PNG/WebP en dist/ sin tocar src/assets.
    optimizeRasterAssets({ maxWidth: 1920, quality: 78 }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['maplibre-gl'],
  },
  build: {
    // MapLibre (~1 MB) ya va en un chunk lazy; no se puede bajar de 500 kB sin romper el mapa.
    chunkSizeWarningLimit: 1200,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/maplibre-gl')) return 'maplibre';
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/react/')
          ) {
            return 'react-vendor';
          }
        },
      },
    },
  },
  server: {
    // Escucha en todas las interfaces (necesario para móvil en la misma Wi‑Fi)
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Evita fallos de WebSocket/HMR en Safari/WebKit al abrir por IP
    hmr: {
      protocol: 'ws',
      clientPort: 5173,
    },
  },
});
