---
layout: toc-type
title: Server
parent: "/caldav/"
order: 3
parents: CalDAV:/caldav
permalink: "/caldav/server/"

---
CalDAV server requirements and implementation considerations.

## Requirements (RFC 4791)

A CalDAV server must:

- Support WebDAV Class 1 and 2 (locking not required).
- Support the `calendar-collection` resource type.
- Implement MKCALENDAR for creating calendar collections.
- Support the `calendar-query` REPORT for time-range queries.
- Support GET, PUT, DELETE, PROPFIND on calendar resources.
- Include ETags on all calendar resources.

## Calendar Collections

A calendar collection:

- Contains iCalendar resources (VEVENT, VTODO, VJOURNAL).
- Has properties: display name, color, calendar description, supported component types.
- Supports PROPFIND to list child resources.

## Scheduling (RFC 6638)

A CalDAV server may support scheduling:

- **Scheduling Inbox** — Receives incoming iTIP messages.
- **Scheduling Outbox** — Sends iTIP messages to other users.
- **Calendar-user-address-set** — Maps email addresses to calendar users.
- **Auto-scheduling** — Server processes iTIP messages automatically.

## Sub-Pages

- [Server Implementations](/caldav/server-implementations/) — Known CalDAV server software.
