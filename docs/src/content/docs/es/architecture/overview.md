---
title: Visión General
description: Arquitectura técnica de Planning Game XP.
---

Consulta la [referencia en inglés](/docs/architecture/overview/) para la documentación completa de arquitectura con diagramas de estructura y patrones.

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | Astro 5 + componentes web Lit |
| **Backend** | Firebase (RTDB, Firestore, Auth, Functions, Storage) |
| **Servidor MCP** | Node.js + MCP SDK |
| **Testing** | Vitest (unitarios) + Playwright (E2E) |

## Patrones Arquitectónicos Clave

- **Arquitectura Orientada a Servicios** — Servicios centralizados para funcionalidad core
- **Arquitectura de Web Components** — Componentes Lit con comunicación por eventos
- **Delegación de Eventos** — Listeners únicos con gestión centralizada
- **Soporte Multi-Vista** — Lista, Kanban, Sprint y Gantt

## Modelo de Seguridad

- **Autenticación**: Firebase Auth (Microsoft OAuth + 2FA)
- **Autorización**: Custom Claims + reglas RTDB
- **Roles**: SuperAdmin, Admin, User, Consultant
- **MCP**: Credenciales de service account (nunca expuestas al cliente)
