---
title: FAQ
description: Frequently asked questions about Planning Game XP.
---

## General

### What is Planning Game XP?
An agile project management application following eXtreme Programming practices, with built-in MCP server for AI agent integration.

### Is it open source?
The repository is at [github.com/manufosela/planning-game-xp](https://github.com/manufosela/planning-game-xp).

### What does "XP" stand for?
eXtreme Programming — a software development methodology that emphasizes pair programming, TDD, continuous integration, and short iterations.

## MCP Server

### Do I need the MCP server?
No. The web application works standalone. The MCP server is optional and enables AI agents to interact with Planning Game programmatically.

### Which AI agents are supported?
Any MCP-compatible agent: Claude (via Claude Code), Codex, and others that support the MCP protocol.

### Can I run multiple instances?
Yes. Each instance connects to a different Firebase project. Use the `MCP_INSTANCE_DIR` environment variable to point to instance-specific credentials.

## Workflow

### Why can't I set a task to "Done"?
Only the assigned validator can mark tasks as "Done" or "Done&Validated". As a developer, set the status to "To Validate" when your work is complete.

### Why is priority calculated automatically?
Planning Game uses the XP planning game formula: `priority = (businessPoints / devPoints) × 100`. This ensures tasks with high business value and low effort are prioritized.

### What's the WIP limit?
Each developer can have only ONE task "In Progress" across all projects. This enforces focus and reduces context switching.

### Can AI agents bypass validation rules?
No. The MCP server enforces the same rules as the UI. AI agents cannot set tasks to "Done", skip required fields, or bypass WIP limits.

## Technical

### Why Firebase?
Firebase provides real-time synchronization, authentication, cloud functions, and hosting in a single platform. The Realtime Database enables instant updates across all connected clients.

### Why Astro + Lit?
Astro provides excellent build performance and static generation. Lit web components offer lightweight, standards-based UI components that work everywhere.

### How do I run tests?
```bash
npm test              # Unit tests (Vitest)
npm run test:e2e      # E2E tests (Playwright)
npm run test:coverage # Tests with coverage report
```
