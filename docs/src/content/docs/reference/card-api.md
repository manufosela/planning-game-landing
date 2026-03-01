---
title: Card API
description: Card data model and field reference.
---

## Card ID Format

```
{PROJECT_ABBREVIATION}-{TYPE_CODE}-{NUMBER}
```

| Type | Code | Example |
|------|------|---------|
| Task | TSK | PLN-TSK-0042 |
| Bug | BUG | PLN-BUG-0015 |
| Epic | PCS | PLN-PCS-0003 |
| Sprint | SPR | PLN-SPR-0001 |
| Proposal | PRP | PLN-PRP-0001 |
| QA | QAI | PLN-QAI-0001 |

## Common Fields

All card types share these fields:

| Field | Type | Description |
|-------|------|-------------|
| `cardId` | string | Auto-generated unique ID |
| `cardType` | string | "task-card", "bug-card", "epic-card", etc. |
| `title` | string | Card title |
| `status` | string | Current status |
| `projectId` | string | Parent project |
| `year` | number | Year for filtering |
| `createdAt` | string | ISO timestamp |
| `createdBy` | string | Creator identifier |
| `firebaseId` | string | Firebase RTDB push key |

## Task-Specific Fields

| Field | Type | Description |
|-------|------|-------------|
| `descriptionStructured` | array | `[{role, goal, benefit}]` — User story |
| `acceptanceCriteriaStructured` | array | `[{given, when, then}]` — Gherkin |
| `devPoints` | number | Technical effort (1-5) |
| `businessPoints` | number | Business value (1-5) |
| `priority` | number | Auto-calculated: `(bizPts/devPts) × 100` |
| `developer` | string | Assigned developer ID (dev_XXX) |
| `codeveloper` | string | Co-developer ID |
| `validator` | string | Assigned validator ID (stk_XXX) |
| `sprint` | string | Sprint ID (e.g., PLN-SPR-0001) |
| `epic` | string | Epic ID (e.g., PLN-PCS-0003) |
| `startDate` | string | When work started (ISO) |
| `endDate` | string | When work finished (ISO) |
| `commits` | array | `[{hash, message, date, author}]` |
| `pipelineStatus` | object | Pipeline tracking events |
| `implementationPlan` | object | Pre-implementation plan |
| `aiUsage` | array | AI agent usage tracking |

## Bug-Specific Fields

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Plain text description |
| `priority` | string | One of the 6 bug priority levels |
| `registerDate` | string | When bug was reported |
| `rootCause` | string | Root cause analysis (on close) |
| `resolution` | string | How it was resolved (on close) |

## Status Transitions

### Task Statuses
```
To Do → In Progress → To Validate → Done → Done&Validated
                   ↘ Blocked
         Reopened → In Progress
```

### Bug Statuses
```
Created → Assigned → Fixed → Verified → Closed
```

## Firebase Storage Path

```
/cards/{projectName}/{cardType}_{projectName}/{cardId}/
```

Example: `/cards/PlanningGame/task-card_PlanningGame/-OmXyz123/`
