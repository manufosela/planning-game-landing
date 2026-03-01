---
title: MCP Tools
description: Complete reference of all MCP tools available in Planning Game.
---

## Project Tools

### `list_projects`
List all projects with name, abbreviation, and developers.

**Parameters:** None

### `get_project`
Get full project details including description, repos, languages, frameworks, and team.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID (e.g., "PlanningGame") |

### `update_project`
Update project fields.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `updates` | object | Yes | Fields to update |

### `create_project`
Create a new project with auto-generated maintenance epic.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Database key |
| `name` | string | Yes | Display name |
| `abbreviation` | string | Yes | Short code for card IDs |
| `description` | string | No | Project description |
| `scoringSystem` | enum | No | "1-5" or "fibonacci" |
| `repoUrl` | string | No | Repository URL |

### `discover_project`
Find a project by its repository URL (supports HTTPS, SSH, with/without `.git`).

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `repoUrl` | string | Yes | Repository URL |

---

## Card Tools

### `list_cards`
List cards filtered by type, status, sprint, developer, or year.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `type` | enum | Yes | "task", "bug", "epic", "proposal", "qa" |
| `status` | string | No | Filter by status |
| `developer` | string | No | Filter by developer |
| `sprint` | string | No | Filter by sprint ID |
| `year` | number | No | Filter by year |

### `get_card`
Get full card details by cardId.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `cardId` | string | Yes | Card ID (e.g., "PLN-TSK-0042") |

### `create_card`
Create a new card with auto-generated ID.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `type` | enum | Yes | Card type |
| `title` | string | Yes | Card title |
| `epic` | string | Yes* | Epic ID (*required for tasks) |
| `sprint` | string | No | Sprint ID |
| `descriptionStructured` | array | No | User story format |
| `acceptanceCriteriaStructured` | array | No | Gherkin format |
| `devPoints` | number | No | Technical effort (1-5) |
| `businessPoints` | number | No | Business value (1-5) |

### `update_card`
Update card fields including status transitions.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `type` | enum | Yes | Card type |
| `firebaseId` | string | Yes | Firebase push key |
| `updates` | object | Yes | Fields to update |

### `relate_cards`
Create or remove relations between cards.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `projectId` | string | Yes | Project ID |
| `sourceCardId` | string | Yes | Source card ID |
| `targetCardId` | string | Yes | Target card ID |
| `relationType` | enum | Yes | "related" or "blocks" |
| `action` | enum | No | "add" (default) or "remove" |

### `get_transition_rules`
Get status transition rules for cards. Call BEFORE attempting status updates.

---

## Sprint Tools

### `list_sprints`
List sprints with dates and points.

### `get_sprint`
Get full sprint details.

### `create_sprint`
Create a new sprint with start and end dates.

### `update_sprint`
Update sprint fields.

---

## ADR Tools

### `list_adrs` / `get_adr` / `create_adr` / `update_adr` / `delete_adr`
Manage Architecture Decision Records for a project.

---

## Plan Tools

### `list_plans` / `get_plan` / `create_plan` / `update_plan` / `delete_plan`
Manage development plans with phases and proposed tasks.

---

## Global Config Tools

### `list_global_config` / `get_global_config`
Access shared configurations (agents, prompts, instructions).

---

## Utility Tools

### `setup_mcp_user`
Configure MCP user identity. Required before first task.

### `get_mcp_status`
Get server version and update availability.

### `update_mcp`
Update MCP server to latest version (git pull).
