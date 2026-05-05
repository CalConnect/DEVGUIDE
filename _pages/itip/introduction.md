---
layout: toc-type
title: iTIP introduction
parent: "/itip/"
parents: Scheduling:/scheduling;iTIP:/itip
order: 100
permalink: "/itip/introduction/"
---

iTIP (iCalendar Transport-Independent Interoperability Protocol), defined in RFC 5546, specifies how to use iCalendar objects for group scheduling. It defines the semantics of scheduling operations — requests, replies, cancellations, and counter-proposals — independent of the transport mechanism (iMIP, CalDAV scheduling, or others).

## The Organiser-Attendee Model

iTIP centers on an organiser who owns a calendar component (typically `VEVENT`) and one or more attendees. The organiser is responsible for:

- Creating the initial event and sending invitations
- Processing attendee replies and updating the event state
- Sending updates when the event changes
- Cancelling the event when needed

Each attendee has a participation status (`PARTSTAT`): `NEEDS-ACTION`, `ACCEPTED`, `DECLINED`, `TENTATIVE`, or `DELEGATED`. Attendees send replies to update their status.

## Scheduling Methods

iTIP defines six methods, carried in the `METHOD` property of the iCalendar object:

| Method | Purpose |
|---|---|
| `PUBLISH` | Broadcast an event (no replies expected) |
| `REQUEST` | Invite attendees to an event |
| `REPLY` | Respond to a REQUEST with attendance status |
| `ADD` | Add new instances to a recurring event |
| `CANCEL` | Cancel an event or remove attendees |
| `REFRESH` | Request a current copy of an event |
| `COUNTER` | Propose changes to an event (counter-offer) |
| `DECLINECOUNTER` | Reject a counter-proposal |

## Workflow Example

1. **Organiser** sends a `REQUEST` with `METHOD:REQUEST` containing the `VEVENT` and `ATTENDEE` list.
2. **Attendee** receives the request, decides to attend, and sends a `REPLY` with `PARTSTAT:ACCEPTED`.
3. **Organiser** receives the reply and updates their copy of the event with the attendee's status.
4. If the event changes, the organiser sends a new `REQUEST` with an incremented `SEQUENCE` number.
5. To cancel, the organiser sends a `CANCEL` with `METHOD:CANCEL`.

## Key Properties

- `UID` — Uniquely identifies the scheduling object across all messages.
- `SEQUENCE` — Monotonically increasing counter for updates. Attendees must ignore messages with lower sequence numbers.
- `RECurrence-ID` — Identifies a specific instance of a recurring event being modified.
- `ATTENDEE` — Includes `ROLE`, `RSVP`, and `PARTSTAT` parameters to track participation.
