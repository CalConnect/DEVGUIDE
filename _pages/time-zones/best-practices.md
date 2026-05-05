---
layout: toc-type
title: Best practices
parent: "/time-zones/"
parents: Time Zones:/time-zones
order: 1
permalink: "/time-zones/best-practices/"

---
Best practices for handling time zones in calendar data.

## General Rules

1. **Always store events with time zone information.** Use TZID references or UTC — never store ambiguous local times for shared events.

2. **Use IANA time zone identifiers.** Prefer `America/New_York` over `US/Eastern` or `EST/EDT`. IANA IDs are stable and cover historical changes.

3. **Include VTIMEZONE components.** When generating iCalendar data, always include the VTIMEZONE definitions referenced by TZID parameters.

4. **Convert on display, not on storage.** Store times in their original time zone. Convert to the viewer's local time zone only when displaying.

5. **Update VTIMEZONE definitions.** Time zone rules change (countries alter DST dates). Regenerate VTIMEZONE from current IANA data periodically.

## For CalDAV Servers

- Validate TZID references against included VTIMEZONE components.
- Map unknown TZID values to standard IANA identifiers when possible.
- Serve correct VTIMEZONE definitions when clients request calendar data.

## For CalDAV Clients

- Always send VTIMEZONE components when creating or updating events.
- Handle both IANA-style TZIDs and legacy/vendor-specific TZIDs.
- Update your local copy of the IANA time zone database regularly.

## Common Mistakes

- Assuming UTC offset never changes (it does, due to DST).
- Using abbreviations like `EST` as TZID (ambiguous — could be US Eastern or Australian Eastern).
- Ignoring historical time zone changes (rules change retroactively).
- Storing all times as UTC and losing the original time zone context.
