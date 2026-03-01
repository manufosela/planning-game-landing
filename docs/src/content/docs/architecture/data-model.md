---
title: Data Model
description: Firebase data structure and relationships.
---

## Card Storage

Cards are stored in Firebase Realtime Database at:

```
/cards/{projectName}/{cardType}_{projectName}/{firebaseId}/
```

### Section Mapping

| Card Type | Section Path | ID Prefix |
|-----------|-------------|-----------|
| Task | `task-card_{project}` | TSK |
| Bug | `bug-card_{project}` | BUG |
| Epic | `epic-card_{project}` | PCS |
| Sprint | `sprint-card_{project}` | SPR |
| Proposal | `proposal-card_{project}` | PRP |
| QA | `qa-card_{project}` | QAI |

### Card ID Generation

Card IDs are auto-generated using Firestore counters:

```
{PROJECT_ABBREVIATION}-{TYPE_CODE}-{PADDED_NUMBER}
```

Counter key: `{abbreviation}-{typeCode}` (e.g., `PLN-TSK`)
Counter stored in: `Firestore > projectCounters > {key} > lastId`

## Project Structure

```json
{
  "name": "Planning Game",
  "abbreviation": "PLN",
  "version": "1.153.0",
  "scoringSystem": "1-5",
  "repoUrl": "https://github.com/manufosela/planning-game-xp",
  "developers": [
    { "id": "dev_001", "name": "Mánu Fosela", "email": "..." }
  ],
  "stakeholders": ["stk_001"],
  "iaEnabled": true,
  "archived": false
}
```

## Developer Backlogs

```
/developerBacklogs/{developerId}/
├── order: ["cardKey1", "cardKey2"]  # Ordered list
└── items/
    └── {cardKey}/
        ├── cardId: "PLN-TSK-0042"
        ├── projectId: "PlanningGame"
        ├── cardType: "task"
        ├── title: "..."
        └── status: "To Do"
```

Backlog updates automatically when:
- Task with "To Do" is assigned → added
- Task moves to "In Progress" → removed (shown in WIP)
- Task completed → removed
- Developer unassigned → removed

## Year Management

All cards have a `year` field for filtering:

- Tasks/Bugs: year from creation date
- Sprints: year from start/end dates
- Backlog migration: incomplete tasks can move to next year

## Relations

Cards can have relations:

```json
{
  "relatedTasks": [
    {
      "id": "PLN-TSK-0043",
      "projectId": "PlanningGame",
      "title": "...",
      "type": "blocks"
    }
  ]
}
```

Relation types:
- **related** — Bidirectional link
- **blocks / blockedBy** — Dependency chain
