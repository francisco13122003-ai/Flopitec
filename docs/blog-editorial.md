# Gestión editorial del blog

Los artículos del blog viven en `src/content/blog/` como archivos Markdown. El nombre del archivo define el slug público: `mi-guia.md` genera `/blog/mi-guia/` si el artículo es público.

## Frontmatter

Campos obligatorios actuales: `title`, `description`, `excerpt`, `status`, `draft`, `category`, `author`, `featuredImage` e `imageAlt`. Campos opcionales: `publishAt`, `updatedAt`, `relatedService`, `relatedArticles` y `reviewedBy`.

## Estados

- `draft`: trabajo interno. Debe ir con `draft: true` y no se publica.
- `scheduled`: preparado para una fecha futura. Requiere `publishAt`.
- `published`: visible si `draft: false`.
- `archived`: retirado de la web aunque permanezca en el repositorio.

## Borradores y programación

Para crear un borrador, añade el Markdown con `status: draft` y `draft: true`. Para programar un artículo, usa `status: scheduled`, `draft: false` y `publishAt` como fecha ISO completa con offset explícito de Europe/Madrid, por ejemplo `2026-09-07T09:00:00+02:00` o `2026-12-07T09:00:00+01:00`.

Un artículo programado necesita un nuevo build cuando llegue su fecha. La automatización del build se añadirá en una PR posterior. Si el repositorio es público, los borradores se pueden ver en GitHub aunque no se publiquen en la web.
