# Rediseño oscuro editorial · 14 de octubre de 2026

## Decisiones aprobadas

Mantener el tema oscuro, el naranja corporativo y las esquinas rectas. Reducir el peso y la altura de los títulos, aprovechar mejor la anchura y facilitar la lectura sin reescribir el contenido comercial.

Adaptar globalmente el pie aprobado: identidad, navegación, contacto y enlaces de visita. El horario semanal se conserva en Contacto, con su única fuente en `src/data/business.ts`. El pie muestra «Nuestro horario» enlazado a `/contacto/#horario`.

No se han añadido perfiles sociales ficticios. Al no existir enlaces sociales confirmados en los datos del repositorio, la cuarta columna muestra el horario, cómo llegar y el lema existente.

## Implementación

- `Footer.astro`: pie compartido en todas las plantillas, enlaces y datos centralizados.
- `PageIntro.astro`: presentación compacta con imagen opcional y encabezado accesible.
- `interior.css`: estilos limitados a `body[data-page="interior"]`; no alteran la portada.
- Servicios: imagen contextual, secciones diferenciadas, listas abiertas, pasos e índice cuando el contenido lo justifica.
- Blog: anchura de lectura controlada e índice a partir de los encabezados Markdown disponibles.
- Sobre nosotros: fachada real al principio, conservando los párrafos existentes.
- Contacto, Marketing, Herramientas y páginas legales: aplicación de la jerarquía tipográfica y superficies oscuras compartidas; sin cambios en su lógica ni textos.
- Se reutilizan imágenes del repositorio. La guía SSD tenía una referencia a un archivo inexistente; se sustituye por la ilustración existente de un portátil y un texto alternativo literal.

## Elementos protegidos

Portada y sus ocho servicios destacados; cabecera horizontal; información empresarial y horarios; catálogo y contenido comercial; cuerpo de los artículos; rutas, H1, títulos SEO, descripciones, canonical, Open Graph y JSON-LD; scripts de herramientas, avisos, animaciones y parallax; dependencias y configuración de despliegue.

## Validación

Código validado: `b4b467306b49811252317138830b192bf9522b34`.
Referencia anterior: `bb73024510f1ccf24ff10896fcbb813874aa0560`.

- `npm ci` y `npm run build` ejecutados correctamente en GitHub Actions.
- 34 páginas generadas, sin cambios de rutas.
- Un H1 y un pie por página; metadatos y datos estructurados comparados con el build anterior.
- Enlace a `/contacto/#horario` en todos los pies; destino único y horario intacto.
- Sin enlaces internos o fragmentos rotos ni imágenes de contenido inexistentes.
- 136 comprobaciones de maquetación: 34 páginas a 320, 375, 768 y 1440 px, sin desbordamiento horizontal de documento.
- Los ocho destacados de Inicio conservan textos, imágenes, enlaces, orden y geometría en los cuatro tamaños.
- 20 archivos fuente protegidos contrastados byte a byte con la referencia anterior.
- `git diff --check` correcto.

La revisión visual se ha hecho sobre el HTML/CSS compilado en Chromium con recursos locales y JavaScript desactivado. No equivale a una prueba interactiva completa de las herramientas. Sus scripts no se han modificado. Las dos vistas previas del convertidor de imágenes permanecen vacías hasta seleccionar un archivo, como antes.

La comprobación adicional de GitHub Actions utilizada para descargar los builds de revisión se retira al cerrar el trabajo. Se conserva la validación habitual del repositorio y no se añaden tareas programadas ni servicios externos.

## Reversión

Los cambios se agrupan en la PR #61. Una reversión de su commit de integración restaura el diseño anterior sin modificar los datos del negocio. No se requieren migraciones ni cambios de dependencias.
