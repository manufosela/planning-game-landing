---
title: MCP Server
description: How to use Planning Game's MCP server with AI agents.
---

Planning Game includes an MCP (Model Context Protocol) server that exposes 25+ tools for AI agent integration.

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
| **Config** | `list_global_config`, `get_global_config` | Shared guidelines |
| **Team** | `list_developers`, `list_stakeholders` | Team members |

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
