# Estado del proyecto — Corporativo 1102

## Checkpoint
- Rama: main
- Último commit publicado: d314ce8
- Estado Git: main = origin/main
- Trabajo local pendiente: nosotros.html modificado, no staged

## Etapa activa
Corrección de ubicación pública y horario para mantener consistencia con Google Business Profile.

## Decisiones vigentes
- Corporativo 1102 funciona públicamente como empresa de área de servicio.
- No publicar Obregón 1102 como dirección actual.
- No publicar ninguna dirección residencial sustituta.
- Ubicación pública general: Nogales, Sonora.
- Áreas de servicio: Nogales, Ímuris, Magdalena de Kino y Santa Ana, Sonora.
- Horario: lunes a sábado 08:00–19:00; domingo cerrado.
- El mapa de contacto se conservará centrado genéricamente en Nogales, Sonora.
- JSON-LD conservará PostalAddress solo con localidad/región/país, sin streetAddress ni postalCode.
- areaServed deberá reflejar las cuatro áreas confirmadas.
- @id existente del schema no se modifica.

## Trabajo realizado en la etapa
- nosotros.html: footer actualizado de "Obregón 1102 / Nogales, Sonora" a "Nogales, Sonora".
- Validación de escritorio: OK.
- Validación móvil real no fue posible por limitación de la herramienta; revisión del CSS responsive no detectó riesgo derivado de este cambio.
- Cambio todavía sin staging ni commit.

## Próxima acción exacta
Revisar el diff pendiente de nosotros.html y continuar el flujo autorizado desde ese punto. No modificar otro archivo sin autorización.

## No volver a investigar
- La decisión de retirar Obregón 1102 ya está confirmada.
- La configuración de Google Business Profile ya fue auditada y documentada.
- No repetir auditoría global del sitio para continuar esta etapa.
- Consultar ARQUITECTURA_DEL_PROYECTO.md solo si una tarea requiere información estructural no contenida aquí.
