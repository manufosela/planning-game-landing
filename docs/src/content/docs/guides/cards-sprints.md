---
title: Cards & Sprints
description: Understanding card types, statuses, and sprint management.
---

## Card Types

### Tasks
Feature work items with structured descriptions:

- **User Story**: Como (role) / Quiero (goal) / Para (benefit)
- **Acceptance Criteria**: Given / When / Then (Gherkin format)
- **Estimation**: devPoints (effort) + businessPoints (value)
- **Priority**: Auto-calculated from points

### Bugs
Defect tracking with severity levels:

| Priority | Description |
|----------|-------------|
| APPLICATION BLOCKER | App is unusable |
| DEPARTMENT BLOCKER | Department workflow blocked |
| INDIVIDUAL BLOCKER | Single user blocked |
| USER EXPERIENCE ISSUE | UX degradation |
| WORKFLOW IMPROVEMENT | Process enhancement |
| WORKAROUND AVAILABLE ISSUE | Bug with known workaround |

Bug lifecycle: `Created → Assigned → Fixed → Verified → Closed`

### Epics
Large work items that group related tasks. Every task must belong to an epic.

### Proposals
Ideas or feature requests. Can be converted to tasks after refinement and estimation.

### Sprints
Time-boxed iterations with:

- **Start/End dates**
- **Aggregated points** (devPoints + businessPoints from assigned tasks)
- **Year filtering** — sprints belong to a specific year

## Card ID Format

All cards follow the pattern: `{PROJECT_ABBR}-{TYPE}-{NUMBER}`

- Tasks: `PLN-TSK-0042`
- Bugs: `PLN-BUG-0015`
- Epics: `PLN-PCS-0003`
- Sprints: `PLN-SPR-0001`
- Proposals: `PLN-PRP-0001`

## Developer Assignment

- Tasks are created without a developer ("To Do")
- Developers can only **self-assign** tasks
- Only SuperAdmin can assign tasks to other developers
- Developer IDs use the format `dev_XXX`

## Validation

Tasks require a **validator** (stakeholder) who reviews the work:

1. Developer completes work → sets status to "To Validate"
2. Validator reviews → sets status to "Done" or "Done&Validated"
3. If issues found → validator sets status to "Reopened"

The system enforces that developers cannot validate their own work.
