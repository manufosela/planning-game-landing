---
title: Quick Start
description: Create your first sprint and task in 5 minutes.
---

Once you have Planning Game running locally, here's how to get started.

## 1. Create a Project

Navigate to **Admin** in the sidebar. Click **New Project** and fill in:

- **Name**: Your project name
- **Abbreviation**: Short code for card IDs (e.g., "MYP")
- **Scoring System**: Choose "1-5" or "Fibonacci"

## 2. Create a Sprint

Go to **Sprint View** and create a new sprint:

- **Title**: e.g., "Sprint 1 - March 2026"
- **Start Date**: Sprint start
- **End Date**: Sprint end

## 3. Create an Epic

Every task needs an epic. Create one from the **Epics** tab:

- **Title**: e.g., "User Authentication"
- **Description**: What this epic covers

## 4. Create a Task

Switch to the **Tasks** tab and create your first task:

- **Title**: Descriptive title
- **Description**: User story format (Como/Quiero/Para)
- **Epic**: Select the epic you created
- **Sprint**: Select the sprint
- **Acceptance Criteria**: Given/When/Then format

## 5. Estimate and Prioritize

During sprint planning, set:

- **devPoints**: Technical effort (1 = trivial, 5 = very complex)
- **businessPoints**: Business value (1 = nice to have, 5 = critical)

Priority is calculated automatically: `(businessPoints / devPoints) × 100`

## 6. Work on the Task

1. Self-assign the task (click your name in the developer field)
2. Change status to **In Progress** — this sets your WIP slot
3. Create a feature branch: `git checkout -b feat/MYP-TSK-0001-description`
4. Implement, commit, push, create PR
5. Change status to **To Validate** with commits and PR info

## Using with AI Agents

If you have the MCP server configured, AI agents can do all of this programmatically:

```
# Ask Claude to create a task
"Create a task in MyProject for adding user login"

# Ask Claude to work on it
"Work on MYP-TSK-0001"
```

See the [MCP Server guide](/docs/guides/mcp-server/) for details.
