# SUBLIME ART — Starter web

Primer esqueleto estático para la página de SUBLIME ART.

## Tecnologías

- HTML5
- CSS3
- JavaScript ES Modules
- Google Fonts: Fraunces y Manrope

## Ejecutar localmente

Por usar módulos JavaScript, se recomienda abrir el proyecto mediante un servidor local.

Con VS Code puede utilizarse la extensión **Live Server**.

Alternativamente, desde la carpeta raíz:

```bash
python -m http.server 8000
```

Después visita:

```text
http://localhost:8000
```

## Pendientes

- Sustituir el logotipo temporal.
- Agregar fotografías reales.
- Completar el número de WhatsApp en `assets/js/config.js`.
- Confirmar nombres y descripciones de productos.
- Confirmar datos de contacto y redes sociales.
- Revisar textos legales y SEO antes de publicar.

## Fase 4 — ajustes de funcionamiento

- Los botones de WhatsApp ahora se controlan mediante delegación de eventos, incluidos los productos renderizados dinámicamente.
- Si el número todavía está vacío, se muestra un aviso en lugar de dejar enlaces silenciosos.
- Se añadieron comprobaciones básicas para evitar errores si faltan elementos del menú móvil.

## Nota

Las representaciones visuales actuales son placeholders. No deben publicarse como fotografías reales del negocio.

## Imágenes generativas provisionales
Se incluyeron imágenes generadas como referencia visual en `assets/img/`. Sustitúyelas por fotografías reales conservando las rutas o actualizando `assets/js/products-data.js`.


## Fase 5 — Preparación para publicación

- Se añadieron metadatos básicos para compartir la página en redes sociales.
- Se incorporó un enlace de accesibilidad para saltar directamente al contenido.
- Se agregaron dimensiones a imágenes principales para reducir saltos visuales.
- Se mejoró el aviso de configuración pendiente de WhatsApp.
- Antes de publicar, completa el número de WhatsApp, los datos de contacto y las redes sociales.
