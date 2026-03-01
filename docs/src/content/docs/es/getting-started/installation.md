---
title: Instalación
description: Cómo configurar Planning Game XP para desarrollo local.
---

## Requisitos Previos

- **Node.js** 18+ (LTS recomendado)
- **npm** 9+
- **Firebase CLI**: `npm install -g firebase-tools`
- **Git**

## Clonar el Repositorio

```bash
git clone git@github.com:manufosela/planning-game-xp.git
cd planning-game-xp
npm install
```

## Configuración del Entorno

Planning Game usa archivos de entorno para diferentes targets de despliegue:

| Archivo | Propósito |
|---------|-----------|
| `.env.dev` | Desarrollo local (emuladores) |
| `.env.pre` | Pre-producción |
| `.env.pro` | Producción |

Contacta al administrador del proyecto para obtener los archivos de entorno.

## Iniciar Desarrollo

Abre dos terminales:

**Terminal 1 — Emuladores Firebase:**
```bash
npm run emulator
```

Esto inicia:
- Firestore en el puerto `8080`
- Realtime Database en el puerto `9000` (con datos de demo)
- Storage en el puerto `9199`
- UI de Emuladores en el puerto `4000`

**Terminal 2 — Servidor de Desarrollo:**
```bash
npm run dev
```

La aplicación está disponible en `http://localhost:4321`.

## Configuración del Servidor MCP

Para usar Planning Game con agentes IA via MCP:

```bash
claude mcp add planning-game -e GOOGLE_APPLICATION_CREDENTIALS=/ruta/a/serviceAccountKey.json -- node /ruta/a/planning-game-xp/mcp/index.js
```

Consulta la [guía del Servidor MCP](/docs/es/guides/mcp-server/) para configuración detallada.

## Verificar Instalación

1. Abre `http://localhost:4000` — La UI del Emulador debe mostrar datos cargados
2. Abre `http://localhost:4321` — Planning Game debe mostrarse con una barra roja: "USANDO EMULADORES LOCALES"
3. Ejecuta tests: `npm test` — Todos los tests deben pasar
