import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    host: true,
    port: 5181,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        koleksione: resolve(__dirname, 'koleksione.html'),
        produkt: resolve(__dirname, 'produkt.html'),
        rrethNesh: resolve(__dirname, 'rreth-nesh.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
      },
    },
  },
});
