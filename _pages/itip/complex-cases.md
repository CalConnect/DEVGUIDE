---
layout: toc-type
title: iTIP - Complex Topics
parent: "/itip/"
parents: Scheduling:/scheduling;iTIP:/itip
order: 200
permalink: "/itip/complex-cases/"
---

Real-world scheduling involves scenarios that go beyond simple invite-accept-decline flows. iTIP (RFC 5546) defines rules for handling these cases, but implementations often handle them inconsistently.

## Recurring Event Updates

Modifying individual instances of a recurring event uses `RECURRENCE-ID` to target a specific occurrence. This creates a "broken-out" instance that overrides the recurrence rule for that date.

Three operations are possible:

- **Modify** — Send a `REQUEST` with `RECURRENCE-ID` set to the original start time of the instance. The new `VEVENT` replaces that occurrence.
- **Cancel** — Send a `CANCEL` with `RECURRENCE-ID` to remove a single instance (equivalent to `EXDATE`).
- **Reschedule** — Modify the instance and change its `DTSTART`. This both modifies the instance and moves it to a new time slot.

When the organiser changes the recurrence rule itself (the `RRULE`), all existing broken-out instances remain unless explicitly cancelled. Clients must handle the interaction between `RRULE` changes and `RECURRENCE-ID` overrides carefully.

## Delegation

An attendee can delegate their attendance to another person using `DELEGATED-TO` and `DELEGATED-FROM` parameters:

```
ATTENDEE;DELEGATED-TO="mailto:delegate@example.com":mailto:original@example.com
ATTENDEE;DELEGATED-FROM="mailto:original@example.com":mailto:delegate@example.com
```

The original attendee's `PARTSTAT` changes to `DELEGATED`. The delegate receives the event and can accept or decline. Both the delegator and delegate remain in the attendee list.

## Counter-Proposals (COUNTER)

When an attendee cannot accept the event as proposed, they can send a `COUNTER` method with alternative values for `DTSTART`, `LOCATION`, or other properties. The organiser can:

- Accept the counter by sending a new `REQUEST` incorporating the changes
- Reject it with `DECLINECOUNTER`
- Ignore it (the original event stands)

Counter-proposals are advisory — the organiser retains control of the event.

## Free/Busy Negotiation

Before sending a `REQUEST`, an organiser can request free/busy information using the `VFREEBUSY` component. The response contains `FREEBUSY` periods indicating availability. This allows scheduling without revealing event details.

## Multi-Organiser and Shared Events

iTIP assigns a single organiser per component. For shared ownership, applications typically:

- Use a single organiser account that represents the group
- Rotate ownership by cancelling and re-creating with a new organiser
- Use CalDAV sharing instead of iTIP for collaborative calendars

## Implementation Challenges

- **Sequence conflicts** — Messages arriving out of order can cause clients to apply stale updates. Always check `SEQUENCE` before processing.
- **Time zone changes** — If the organiser changes the event time zone, attendees in different zones must recalculate their local times.
- **Partial attendee updates** — When only some attendees receive an update (e.g., adding a new attendee), the organiser must track which version each attendee has.
- **RECURRENCE-ID range** — The `RANGE` parameter on `RECURRENCE-ID` can apply a change to "this and all future instances", which is complex to implement correctly.
