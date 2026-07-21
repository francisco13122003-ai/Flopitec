export type MarketingBillingType = "one-time" | "monthly" | "annual" | "custom";

export interface MarketingService {
  id: string;
  category: string;
  name: string;
  shortDescription: string;
  priceFrom?: number;
  priceSuffix?: string;
  billingType: MarketingBillingType;
  featuredItems?: string[];
  exclusions?: string[];
  requiresReview?: boolean;
  prices?: string[];
  note?: string;
}

export interface MarketingCategory {
  id: string;
  title: string;
  description: string;
  price: string;
  href: string;
}

export const marketingEstimatorEnabled = true;
export const marketingEstimatorPath = "/marketing/calcula-tu-presupuesto/";
export const marketingFallbackAnchor = "#servicios-y-precios";
export const marketingEstimatorHref = marketingEstimatorEnabled ? marketingEstimatorPath : marketingFallbackAnchor;

export const marketingSeo = {
  title: "Marketing para empresas en Granada | Flopitec",
  description: "Creamos páginas web a medida y trabajamos SEO, redes sociales, publicidad, diseño, fotografía e impresión para empresas de Granada.",
  path: "/marketing/",
  h1: "Marketing para empresas en Granada",
} as const;

export const marketingTrustMessages = [
  "Diseño y código a medida.",
  "Sin plantillas prediseñadas.",
  "Precios explicados antes de empezar.",
  "Servicios para empresas de Granada.",
] as const;

export const marketingAnchorNav = [
  { label: "Web", href: "#paginas-web" },
  { label: "SEO", href: "#seo-google" },
  { label: "Redes", href: "#redes-sociales" },
  { label: "Publicidad", href: "#publicidad-digital" },
  { label: "Diseño", href: "#diseno-impresion" },
  { label: "Fotografía y vídeo", href: "#fotografia-video" },
  { label: "Comunicación", href: "#comunicacion-digital" },
  { label: "Mantenimiento", href: "#mantenimiento" },
] as const;

export const marketingCategories: MarketingCategory[] = [
  { id: "web", title: "Páginas web", description: "Creamos páginas web personalizadas para explicar tus servicios, mostrar productos, recibir contactos, gestionar reservas o vender online.", price: "Desde 490 € + IVA", href: "#paginas-web" },
  { id: "seo", title: "SEO y Google", description: "Revisamos cómo aparece tu negocio en Google, qué información encuentran los buscadores y qué mejoras pueden ayudarte a ganar visibilidad.", price: "Desde 89 € + IVA", href: "#seo-google" },
  { id: "redes", title: "Redes sociales", description: "Creamos, configuramos y gestionamos perfiles, publicaciones, reels, mensajes y comentarios.", price: "Desde 49 € + IVA", href: "#redes-sociales" },
  { id: "publicidad", title: "Publicidad digital", description: "Preparamos y gestionamos campañas en Google, Facebook e Instagram, separando claramente nuestros honorarios del presupuesto destinado a anuncios.", price: "Desde 119 € al mes + IVA", href: "#publicidad-digital" },
  { id: "diseno", title: "Diseño gráfico e impresión", description: "Diseñamos logotipos, flyers, tarjetas, carteles, menús, catálogos y otros materiales preparados para impresión.", price: "Desde 20 € + IVA", href: "#diseno-impresion" },
  { id: "foto-video", title: "Fotografía y vídeo", description: "Creamos fotografías, vídeos, reels y material aéreo para presentar mejor el negocio, sus instalaciones y sus productos.", price: "Desde 99 € + IVA", href: "#fotografia-video" },
  { id: "comunicacion", title: "Comunicación digital", description: "Configuramos WhatsApp Business, correo corporativo, newsletters, automatizaciones y otras herramientas para comunicarse con los clientes.", price: "Desde 35 € + IVA", href: "#comunicacion-digital" },
];

