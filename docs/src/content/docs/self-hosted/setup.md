---
title: Deploy Your Own
description: Fork, configure, and deploy your own Planning Game instance to Firebase.
---

Planning Game is open source. You can deploy your own instance to a Firebase project you control, with full customization over projects, teams, and workflows.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 9+**
- **Firebase CLI**: `npm install -g firebase-tools`
- **Git**
- A **Firebase project** with these services enabled:
  - Realtime Database
  - Authentication (Email/Password and/or Microsoft provider)
  - Storage
  - Hosting

:::note
Planning Game uses Firebase Realtime Database (not Firestore) as its primary data store. Make sure to create a Realtime Database instance in your Firebase project, preferably in the `europe-west1` region.
:::

## 1. Fork the Repository

```bash
# Fork on GitHub, then clone your fork
git clone git@github.com:YOUR_USER/planning-game-xp.git
cd planning-game-xp
npm install
```

## 2. Run the Instance Setup

Planning Game supports multiple deployment instances (e.g., staging and production) from a single codebase. The setup wizard creates the necessary configuration files:

```bash
npm run setup
```

The wizard will ask for:
- **Instance name** (e.g., `my-team`)
- **Firebase project ID**
- **Firebase account email** (the Google account with access to the project)
- **serviceAccountKey.json** path

This creates a directory under `planning-game-instances/<name>/` with all instance-specific files.

## 3. Configure Environment Files

Each instance needs environment files for different deployment targets. Create them in the instance directory:

| File | Purpose |
|------|---------|
| `.env.dev` | Local development with emulators |
| `.env.pre` | Pre-production environment |
| `.env.pro` | Production environment |

Minimum required variables:

```bash
# .env.pro example
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_DATABASE_URL=https://your-project-default-rtdb.europe-west1.firebasedatabase.app
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef
```

You can find these values in Firebase Console > Project Settings > General > Your apps > Web app config.

## 4. Build and Deploy

```bash
# Build all instances
npm run build:all

# Deploy all instances
npm run deploy:all
```

This builds the Astro application, generates the service worker, and deploys to Firebase Hosting.

:::caution
Always use `build:all` and `deploy:all` instead of `build` and `deploy` directly. The instance manager handles switching Firebase accounts and configurations between instances automatically.
:::

## 5. Post-Deploy Setup

After your first deployment, open the application and complete the initial setup:

### Create Your First Project

1. Log in with an admin account
2. Go to Project Administration
3. Create a new project with:
   - Project name and abbreviation (used for card IDs like `PRJ-TSK-0001`)
   - Year
   - Point scale (1-5 linear or Fibonacci)

### Add Team Members

In Project Administration, configure:

- **Developers**: Team members who work on tasks. Each gets a `dev_XXX` ID.
- **Stakeholders**: Validators who approve completed work. Each gets a `stk_XXX` ID.

### Set Up Authentication

Configure authentication providers in Firebase Console:
- **Email/Password**: Basic authentication
- **Microsoft**: For corporate SSO (requires Azure AD app registration)

### Connect the MCP Server

Install the MCP package and run the setup wizard to connect AI agents to your instance:

```bash
npm install -g planning-game-mcp
mkdir ~/pg-instances/my-team && cd ~/pg-instances/my-team
cp /path/to/serviceAccountKey.json .
planning-game-mcp init
```

See the [MCP Installation guide](/docs/mcp/install/) for detailed steps.

## Firebase Security Rules

The repository includes security rules for Realtime Database and Storage. Deploy them with:

```bash
npm run deploy:rules
```

Review and customize the rules in `database.rules.json` and `storage.rules` before deploying to production.

## Cloud Functions

Planning Game uses Cloud Functions for:
- Status transition validation (safety net)
- AI-generated acceptance criteria
- Push notifications
- User provisioning with Custom Claims

Deploy functions separately:

```bash
npm run deploy:functions
```

## Updating

To pull updates from the upstream repository:

```bash
git remote add upstream git@github.com:manufosela/planning-game-xp.git
git fetch upstream
git merge upstream/main
npm install
npm run build:all && npm run deploy:all
```

## What's Next?

- Read the [Quick Start guide](/docs/getting-started/quick-start/) to learn the basics of task management
- Configure the [MCP Server](/docs/mcp/install/) for AI agent integration
- Explore the [Architecture overview](/docs/architecture/overview/) to understand the system design
