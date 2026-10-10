/* =============================================================================
 *  M PROPERTY CARE — ARCHIVO DE CONFIGURACIÓN
 * =============================================================================
 *
 *  Este es el ÚNICO archivo que necesitas editar para cambiar:
 *    1. Tus datos de contacto (agenda, WhatsApp, correo, Instagram)
 *    2. Los videos del portafolio y el video principal
 *    3. El Meta Pixel de Facebook
 *    4. Todos los textos del sitio, en inglés (en) y español (es)
 *
 *  Reglas simples para editar sin romper nada:
 *    - Cambia solo lo que está ENTRE comillas: 'así'.
 *    - Si un texto tiene un apóstrofe (ej. We're), ya está escrito con
 *      comillas dobles "We're" o con \' — déjalo igual.
 *    - No borres comas al final de las líneas.
 *    - Guarda el archivo y el sitio se actualiza solo (si está corriendo).
 * ========================================================================== */

/* -----------------------------------------------------------------------------
 *  1. DATOS DEL NEGOCIO Y CONTACTO
 * -------------------------------------------------------------------------- */
export const SITE = {
  /** Nombre que aparece en el logo, el footer y las pestañas del navegador. */
  businessName: 'M Property Care',

  /**
   * Dirección final de tu sitio (cuando lo publiques).
   * Ej: 'https://mpropertycare.com' o 'https://m-property-care.vercel.app'
   * Se usa para que la vista previa al compartir en WhatsApp/Facebook funcione.
   */
  url: 'https://m-property-care.vercel.app',

  /** Enlace para agendar la llamada de 15 min (Calendly, Cal.com, etc.). */
  bookingUrl: 'https://calendly.com/TU-ENLACE',

  /**
   * Número de WhatsApp: código de país + número, SIN "+", espacios ni guiones.
   * Ej: '50688887777'
   */
  whatsappNumber: '506XXXXXXXX',

  /** Correo de contacto. */
  email: 'hola@tudominio.com',

  /** Instagram: enlace completo y el @ que se muestra. */
  instagramUrl: 'https://instagram.com/TU-USUARIO',
  instagramHandle: '@TU-USUARIO',

  /**
   * META PIXEL DE FACEBOOK
   * Pega aquí SOLO el número de tu Pixel (lo encuentras en Meta Events Manager).
   * Ej: metaPixelId: '1234567890123456',
   * Mientras esté vacío (''), el Pixel no se carga.
   * Cuando lo pongas, el sitio registra automáticamente:
   *   - "PageView" en cada visita
   *   - "Lead" cuando alguien hace clic en "Agendar llamada"
   *   - "Contact" cuando alguien hace clic en WhatsApp
   */
  metaPixelId: '',

  /**
   * TESTIMONIOS — apagados por ahora.
   * Cuando tengas testimonios REALES, agrégalos en TESTIMONIALS (más abajo)
   * y cambia esto a true.
   */
  showTestimonials: false,
};

/* -----------------------------------------------------------------------------
 *  2. VIDEOS
 * -----------------------------------------------------------------------------
 *  DÓNDE PONER TUS ARCHIVOS:
 *    - Videos (.mp4)        → carpeta  public/videos/
 *    - Imágenes de portada  → carpeta  public/posters/   (.jpg o .webp)
 *
 *  Luego escribe la ruta SIN la palabra "public". Ejemplo:
 *    archivo en  public/videos/casa-tamarindo.mp4
 *    se escribe  '/videos/casa-tamarindo.mp4'
 *
 *  También puedes usar un enlace directo a un .mp4 alojado en otro lugar
 *  (ej. 'https://.../video.mp4'), o un video de YouTube con youtubeId.
 *
 *  Consejos para que cargue rápido:
 *    - Exporta los videos en MP4 (H.264), máximo ~1080p, idealmente < 15 MB.
 *    - Usa siempre una imagen de portada (poster): es lo primero que se ve.
 *
 *  Si dejas src vacío ('') y sin youtubeId, se muestra un marcador elegante
 *  de "muestra próximamente".
 * -------------------------------------------------------------------------- */

/** Video destacado del Hero (formato vertical 9:16 recomendado). */
export const HERO_VIDEO = {
  src: '', // ej. '/videos/hero.mp4'
  poster: '/posters/placeholder-vertical.svg', // ej. '/posters/hero.jpg'
};

export type PortfolioItem = {
  /** 'vertical' (9:16, reels) u 'horizontal' (16:9, recorridos). */
  orientation: 'vertical' | 'horizontal';
  /** Ruta o enlace al .mp4. Déjalo '' para mostrar el marcador. */
  src: string;
  /** Imagen de portada. */
  poster: string;
  /** Opcional: ID de YouTube (lo que va después de "v=" en el enlace). */
  youtubeId?: string;
  /** Título corto en cada idioma (también sirve como texto alternativo). */
  title: { en: string; es: string };
  /** Etiqueta pequeña (tipo de video). */
  tag: { en: string; es: string };
};

