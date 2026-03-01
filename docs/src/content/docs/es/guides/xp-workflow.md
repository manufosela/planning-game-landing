---
title: Flujo de Trabajo XP
description: Cómo Planning Game aplica las prácticas de eXtreme Programming.
---

Planning Game XP está construido sobre los principios de eXtreme Programming. Así es como se aplica el flujo de trabajo.

## Planificación del Sprint

1. **Crear Sprint** con fechas de inicio/fin
2. **Listar backlog** — todas las tareas en estado "To Do"
3. **Estimar** cada tarea con devPoints y businessPoints
4. **Priorizar** — las tareas se ordenan automáticamente por `(businessPoints / devPoints) × 100`
5. **Asignar al sprint** — mover tareas al sprint activo

## Ciclo de Vida de una Tarea

```
To Do → In Progress → To Validate → Done → Done&Validated
```

### To Do → In Progress
Campos requeridos:
- `developer` — quién trabaja en ella
- `validator` — quién la revisará
- `sprint` — en qué sprint
- `devPoints` y `businessPoints` — estimación
- `startDate` — se establece automáticamente

**Límite WIP**: Cada desarrollador puede tener solo UNA tarea "In Progress" en TODOS los proyectos.

### In Progress → To Validate
Campos requeridos:
- `endDate` — cuándo se terminó el trabajo
- `commits` — array de `{hash, message, date, author}`
- `pipelineStatus.prCreated` — URL y número del PR

### To Validate → Done
Solo el **validator** asignado puede aprobar. El servidor MCP y las Cloud Functions lo aplican — los desarrolladores no pueden marcar su propio trabajo como completado.

## Estrategia de Ramas

Cada tarea o bug tiene su propia rama:

- Tareas: `feat/{CARD-ID}-descripcion-corta`
- Bugs: `fix/{CARD-ID}-descripcion-corta`

Los commits directos a `main` no están permitidos. Todos los cambios van a través de Pull Requests.

## Planes de Implementación

Para tareas con `devPoints >= 3`, se requiere un plan de implementación antes de codificar:

- **approach** — Estrategia técnica y justificación
- **steps** — Cada paso = 1 commit potencial
- **dataModelChanges** — Cambios en el modelo de datos
- **apiChanges** — Modificaciones de API/endpoints
- **risks** — Riesgos identificados y mitigaciones
- **outOfScope** — Qué se excluye explícitamente

El plan debe ser validado por el usuario antes de empezar la implementación.

## Desarrollo Test-First

Planning Game aplica TDD:

1. Escribir/verificar tests ANTES de hacer cambios
2. Ejecutar tests después de CADA cambio
3. Arreglar tests que fallen antes de continuar
4. Cobertura mínima: servicios 80%, utilidades 90%, componentes 70%
