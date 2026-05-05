---
layout: toc-type
title: Building a CalDAV client
parent: "/caldav/"
parents: CalDAV:/caldav
order: 1
permalink: "/caldav/building-a-client/"

---
Building a CalDAV client involves service discovery, authentication, and implementing the CalDAV protocol operations.

## Steps

### 1. Service Discovery

Locate the user's CalDAV server:

1. Try `/.well-known/caldav` on the user's server domain.
2. Follow HTTP redirects to the actual CalDAV endpoint.
3. Optionally check DNS SRV records (`_caldav._tcp.domain`).

### 2. Principal Discovery

PROPFIND the well-known URL to find the user's principal URL:

```xml
<D:propfind xmlns:D="DAV:">
  <D:prop>
    <D:current-user-principal/>
  </D:prop>
</D:propfind>
```

### 3. Calendar Home Set

PROPFIND the principal URL to get the calendar home set:

```xml
<D:propfind xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:caldav">
  <D:prop>
    <C:calendar-home-set/>
  </D:prop>
</D:propfind>
```

### 4. List Calendars

PROPFIND the calendar home set to list available calendars.

### 5. Query Events

Use `calendar-query` REPORT to fetch events by time range.

### 6. Create/Update Events

PUT an iCalendar resource to a URL within a calendar collection.

### 7. Synchronize

Use `sync-collection` REPORT with a sync token for efficient incremental updates.