/* 👇👇 PORTAFOLIO: reemplaza estos marcadores con tus videos 👇👇 */
export const PORTFOLIO: PortfolioItem[] = [
  {
    orientation: 'horizontal',
    src: '', // ej. '/videos/villa-recorrido.mp4'
    poster: '/posters/placeholder-horizontal.svg',
    title: { en: 'Ocean-view villa walkthrough', es: 'Recorrido de villa con vista al mar' },
    tag: { en: 'Walkthrough · 16:9', es: 'Recorrido · 16:9' },
  },
  {
    orientation: 'vertical',
    src: '',
    poster: '/posters/placeholder-vertical.svg',
    title: { en: 'Vacation rental reel', es: 'Reel de alquiler vacacional' },
    tag: { en: 'Reel · 9:16', es: 'Reel · 9:16' },
  },
  {
    orientation: 'vertical',
    src: '',
    poster: '/posters/placeholder-vertical.svg',
    title: { en: 'Jungle cabin vertical tour', es: 'Recorrido vertical de cabaña' },
    tag: { en: 'Vertical tour · 9:16', es: 'Recorrido vertical · 9:16' },
  },
  {
    orientation: 'horizontal',
    src: '',
    poster: '/posters/placeholder-horizontal.svg',
    title: { en: 'Condo listing video', es: 'Video para anuncio de condominio' },
    tag: { en: 'Walkthrough · 16:9', es: 'Recorrido · 16:9' },
  },
  {
    orientation: 'vertical',
    src: '',
    poster: '/posters/placeholder-vertical.svg',
    title: { en: 'Pool & terrace reel', es: 'Reel de piscina y terraza' },
    tag: { en: 'Reel · 9:16', es: 'Reel · 9:16' },
  },
  {
    orientation: 'vertical',
    src: '',
    poster: '/posters/placeholder-vertical.svg',
    title: { en: 'Beach house highlights', es: 'Lo mejor de una casa de playa' },
    tag: { en: 'Reel · 9:16', es: 'Reel · 9:16' },
  },
];

/* -----------------------------------------------------------------------------
 *  3. TESTIMONIOS (solo reales — se muestran si showTestimonials es true)
 * -------------------------------------------------------------------------- */
export const TESTIMONIALS: {
  name: string;
  role: { en: string; es: string };
  quote: { en: string; es: string };
}[] = [
  // Ejemplo de formato (quita las // para activarlo y reemplaza con datos reales):
  // {
  //   name: 'Nombre Apellido',
  //   role: { en: 'Property manager, Tamarindo', es: 'Property manager, Tamarindo' },
  //   quote: { en: 'Real quote here.', es: 'Cita real aquí.' },
  // },
];

/* -----------------------------------------------------------------------------
 *  4. TEXTOS DEL SITIO
 *  "en" = inglés (idioma por defecto, página principal  /)
 *  "es" = español (página  /es/)
 * -------------------------------------------------------------------------- */
