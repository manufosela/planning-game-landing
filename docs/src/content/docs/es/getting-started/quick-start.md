---
title: Inicio Rápido
description: Crea tu primer sprint y tarea en 5 minutos.
---

Una vez que tengas Planning Game funcionando localmente, así es cómo empezar.

## 1. Crear un Proyecto

Navega a **Admin** en el sidebar. Haz clic en **Nuevo Proyecto** y rellena:

- **Nombre**: El nombre de tu proyecto
- **Abreviatura**: Código corto para IDs de cards (ej: "MYP")
- **Sistema de Puntuación**: Elige "1-5" o "Fibonacci"

## 2. Crear un Sprint

Ve a **Vista Sprint** y crea un nuevo sprint:

- **Título**: ej: "Sprint 1 - Marzo 2026"
- **Fecha Inicio**: Inicio del sprint
- **Fecha Fin**: Fin del sprint

## 3. Crear una Épica

Toda tarea necesita una épica. Crea una desde la pestaña **Épicas**:

- **Título**: ej: "Autenticación de Usuarios"
- **Descripción**: Qué cubre esta épica

## 4. Crear una Tarea

Cambia a la pestaña **Tareas** y crea tu primera tarea:

- **Título**: Título descriptivo
- **Descripción**: Formato historia de usuario (Como/Quiero/Para)
- **Épica**: Selecciona la épica que creaste
- **Sprint**: Selecciona el sprint
- **Criterios de Aceptación**: Formato Given/When/Then

## 5. Estimar y Priorizar

Durante la planificación del sprint, establece:

- **devPoints**: Esfuerzo técnico (1 = trivial, 5 = muy complejo)
- **businessPoints**: Valor de negocio (1 = nice to have, 5 = crítico)

La prioridad se calcula automáticamente: `(businessPoints / devPoints) × 100`

## 6. Trabajar en la Tarea

1. Auto-asígnate la tarea
2. Cambia el estado a **In Progress** — esto reserva tu slot WIP
3. Crea una rama: `git checkout -b feat/MYP-TSK-0001-descripcion`
4. Implementa, commitea, push, crea PR
5. Cambia el estado a **To Validate** con los commits e info del PR

## Uso con Agentes IA

Si tienes el servidor MCP configurado, los agentes IA pueden hacer todo esto programáticamente:

```
# Pide a Claude que cree una tarea
"Crea una tarea en MiProyecto para añadir login de usuarios"

# Pide a Claude que trabaje en ella
"Trabaja en MYP-TSK-0001"
```

Consulta la [guía del Servidor MCP](/docs/es/guides/mcp-server/) para más detalles.
