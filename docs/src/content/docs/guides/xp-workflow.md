---
title: XP Workflow
description: How Planning Game enforces eXtreme Programming practices.
---

Planning Game XP is built around eXtreme Programming principles. Here's how the workflow is enforced.

## Sprint Planning

1. **Create Sprint** with start/end dates
2. **List backlog** — all tasks in "To Do" status
3. **Estimate** each task with devPoints and businessPoints
4. **Prioritize** — tasks are auto-sorted by `(businessPoints / devPoints) × 100`
5. **Assign to sprint** — move tasks into the active sprint

## Task Lifecycle

```
To Do → In Progress → To Validate → Done → Done&Validated
```

### To Do → In Progress
Required fields:
- `developer` — who's working on it
- `validator` — who will review it
- `sprint` — which sprint
- `devPoints` and `businessPoints` — estimation
- `startDate` — auto-set to now

**WIP Limit**: Each developer can have only ONE task "In Progress" across ALL projects.

### In Progress → To Validate
Required fields:
- `endDate` — when work finished
- `commits` — array of `{hash, message, date, author}`
- `pipelineStatus.prCreated` — PR URL and number

### To Validate → Done
Only the assigned **validator** can approve. The MCP server and Cloud Functions enforce this — developers cannot mark their own work as done.

## Branch Strategy

Every task or bug gets its own branch:

- Tasks: `feat/{CARD-ID}-short-description`
- Bugs: `fix/{CARD-ID}-short-description`

Direct commits to `main` are not allowed. All changes go through Pull Requests.

## Implementation Plans

For tasks with `devPoints >= 3`, an implementation plan is required before coding:

- **approach** — Technical strategy and rationale
- **steps** — Each step = 1 potential commit
- **dataModelChanges** — Database schema changes
- **apiChanges** — API/endpoint modifications
- **risks** — Known risks and mitigations
- **outOfScope** — What's explicitly excluded

The plan must be validated by the user before implementation begins.

## Test-First Development

Planning Game enforces TDD:

1. Write/verify tests BEFORE making changes
2. Run tests after EVERY change
3. Fix failing tests before proceeding
4. Minimum coverage: services 80%, utilities 90%, components 70%
