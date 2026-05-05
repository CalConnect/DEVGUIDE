---
layout: toc-type
title: Scheduling
parent: "/"
parents: Scheduling:/scheduling
order: 600
permalink: "/scheduling/"

---
Scheduling in iCalendar enables calendar users to coordinate events. The iCalendar scheduling framework uses iTIP methods to exchange invitations, replies, and cancellations.

## Components of Scheduling

### iTIP (RFC 5546)

Defines the scheduling methods: REQUEST, REPLY, CANCEL, ADD, REFRESH, COUNTER, DECLINECOUNTER. These methods operate on iCalendar components to coordinate between an organizer and attendees. See the [iTIP section](/itip/) for full details.

### iMIP (RFC 6047)

The email transport for iTIP messages. Wraps iTIP scheduling objects in MIME email for delivery through standard email infrastructure. See the [iMIP section](/imip/) for full details.

### CalDAV Scheduling (RFC 6638)

Server-managed scheduling through CalDAV. The server handles delivery of iTIP messages, eliminating the need for email transport.

### Free/Busy

VFREEBUSY components allow querying a user's availability without revealing event details.
