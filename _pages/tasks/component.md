---
layout: toc-type
title: Component
parent: "/tasks/"
parents: Tasks:/tasks
order: 200
permalink: "/tasks/component/"
---

The `VTODO` component defines a task or to-do item in iCalendar. This page covers each property in detail.

## Required Properties

- **UID** — Globally unique identifier for the task. Use a UUID or similar unique value.
- **DTSTAMP** — The timestamp when the task was last modified. Updated automatically by the creating application.
- **SUMMARY** — A brief description of the task.

## Timing Properties

- **DTSTART** — When the task was created or when work should begin. Optional for tasks (unlike events, where it is required).
- **DUE** — The deadline for task completion. Mutually exclusive with `DURATION`.
- **DURATION** — The expected time to complete the task. An alternative to `DUE` — the due date is calculated as `DTSTART + DURATION`.

Example with deadline:

```
BEGIN:VTODO
UID:task-002@example.com
DTSTAMP:20250315T090000Z
SUMMARY:Prepare presentation slides
DTSTART:20250315T090000Z
DUE:20250319T170000Z
END:VTODO
```

## Status and Progress

- **STATUS** — The current state of the task:

| Value | Meaning |
|---|---|
| `NEEDS-ACTION` | Task has not been started |
| `IN-PROCESS` | Work is underway |
| `COMPLETED` | Task is finished |
| `CANCELLED` | Task was cancelled |

- **PERCENT-COMPLETE** — An integer from 0 to 100 indicating progress. Applications typically update this incrementally rather than jumping from 0 to 100.
- **COMPLETED** — A `DATE-TIME` value recording when the task was completed. Set this when `STATUS` changes to `COMPLETED`.

## Priority

**PRIORITY** — A number from 0 to 9:

| Value | Meaning |
|---|---|
| 0 | Undefined (no priority) |
| 1 | Highest |
| 2 | Second highest |
| 3 | Third highest |
| 4–5 | Medium |
| 6–7 | Low |
| 8–9 | Lowest |

Note: lower numbers mean higher priority. This is a common source of confusion.

## Associations

- **RELATED-TO** — Links this task to another component (event, task, or other). Used for sub-task relationships, dependencies, or linking a task to its originating event. The `RELTYPE` parameter specifies the relationship type: `PARENT`, `CHILD`, or `SIBLING`.
- **CATEGORIES** — One or more category labels (e.g., `Work`, `Personal`, `Project Alpha`).
- **ATTENDEE** — People assigned to or involved with the task.

## Full Example

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example//TaskApp//EN
BEGIN:VTODO
UID:task-003@example.com
DTSTAMP:20250315T120000Z
SUMMARY:Finalize Q1 budget proposal
DTSTART:20250316T090000Z
DUE:20250320T170000Z
PRIORITY:2
STATUS:IN-PROCESS
PERCENT-COMPLETE:45
CATEGORIES:Finance,Quarterly
RELATED-TO;RELTYPE=PARENT:project-001@example.com
END:VTODO
END:VCALENDAR
```
