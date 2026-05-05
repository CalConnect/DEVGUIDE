---
layout: toc-type
title: iMIP
order: 2
parent: "/scheduling/"
parents: Scheduling:/scheduling;iMIP:/imip
published: true
permalink: "/imip/"
---

iMIP (RFC 6047) — iCalendar Message-Based Interoperability Protocol — defines how to transport iTIP scheduling messages over email. It specifies how iCalendar objects are encapsulated in MIME messages so that calendar applications can exchange invitations, replies, and cancellations through standard email infrastructure.

## How It Works

iMIP wraps iTIP scheduling messages (REQUEST, REPLY, CANCEL, etc.) as MIME parts in email messages. A typical iMIP message contains:

- A text/plain body part for human-readable content
- A text/calendar MIME part with `method=` parameter indicating the iTIP method
- Optional multipart/alternative structure for rich-text clients

When a user receives an iMIP message, their email or calendar client parses the text/calendar part and processes the scheduling operation — displaying an invitation, recording a response, or updating an existing event.

## Implementation Considerations

- **Encoding** — iCalendar data in iMIP messages should use UTF-8 encoding and proper Content-Transfer-Encoding (base64 or quoted-printable for non-ASCII content).
- **Message identification** — The UID property in the iCalendar object must match across all scheduling messages for the same event.
- **Security** — iMIP messages can be signed or encrypted using S/MIME. Implementations should validate the sender before processing scheduling operations.
