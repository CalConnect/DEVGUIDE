---
layout: toc-type
title: Introduction
parent: "/imip/"
parents: Scheduling:/scheduling;iMIP:/imip
order: 200
permalink: "/imip/introduction/"
---

iMIP (iCalendar Message-Based Interoperability Protocol), defined in RFC 6047, describes how to transport iTIP scheduling objects over email using MIME. It is the most widely deployed mechanism for sending calendar invitations, replies, and cancellations between users who do not share a common CalDAV server.

## How iMIP Works

iMIP wraps iTIP scheduling messages (requests, replies, cancellations, and counter-proposals) as MIME parts in standard email messages. When a calendar application sends an invitation, it constructs an iTIP-compliant iCalendar object, encapsulates it in a `multipart/alternative` or `text/calendar` MIME part, and sends it via SMTP.

The receiving email client parses the MIME message, extracts the iCalendar part, and presents it to the user — typically as an invitation with "Accept", "Decline", and "Tentative" buttons. When the user responds, the client generates a reply iTIP object and sends it back as another iMIP message.

## MIME Structure

An iMIP message typically contains:

- A `text/plain` part with a human-readable summary of the invitation
- A `text/calendar` part with `method=REQUEST` (or `REPLY`, `CANCEL`, etc.) containing the iCalendar data
- Optional `multipart/alternative` wrapper for clients that support HTML

The `Content-Type` header for the calendar part must include the `method` parameter matching the iTIP method in the iCalendar data.

## Key Considerations

- **Compatibility** — Not all email clients handle iMIP correctly. Some ignore the `text/calendar` part entirely or render it as an attachment.
- **Identity matching** — The recipient's email address must match the `ATTENDEE` property in the iTIP object for the client to associate the invitation with the correct calendar.
- **Updates and conflicts** — Subsequent iMIP messages with the same `UID` update the original event. The `SEQUENCE` number indicates the version.
