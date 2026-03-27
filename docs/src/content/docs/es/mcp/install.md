---
title: Instalar Servidor MCP
description: Instala el servidor MCP de Planning Game en 60 segundos. Sin clonar repositorios.
---

El servidor MCP de Planning Game esta disponible como paquete npm independiente. Puedes conectar cualquier agente de IA (Claude Code, Codex, etc.) a tu instancia de Planning Game sin clonar el repositorio.

## Requisitos Previos

- **Node.js 20+** (LTS recomendado)
- Un **proyecto Firebase** con Realtime Database habilitado
- Un archivo **serviceAccountKey.json** de ese proyecto Firebase
  - Firebase Console > Project Settings > Service Accounts > Generate New Private Key

## Metodo 1: Instalacion Global

```bash
npm install -g planning-game-mcp
```

Esto hace que el comando `planning-game-mcp` este disponible globalmente. Puedes verificarlo con:

```bash
planning-game-mcp --version
```

## Metodo 2: npx (Sin Instalar)

Ejecuta directamente sin instalar:

```bash
npx planning-game-mcp init
```

Descarga la ultima version al vuelo. Ideal para configuracion inicial o para probarlo.

## Ejecutar el Asistente de Configuracion

```bash
planning-game-mcp init
```

El asistente te guia en 7 pasos:

### Paso 1 -- Verificacion de Requisitos

Valida que Node.js 18+ y Git estan disponibles en tu sistema.

### Paso 2 -- Nombre de Instancia

Elige un nombre para esta instancia MCP (ej: `equipo-alpha`, `personal`). Solo letras, numeros, guiones y guiones bajos. Este nombre se convierte en el identificador del servidor: `planning-game-<nombre>`.

### Paso 3 -- Credenciales de Firebase

Indica la ruta a tu archivo `serviceAccountKey.json`. El asistente valida la estructura JSON y extrae el `project_id` automaticamente.

:::tip
Coloca el archivo de credenciales en un directorio dedicado para la instancia. Esto mantiene las credenciales aisladas y facilita las configuraciones [multi-instancia](/docs/es/mcp/multi-instance/).
:::

### Paso 4 -- Base de Datos Firebase

El asistente detecta automaticamente la URL de la base de datos a partir del project ID. Luego prueba la conectividad consultando `/projects` en tu Realtime Database.

### Paso 5 -- Identidad de Usuario

El asistente obtiene la lista de usuarios de Firebase y muestra todos los developers y stakeholders registrados. Luego:

1. Pide tu nombre y email
2. Intenta encontrarte automaticamente en la lista de usuarios
3. Si no hay coincidencia, te permite introducir tus IDs `dev_XXX` / `stk_XXX` manualmente

### Paso 6 -- Guardar Configuracion

Genera un archivo `pg.config.yml` con todos los ajustes y ofrece registrar el servidor MCP en Claude Code (`~/.claude.json`) automaticamente.

### Paso 7 -- Sincronizar Guidelines

Descarga las guidelines del proyecto desde Firebase para que tu agente de IA tenga los estandares de codigo, ADRs y reglas de workflow desde el primer momento.

## Verificar la Instalacion

Una vez completado el asistente, verifica que todo funciona:

```bash
# Comprobar el binario
planning-game-mcp --version

# Si se registro en Claude Code, reinicia Claude y ejecuta:
# get_mcp_status() — deberia devolver tu Firebase project ID y nombre de instancia
```

## Archivos Generados

El asistente crea estos archivos en tu directorio de trabajo:

| Archivo | Proposito |
|---------|-----------|
| `pg.config.yml` | Configuracion principal (instancia, Firebase, usuario, ajustes MCP) |
| `mcp.user.json` | Archivo de identidad de usuario (compatibilidad) |

:::caution
Nunca subas `serviceAccountKey.json` ni `pg.config.yml` al control de versiones. Ambos contienen credenciales sensibles.
:::

## Registro Manual (Alternativa)

Si omitiste el registro automatico o usas otro cliente de IA, registra manualmente:

```bash
claude mcp add planning-game-myteam \
  -e MCP_INSTANCE_DIR=/ruta/al/directorio-instancia \
  -e GOOGLE_APPLICATION_CREDENTIALS=/ruta/al/serviceAccountKey.json \
  -s user \
  -- planning-game-mcp
```

## Siguientes Pasos

- Configura [multiples instancias](/docs/es/mcp/multi-instance/) para diferentes proyectos Firebase
- Explora la [referencia de herramientas MCP](/docs/es/reference/mcp-tools/) para la lista completa de operaciones
- Lee la [guia de workflow XP](/docs/es/guides/xp-workflow/) para entender como fluyen las tareas en el sistema
