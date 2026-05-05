---
layout: toc-type
title: FreeBusy and Availability
parent: "/scheduling/"
parents: Scheduling:/scheduling
order: 3
permalink: "/scheduling/free-busy/"

---
Free/Busy information allows querying a user's availability without revealing event details.

## VFREEBUSY

The VFREEBUSY component represents periods of free or busy time:

```
BEGIN:VFREEBUSY
ORGANIZER:mailto:alice@example.com
DTSTART:20240115T000000Z
DTEND:20240122T000000Z
FREEBUSY:20240115T090000Z/20240115T100000Z
FREEBUSY;FBTYPE=BUSY:20240116T140000Z/20240116T153000Z
FREEBUSY;FBTYPE=FREE:20240117T000000Z/20240117T235959Z
END:VFREEBUSY
```

### FBTYPE Values

- `FREE` — Available.
- `BUSY` — Unavailable.
- `BUSY-UNAVAILABLE` — Unavailable (personal/out-of-office).
- `BUSY-TENTATIVE` — Tentatively unavailable.

## Free/Busy Queries

A CalDAV client can request free/busy information from a server using a `free-busy-query` REPORT:

```xml
<C:free-busy-query xmlns:C="urn:ietf:params:xml:ns:caldav">
  <C:time-range start="20240115T000000Z" end="20240122T000000Z"/>
</C:free-busy-query>
```

## VAVAILABILITY (RFC 7953)

Defines recurring availability windows. Unlike VFREEBUSY which describes actual busy periods, VAVAILABILITY describes when a user is *generally* available:

```
BEGIN:VAVAILABILITY
DTSTART;TZID=America/New_York:20240101T090000
DTEND;TZID=America/New_York:20241231T170000
RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
BEGIN:AVAILABLE
DTSTART;TZID=America/New_York:20240101T090000
DTEND;TZID=America/New_York:20240101T170000
RRULE:FREQ=DAILY
SUMMARY:Office hours
END:AVAILABLE
END:VAVAILABILITY
```
