---
layout: toc-type
title: Handling Dates and Times
parent: "/icalendar/"
parents: iCalendar:/icalendar
order: 300
permalink: "/icalendar/dates-and-times/"

---
iCalendar provides several value types for dates and times.

## Value Types

### DATE — `YYYYMMDD`

```
DTSTART;VALUE=DATE:20240115
```

For all-day events, holidays, birthdays.

### DATETIME — `YYYYMMDDTHHMMSS`

```
DTSTART:20240115T090000
```

### TIME — `HHMMSS`

Standalone time without a date.

## Time Zone Handling

**UTC** — Append `Z`:

```
DTSTART:20240115T090000Z
```

**Floating** — No `Z` or TZID. Same wall-clock time everywhere.

**TZID reference** — Links to a VTIMEZONE component:

```
DTSTART;TZID=America/New_York:20240115T090000
```

## Best Practices

- Use UTC for DTSTAMP, CREATED.
- Use TZID for event start/end times.
- Always include referenced VTIMEZONE components.
- Prefer IANA time zone identifiers.
- Avoid floating times for cross-timezone events.
