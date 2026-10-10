// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  vite: {
    // @ts-ignore (aviso de tipos entre versiones de Vite; no afecta el sitio)
    plugins: [tailwindcss()],
  },
});
