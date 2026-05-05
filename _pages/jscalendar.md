---
layout: toc-type
title: jsCalendar
order: 250
parent: "/"
parents: jsCalendar:/jscalendar/
permalink: "/jscalendar/"
---

jsCalendar (RFC 8984) defines a JSON data model for calendar data. It provides the same scheduling capabilities as iCalendar — events, tasks, recurrence, time zones, and participant management — but in a format that integrates naturally with web APIs and modern application stacks.

## Why jsCalendar

iCalendar's text-based format, designed in the late 1990s, requires custom parsers and has quirks like line folding, property parameter syntax, and ambiguous date-time representations. jsCalendar addresses these with:

- **Native JSON** — No custom parser needed. Every programming language has a JSON parser.
- **Type safety** — Properties use native JSON types (strings, numbers, booleans, arrays, objects) instead of encoded text values.
- **Extensibility** — Custom properties use the `@type` discriminator pattern, making it easy to add application-specific data without breaking interoperability.

## Data Model

```json
{
  "@type": "JSCalendar",
  "prodId": "ExampleApp/1.0",
  "uid": "a1b2c3d4",
  "title": "Team Standup",
  "start": "2025-03-15T09:00:00",
  "duration": "PT30M",
  "timeZone": "America/New_York",
  "participants": {
    "p1": {
      "@type": "Participant",
      "name": "Alice",
      "email": "alice@example.com",
      "roles": ["owner"],
      "participationStatus": "accepted"
    }
  },
  "alerts": {
    "a1": {
      "@type": "Alert",
      "trigger": "-PT5M"
    }
  }
}
```

## Core Types

- **JSEvent** — A calendar event with start time, duration, location, participants, and alerts.
- **JSTask** — A task or to-do item with due date, priority, and progress tracking.
- **Group** — A collection of events and/or tasks (e.g., a calendar).
- **RecurrenceRule** — Defines repeating patterns using `frequency`, `interval`, `byDay`, `byMonth`, and other modifiers.
- **Participant** — A person or entity involved in the event, with roles and RSVP status.
- **Alert** — A reminder or notification trigger, expressed as an offset or absolute time.

## Relationship to iCalendar

jsCalendar and iCalendar cover the same domain but are separate formats. A calendar application may support both, converting between them as needed. Every iCalendar property has a jsCalendar equivalent, though the reverse is not always true — jsCalendar includes features (like patching and multilingual titles) that iCalendar does not natively support.
