---
title: Pipeline Tracking
description: Track cards from commit to deployment.
---

Planning Game tracks every card through the delivery pipeline with visual badges.

## Pipeline Events

| Event | When | Required Fields |
|-------|------|-----------------|
| **Committed** | After git commit | `date`, `commitHash`, `branch` |
| **PR Created** | After creating PR | `date`, `prUrl`, `prNumber` |
| **Merged** | After PR is merged | `date`, `mergedBy` |
| **Deployed** | After deployment | `date`, `environment` |

## Visual Badges

Cards display pipeline progress as colored badges:

- **C** (Committed) — Code has been committed
- **PR** (Pull Request) — PR has been created
- **M** (Merged) — PR has been merged to main
- **D** (Deployed) — Changes are live in production

## Enforcement

The MCP server requires `pipelineStatus.prCreated` (with `prUrl` and `prNumber`) to transition:
- Tasks to "To Validate"
- Bugs to "Fixed"

This ensures every card has a traceable PR before it can be reviewed.

## Branch Naming

Branches follow a strict convention:

```
feat/{CARD-ID}-short-description   # For tasks
fix/{CARD-ID}-short-description    # For bugs
```

Examples:
- `feat/PLN-TSK-0042-add-pipeline-badges`
- `fix/PLN-BUG-0015-modal-crash`

## AI Usage Tracking

When AI agents (BecarIA) work on tasks, usage is tracked:

```json
{
  "sessionId": "uuid",
  "model": "claude-opus-4-6",
  "durationMinutes": 30,
  "action": "implementation"
}
```

This data helps measure AI productivity and cost per task.
