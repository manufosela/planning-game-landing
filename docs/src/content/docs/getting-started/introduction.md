---
title: Introduction
description: What is Planning Game XP and why use it.
---

Planning Game XP is an agile project management application built on **eXtreme Programming (XP)** practices. It manages the full lifecycle of software development — from sprint planning to deployment tracking.

## Key Concepts

### Cards
Everything in Planning Game is a **card**. There are six card types:

- **Tasks** — Feature work with user stories (Como/Quiero/Para) and acceptance criteria (Given/When/Then)
- **Bugs** — Defect tracking with priority levels and root cause analysis
- **Epics** — Large work items that group related tasks
- **Proposals** — Ideas that can be converted to tasks after refinement
- **QA** — Quality assurance items
- **Sprints** — Time-boxed iterations with start/end dates and point tracking

### Status Transitions
Cards follow strict status workflows. Tasks move through:

```
To Do → In Progress → To Validate → Done → Done&Validated
```

Each transition requires specific fields (developer, validator, dates, commits) and is enforced by the system.

### Planning Game Estimation
Task priority is calculated automatically:

```
priority = (businessPoints / devPoints) × 100
```

Both `devPoints` (technical effort, 1-5) and `businessPoints` (business value, 1-5) are set during sprint planning.

## Architecture

Planning Game XP is built with:

- **Frontend**: [Astro](https://astro.build) + [Lit](https://lit.dev) web components
- **Backend**: [Firebase](https://firebase.google.com) (Realtime Database, Firestore, Auth, Cloud Functions, Storage)
- **MCP Server**: Node.js integration for AI agent workflows
- **Testing**: Vitest (unit) + Playwright (E2E)

## Who is it for?

- Development teams practicing XP or Scrum
- Teams using AI agents (Claude, Codex, etc.) for development
- Organizations that need strict workflow enforcement with audit trails
