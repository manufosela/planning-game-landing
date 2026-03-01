---
title: Servidor MCP
description: Cómo usar el servidor MCP de Planning Game con agentes IA.
---

Planning Game incluye un servidor MCP (Model Context Protocol) que expone más de 25 herramientas para integración con agentes IA.

## Qué es MCP?

MCP es un protocolo que permite a los agentes IA (Claude, Codex, etc.) interactuar con herramientas externas. El servidor MCP de Planning Game permite a los agentes crear tareas, actualizar estados, gestionar sprints y más, de forma programática.

## Instalación

### Con Claude Code

```bash
claude mcp add planning-game \
  -e GOOGLE_APPLICATION_CREDENTIALS=/ruta/a/serviceAccountKey.json \
  -- node /ruta/a/planning-game-xp/mcp/index.js
```

### Soporte Multi-Instancia

Puedes conectar múltiples instancias de Planning Game (diferentes proyectos Firebase):

```bash
# Instancia de producción
claude mcp add planning-game-pro \
  -e MCP_INSTANCE_DIR=/ruta/a/instancias/geniova \
  -- node /ruta/a/planning-game-xp/mcp/index.js

# Instancia personal
claude mcp add planning-game-personal \
  -e MCP_INSTANCE_DIR=/ruta/a/instancias/personal \
  -- node /ruta/a/planning-game-xp/mcp/index.js
```

## Configuración de Usuario

Antes de usar las herramientas MCP, configura tu identidad:

```
setup_mcp_user({ email: "tu@email.com" })
```

Esto crea un archivo `.mcp-user.json` que vincula tu identidad con un ID de desarrollador.

## Resolución de Proyectos

El servidor MCP soporta resolución fuzzy de projectId. Puedes usar:

- Clave exacta: `"PlanningGame"`
- Sin distinción de mayúsculas: `"planninggame"`
- Nombre del proyecto: `"Planning Game"`
- Abreviatura: `"PLN"`
- URL del repositorio: `"https://github.com/manufosela/planning-game-xp"`

Si no se encuentra coincidencia, el servidor devuelve la lista de proyectos disponibles.

## Enforcement del Flujo de Trabajo

El servidor MCP aplica las mismas reglas que la UI:

- Campos requeridos para transiciones de estado
- Límites WIP (una tarea "In Progress" por desarrollador)
- Los validators no pueden ser saltados
- Seguimiento de pipeline (commits, info de PR) requerido para "To Validate"
