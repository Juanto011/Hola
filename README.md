# M Property Care — Sitio web

Landing page bilingüe (inglés en `/`, español en `/es/`) hecha con **Astro + Tailwind CSS**.

## Lo único que necesitas editar

**`src/config.ts`** → enlace de Calendly, WhatsApp, correo, Instagram, Meta Pixel, videos y todos los textos (EN y ES).

| Qué | Dónde |
|---|---|
| Tus videos `.mp4` | `public/videos/` |
| Portadas de los videos (`.jpg`/`.webp`) | `public/posters/` |
| Favicon (ícono de la pestaña) | `public/favicon.svg` y `public/apple-touch-icon.png` |
| Imagen al compartir en WhatsApp/Facebook (1200×630) | `public/og-image.png` (inglés) y `public/og-image-es.png` (español) |
| Colores y tipografías | `src/styles/global.css` (bloque `@theme`) |
| Orden de las secciones | `src/components/Landing.astro` |

## Comandos

```bash
npm install      # solo la primera vez
npm run dev      # ver el sitio en http://localhost:4321
npm run build    # crear la versión final en la carpeta dist/
```

## Publicar gratis

- **Vercel** o **Netlify**: importa este repositorio de GitHub. Detectan Astro solos.
  Comando de build: `npm run build` · Carpeta de salida: `dist`.
- Después de publicar, copia tu dirección final en `src/config.ts → SITE.url`.
