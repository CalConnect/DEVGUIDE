---
layout: toc-type
title: Implementations
parent: "/jscalendar/"
parents: jsCalendar:/jscalendar
order: 1000
permalink: "/jscalendar/implementations/"
---

jsCalendar (RFC 8984) is a relatively new standard, and the ecosystem of implementations is still growing. Below are known libraries and tools that support jsCalendar.

## Libraries

### JavaScript / TypeScript

- **jscalendar** — A JavaScript library for parsing and serializing jsCalendar objects. Provides validation and type checking against the RFC 8984 schema.

### Rust

- **rust-jscalendar** — A Rust crate for jsCalendar serialization and deserialization with strong typing.

## Server Implementations

- **Stalwart Mail Server** — Supports jsCalendar as part of its CalDAV and scheduling capabilities.
- **Cyrus IMAP** — Supports jsCalendar for calendar data storage and retrieval alongside iCalendar.

## Related Standards

- **JMAP for Calendars** (RFC 8621) — Uses jsCalendar as its data model. JMAP implementations that support calendar functionality inherently support jsCalendar.
- **JSContact** (RFC 9553) — A companion standard that uses the same JSON design patterns for contact data, serving as the JSON equivalent of vCard.

## Getting Started

If you are building a new calendar application and have no legacy iCalendar data, consider using jsCalendar as your primary data format. It avoids the parsing complexity of iCalendar and works naturally with JSON-based APIs and databases.

For applications that need to interoperate with existing iCalendar ecosystems, look for libraries that support conversion between iCalendar and jsCalendar formats.
