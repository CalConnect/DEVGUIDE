---
layout: toc-type
title: iMIP and Security
parent: "/imip/"
parents: Scheduling:/scheduling;iMIP:/imip
order: 600
permalink: "/imip/security/"
---

iMIP messages are transported over standard email, inheriting both the security properties and the vulnerabilities of email systems. Calendar spam, spoofing, and phishing through iMIP are real threats that applications must handle.

## Threat Model

- **Calendar spam** — Attackers send unsolicited invitations that automatically appear on the victim's calendar. See [Calendar Spam](/calendar-spam/) for detailed prevention strategies.
- **Spoofing** — An attacker forges the `ORGANIZER` property to impersonate a trusted sender. Without cryptographic verification, there is no reliable way to detect this over iMIP alone.
- **Phishing** — Malicious invitations can contain deceptive `LOCATION` or `DESCRIPTION` URLs that lead to phishing sites.
- **Denial of service** — Floods of iMIP messages can overwhelm a user's calendar with unwanted entries.

## Transport Security

Use TLS for SMTP submission and IMAP/POP retrieval to protect iMIP messages in transit. This prevents passive eavesdropping on calendar data but does not protect against spoofed sender addresses.

## Application-Level Mitigations

- **Do not auto-accept** — By default, invitations from unknown senders should not be added to the calendar. Require explicit user action to accept.
- **Validate the sender** — Check that the SMTP envelope sender and the `ORGANIZER` email address are consistent.
- **Sanitize URLs** — Extract and display URLs from `DESCRIPTION` and `LOCATION` properties without automatically opening them.
- **Rate limit processing** — Limit the number of iMIP messages processed from a single sender within a time window.

## Digital Signatures

iMIP messages can be signed with S/MIME or PGP, providing authentication and integrity for the iCalendar payload. However, support for verifying signatures on calendar parts is rare in email clients, making this a theoretical rather than practical defense.

The iCalendar standard defines the `PRODID` property, which can help identify the generating application, but it is not a security mechanism.

## Recommendations

1. Treat all incoming iMIP messages as untrusted input.
2. Never add events to a user's calendar without explicit consent.
3. Use TLS everywhere in the email transport chain.
4. Implement spam filtering that understands `text/calendar` MIME parts.
5. Educate users about calendar invitation phishing.
