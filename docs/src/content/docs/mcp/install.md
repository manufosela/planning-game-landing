---
title: Install MCP Server
description: Install the Planning Game MCP server in 60 seconds. No repo clone needed.
---

The Planning Game MCP server is available as a standalone npm package. You can connect any AI agent (Claude Code, Codex, etc.) to your Planning Game instance without cloning the repository.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- A **Firebase project** with Realtime Database enabled
- A **serviceAccountKey.json** file from that Firebase project
  - Firebase Console > Project Settings > Service Accounts > Generate New Private Key

## Method 1: Global Install

```bash
npm install -g planning-game-mcp
```

This makes the `planning-game-mcp` command available globally. You can verify with:

```bash
planning-game-mcp --version
```

## Method 2: npx (No Install)

Run directly without installing:

```bash
npx planning-game-mcp init
```

This downloads the latest version on the fly. Good for one-time setup or trying it out.

## Run the Setup Wizard

```bash
planning-game-mcp init
```

The wizard walks you through 7 steps:

### Step 1 -- Prerequisites Check

Validates that Node.js 18+ and Git are available on your system.

### Step 2 -- Instance Name

Choose a name for this MCP instance (e.g., `team-alpha`, `personal`). Only letters, numbers, hyphens and underscores. This name becomes the MCP server identifier: `planning-game-<name>`.

### Step 3 -- Firebase Credentials

Point to your `serviceAccountKey.json` file. The wizard validates the JSON structure and extracts the `project_id` automatically.

:::tip
Place the key file in a dedicated directory for the instance. This keeps credentials isolated and makes [multi-instance](/docs/mcp/multi-instance/) setups clean.
:::

### Step 4 -- Firebase Database

The wizard auto-detects the database URL from your project ID. It then tests connectivity by querying `/projects` in your Realtime Database.

### Step 5 -- User Identity

The wizard fetches the user list from Firebase and displays all registered developers and stakeholders. It then:

1. Asks for your name and email
2. Tries to auto-match you against the user list
3. If no match, lets you enter your `dev_XXX` / `stk_XXX` IDs manually

### Step 6 -- Save Configuration

Generates a `pg.config.yml` file with all your settings and offers to register the MCP server in Claude Code (`~/.claude.json`) automatically.

### Step 7 -- Sync Guidelines

Downloads project guidelines from Firebase so your AI agent has the latest coding standards, ADRs, and workflow rules from day one.

## Verify Installation

After the wizard completes, verify everything works:

```bash
# Check the binary
planning-game-mcp --version

# If registered in Claude Code, restart Claude and run:
# get_mcp_status() — should return your Firebase project ID and instance name
```

## Generated Files

The wizard creates these files in your working directory:

| File | Purpose |
|------|---------|
| `pg.config.yml` | Main configuration (instance, Firebase, user, MCP settings) |
| `mcp.user.json` | Backward-compatible user identity file |

:::caution
Never commit `serviceAccountKey.json` or `pg.config.yml` to version control. Both contain sensitive credentials.
:::

## Manual Registration (Alternative)

If you skipped auto-registration or use a different AI client, register manually:

```bash
claude mcp add planning-game-myteam \
  -e MCP_INSTANCE_DIR=/path/to/instance-dir \
  -e GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccountKey.json \
  -s user \
  -- planning-game-mcp
```

## What's Next?

- Set up [multiple instances](/docs/mcp/multi-instance/) for different Firebase projects
- Explore the [MCP Tools reference](/docs/reference/mcp-tools/) for the full list of available operations
- Read the [XP Workflow guide](/docs/guides/xp-workflow/) to understand how tasks flow through the system
