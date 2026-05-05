---
layout: toc-type
title: Validation
parent: "/icalendar/"
parents: iCalendar:/icalendar
order: 900
permalink: "/icalendar/validation/"

---
Validation ensures iCalendar data works across all implementations.

## Why Validate

- **Interoperability** — Different apps tolerate malformed data differently.
- **Data integrity** — Missing properties cause silent failures.
- **Security** — Malformed data has been used in exploits.

## What to Validate

**Structural:** BEGIN/END pairing, property syntax, component nesting, line folding.

**Semantic:** Required properties (DTSTAMP, UID, DTSTART), date/time formats, TZID/VTIMEZONE consistency, RRULE syntax.

## Common Errors

1. Missing DTSTAMP
2. Wrong line endings (need CRLF)
3. Missing UID
4. Unfolded long lines (fold at 75 octets)
5. TZID without VTIMEZONE
6. Incorrect special character escaping
