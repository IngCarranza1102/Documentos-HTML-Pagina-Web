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

Todas las imágenes de proyectos se encuentran en:

images/proyectos/

Una carpeta por proyecto.

Cada proyecto contiene:

portada.*

01.*

02.*

03.*

...

No utilizar imágenes Base64 para proyectos. El formato de cada imagen (JPG, PNG, etc.)
debe elegirse según el contenido y si requiere transparencia real, no de forma arbitraria.

Estado de optimización: Finalizada. Las imágenes de images/proyectos/ están actualmente
en formatos web optimizados; no quedan casos de alto impacto pendientes.

Logos de clientes (trust bar):

images/marca/clientes/

Ahí se encuentran los logos externos utilizados por la sección de confianza ("Han
confiado en Corporativo 1102" / "Empresas que confían en nosotros"). Anteriormente
estaban embebidos como Base64 directamente en index.html y nosotros.html; se eliminó
ese uso y ahora son archivos externos en esta ruta.

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
Finalizada.

Nota: la página es funcional (datos de contacto, formulario, mapa embebido y preguntas frecuentes) y la accesibilidad del formulario y del mapa ya quedó corregida (for/id en los campos, title en el iframe). La página de confirmación personalizada se pospone como mejora opcional, ya que requiere el plan Personal de pago de Formspree (Custom Redirect) — ver "Nuevas funcionalidades opcionales".

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

Ya implementado en index.html y contacto.html:

- Datos estructurados JSON-LD (GeneralContractor), con el mismo @id (https://corporativo1102.mx/#organization) en ambas páginas.

Actividad externa (fuera del repositorio):

- Google Search Console verificado para corporativo1102.mx.
- sitemap.xml enviado desde Search Console.

Pendiente: FAQPage (prioridad baja) y demás optimizaciones avanzadas — ver "Pendientes posteriores al SEO básico".

---

Etapa 8

Consolidación de CSS compartido.

Archivo:

css/styles.css

Estado:
Finalizada.

Nota: se extrajeron a css/styles.css únicamente los estilos globales universales,
idénticos en las 6 páginas principales:

- :root (variables)
- reset/base (*, body, h1-h3/.display, a, .wrap)
- header/nav (incluye su comportamiento responsive)
- footer
- WhatsApp flotante

Las 6 páginas principales (index.html, nosotros.html, servicios.html, proyectos.html,
proyecto.html, contacto.html) utilizan ahora:

<link rel="stylesheet" href="css/styles.css">

El CSS específico de cada página permanece inline en su propio <style>. La migración
se realizó página por página, con diagnóstico, autorización y validación visual
individual antes de continuar con la siguiente.

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

SEO avanzado / JSON-LD:

- Datos estructurados Organization/LocalBusiness: resuelto mediante GeneralContractor en index.html y contacto.html.
- Datos estructurados FAQPage en contacto.html: pendiente, prioridad baja (sin beneficio visible esperado en SERP para este tipo de sitio).
- Logo dedicado para Schema (propiedad logo): pendiente como mejora futura, no bloqueante.

Rendimiento:

Completado:

- Optimización de imágenes de proyectos (images/proyectos/).
- Eliminación de Base64 embebido (index.html, nosotros.html).
- Consolidación de CSS compartido (ver Etapa 8).
- Preconnect a Google Fonts: las 6 páginas principales (index.html, nosotros.html,
  servicios.html, proyectos.html, proyecto.html, contacto.html) cargan ahora
  <link rel="preconnect" href="https://fonts.googleapis.com"> seguido de
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>, antes del
  stylesheet de Google Fonts. Poppins y Work Sans continúan cargando correctamente.
  Implementación validada técnicamente (renderizado, consola sin errores, carga
  confirmada de fonts.googleapis.com y fonts.gstatic.com, tipografías aplicadas).

Revisión responsive final:

Completada. Las 6 páginas principales fueron revisadas: escritorio validado mediante
pruebas locales, y móvil verificado manualmente a 390px. Sin pendientes de diseño
responsive reportados.

Nuevas funcionalidades opcionales:

- Página de confirmación propia tras el envío del formulario de contacto (requiere Custom Redirect, disponible en el plan Personal de pago de Formspree; por ahora se mantiene el plan gratuito y la confirmación estándar).
- A definir según prioridad del usuario.

Nota: Google Business Profile no se ha confirmado como realizado — no se documenta como completado hasta confirmación explícita.
