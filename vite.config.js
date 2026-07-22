import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
