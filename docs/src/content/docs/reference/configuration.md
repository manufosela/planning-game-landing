---
title: Configuration
description: Environment and project configuration reference.
---

## Environment Variables

Planning Game uses environment files for different deployment targets:

| Variable | Description |
|----------|-------------|
| `PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `PUBLIC_FIREBASE_DATABASE_URL` | Realtime Database URL |
| `PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | FCM sender ID |
| `PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

## Project Configuration

Each project in `/projects/{projectId}` has:

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name |
| `abbreviation` | string | Short code for card IDs |
| `description` | string | Project description |
| `version` | string | Current version |
| `scoringSystem` | enum | "1-5" or "fibonacci" |
| `repoUrl` | string | Repository URL |
| `languages` | array | Programming languages |
| `frameworks` | array | Frameworks used |
| `developers` | array | `[{id, name, email}]` |
| `stakeholders` | array | Stakeholder IDs |
| `iaEnabled` | boolean | AI features enabled |
| `agentsGuidelines` | string | Guidelines for AI agents |
| `archived` | boolean | Project archived |

## MCP Configuration

### Instance Configuration

Each MCP instance needs:
- `serviceAccountKey.json` — Firebase credentials
- `.firebaserc` — Firebase project mapping
- `.env.*` — Environment variables

### User Configuration

`.mcp-user.json` (per developer, gitignored):

```json
{
  "developerId": "dev_001",
  "developerName": "John Doe",
  "developerEmail": "john@example.com"
}
```

## Firebase Ports (Emulators)

| Service | Port |
|---------|------|
| Firestore | 8080 |
| Realtime Database | 9000 |
| Storage | 9199 |
| Emulator UI | 4000 |
| Dev Server | 4321 |

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run emulator` | Start Firebase emulators |
| `npm run build` | Production build |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run deploy` | Deploy to Firebase |
