---
layout: toc-type
title: Bootstrapping
parent: "/caldav/client/"
parents: CalDAV:/caldav;Client:/caldav/client/
order: 2
permalink: "/caldav/bootstrapping/"

---
CalDAV service discovery — how clients locate the server and user's calendar data.

## Well-Known URLs

The simplest discovery method. The client makes a GET or PROPFIND request to:

```
https://example.com/.well-known/caldav
```

The server redirects (302/307) to the actual CalDAV endpoint.

## DNS SRV Records

Servers can advertise CalDAV via DNS SRV records:

```
_caldavs._tcp.example.com. SRV 0 1 443 caldav.example.com.
```

The client looks up the SRV record to find the CalDAV server host and port.

## Principal Discovery

After reaching the CalDAV endpoint, PROPFIND for `current-user-principal`:

```xml
<D:propfind xmlns:D="DAV:">
  <D:prop><D:current-user-principal/></D:prop>
</D:propfind>
```

## Calendar Home Set

From the principal URL, PROPFIND for `calendar-home-set`:

```xml
<D:propfind xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:caldav">
  <D:prop><C:calendar-home-set/></D:prop>
</D:propfind>
```

This returns the URL of the collection containing all the user's calendars.
