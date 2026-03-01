---
title: Cards & Sprints
description: Tipos de cards, estados y gestión de sprints.
---

## Tipos de Cards

### Tasks (Tareas)
Elementos de trabajo con descripciones estructuradas:

- **Historia de Usuario**: Como (rol) / Quiero (objetivo) / Para (beneficio)
- **Criterios de Aceptación**: Given / When / Then (formato Gherkin)
- **Estimación**: devPoints (esfuerzo) + businessPoints (valor)
- **Prioridad**: Auto-calculada a partir de los puntos

### Bugs
Seguimiento de defectos con niveles de severidad:

| Prioridad | Descripción |
|-----------|-------------|
| APPLICATION BLOCKER | La app es inutilizable |
| DEPARTMENT BLOCKER | Flujo del departamento bloqueado |
| INDIVIDUAL BLOCKER | Un usuario bloqueado |
| USER EXPERIENCE ISSUE | Degradación de UX |
| WORKFLOW IMPROVEMENT | Mejora de proceso |
| WORKAROUND AVAILABLE ISSUE | Bug con workaround conocido |

Ciclo de vida de bugs: `Created → Assigned → Fixed → Verified → Closed`

### Epics (Épicas)
Elementos de trabajo grandes que agrupan tareas relacionadas. Toda tarea debe pertenecer a una épica.

### Proposals (Propuestas)
Ideas o solicitudes de funcionalidades. Pueden convertirse en tareas tras refinamiento y estimación.

### Sprints
Iteraciones con:

- **Fechas de inicio/fin**
- **Puntos agregados** (devPoints + businessPoints de tareas asignadas)
- **Filtrado por año** — los sprints pertenecen a un año específico

## Formato de ID de Cards

Todas las cards siguen el patrón: `{ABREVIATURA_PROYECTO}-{TIPO}-{NÚMERO}`

- Tareas: `PLN-TSK-0042`
- Bugs: `PLN-BUG-0015`
- Épicas: `PLN-PCS-0003`
- Sprints: `PLN-SPR-0001`

## Validación

Las tareas requieren un **validator** (stakeholder) que revisa el trabajo:

1. El desarrollador completa el trabajo → establece estado "To Validate"
2. El validator revisa → establece estado "Done" o "Done&Validated"
3. Si hay problemas → el validator establece estado "Reopened"

El sistema garantiza que los desarrolladores no pueden validar su propio trabajo.
