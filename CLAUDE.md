# CLAUDE.md — Corporativo 1102 (Reglas permanentes del proyecto)

## Contexto del proyecto

Sitio web oficial de **Corporativo 1102** (Nogales, Sonora).

Servicios reales de la empresa: Arquitectura, Ingeniería, Construcción, Remodelaciones, Consultoría.

Objetivo: sitio web moderno, rápido, profesional, escalable y corporativo. Debe transmitir
profesionalismo, confianza, calidad, organización y experiencia. **No debe sentirse como un
portafolio personal.**

Para detalles técnicos de arquitectura (páginas, fuente de datos de proyectos, estructura de
imágenes, etapas de desarrollo), ver `ARQUITECTURA_DEL_PROYECTO.md` y el código real —
no dupliques esa información aquí.

## Fuente oficial del código

- GitHub, rama `main`, es la única fuente oficial.
- Antes de cualquier tarea: revisar `git status`, rama actual y último commit.
- Nunca asumir el estado del código por conversaciones anteriores — trabajar siempre sobre
  el código realmente existente en este momento.
- Si `git status` no está limpio al iniciar una tarea, detenerse y reportarlo antes de continuar.
- Antes de ejecutar `git pull`, confirmar que `git status` esté limpio.
- Si existen cambios locales, archivos sin seguimiento o cualquier estado pendiente, **NO**
  ejecutar `git pull`; detenerse y reportarlo al usuario.

## Flujo de trabajo

```
GitHub main → repositorio local → git pull → análisis → propuesta →
autorización del usuario → modificación local → git diff → pruebas locales →
autorización explícita → commit → push → FileZilla → GoDaddy
```

GoDaddy nunca se modifica directamente como fuente de código; solo recibe despliegues desde
el repositorio ya autorizado.

## Reglas de modificación

- Un archivo a la vez, un paso del flujo a la vez. No pasar al siguiente paso sin autorización,
  aunque la tarea completa involucre varios archivos.
- Cambios mínimos y quirúrgicos; no reescribir un archivo completo si un cambio puntual basta.
- No tocar archivos fuera del alcance acordado para la tarea actual.
- Reutilizar componentes, estilos y patrones existentes; evitar código duplicado.
- Mantener el comportamiento responsive y la identidad visual existente.
- Priorizar estabilidad y mantenimiento sobre rediseños no solicitados.
- Si hay riesgo de romper un archivo grande, detenerse y proponer una estrategia segura
  antes de editar.

## Autorizaciones obligatorias

**Antes de escribir código:**
1. Revisar el archivo real.
2. Explicar el diagnóstico.
3. Explicar el plan.
4. Mostrar el diff propuesto cuando sea posible.
5. Esperar autorización explícita del usuario.

**Después de modificar:**
1. Mostrar `git diff`.
2. Resumir exactamente qué cambió.
3. Confirmar qué archivos fueron afectados.
4. Esperar autorización explícita antes del commit.

**Nunca sin autorización explícita:** hacer commit, hacer push, crear ramas, hacer merge,
eliminar archivos, renombrar archivos, instalar dependencias, ejecutar comandos destructivos,
o desplegar a producción.

## Contenido empresarial

No inventar: información de la empresa, clientes, estadísticas, certificaciones, experiencia,
proyectos ni servicios. Si falta información empresarial necesaria, **preguntar** antes de
escribirla.

## Prioridades del proyecto (en este orden)

1. Estabilidad
2. Facilidad de mantenimiento
3. Rendimiento
4. SEO
5. Diseño

## Validación tras cambios relevantes

- Validar en escritorio y en móvil.
- Comprobar enlaces/rutas afectados.
- Comprobar que no se rompió JavaScript relacionado.
- Comprobar que no se modificaron archivos ajenos al alcance.

## Commits

- Revisar los commits recientes antes de proponer un mensaje nuevo.
- Mensajes claros, cortos y coherentes con la convención existente.
- Nunca hacer commit automáticamente.

## Seguridad Git

- No usar `git reset --hard`.
- No usar `git clean -fd`.
- No usar force push.
- No sobrescribir cambios locales existentes.

## Economía de contexto y reanudación

- Aplicar siempre el principio de lectura mínima suficiente: para una tarea puntual, leer
  únicamente los archivos o fragmentos necesarios.
- Si basta con grep, una búsqueda o una lectura parcial, no leer un archivo completo.
- No repetir auditorías o investigaciones ya registradas en `ESTADO_PROYECTO.md`, salvo que
  Git o el código actual indiquen que pueden estar desactualizadas.
- `ESTADO_PROYECTO.md` es el checkpoint operativo para reanudar sesiones.

Al iniciar una sesión nueva:
1. Leer `CLAUDE.md`.
2. Leer `ESTADO_PROYECTO.md` si existe.
3. Verificar el estado real con Git.
4. Si Git contradice el checkpoint, prevalece Git y debe reportarse la discrepancia.
5. Consultar `ARQUITECTURA_DEL_PROYECTO.md` únicamente si la tarea requiere información
   estructural que no esté en el checkpoint.

- No auditar el repositorio completo como rutina de inicio.
- No releer `ARQUITECTURA_DEL_PROYECTO.md` completo en cada sesión.
- No repetir explicaciones extensas ya establecidas en la misma sesión.
- La profundidad de validación debe ser proporcional al riesgo: cambios triviales de texto
  requieren validación mínima; cambios visuales/responsive requieren la validación visual
  correspondiente; cambios funcionales o estructurales requieren validación más profunda.
- No instalar herramientas o dependencias únicamente para una validación trivial si existe
  un método seguro más simple.
- Cuando la tarea solicitada termine, detenerse; no ampliar el alcance automáticamente.
- El ahorro de contexto **nunca** elimina las reglas existentes de autorización, seguridad
  Git, cambios mínimos, diff antes del commit ni aprobación antes de commit/push.

### Checkpoint (ESTADO_PROYECTO.md)

- Debe mantenerse compacto: objetivo habitual 20–35 líneas, máximo 50.
- Debe representar el estado ACTUAL, no acumular historial.
- Actualizarlo solo cuando exista una razón operativa: cierre de una etapa, decisión
  importante que afecte trabajo futuro, sesión larga que termina con trabajo pendiente,
  cambio de área importante del proyecto, o trabajo sin commit que deba recuperarse después.
- No actualizarlo después de cada microcambio.

## Rol de Claude Code en este proyecto

Claude Code actúa como **implementador técnico controlado**, no como agente autónomo con
permiso para decidir o desplegar cambios por su cuenta.

Si una instrucción del usuario en la conversación actual contradice una regla de este
archivo:
- Si la acción implicada es potencialmente destructiva o irreversible (borrar, sobrescribir,
  commit/push, force push, eliminar/renombrar archivos): **detenerse y pedir aclaración
  explícita** antes de actuar, incluso si el usuario ya dio la instrucción.
- Si la contradicción es menor y reversible (por ejemplo, pide editar dos archivos en el
  mismo paso): señalarlo explícitamente y confirmar que el usuario quiere anular la regla
  para ese caso puntual, antes de proceder.

`CLAUDE.md` contiene las reglas permanentes de operación del proyecto. Nunca modificar,
sobrescribir, eliminar o relajar estas reglas sin autorización explícita del usuario y
revisión previa del diff propuesto.
