---
title: Configuracion Multi-Instancia
description: Conecta multiples instancias de Planning Game a diferentes proyectos Firebase desde un solo agente de IA.
---

Puedes ejecutar multiples instancias del servidor MCP simultaneamente, cada una apuntando a un proyecto Firebase diferente. Esto es util cuando gestionas despliegues separados de Planning Game -- por ejemplo, uno para tu equipo y otro para proyectos personales.

## Por que Multi-Instancia?

- **Trabajo + Personal**: Mantener las tareas de empresa separadas de los proyectos personales
- **Multiples equipos**: Cada equipo tiene su propio proyecto Firebase y su Planning Game
- **Staging + Produccion**: Probar cambios del MCP contra un entorno de staging antes de produccion

## Estructura de Directorios

Crea un directorio por instancia, cada uno con sus propias credenciales:

```
~/pg-instances/
  equipo-a/
    serviceAccountKey.json
    pg.config.yml          # generado por init
    mcp.user.json          # generado por init
  equipo-b/
    serviceAccountKey.json
    pg.config.yml
    mcp.user.json
```

## Configurar Cada Instancia

Ejecuta el asistente una vez por instancia, desde dentro de cada directorio:

```bash
cd ~/pg-instances/equipo-a
npx planning-game-mcp init
# Elige nombre de instancia: equipo-a
# Apunta a ./serviceAccountKey.json
# Completa el asistente

cd ~/pg-instances/equipo-b
npx planning-game-mcp init
# Elige nombre de instancia: equipo-b
# Apunta a ./serviceAccountKey.json
# Completa el asistente
```

El asistente registra cada instancia en Claude Code automaticamente. Si prefieres registro manual:

```bash
claude mcp add planning-game-equipo-a \
  -e MCP_INSTANCE_DIR=$HOME/pg-instances/equipo-a \
  -e GOOGLE_APPLICATION_CREDENTIALS=$HOME/pg-instances/equipo-a/serviceAccountKey.json \
  -s user \
  -- planning-game-mcp

claude mcp add planning-game-equipo-b \
  -e MCP_INSTANCE_DIR=$HOME/pg-instances/equipo-b \
  -e GOOGLE_APPLICATION_CREDENTIALS=$HOME/pg-instances/equipo-b/serviceAccountKey.json \
  -s user \
  -- planning-game-mcp
```

## Como Funciona `MCP_INSTANCE_DIR`

La variable de entorno `MCP_INSTANCE_DIR` indica al servidor MCP donde encontrar sus archivos de configuracion. Cuando esta definida, el servidor busca `pg.config.yml`, `serviceAccountKey.json` y `mcp.user.json` en ese directorio en lugar del directorio de trabajo actual.

Sin `MCP_INSTANCE_DIR`, el servidor usa el directorio desde el que se lanzo.

## Identificar Instancias

Cada respuesta MCP incluye un objeto `_instance` con el Firebase project ID y el nombre de la instancia. Tambien puedes llamar a `get_mcp_status` en cualquier instancia para ver:

```json
{
  "firebaseProjectId": "mi-proyecto-equipo-a",
  "instanceName": "equipo-a",
  "version": "1.16.0",
  "status": "connected"
}
```

:::tip
Cuando hay multiples instancias conectadas, usa `get_mcp_status` en cada una para verificar a que proyecto Firebase apunta antes de ejecutar comandos.
:::

## Ejemplo: Dos Instancias en la Practica

Supongamos que tienes:
- **equipo-a**: El Planning Game de tu empresa (`firebase-project-alpha`)
- **equipo-b**: Tu Planning Game personal (`firebase-project-beta`)

Tras la configuracion, ambas aparecen como servidores MCP separados en Claude Code. Puedes entonces:

```
# Listar tareas del equipo-a
list_cards(projectId="MiAppEmpresa", type="task")  → usa planning-game-equipo-a

# Crear un bug en equipo-b
create_card(projectId="ProyectoPersonal", type="bug", ...)  → usa planning-game-equipo-b
```

El agente de IA ve ambas instancias y puede dirigir los comandos a la correcta segun el contexto del proyecto.

## Archivos de Configuracion por Instancia

Cada directorio de instancia contiene:

| Archivo | Proposito |
|---------|-----------|
| `serviceAccountKey.json` | Credenciales de Firebase (nunca commitear) |
| `pg.config.yml` | Configuracion de la instancia (nombre, URL de base de datos, identidad de usuario) |
| `mcp.user.json` | Identidad de usuario (compatibilidad) |

:::caution
Anade `serviceAccountKey.json` y `pg.config.yml` a tu `.gitignore` global para evitar commits accidentales en cualquier repositorio.
:::

## Actualizar Instancias

Para actualizar el servidor MCP en todas las instancias:

```bash
npm update -g planning-game-mcp
```

Todas las instancias usan el mismo binario -- solo la configuracion cambia.
