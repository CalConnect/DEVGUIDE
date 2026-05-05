---
layout: toc-type
title: Calendar Spam
order: 1100
parent: "/"
parents: Calendar Spam:/calendar-spam
permalink: "/calendar-spam/"
---

Calendar spam is the practice of sending unsolicited calendar invitations to users' calendars. Because many email and calendar clients automatically process incoming iMIP invitations and display them on the user's calendar, spammers exploit this behavior to inject unwanted or malicious content directly into a user's calendar view.

## How Calendar Spam Works

1. The spammer creates an iCalendar `VEVENT` with an enticing or alarming summary (e.g., "Your package delivery", "You won a prize").
2. The event is sent via iMIP (email with `text/calendar` MIME part) to a large number of addresses.
3. The recipient's email client or calendar application automatically adds the event to the user's calendar.
4. The event appears on the user's calendar with no action required — the user may not even see the invitation email.

## Why It's a Problem

- **Visibility** — Calendar events are prominently displayed. Users see spam every time they check their schedule.
- **Persistence** — Unlike email spam that can be filtered to a junk folder, calendar events remain visible until manually removed.
- **Phishing vector** — Spam events can contain malicious URLs in the `DESCRIPTION` or `LOCATION` fields.
- **Notification spam** — Events with alerts trigger notifications on the user's device.
- **Credibility** — Events appearing on a calendar feel more legitimate than email, making users more susceptible to social engineering.

## Prevention for Users

- **Disable auto-accept** — Configure your calendar client to never automatically add invitations. Require manual review for every incoming event.
- **Report junk** — Use your email client's "Report Junk" feature for unwanted calendar invitations. This trains spam filters.
- **Delete and decline** — When you receive a spam invitation, decline it before deleting. This removes it from your calendar and notifies the sender (though the spammer likely ignores responses).
- **Use separate calendars** — Keep a separate calendar for untrusted invitations so spam doesn't clutter your primary schedule.

## Prevention for Developers

- **Do not auto-add by default** — Calendar applications should not automatically add events from unknown senders. Show invitations in a separate "Incoming" view first.
- **Spam filtering for iMIP** — Extend email spam filters to understand `text/calendar` MIME parts. Apply the same reputation scoring used for email spam.
- **Sender validation** — Verify that the SMTP sender matches the `ORGANIZER` property before processing an invitation.
- **User controls** — Provide clear settings for how incoming invitations are handled (auto-add, auto-decline from unknown senders, manual review only).
- **Rate limiting** — Limit the number of calendar invitations a user receives from a single sender within a time window.

## Industry Efforts

Several proposals and best practices have been discussed within CalConnect and the IETF to address calendar spam, including:

- Requiring explicit user consent before adding events to a calendar
- Standardizing calendar invitation reputation systems
- Improving iMIP processing rules in email clients
- Using CalDAV scheduling (RFC 6638) instead of iMIP where possible, since CalDAV provides server-side filtering