export const marketingServices: MarketingService[] = [
  { id: "landing", category: "web", name: "Landing page personalizada", shortDescription: "Una landing page concentra toda la información importante en una sola página. Puede servir para presentar un servicio, lanzar una campaña o empezar con una presencia digital sencilla.", priceFrom: 490, priceSuffix: "+ IVA", billingType: "one-time", featuredItems: ["Diseño personalizado", "Hasta seis secciones", "Adaptación a móvil, tablet y ordenador", "Botones de contacto", "Formulario sencillo", "WhatsApp", "Mapa y redes sociales", "SEO técnico inicial", "Publicación"] },
  { id: "web-basica", category: "web", name: "Web corporativa básica", shortDescription: "Una opción para empresas que necesitan explicar quiénes son, qué servicios ofrecen, cómo trabajan y cómo pueden contactar sus clientes.", priceFrom: 890, priceSuffix: "+ IVA", billingType: "one-time", featuredItems: ["Portada de hasta siete secciones", "Hasta cuatro páginas internas", "Diseño a medida", "Desarrollo con código personalizado", "Adaptación responsive", "Formulario o medios de contacto", "WhatsApp, mapa y redes sociales", "Metadatos iniciales", "Sitemap", "Preparación básica para indexación", "Dos rondas generales de cambios", "Publicación"] },
  { id: "web-ampliada", category: "web", name: "Web corporativa ampliada", shortDescription: "Pensada para empresas con varios servicios, áreas de actividad o contenidos que necesitan una estructura más extensa. Puede incluir hasta diez páginas internas, una arquitectura más amplia y contenidos organizados por servicios o tipos de clientes.", priceFrom: 1290, priceSuffix: "+ IVA", billingType: "one-time" },
  { id: "catalogo", category: "web", name: "Catálogo de productos", shortDescription: "Permite mostrar productos organizados por categorías sin necesidad de incorporar pagos o pedidos online.", priceFrom: 1490, priceSuffix: "+ IVA", billingType: "one-time", featuredItems: ["Categorías", "Fichas de producto", "Imágenes", "Características", "Búsqueda o filtros básicos", "Formularios de consulta", "Contacto mediante WhatsApp"] },
  { id: "reservas", category: "web", name: "Sistemas de reservas y citas", shortDescription: "Configuramos sistemas para que los clientes puedan consultar disponibilidad y solicitar o reservar una cita.", billingType: "custom", prices: ["Sistema sencillo desde 490 € + IVA", "Sistema avanzado desde 990 € + IVA"], featuredItems: ["Número de servicios", "Personal", "Horarios", "Sedes", "Confirmaciones", "Pagos", "Cancelaciones", "Integraciones"] },
  { id: "tienda-online", category: "web", name: "Tiendas online", shortDescription: "Creamos tiendas online con productos, carrito, pagos, pedidos y configuración inicial de envíos.", priceFrom: 4900, priceSuffix: "+ IVA", billingType: "custom", requiresReview: true, note: "Las tiendas online necesitan una revisión previa. El precio mostrado es únicamente una referencia inicial.", featuredItems: ["Hasta treinta productos", "Categorías", "Carrito", "Pagos", "Gestión de pedidos", "Correos básicos", "Configuración inicial de envíos", "Diseño personalizado", "Formación inicial", "Dos rondas generales de cambios"], exclusions: ["ERP", "Sincronización de almacenes", "Marketplaces", "Suscripciones", "Facturación avanzada", "Multidioma", "Aplicaciones móviles", "Integraciones complejas"] },
];

