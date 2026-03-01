---
title: Introducción
description: Qué es Planning Game XP y por qué usarlo.
---

Planning Game XP es una aplicación de gestión de proyectos ágil basada en prácticas de **eXtreme Programming (XP)**. Gestiona el ciclo de vida completo del desarrollo de software — desde la planificación de sprints hasta el seguimiento de despliegues.

## Conceptos Clave

### Cards
Todo en Planning Game es una **card**. Hay seis tipos:

- **Tasks** — Tareas con historias de usuario (Como/Quiero/Para) y criterios de aceptación (Given/When/Then)
- **Bugs** — Seguimiento de defectos con niveles de prioridad y análisis de causa raíz
- **Epics** — Elementos de trabajo grandes que agrupan tareas relacionadas
- **Proposals** — Ideas que pueden convertirse en tareas tras el refinamiento
- **QA** — Elementos de calidad
- **Sprints** — Iteraciones con fechas de inicio/fin y seguimiento de puntos

### Transiciones de Estado
Las cards siguen flujos de estado estrictos. Las tareas avanzan así:

```
To Do → In Progress → To Validate → Done → Done&Validated
```

Cada transición requiere campos específicos (developer, validator, fechas, commits) y es verificada por el sistema.

### Estimación Planning Game
La prioridad de las tareas se calcula automáticamente:

```
prioridad = (businessPoints / devPoints) × 100
```

Tanto `devPoints` (esfuerzo técnico, 1-5) como `businessPoints` (valor de negocio, 1-5) se establecen durante la planificación del sprint.

## Arquitectura

Planning Game XP está construido con:

- **Frontend**: [Astro](https://astro.build) + componentes web [Lit](https://lit.dev)
- **Backend**: [Firebase](https://firebase.google.com) (Realtime Database, Firestore, Auth, Cloud Functions, Storage)
- **Servidor MCP**: Integración Node.js para flujos de trabajo con agentes IA
- **Testing**: Vitest (unitarios) + Playwright (E2E)

## Para quién es?

- Equipos de desarrollo que practican XP o Scrum
- Equipos que usan agentes IA (Claude, Codex, etc.) para desarrollo
- Organizaciones que necesitan enforcement estricto de flujos de trabajo con trazabilidad
