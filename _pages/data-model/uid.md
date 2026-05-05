---
layout: toc-type
title: UID
parent: "/icalendar/data-model/"
parents: iCalendar:/icalendar;iCalendar Data Model:/icalendar/data-model
order: 200
permalink: "/icalendar/data-model/uid/"

---
UID provides a globally unique identifier for every iCalendar component.

## Format

Recommended: UUID + domain.

```
UID:550e8400-e29b-41d4-a716-446655440000@example.com
```

## Requirements

- Globally unique across all systems and users.
- Same UID = same logical event (calendar apps update, don't duplicate).
- Must never change during the component's lifecycle.

## Best Practices

- Use UUID v4 for strong uniqueness.
- Append a domain (`uuid@domain`).
- Never reuse UIDs.
- UIDs are case-sensitive.

## RECURRENCE-ID

Modified recurring instances use the same UID with RECURRENCE-ID:

```
BEGIN:VEVENT
UID:meeting@example.com
RECURRENCE-ID:20240122T100000Z
DTSTART:20240122T140000Z
SUMMARY:Meeting (moved)
END:VEVENT
```
