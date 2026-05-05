---
layout: toc-type
title: Time Zone Distribution Service
parent: "/time-zones/"
parents: Time Zones:/time-zones
order: 3
published: true
permalink: "/time-zones/tzds/"

---
The Time Zone Distribution Service (TZDS), defined in RFC 7808, provides a standardized way to distribute time zone data over HTTPS.

## Overview

TZDS allows clients to discover and retrieve authoritative time zone definitions from a trusted server. This solves the problem of clients having outdated or inconsistent time zone data.

## Service Discovery

TZDS uses well-known URLs and WebFinger for discovery:

```
https://example.com/.well-known/timezone
```

## Operations

### List Time Zones

```
GET /tzdist/timezones
```

Returns a list of available time zone IDs.

### Get Time Zone Data

```
GET /tzdist/timezones/America/New_York
```

Returns the time zone definition in iCalendar (VTIMEZONE) or other formats.

### Sync Changes

Clients can use conditional requests (If-Modified-Since, If-None-Match) to efficiently check for updates without re-downloading unchanged data.

## Benefits

- **Single source of truth** — All clients use the same time zone data.
- **Timely updates** — Changes propagate quickly when governments alter DST rules.
- **Reduced client complexity** — Clients don't need to bundle their own tzdata.
- **Consistent format** — All clients receive VTIMEZONE in the same format.
