---
title: Herramientas MCP
description: Referencia completa de todas las herramientas MCP disponibles.
---

Consulta la [referencia en inglés](/docs/reference/mcp-tools/) para la documentación completa de todas las herramientas MCP con parámetros y ejemplos.

## Categorías de Herramientas

| Categoría | Herramientas | Descripción |
|-----------|-------------|-------------|
| **Proyectos** | `list_projects`, `get_project`, `update_project`, `create_project`, `discover_project` | Gestión de proyectos |
| **Cards** | `list_cards`, `get_card`, `create_card`, `update_card`, `relate_cards` | CRUD de tareas/bugs/épicas |
| **Sprints** | `list_sprints`, `get_sprint`, `create_sprint`, `update_sprint` | Gestión de sprints |
| **ADRs** | `list_adrs`, `get_adr`, `create_adr`, `update_adr`, `delete_adr` | Decisiones arquitectónicas |
| **Planes** | `list_plans`, `get_plan`, `create_plan`, `update_plan`, `delete_plan` | Planes de desarrollo |
| **Config** | `list_global_config`, `get_global_config`, `create_global_config`, `update_global_config`, `delete_global_config` | Configuraciones compartidas y guidelines |
| **Guidelines** | `sync_guidelines`, `get_guideline_history`, `restore_guideline_version` | Sincronización y versionado de guidelines |
| **Equipo** | `list_developers`, `list_stakeholders` | Miembros del equipo |
| **Usuarios** | `provision_user`, `delete_user` | Provisión y gestión de usuarios |
| **Diagnósticos** | `pg_doctor`, `pg_config` | Chequeos de salud y configuración del servidor |
| **Utilidades** | `setup_mcp_user`, `get_mcp_status`, `update_mcp`, `publish_mcp_version` | Configuración y estado |
