---
layout: toc-type
title: Tasks
parent: "/"
parents: Tasks:/tasks/
order: 550
permalink: "/tasks/"
---

Tasks in iCalendar are represented using the `VTODO` component — a calendar component for action items and to-do entries. `VTODO` supports tracking task status, priority, due dates, completion percentage, and relationships between tasks.

## VTODO vs VEVENT

While `VEVENT` represents a scheduled occurrence in time (a meeting, an appointment), `VTODO` represents an action item that may or may not have a fixed time. Tasks can have deadlines but do not block calendar time the way events do.

A minimal `VTODO`:

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example//TaskApp//EN
BEGIN:VTODO
UID:task-001@example.com
DTSTAMP:20250315T090000Z
SUMMARY:Review quarterly report
DUE:20250320T170000Z
STATUS:NEEDS-ACTION
END:VTODO
END:VCALENDAR
```

## Task Lifecycle

1. **Created** — `STATUS:NEEDS-ACTION` (or no STATUS). The task is pending.
2. **In progress** — `STATUS:IN-PROCESS`. Work has begun. Optionally set `PERCENT-COMPLETE` to track progress.
3. **Completed** — `STATUS:COMPLETED` with `COMPLETED` property set to the completion timestamp. `PERCENT-COMPLETE` should be 100.
4. **Cancelled** — `STATUS:CANCELLED`. The task will not be completed.

## Recurring Tasks

Tasks can recur using `RRULE`, just like events. A recurring task generates new instances as each one is completed. For example, a weekly status report:

```
BEGIN:VTODO
UID:weekly-report@example.com
DTSTAMP:20250315T090000Z
DTSTART:20250317T090000Z
DUE:20250321T170000Z
SUMMARY:Submit weekly status report
RRULE:FREQ=WEEKLY;BYDAY=FR
STATUS:NEEDS-ACTION
END:VTODO
```

## Tasks in CalDAV

CalDAV servers store `VTODO` components in calendar collections alongside `VEVENT` components. Clients can query for tasks using CalDAV's `calendar-query` with a `COMPONENT` filter set to `VTODO`.

Not all CalDAV servers and clients support `VTODO`. When interoperability is critical, verify that both your server and client implementations handle task components.
