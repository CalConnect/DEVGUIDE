---
layout: toc-type
title: Best Practices
parent: "/imip/"
parents: Scheduling:/scheduling;iMIP:/imip
order: 400
permalink: "/imip/best-practices/"
---

## Message Construction

Always include both a `text/plain` and a `text/calendar` MIME part. The `text/plain` part serves as a fallback for email clients that do not process iMIP. Wrap them in `multipart/alternative` so the client can choose the best representation.

Set the `Content-Type` header on the calendar part to `text/calendar; method=REQUEST; charset=UTF-8` (or whichever iTIP method applies). The `method` parameter must match the `METHOD` property inside the iCalendar data.

Include a valid `UID` and increment the `SEQUENCE` number for every update to an existing event. Clients use `UID` to correlate related messages and `SEQUENCE` to determine which version is current.

## Sending

Use the organizer's email address as both the `SMTP MAIL FROM` and the `ORGANIZER` property value. The `ATTENDEE` property must contain the recipient's email address so the receiving client can match the invitation to the correct calendar.

Send iTIP replies (REPLY method) to the organizer only, not to all attendees. The organizer is responsible for aggregating responses and sending updated REQUESTs if necessary.

## Processing Incoming Messages

When receiving an iMIP message:

1. Extract the `text/calendar` MIME part.
2. Validate that the `METHOD` parameter matches the `METHOD` property inside the iCalendar object.
3. Match the `ATTENDEE` value against the user's known email addresses.
4. Check the `UID` and `SEQUENCE` against existing calendar entries to determine if this is a new event, an update, or a stale message.
5. Apply the scheduling operation according to iTIP rules.

## Common Pitfalls

- **Missing or mismatched METHOD** — Without the `method` parameter in `Content-Type`, many clients will not process the calendar part.
- **Broken encoding** — Always use UTF-8 for the calendar part. Non-ASCII characters in `SUMMARY` or `LOCATION` must be properly encoded.
- **Duplicate UIDs** — Never reuse a `UID` across different events. Use a UUID or similar unique identifier.
- **Ignoring SEQUENCE** — Sending an update without incrementing `SEQUENCE` causes clients to silently ignore the new version.
