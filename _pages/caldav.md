---
layout: toc-type
title: CalDAV
parent: "/"
parents: CalDAV:/caldav/
order: 400
permalink: "/caldav/"
---

CalDAV (RFC 4791) extends WebDAV for managing calendar data on remote servers. It models calendars as WebDAV collections containing iCalendar resources.

## Core Concepts

- **Calendar collections** — WebDAV collections containing iCalendar objects.
- **Calendar Home Set** — Contains all of a user's calendars, discovered via the `calendar-home-set` property.
- **Principal URLs** — Each user has a principal resource linking to their calendar home set.
- **Well-known URL** — `/.well-known/caldav` for service discovery.

## HTTP Methods

CalDAV uses standard HTTP methods plus WebDAV extensions:

- **GET/PUT/DELETE** — Read, create/update, and remove calendar resources.
- **PROPFIND** — Discover collection properties and list resources.
- **REPORT** — Calendar-specific queries (e.g., time-range queries via `calendar-query`).
- **MKCALENDAR** — Create a new calendar collection.

## Calendar Query Example

```xml
<C:calendar-query xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:caldav">
  <D:prop>
    <D:getetag/>
    <C:calendar-data/>
  </D:prop>
  <C:filter>
    <C:comp-filter name="VCALENDAR">
      <C:comp-filter name="VEVENT">
        <C:time-range start="20240115T000000Z" end="20240116T000000Z"/>
      </C:comp-filter>
    </C:comp-filter>
  </C:filter>
</C:calendar-query>
```

## Scheduling

CalDAV includes scheduling extensions (RFC 6638) for iTIP-based scheduling, allowing organizers and attendees to exchange invitations, replies, and cancellations through the server.

## Sync

The `sync-collection` report enables efficient synchronization by returning only resources that have changed since the last sync token.
