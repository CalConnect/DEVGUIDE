---
layout: toc-type
title: A History of iCalendar
parent: "/icalendar/"
parents: iCalendar:/icalendar
order: 100
permalink: "/icalendar/history/"

---
The iCalendar format has evolved over more than two decades through multiple standards iterations.

## vCalendar (1996)

The predecessor to iCalendar was vCalendar (vCal), developed by the Versit Consortium (Apple, AT&T, IBM, Siemens) in 1996. It defined a text-based format for calendar data with vEvent and vTodo components.

## iCalendar — RFC 2445 (1998)

The IETF standardized the format as RFC 2445. Key additions: standardized components (VEVENT, VTODO, VJOURNAL, VFREEBUSY, VTIMEZONE), recurrence rules (RRULE), alarm components, and formal ABNF grammar.

## iCalendar — RFC 5545 (2009)

RFC 5545 obsoleted RFC 2445. It clarified ambiguities, deprecated rarely-used features, and improved interoperability requirements. This is the current standard.

## Related Standards

- **RFC 5546** (iTIP) — Scheduling methods
- **RFC 6047** (iMIP) — Email transport for iTIP
- **RFC 6638** — CalDAV scheduling extensions
- **RFC 7808** — Time Zone Distribution Service
- **RFC 8984** (jsCalendar) — JSON calendar data
