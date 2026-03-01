---
title: Installation
description: How to set up Planning Game XP for local development.
---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+
- **Firebase CLI**: `npm install -g firebase-tools`
- **Git**

## Clone the Repository

```bash
git clone git@github.com:manufosela/planning-game-xp.git
cd planning-game-xp
npm install
```

## Environment Configuration

Planning Game uses environment files for different deployment targets:

| File | Purpose |
|------|---------|
| `.env.dev` | Local development (emulators) |
| `.env.pre` | Pre-production |
| `.env.pro` | Production |

Contact the project administrator for the environment files.

## Start Development

Open two terminals:

**Terminal 1 — Firebase Emulators:**
```bash
npm run emulator
```

This starts:
- Firestore on port `8080`
- Realtime Database on port `9000` (with demo data)
- Storage on port `9199`
- Emulator UI on port `4000`

**Terminal 2 — Dev Server:**
```bash
npm run dev
```

The application is available at `http://localhost:4321`.

## MCP Server Setup

To use Planning Game with AI agents via MCP:

```bash
claude mcp add planning-game -e GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccountKey.json -- node /path/to/planning-game-xp/mcp/index.js
```

See the [MCP Server guide](/docs/guides/mcp-server/) for detailed configuration.

## Verify Installation

1. Open `http://localhost:4000` — Firebase Emulator UI should show loaded data
2. Open `http://localhost:4321` — Planning Game should show with a red banner: "USANDO EMULADORES LOCALES"
3. Run tests: `npm test` — All tests should pass