export const TEXT = {
  en: {
    meta: {
      title: 'M Property Care — AI promotional videos for properties in Costa Rica',
      description:
        'Professional walkthrough videos and reels for vacation rentals and homes in Costa Rica, created with AI from your existing photos. No film crew. Book a 15-min call.',
    },
    nav: {
      solution: 'What we do',
      portfolio: 'Work',
      how: 'How it works',
      faq: 'FAQ',
      cta: 'Book a call',
      switchLabel: 'Ver en español',
    },
    hero: {
      eyebrow: 'AI property videos · Costa Rica',
      title: 'More bookings start with',
      titleAccent: 'a video of your property.',
      subtitle:
        'We turn the photos you already have into professional walkthroughs and reels. No film crew. No shoot day.',
      cta: 'Book a 15-min call',
      secondary: 'See our work',
      note: '15 minutes · No commitment',
      videoLabel: 'Featured property video',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Listings without video get scrolled past.',
      points: [
        {
          title: 'Less attention',
          text: 'On Airbnb, Instagram and property portals, video stops the scroll. Photos alone blend in.',
        },
        {
          title: 'Filming is expensive',
          text: 'Crew, equipment, travel and editing. The costs add up fast.',
        },
        {
          title: 'And slow',
          text: 'Booking a shoot, clearing guests, waiting for edits. Weeks go by.',
        },
      ],
    },
    solution: {
      eyebrow: 'What we do',
      title: 'Professional video, made from your photos.',
      intro:
        'We use artificial intelligence to bring your real property to life. Same rooms, same views. Now in motion.',
      items: [
        {
          title: 'Horizontal walkthroughs',
          format: '16:9',
          text: 'A smooth tour of the property for Airbnb, YouTube, your website and listing portals.',
        },
        {
          title: 'Vertical walkthroughs',
          format: '9:16',
          text: 'The full tour, built for phones. Perfect for Stories and WhatsApp.',
        },
        {
          title: 'Reels for Instagram & TikTok',
          format: '9:16',
          text: 'Short, punchy clips with your best spaces. Made to be shared.',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Our work',
      title: 'See it in motion.',
      intro: 'Walkthroughs and reels for properties that already exist.',
      placeholder: 'Sample coming soon',
      play: 'Play video',
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three simple steps.',
      steps: [
        {
          title: 'Send us your photos',
          text: 'Share the photos you already have of the property. The ones on your listing work great.',
        },
        {
          title: 'We create your video',
          text: 'We build the walkthrough or reel with movement, music and text.',
        },
        {
          title: 'Receive it ready to post',
          text: 'You get the files in the formats you need. Upload and publish.',
        },
      ],
      note: 'Fast turnaround. Days, not weeks.',
    },
    offer: {
      eyebrow: 'Try it first',
      title: 'Sample video',
      price: 'from $99',
      text: 'See your property on video before committing to anything. We share plans and options on the call.',
      bullets: ['Made from your existing photos', 'No filming, no site visit', 'Ready-to-post format'],
      cta: 'Book a 15-min call',
    },
    trust: {
      eyebrow: 'Privacy',
      title: 'Your photos stay yours.',
      text: 'The photos and materials you send are used only for your project. We don\'t share them, sell them or reuse them without your permission.',
    },
    testimonials: {
      eyebrow: 'Clients',
      title: 'What clients say.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered.',
      items: [
        {
          q: 'Do I need to film anything?',
          a: 'No. We work with the photos you already have. No camera, no crew, no visit.',
        },
        {
          q: 'How long does it take?',
          // ✏️ Ajusta este tiempo a tu realidad.
          a: 'Usually just a few business days after we receive your photos. We confirm the exact timing on the call.',
        },
        {
          q: 'What formats do you deliver?',
          a: 'Horizontal (16:9) for Airbnb, YouTube and websites, and vertical (9:16) for Reels, TikTok and Stories. MP4 files, ready to upload.',
        },
        {
          q: 'Can I request changes?',
          // ✏️ Ajusta según tu política de cambios.
          a: 'Yes. We review the video with you and adjust details before final delivery.',
        },
        {
          q: 'What happens to my photos?',
          a: 'They are used only for your project. We don\'t share or sell them, and we don\'t use them anywhere else without your permission.',
        },
        {
          q: 'Do you work outside my area?',
          a: 'Yes. Since we work from photos, we can create videos for properties anywhere in Costa Rica, and beyond.',
        },
      ],
    },
    final: {
      title: 'Let\'s see your property in motion.',
      text: '15 minutes. We look at your property, answer your questions and show you what\'s possible.',
      cta: 'Book a 15-min call',
      whatsapp: 'Or message us on WhatsApp',
    },
    footer: {
      tagline: 'AI promotional videos for existing properties in Costa Rica.',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    whatsapp: {
      label: 'Chat on WhatsApp',
      message: 'Hi! I\'d like to know more about property videos.',
    },
  },

  es: {
    meta: {
      title: 'M Property Care — Videos promocionales con IA para propiedades en Costa Rica',
      description:
        'Videos tipo recorrido y reels profesionales para alquileres vacacionales y propiedades en Costa Rica, creados con IA a partir de tus fotos. Sin filmación. Agenda una llamada de 15 min.',
    },
    nav: {
      solution: 'Qué hacemos',
      portfolio: 'Trabajos',
      how: 'Cómo funciona',
      faq: 'Preguntas',
      cta: 'Agendar',
      switchLabel: 'View in English',
    },
    hero: {
      eyebrow: 'Videos de propiedades con IA · Costa Rica',
      title: 'Más reservas empiezan con',
      titleAccent: 'un video de tu propiedad.',
      subtitle:
        'Convertimos las fotos que ya tienes en recorridos y reels profesionales. Sin equipo de filmación. Sin día de grabación.',
      cta: 'Agenda una llamada de 15 min',
      secondary: 'Ver trabajos',
      note: '15 minutos · Sin compromiso',
      videoLabel: 'Video destacado de una propiedad',
    },
    problem: {
      eyebrow: 'El problema',
      title: 'Sin video, tu propiedad pasa desapercibida.',
      points: [
        {
          title: 'Menos atención',
          text: 'En Airbnb, Instagram y portales, el video detiene el scroll. Las fotos solas se pierden.',
        },
        {
          title: 'Filmar es caro',
          text: 'Equipo, camarógrafo, traslados y edición. Los costos suben rápido.',
        },
        {
          title: 'Y lento',
          text: 'Coordinar la grabación, sacar huéspedes, esperar la edición. Pasan semanas.',
        },
      ],
    },
    solution: {
      eyebrow: 'Qué hacemos',
      title: 'Video profesional, hecho con tus fotos.',
      intro:
        'Usamos inteligencia artificial para darle vida a tu propiedad real. Los mismos espacios, las mismas vistas. Ahora en movimiento.',
      items: [
        {
          title: 'Recorridos horizontales',
          format: '16:9',
          text: 'Un recorrido fluido para Airbnb, YouTube, tu sitio web y portales inmobiliarios.',
        },
        {
          title: 'Recorridos verticales',
          format: '9:16',
          text: 'El recorrido completo, pensado para el celular. Ideal para Stories y WhatsApp.',
        },
        {
          title: 'Reels para Instagram y TikTok',
          format: '9:16',
          text: 'Clips cortos y llamativos con tus mejores espacios. Hechos para compartirse.',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Nuestro trabajo',
      title: 'Míralo en movimiento.',
      intro: 'Recorridos y reels de propiedades que ya existen.',
      placeholder: 'Muestra próximamente',
      play: 'Reproducir video',
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos simples.',
      steps: [
        {
          title: 'Nos envías tus fotos',
          text: 'Comparte las fotos que ya tienes de la propiedad. Las de tu anuncio funcionan muy bien.',
        },
        {
          title: 'Creamos tu video',
          text: 'Armamos el recorrido o reel con movimiento, música y textos.',
        },
        {
          title: 'Lo recibes listo para publicar',
          text: 'Te entregamos los archivos en los formatos que necesitas. Subes y publicas.',
        },
      ],
      note: 'Entrega rápida. Días, no semanas.',
    },
    offer: {
      eyebrow: 'Pruébalo primero',
      title: 'Video de muestra',
      price: 'desde $99',
      text: 'Mira tu propiedad en video antes de comprometerte. Los planes y opciones te los presentamos en la llamada.',
      bullets: ['Hecho con tus fotos actuales', 'Sin filmación ni visitas', 'Formato listo para publicar'],
      cta: 'Agenda una llamada de 15 min',
    },
    trust: {
      eyebrow: 'Privacidad',
      title: 'Tus fotos siguen siendo tuyas.',
      text: 'Las fotos y materiales que nos envías se usan solo para tu proyecto. No los compartimos, no los vendemos y no los reutilizamos sin tu permiso.',
    },
    testimonials: {
      eyebrow: 'Clientes',
      title: 'Lo que dicen nuestros clientes.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que más nos preguntan.',
      items: [
        {
          q: '¿Necesito filmar algo?',
          a: 'No. Trabajamos con las fotos que ya tienes. Sin cámara, sin equipo, sin visitas.',
        },
        {
          q: '¿Cuánto tarda?',
          // ✏️ Ajusta este tiempo a tu realidad.
          a: 'Normalmente pocos días hábiles después de recibir tus fotos. Confirmamos el tiempo exacto en la llamada.',
        },
        {
          q: '¿En qué formatos lo entregan?',
          a: 'Horizontal (16:9) para Airbnb, YouTube y sitios web, y vertical (9:16) para Reels, TikTok y Stories. Archivos MP4 listos para subir.',
        },
        {
          q: '¿Puedo pedir cambios?',
          // ✏️ Ajusta según tu política de cambios.
          a: 'Sí. Revisamos el video contigo y ajustamos detalles antes de la entrega final.',
        },
        {
          q: '¿Qué pasa con mis fotos?',
          a: 'Se usan solo para tu proyecto. No las compartimos ni las vendemos, y no las usamos en ningún otro lugar sin tu permiso.',
        },
        {
          q: '¿Trabajan fuera de mi zona?',
          a: 'Sí. Como trabajamos con fotos, podemos crear videos de propiedades en cualquier parte de Costa Rica, y fuera también.',
        },
      ],
    },
    final: {
      title: 'Veamos tu propiedad en movimiento.',
      text: '15 minutos. Vemos tu propiedad, respondemos tus dudas y te mostramos lo que es posible.',
      cta: 'Agenda una llamada de 15 min',
      whatsapp: 'O escríbenos por WhatsApp',
    },
    footer: {
      tagline: 'Videos promocionales con IA para propiedades existentes en Costa Rica.',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
    whatsapp: {
      label: 'Escríbenos por WhatsApp',
      message: '¡Hola! Me gustaría saber más sobre los videos para propiedades.',
    },
  },
};

/* ---------- No necesitas tocar nada debajo de esta línea ---------- */
export type Lang = keyof typeof TEXT;
export type Copy = (typeof TEXT)['en'];

export const whatsappLink = (lang: Lang) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(TEXT[lang].whatsapp.message)}`;
