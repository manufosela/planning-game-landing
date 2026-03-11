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
Access shared configurations (agents, prompts, instructions, guidelines).

### `create_global_config` / `update_global_config` / `delete_global_config`
Create, update, or delete global configurations. For guidelines, content is auto-versioned on each update.

---

## Guidelines Tools

### `sync_guidelines`
Download guidelines from Firebase and write them as local files. Compares versions to only update changed guidelines.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `dryRun` | boolean | No | Preview changes without writing files |
| `force` | boolean | No | Force sync even if versions match |

### `get_guideline_history`
View version history for a specific guideline, including all previous versions with timestamps.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `configId` | string | Yes | Guideline config ID |

### `restore_guideline_version`
Restore a guideline to a previous version. The current version is saved to history before restoring.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `configId` | string | Yes | Guideline config ID |
| `version` | number | Yes | Version number to restore |

---

## Diagnostic Tools

### `pg_doctor`
Run comprehensive diagnostics on the MCP server. Checks Node.js version, Firebase credentials, database connectivity, dependencies, user configuration, MCP version, instance config, and git availability. Returns a structured report with PASS/WARN/FAIL status for each check.

**Parameters:** None

### `pg_config`
View MCP server configuration including instance name, Firebase project, credentials path, user config, and environment variables.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | enum | No | `"view"` (default) or `"get"` |
| `key` | string | No | Config key to get (for action `"get"`). Keys: `version`, `instanceName`, `firebaseProjectId`, `credentialsPath`, `userConfigPath`, `user`, `env` |

---

## Utility Tools

### `setup_mcp_user`
Configure MCP user identity. Required before first task.

### `get_mcp_status`
Get server version and update availability.

### `update_mcp`
Update MCP server to latest version (git pull).

### `publish_mcp_version`
Publish MCP version to Firebase so other users get update notifications.

### `provision_user`
Provision a new user or update an existing one. Creates user record, auto-generates developer/stakeholder IDs, and assigns projects. Idempotent.

### `delete_user`
Delete a user and clean up legacy permission paths.
