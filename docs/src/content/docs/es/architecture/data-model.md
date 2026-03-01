---
title: Modelo de Datos
description: Estructura de datos en Firebase y relaciones.
---

Consulta la [referencia en inglés](/docs/architecture/data-model/) para la documentación completa del modelo de datos con todos los paths y estructuras.

## Almacenamiento de Cards

Las cards se almacenan en Firebase Realtime Database en:

```
/cards/{projectName}/{cardType}_{projectName}/{firebaseId}/
```

## Estructura de Firebase

```
Firebase RTDB
├── /projects/{projectId}           # Metadatos del proyecto
├── /cards/{projectId}/{section}/   # Todas las cards
├── /data/
│   ├── developers/                 # Registro global de desarrolladores
│   ├── stakeholders/               # Registro global de stakeholders
│   └── statusList/                 # Opciones de estado por tipo de card
├── /developerBacklogs/{devId}/     # Backlogs por desarrollador
├── /adrs/{projectId}/              # Architecture Decision Records
├── /plans/{projectId}/             # Planes de desarrollo
└── /users/{sanitizedEmail}/        # Perfiles de usuario

Firestore
├── projectCounters/{key}           # Auto-incremento de IDs
└── cardViews/{projectId}/          # Vistas denormalizadas
```
