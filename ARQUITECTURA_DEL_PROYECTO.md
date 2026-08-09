# Corporativo 1102
## Arquitectura del Proyecto

## Objetivo

Desarrollar un sitio web moderno, profesional, rápido, escalable y fácil de mantener para Corporativo 1102.

---

# Flujo de trabajo

Todo cambio sigue este proceso:

Claude
↓

GitHub

↓

VS Code

↓

Commit

↓

Sync Changes

↓

Repositorio actualizado

Nunca trabajar directamente sobre versiones antiguas.

---

# Fuente oficial

Código:
Repositorio GitHub.

Contenido:
Documentación del Proyecto.

Nunca asumir archivos anteriores.

Siempre revisar el repositorio actual.

---

# Arquitectura

El proyecto está dividido por páginas.

index.html
Portada.

proyectos.html
Listado dinámico de proyectos.

proyecto.html
Página individual de cada proyecto.

servicios.html
Servicios.

nosotros.html
Empresa.

contacto.html
Contacto.

---

# Fuente única de proyectos

Toda la información de proyectos proviene de:

js/proyectos-data.js

No duplicar información en otros archivos.

---

# Imágenes

Todas las imágenes se encuentran en:

images/proyectos/

Una carpeta por proyecto.

Cada proyecto contiene:

portada.*

01.*

02.*

03.*

...

No utilizar imágenes Base64 para proyectos.

---

# Reglas de desarrollo

Modificar únicamente los archivos necesarios.

Conservar diseño.

Conservar estructura.

Conservar identidad visual.

Hacer cambios mínimos.

No reescribir archivos completos si no es necesario.

---

# Git

Cada etapa finaliza con:

Commit

↓

Sync Changes

↓

GitHub

---

# Etapas

Etapa 1
Preparación de imágenes.

Estado:
Finalizada.

---

Etapa 2

Sistema dinámico de proyectos.

Estado:
Finalizada.

Archivos principales:

proyectos.html

proyecto.html

js/proyectos-data.js

Mejoras posteriores:

- Lightbox de galería agregado en proyecto.html.

---

Etapa 3

Portada.

Archivo:

index.html

Estado:
Finalizada.

Nota: la portada dinámica quedó completada, incluyendo SEO básico (meta description, canonical, Open Graph/Twitter Card, favicon).

---

Etapa 4

Servicios.

Archivo:

servicios.html

Estado:
Finalizada.

Nota: se ampliaron los servicios listados (7 servicios nuevos agregados).

---

Etapa 5

Nosotros.

Archivo:

nosotros.html

Estado:
Finalizada.

Nota: se realizó un rediseño corporativo de la sección Nosotros, incluyendo la estructura Dirección de Arquitectura / Dirección de Construcción, además de ajustes responsive.

---

Etapa 6

Contacto.

Archivo:

contacto.html

Estado:
Parcialmente completada.

Nota: la página ya es funcional (datos de contacto, formulario, mapa embebido y preguntas frecuentes). Quedan pendientes mejoras puntuales de accesibilidad y el cierre del formulario — ver "Pendientes posteriores al SEO básico".

---

Etapa 7

SEO y optimización.

Todo el sitio.

Estado:
Parcialmente completada — SEO básico completado.

Ya implementado en las 6 páginas principales:

- Title y meta description optimizados.
- Canonical (dinámico en proyecto.html).
- Open Graph y Twitter Card.
- sitemap.xml.
- robots.txt.
- Favicon.

Actividad externa (fuera del repositorio):

- Google Search Console verificado para corporativo1102.mx.
- sitemap.xml enviado desde Search Console.

Pendiente: JSON-LD y otras optimizaciones avanzadas — ver "Pendientes posteriores al SEO básico".

---

# Filosofía

Mantener siempre un sitio:

- rápido
- escalable
- limpio
- profesional
- fácil de mantener
- preparado para crecer durante años

---

# Pendientes posteriores al SEO básico

Accesibilidad y cierre de Contacto:

- Vincular labels e inputs del formulario (for/id).
- Agregar title al iframe del mapa.
- Página de confirmación propia tras el envío del formulario.

SEO avanzado / JSON-LD:

- Datos estructurados Organization/LocalBusiness.
- Datos estructurados FAQPage en contacto.html.

Rendimiento:

- Auditoría de imágenes, fuentes y carga en todo el sitio.

Revisión responsive final:

- Confirmar que index.html, servicios.html, proyectos.html y proyecto.html no tengan pendientes de diseño responsive no reportados.

Nuevas funcionalidades opcionales:

- A definir según prioridad del usuario.

Nota: Google Business Profile no se ha confirmado como realizado — no se documenta como completado hasta confirmación explícita.
