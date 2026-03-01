---
title: Architecture Overview
description: Technical architecture of Planning Game XP.
---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Astro 5 + Lit web components |
| **Backend** | Firebase (RTDB, Firestore, Auth, Functions, Storage) |
| **MCP Server** | Node.js + MCP SDK |
| **Testing** | Vitest (unit) + Playwright (E2E) |

## Key Architectural Patterns

### Service-Oriented Architecture
Core functionality is centralized in services:

- **FirebaseService** — Central Firebase operations
- **CardService** — CRUD for all card types
- **CardRealtimeService** — Real-time data synchronization
- **PermissionService** — Role-based access control
- **FilterService** — Generic filtering system
- **ModalService** — Modal management with LIFO stacking
- **HistoryService** — Change tracking and audit trail

### Web Component Architecture
UI is built with Lit-based web components:

- Components communicate via events (no direct coupling)
- Each component has separate style files
- Factory patterns for card and view creation (CardFactory, ViewFactory)

### Event Delegation
Single event listeners with centralized management via `EventDelegationManager`.

### Multi-View Support
The same data renders in multiple views:
- **List View** — Tabular card display
- **Kanban View** — Status columns
- **Sprint View** — Sprint planning board
- **Gantt View** — Timeline visualization

## Project Structure

```
public/js/
├── services/          # Centralized services
├── controllers/       # Application controllers
├── events/            # Event delegation system
├── wc/                # Web Components (Lit-based)
├── renderers/         # View renderers
├── factories/         # Factory patterns
├── filters/           # Filtering system
├── utils/             # Utility functions
└── constants/         # Application constants

src/
├── pages/             # Astro pages
├── layouts/           # Page layouts
└── firebase/          # Firebase configuration

mcp/
├── index.js           # MCP server entry point
├── register-tools.js  # Tool registration
├── tools/             # Tool handlers
├── services/          # MCP-specific services
└── firebase-adapter.js # Firebase connection

functions/             # Firebase Cloud Functions
tests/                 # Unit tests (Vitest)
playwright/            # E2E tests
```

## Firebase Data Model

```
Firebase RTDB
├── /projects/{projectId}           # Project metadata
├── /cards/{projectId}/{section}/   # All cards (tasks, bugs, epics...)
├── /data/
│   ├── developers/                 # Global developer registry
│   ├── stakeholders/               # Global stakeholder registry
│   ├── statusList/                 # Status options per card type
│   └── bugpriorityList/            # Bug priority options
├── /developerBacklogs/{devId}/     # Per-developer task backlogs
├── /adrs/{projectId}/              # Architecture Decision Records
├── /plans/{projectId}/             # Development plans
├── /planProposals/{projectId}/     # Plan proposals
└── /users/{sanitizedEmail}/        # User profiles

Firestore
├── projectCounters/{key}           # Card ID auto-increment
└── cardViews/{projectId}/          # Denormalized card views
```

## Security Model

- **Authentication**: Firebase Auth (Microsoft OAuth + 2FA)
- **Authorization**: Custom Claims + RTDB rules
- **Roles**: SuperAdmin, Admin, User, Consultant
- **MCP**: Service account credentials (never exposed to client)
