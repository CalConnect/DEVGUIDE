---
layout: toc-type
title: Publishing Events
parent: "/"
parents: Publishing Events:/publishing/
order: 800
permalink: "/publishing/"
---

Calendar publishing makes calendar data available for others to discover and consume. This ranges from simple static file hosting to real-time subscription feeds and server-managed sharing.

## Publishing Methods

### Static File Publishing

The simplest approach: generate an `.ics` file and make it available at a public URL. Consumers download and import the file into their calendar application. This provides a one-time snapshot — updates require the consumer to re-download.

Use this for: one-time event sharing, downloadable calendars that rarely change.

### Subscription Feeds

Calendar applications can subscribe to a URL that serves an iCalendar file. The application periodically polls the URL for updates. The `webcal://` URI scheme is commonly used to trigger subscription behavior, though `https://` works identically and is preferred.

```
webcal://example.com/holidays.ics
https://example.com/holidays.ics
```

Use this for: regularly updated calendars (sports schedules, holiday lists, organization events).

### Server-Managed Sharing

CalDAV servers can share calendar collections with other users or make them publicly readable. This provides real-time synchronization and access control through WebDAV ACLs.

Use this for: internal team calendars, shared scheduling, scenarios requiring access control.

## Caching

For subscription feeds, HTTP caching headers reduce unnecessary requests:

- **ETag** — Return an `ETag` header with each response. Clients send `If-None-Match` on subsequent requests, and the server responds with `304 Not Modified` if nothing changed.
- **Last-Modified** — Similar to ETag but uses timestamps. Clients send `If-Modified-Since`.
- **Cache-Control** — Set `max-age` to indicate how long the client can cache the response before re-fetching.

## Authentication

For private calendars:

- **HTTP Basic/Digest authentication** — Standard username/password protection.
- **Token-based URLs** — Embed a unique token in the URL (e.g., `https://example.com/cal/{secret-token}/calendar.ics`). The token acts as a shared secret. Keep these URLs confidential — anyone with the URL can access the calendar.
- **OAuth** — For API-based access, use OAuth 2.0 tokens in the `Authorization` header.

## Performance

For large calendars:

- Publish only future events to reduce file size
- Consider splitting into multiple feeds by category or time range
- Use gzip compression for `.ics` responses
- Set appropriate `Cache-Control` headers to reduce server load
