---
title: FAQ
description: Preguntas frecuentes sobre Planning Game XP.
---

## General

### Qué es Planning Game XP?
Una aplicación de gestión de proyectos ágil siguiendo prácticas de eXtreme Programming, con servidor MCP integrado para agentes IA.

### Es open source?
El repositorio está en [github.com/manufosela/planning-game-xp](https://github.com/manufosela/planning-game-xp).

## Servidor MCP

### Necesito el servidor MCP?
No. La aplicación web funciona de forma independiente. El servidor MCP es opcional y permite que los agentes IA interactúen con Planning Game programáticamente.

### Qué agentes IA son compatibles?
Cualquier agente compatible con MCP: Claude (via Claude Code), Codex, y otros que soporten el protocolo MCP.

## Flujo de Trabajo

### Por qué no puedo poner una tarea como "Done"?
Solo el validator asignado puede marcar tareas como "Done" o "Done&Validated". Como desarrollador, establece el estado a "To Validate" cuando tu trabajo esté completo.

### Por qué la prioridad se calcula automáticamente?
Planning Game usa la fórmula del planning game de XP: `prioridad = (businessPoints / devPoints) × 100`. Esto asegura que las tareas con alto valor de negocio y bajo esfuerzo se priorizan.

### Cuál es el límite WIP?
Cada desarrollador puede tener solo UNA tarea "In Progress" en todos los proyectos. Esto fuerza el enfoque y reduce el cambio de contexto.

### Los agentes IA pueden saltarse las reglas de validación?
No. El servidor MCP aplica las mismas reglas que la UI. Los agentes IA no pueden poner tareas como "Done", saltarse campos requeridos, ni eludir límites WIP.
