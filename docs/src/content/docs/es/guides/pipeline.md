---
title: Seguimiento de Pipeline
description: Rastrea cards desde el commit hasta el despliegue.
---

Planning Game rastrea cada card a través del pipeline de entrega con badges visuales.

## Eventos del Pipeline

| Evento | Cuándo | Campos Requeridos |
|--------|--------|-------------------|
| **Committed** | Después del git commit | `date`, `commitHash`, `branch` |
| **PR Created** | Después de crear PR | `date`, `prUrl`, `prNumber` |
| **Merged** | Después de mergear PR | `date`, `mergedBy` |
| **Deployed** | Después del despliegue | `date`, `environment` |

## Badges Visuales

Las cards muestran el progreso del pipeline como badges de colores:

- **C** (Committed) — El código ha sido commiteado
- **PR** (Pull Request) — Se ha creado un PR
- **M** (Merged) — El PR se ha mergeado a main
- **D** (Deployed) — Los cambios están en producción

## Enforcement

El servidor MCP requiere `pipelineStatus.prCreated` (con `prUrl` y `prNumber`) para transicionar:
- Tareas a "To Validate"
- Bugs a "Fixed"

Esto asegura que cada card tiene un PR trazable antes de poder ser revisada.

## Nombrado de Ramas

Las ramas siguen una convención estricta:

```
feat/{CARD-ID}-descripcion-corta   # Para tareas
fix/{CARD-ID}-descripcion-corta    # Para bugs
```

## Seguimiento de Uso de IA

Cuando agentes IA (BecarIA) trabajan en tareas, se registra el uso:

```json
{
  "sessionId": "uuid",
  "model": "claude-opus-4-6",
  "durationMinutes": 30,
  "action": "implementation"
}
```

Estos datos ayudan a medir la productividad y coste por tarea de la IA.
