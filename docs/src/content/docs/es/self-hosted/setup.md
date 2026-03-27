---
title: Despliega el Tuyo
description: Haz fork, configura y despliega tu propia instancia de Planning Game en Firebase.
---

Planning Game es open source. Puedes desplegar tu propia instancia en un proyecto Firebase que controles, con personalizacion completa sobre proyectos, equipos y workflows.

## Requisitos Previos

- **Node.js 20+** (LTS recomendado)
- **npm 9+**
- **Firebase CLI**: `npm install -g firebase-tools`
- **Git**
- Un **proyecto Firebase** con estos servicios habilitados:
  - Realtime Database
  - Authentication (Email/Password y/o proveedor Microsoft)
  - Storage
  - Hosting

:::note
Planning Game usa Firebase Realtime Database (no Firestore) como almacen de datos principal. Asegurate de crear una instancia de Realtime Database en tu proyecto Firebase, preferiblemente en la region `europe-west1`.
:::

## 1. Fork del Repositorio

```bash
# Haz fork en GitHub, luego clona tu fork
git clone git@github.com:TU_USUARIO/planning-game-xp.git
cd planning-game-xp
npm install
```

## 2. Ejecutar el Setup de Instancia

Planning Game soporta multiples instancias de despliegue (ej: staging y produccion) desde un unico codebase. El asistente de configuracion crea los archivos necesarios:

```bash
npm run setup
```

El asistente preguntara por:
- **Nombre de instancia** (ej: `mi-equipo`)
- **Firebase project ID**
- **Email de la cuenta Firebase** (la cuenta Google con acceso al proyecto)
- **Ruta al serviceAccountKey.json**

Esto crea un directorio bajo `planning-game-instances/<nombre>/` con todos los archivos especificos de la instancia.

## 3. Configurar Archivos de Entorno

Cada instancia necesita archivos de entorno para diferentes targets de despliegue. Crealos en el directorio de la instancia:

| Archivo | Proposito |
|---------|-----------|
| `.env.dev` | Desarrollo local con emuladores |
| `.env.pre` | Entorno de pre-produccion |
| `.env.pro` | Entorno de produccion |

Variables minimas requeridas:

```bash
# Ejemplo .env.pro
FIREBASE_API_KEY=tu-api-key
FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
FIREBASE_DATABASE_URL=https://tu-proyecto-default-rtdb.europe-west1.firebasedatabase.app
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_STORAGE_BUCKET=tu-proyecto.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef
```

Puedes encontrar estos valores en Firebase Console > Project Settings > General > Your apps > Web app config.

## 4. Build y Deploy

```bash
# Compilar todas las instancias
npm run build:all

# Desplegar todas las instancias
npm run deploy:all
```

Esto compila la aplicacion Astro, genera el service worker y despliega a Firebase Hosting.

:::caution
Usa siempre `build:all` y `deploy:all` en lugar de `build` y `deploy` directamente. El gestor de instancias se encarga de cambiar las cuentas Firebase y configuraciones entre instancias automaticamente.
:::

## 5. Configuracion Post-Deploy

Tras el primer despliegue, abre la aplicacion y completa la configuracion inicial:

### Crear Tu Primer Proyecto

1. Inicia sesion con una cuenta de administrador
2. Ve a Administracion de Proyecto
3. Crea un nuevo proyecto con:
   - Nombre del proyecto y abreviatura (se usa para IDs de cards como `PRJ-TSK-0001`)
   - Ano
   - Escala de puntos (1-5 lineal o Fibonacci)

### Anadir Miembros del Equipo

En Administracion de Proyecto, configura:

- **Developers**: Miembros del equipo que trabajan en tareas. Cada uno recibe un ID `dev_XXX`.
- **Stakeholders**: Validadores que aprueban el trabajo completado. Cada uno recibe un ID `stk_XXX`.

### Configurar Autenticacion

Configura los proveedores de autenticacion en Firebase Console:
- **Email/Password**: Autenticacion basica
- **Microsoft**: Para SSO corporativo (requiere registro de app en Azure AD)

### Conectar el Servidor MCP

Instala el paquete MCP y ejecuta el asistente de configuracion para conectar agentes de IA a tu instancia:

```bash
npm install -g planning-game-mcp
mkdir ~/pg-instances/mi-equipo && cd ~/pg-instances/mi-equipo
cp /ruta/al/serviceAccountKey.json .
planning-game-mcp init
```

Consulta la [guia de instalacion del MCP](/docs/es/mcp/install/) para los pasos detallados.

## Reglas de Seguridad de Firebase

El repositorio incluye reglas de seguridad para Realtime Database y Storage. Despliegalas con:

```bash
npm run deploy:rules
```

Revisa y personaliza las reglas en `database.rules.json` y `storage.rules` antes de desplegar a produccion.

## Cloud Functions

Planning Game usa Cloud Functions para:
- Validacion de transiciones de estado (red de seguridad)
- Criterios de aceptacion generados por IA
- Notificaciones push
- Aprovisionamiento de usuarios con Custom Claims

Despliega las funciones por separado:

```bash
npm run deploy:functions
```

## Actualizaciones

Para traer actualizaciones del repositorio original:

```bash
git remote add upstream git@github.com:manufosela/planning-game-xp.git
git fetch upstream
git merge upstream/main
npm install
npm run build:all && npm run deploy:all
```

## Siguientes Pasos

- Lee la [guia de inicio rapido](/docs/es/getting-started/quick-start/) para aprender lo basico de la gestion de tareas
- Configura el [servidor MCP](/docs/es/mcp/install/) para integracion con agentes de IA
- Explora la [vision general de arquitectura](/docs/es/architecture/overview/) para entender el diseno del sistema
