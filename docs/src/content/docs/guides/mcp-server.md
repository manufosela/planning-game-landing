---
title: MCP Server
description: How to use Planning Game's MCP server with AI agents.
---

Planning Game includes an MCP (Model Context Protocol) server that exposes 45+ tools for AI agent integration.

## What is MCP?

MCP is a protocol that allows AI agents (Claude, Codex, etc.) to interact with external tools. Planning Game's MCP server lets agents create tasks, update statuses, manage sprints, and more — all programmatically.

## Installation

### With Claude Code

```bash
claude mcp add planning-game \
  -e GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccountKey.json \
  -- node /path/to/planning-game-xp/mcp/index.js
```

### Multi-Instance Support

You can connect multiple Planning Game instances (different Firebase projects):

```bash
# Production instance
claude mcp add planning-game-pro \
  -e MCP_INSTANCE_DIR=/path/to/instances/geniova \
  -- node /path/to/planning-game-xp/mcp/index.js

# Personal instance
claude mcp add planning-game-personal \
  -e MCP_INSTANCE_DIR=/path/to/instances/personal \
  -- node /path/to/planning-game-xp/mcp/index.js
```

## User Setup

Before using MCP tools, configure your identity:

```
setup_mcp_user({ email: "your@email.com" })
```

This creates a `.mcp-user.json` file that links your identity to a developer ID.

## Available Tool Categories

| Category | Tools | Description |
|----------|-------|-------------|
| **Projects** | `list_projects`, `get_project`, `update_project`, `create_project`, `discover_project` | Project management |
| **Cards** | `list_cards`, `get_card`, `create_card`, `update_card`, `relate_cards` | Task/bug/epic CRUD |
| **Sprints** | `list_sprints`, `get_sprint`, `create_sprint`, `update_sprint` | Sprint management |
| **ADRs** | `list_adrs`, `get_adr`, `create_adr`, `update_adr`, `delete_adr` | Architecture decisions |
| **Plans** | `list_plans`, `get_plan`, `create_plan`, `update_plan`, `delete_plan` | Development plans |
| **Config** | `list_global_config`, `get_global_config`, `create_global_config`, `update_global_config`, `delete_global_config` | Shared configurations & guidelines |
| **Guidelines** | `sync_guidelines`, `get_guideline_history`, `restore_guideline_version` | Guidelines sync & versioning |
| **Team** | `list_developers`, `list_stakeholders` | Team members |
| **Users** | `provision_user`, `delete_user` | User provisioning & management |
| **Diagnostics** | `pg_doctor`, `pg_config` | Server health checks and configuration viewer |

## Project Resolution

The MCP server supports fuzzy project ID resolution. You can use:

- Exact key: `"PlanningGame"`
- Case-insensitive: `"planninggame"`
- Project name: `"Planning Game"`
- Abbreviation: `"PLN"`
- Repository URL: `"https://github.com/manufosela/planning-game-xp"`

If no match is found, the server returns a list of available projects.

## Workflow Enforcement

The MCP server enforces the same rules as the UI:

- Required fields for status transitions
- WIP limits (one task "In Progress" per developer)
- Validators cannot be bypassed
- Pipeline tracking (commits, PR info) required for "To Validate"
- Sprint date immutability when tasks are In Progress or To Validate
- Work cycle tracking (start/end times, accumulated duration)

## Setup Wizard

Run the interactive setup wizard to configure a new MCP instance:

```bash
node mcp/cli.js init
```

The wizard guides you through:
1. Prerequisites check (Node.js 18+, Git)
2. Instance name & description
3. Firebase credentials (serviceAccountKey.json)
4. Database URL & connectivity test
5. User identity (developer ID)
6. Configuration file generation (pg.config.yml)
7. Guidelines sync from Firebase

## Guidelines Management

The MCP server supports centralized guidelines stored in Firebase:

- **Auto-versioning**: Each content update increments the version and saves history
- **Sync to local files**: `sync_guidelines` downloads guidelines as local files
- **Version history**: View and restore previous versions
- **Auto-check on startup**: Warns if local guidelines are outdated
- **Admin UI**: Manage guidelines from the project administration page
- **Migration script**: Import existing CLAUDE.md files into Firebase guidelines

## Instance Metadata

Every MCP response includes `_instance` metadata with the Firebase project ID and instance name. This helps identify which instance is responding when multiple instances are connected.