export const marketingWebAddons = ["Página interna adicional: desde 90 €.", "Sección especial adicional: desde 60 €.", "Blog integrado: desde 190 €.", "Redacción de textos: desde 50 € por página.", "Renovación de web existente: desde 690 €.", "Migración de contenidos: desde 120 €.", "Funciones personalizadas: presupuesto según proyecto."] as const;
export const marketingPriceGroups = {
  seo: ["Auditoría SEO inicial: desde 99 €.", "Optimización SEO de una web pequeña: desde 249 €.", "Google Business Profile: desde 89 €.", "SEO local: desde 169 €.", "Artículo optimizado: desde 69 €.", "Seguimiento SEO básico: desde 119 € al mes.", "Seguimiento SEO ampliado: desde 219 € al mes."],
  social: ["Una red: desde 49 €.", "Hasta tres redes: desde 119 €.", "Perfil y portada: desde 59 €.", "Cuatro publicaciones mensuales: desde 149 € al mes.", "Ocho publicaciones mensuales: desde 249 € al mes.", "Doce publicaciones mensuales: desde 349 € al mes.", "Reel sencillo: desde 69 €.", "Pack de cuatro reels: desde 239 €.", "Plantillas: desde 99 €."],
  community: ["Revisión básica: desde 99 € al mes.", "Gestión habitual: desde 179 € al mes.", "Gestión intensiva: desde 299 € al mes."],
  ads: ["Configuración inicial: desde 149 €.", "Una plataforma: desde 119 € al mes.", "Dos plataformas: desde 199 € al mes.", "Diseño de anuncio: desde 59 €.", "Landing de campaña: desde 390 €.", "Informe ampliado: desde 49 €."],
  design: ["Logotipo esencial: desde 129 €.", "Logotipo e identidad básica: desde 249 €.", "Identidad visual ampliada: desde 449 €.", "Flyer: desde 59 €.", "Tarjeta: desde 35 €.", "Diseño para sello: desde 20 €.", "Cartel: desde 49 €.", "Menú o carta: desde 89 €.", "Catálogo o dossier: desde 120 €.", "Material con QR: desde 39 €.", "Firma de correo: desde 35 €."],
  printManagement: ["Hasta 50 € de impresión: 10 €.", "Entre 50,01 € y 150 €: 15 €.", "Entre 150,01 € y 300 €: 25 €.", "Entre 300,01 € y 600 €: 40 €.", "Más de 600 €: desde 60 €."],
  leaflet: ["1.000 unidades: desde 140 €.", "2.500 unidades: desde 320 €.", "5.000 unidades: desde 600 €.", "Segmentación: desde 30 €.", "Reparto en mano: presupuesto personalizado."],
  visual: ["Sesión fotográfica: desde 129 €.", "Fotografía de producto: desde 10 € por producto.", "Pack para redes: desde 179 €.", "Vídeo corto: desde 99 €.", "Vídeo corporativo sencillo: desde 349 €.", "Vídeo corporativo avanzado: desde 690 €.", "Edición: desde 30 € por hora.", "Fotografía aérea: desde 199 €.", "Vídeo aéreo: desde 279 €."],
  communication: ["WhatsApp Business: desde 79 €.", "Catálogo de WhatsApp: desde 59 €.", "Pack completo de WhatsApp: desde 129 €.", "Correo corporativo: desde 79 €.", "Cuenta adicional: desde 20 €.", "Firma: desde 35 €.", "Migración de correo: desde 49 € por cuenta.", "Email marketing: desde 129 €.", "Plantilla: desde 79 €.", "Newsletter: desde 69 €.", "Automatización: desde 149 €.", "Gestión mensual: desde 129 € al mes."],
} as const;

