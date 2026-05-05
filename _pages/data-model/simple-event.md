---
layout: toc-type
title: Creating Simple Events
parent: "/icalendar/data-model/"
parents: iCalendar:/icalendar;iCalendar Data Model:/icalendar/data-model
order: 100
permalink: "/icalendar/data-model/simple-event/"

---
## Minimal Event

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//My App//EN
BEGIN:VEVENT
DTSTAMP:20240115T090000Z
UID:550e8400-e29b-41d4-a716-446655440000@example.com
DTSTART:20240115T100000Z
SUMMARY:Team Meeting
END:VEVENT
END:VCALENDAR
```

Required: DTSTAMP, UID, DTSTART.

## Duration

Use DTEND or DURATION (not both):

```
DTSTART:20240115T100000Z
DTEND:20240115T110000Z
```

## Full Example

```
BEGIN:VEVENT
DTSTAMP:20240115T090000Z
UID:550e8400@example.com
DTSTART;TZID=America/New_York:20240115T100000
DTEND;TZID=America/New_York:20240115T110000
SUMMARY:Team Meeting
DESCRIPTION:Weekly team sync.
LOCATION:Conference Room A
ORGANIZER;CN=Alice:mailto:alice@example.com
ATTENDEE;CN=Bob;RSVP=TRUE:mailto:bob@example.com
END:VEVENT
```

## All-Day Events

```
DTSTART;VALUE=DATE:20240115
DTEND;VALUE=DATE:20240116
```

End date is exclusive.
