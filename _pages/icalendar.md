---
layout: toc-type
title: iCalendar
order: 200
parent: "/"
parents: iCalendar:/icalendar/
permalink: "/icalendar/"
---

iCalendar (RFC 5545) is the Internet Calendaring and Scheduling Core Object Specification — the standard data format for representing and exchanging calendaring and scheduling information. It defines a text-based format for calendar events (VEVENT), to-do items (VTODO), journal entries (VJOURNAL), free/busy information (VFREEBUSY), and time zone definitions (VTIMEZONE).

## What You Need to Know

At its core, an iCalendar object is a collection of properties and components encoded in a plain-text format (often stored in `.ics` files). Each calendar component contains properties that describe it — start and end times, summaries, descriptions, attendees, recurrences, and more.

Key concepts for developers:

- **Components** — VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE are the primary building blocks.
- **Properties** — Each component has properties like DTSTART, DTEND, SUMMARY, UID, and RRULE that define its behavior.
- **Recurrence rules** — The RRULE property enables complex repeating patterns (daily, weekly, monthly, yearly) with exceptions and modifications.
- **Time zone handling** — iCalendar can represent times as UTC, local (floating), or with explicit time zone references using VTIMEZONE.
