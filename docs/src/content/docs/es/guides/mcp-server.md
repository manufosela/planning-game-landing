---
title: Servidor MCP
description: Cómo usar el servidor MCP de Planning Game con agentes IA.
---

Planning Game incluye un servidor MCP (Model Context Protocol) que expone más de 45 herramientas para integración con agentes IA.

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
- Inmutabilidad de fechas de sprint cuando hay tareas In Progress o To Validate
- Tracking de ciclos de trabajo (tiempos de inicio/fin, duración acumulada)

## Asistente de Configuración

Ejecuta el asistente interactivo para configurar una nueva instancia MCP:

```bash
node mcp/cli.js init
```

El asistente te guía a través de:
1. Verificación de prerequisitos (Node.js 18+, Git)
2. Nombre y descripción de la instancia
3. Credenciales Firebase (serviceAccountKey.json)
4. URL de base de datos y test de conectividad
5. Identidad del usuario (developer ID)
6. Generación del archivo de configuración (pg.config.yml)
7. Sincronización de guidelines desde Firebase

## Gestión de Guidelines

El servidor MCP soporta guidelines centralizados almacenados en Firebase:

- **Auto-versionado**: Cada actualización de contenido incrementa la versión y guarda historial
- **Sincronización local**: `sync_guidelines` descarga las guidelines como archivos locales
- **Historial de versiones**: Visualiza y restaura versiones anteriores
- **Auto-check al arrancar**: Avisa si las guidelines locales están desactualizadas
- **UI de administración**: Gestiona guidelines desde la página de administración del proyecto
- **Script de migración**: Importa archivos CLAUDE.md existentes a guidelines de Firebase

## Metadatos de Instancia

Cada respuesta MCP incluye metadatos `_instance` con el Firebase project ID y el nombre de la instancia. Esto ayuda a identificar qué instancia responde cuando hay múltiples instancias conectadas.