export const marketingMaintenancePlans = [
  { name: "Esencial", monthly: "39 € al mes", annual: "399 € al año", items: ["Hasta 30 minutos", "Cambios pequeños", "Revisión básica", "Incidencias sencillas"] },
  { name: "Negocio", monthly: "79 € al mes", annual: "799 € al año", items: ["Hasta 90 minutos", "Cambios de contenido", "Revisión de formularios", "Revisión técnica", "Informe sencillo"] },
  { name: "Avanzado", monthly: "139 € al mes", annual: "1.399 € al año", items: ["Hasta tres horas", "Contenido", "Pequeñas secciones", "Revisión técnica y SEO", "Atención prioritaria", "Informe periódico"] },
] as const;
export const marketingMaintenanceConditions = ["Las horas no se acumulan indefinidamente.", "Solicitudes normales: aproximadamente 3–5 días laborables.", "Solicitudes prioritarias: valoración en 24–48 horas laborables según disponibilidad.", "La valoración prioritaria no garantiza resolución.", "Las urgencias se presupuestan aparte.", "No existe atención 24 horas."] as const;
export const marketingWorkSteps = ["Conocemos el proyecto.", "Definimos el alcance.", "Preparamos la propuesta.", "Aplicamos los cambios.", "Entregamos o publicamos.", "Continuamos si lo necesitas."] as const;
export const marketingDiscounts = { title: "Precios de lanzamiento", text: "Los precios publicados son precios iniciales pensados para la puesta en marcha de esta nueva área de servicios.", items: ["Dos servicios compatibles: 3 %.", "Tres o cuatro: 5 %.", "Cinco o más: 8 %."], exclusions: ["Publicidad pagada", "Impresión", "Licencias", "Dominios", "Alojamiento", "Desplazamientos", "Tasas", "Servicios personalizados", "Tiendas online avanzadas", "Planes anuales"] } as const;
export const marketingFaqs = [
  ["¿Los precios incluyen IVA?", "No. Los importes publicados son orientativos y se indican sin IVA."],
  ["¿El precio de la calculadora es definitivo?", "No. La futura calculadora mostrará una estimación inicial; la propuesta definitiva dependerá del alcance, contenidos, materiales y revisión técnica."],
  ["¿Puedo descargar la estimación sin facilitar mis datos?", "Sí. La funcionalidad prevista permitirá descargar el informe sin registro ni datos personales."],
  ["¿Trabajáis únicamente en La Zubia?", "No. La ubicación física de Flopitec está en La Zubia, pero trabajamos con autónomos, comercios y empresas de Granada capital y provincia según el servicio."],
  ["¿Utilizáis plantillas para crear las páginas web?", "No utilizamos una plantilla prediseñada para cambiar únicamente colores y logotipo; diseñamos la estructura y desarrollamos con código personalizado."],
  ["¿Cuánto tarda una página web?", "Depende del alcance, la rapidez en entregar materiales y las revisiones. Los plazos empiezan tras aceptar la propuesta, recibir el pago inicial y disponer de los materiales necesarios."],
  ["¿Qué ocurre si necesito más páginas?", "Se pueden añadir páginas internas, secciones especiales, blog, redacción o funciones personalizadas con presupuesto separado."],
  ["¿Cuántos cambios puedo pedir?", "Las condiciones de cambios dependen del servicio. En diseño gráfico se contemplan las rondas indicadas y en web se especifican en cada propuesta."],
  ["¿Qué se considera un cambio de alcance?", "Un cambio de alcance es una petición que modifica lo acordado inicialmente, añade funcionalidades, páginas, integraciones, contenidos o condiciones no incluidas."],
  ["¿Garantizáis la primera posición en Google?", "No. No garantizamos posiciones concretas, visitas determinadas ni resultados inmediatos."],
  ["¿El presupuesto de los anuncios está incluido?", "No. El dinero destinado a Google, Facebook o Instagram se muestra separado de nuestros honorarios."],
  ["¿Puedo contratar solo un servicio?", "Sí. Puedes contratar un servicio concreto o combinar varias soluciones según lo que necesite tu negocio."],
  ["¿Realizáis el buzoneo?", "Sí, puede presupuestarse el reparto. El diseño, impresión, gestión, transporte extraordinario y reparto se muestran por separado."],
  ["¿Los servicios con dron siempre pueden realizarse?", "No. Están sujetos a ubicación, normativa, seguridad, meteorología, restricciones del espacio aéreo, permisos y viabilidad técnica."],
  ["¿Tenéis planes de mantenimiento?", "Sí. Hay planes Esencial, Negocio y Avanzado con cuotas mensuales y anuales."],
  ["¿El plan anual tiene descuento?", "Los planes anuales ya tienen su precio específico y quedan excluidos de los descuentos de lanzamiento por combinación de servicios."],
] as const;
export const marketingCommercialNotices = ["Los importes mostrados son orientativos, se indican sin IVA y no constituyen una oferta contractual ni un presupuesto definitivo.", "Los precios pueden variar según el alcance, los contenidos, las características técnicas, los desplazamientos, las tarifas de proveedores y los servicios externos necesarios.", "Los plazos comenzarán una vez aceptada la propuesta definitiva, recibido el pago inicial acordado y entregados los materiales necesarios.", "No garantizamos posiciones concretas en buscadores, un número determinado de visitas, contactos, ventas o resultados publicitarios."] as const;
