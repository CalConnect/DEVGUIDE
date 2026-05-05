---
layout: toc-type
title: iCalendar Data Model
parent: "/icalendar/"
parents: iCalendar:/icalendar
order: 200
permalink: "/icalendar/data-model/"

---
The iCalendar data model: components contain properties with optional parameters.

## VCALENDAR

Top-level container. Required: VERSION, PRODID.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp//Calendar//EN
...
END:VCALENDAR
```

## Components

- **VEVENT** — Scheduled event
- **VTODO** — Task or to-do
- **VJOURNAL** — Journal entry
- **VFREEBUSY** — Free/busy info
- **VTIMEZONE** — Time zone definition
- **VALARM** — Alarm (nested in VEVENT/VTODO)

## Common Properties

| Property | Description |
|---|---|
| DTSTART | Start date/time |
| DTEND | End date/time |
| DTSTAMP | Creation timestamp |
| UID | Unique identifier |
| SUMMARY | Brief description |
| DESCRIPTION | Detailed description |
| LOCATION | Location |
| ORGANIZER | Organizer |
| ATTENDEE | Participant |
| RRULE | Recurrence rule |
