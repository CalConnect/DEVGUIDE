---
layout: toc-type
title: iTIP
order: 1
parent: "/scheduling/"
parents: Scheduling:/scheduling;iTIP:/itip
published: true
permalink: "/itip/"
---

iTIP (RFC 5546) — iTIP specifies how to use iCalendar for scheduling between calendar users. It defines the semantics of scheduling methods like REQUEST, REPLY, CANCEL, ADD, REFRESH, and COUNTER, enabling interoperability between calendar systems.

## How It Works

iTIP defines an organizer-attendee model for scheduling. The organizer creates a calendar component (typically VEVENT) and sends a scheduling message to attendees. Attendees respond with their participation status (accept, decline, tentative). The organizer can update or cancel the event at any time.

Each scheduling message is an iCalendar object with a METHOD property that indicates the type of operation. The methods are:

- **REQUEST** — Invite attendees to an event or update a previously sent invitation.
- **REPLY** — Attendee responds with their participation status.
- **CANCEL** — Cancel an event or uninvite an attendee.
- **ADD** — Add new properties to an existing component.
- **REFRESH** — Request the latest version of a component from the organizer.
- **COUNTER** — Propose a change to the event (e.g., different time or location).
- **DECLINECOUNTER** — Decline a counter-proposal from an attendee.
