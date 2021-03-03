---
layout: toc-type
title: iMIP and Security
parent: "/iMIP"
mainParent: "iMIP"
parents: "iMip:/iMIP"
order: 600
---

# iMip and Security issues

The normal sending and receiving of iMip should present no special issues.

However, receivers of iMip (especially attendees) should carry out a
number of checks before adding an event to their calendar.

There are a number of malevolent recurrence patterns that can fill up the users calendar - for example, overlapping short events with no limits.

Sometimes these events are placed some time into the future so they only become visible later on.

This section could use a step by step approach to validating incoming events...

# Forwarding, delegation and party crashing.
"Party crashing" is the term used to describe somebody replying to an invitation who was not invited. Calendar clients SHOULD ask the organizer if they want to add the attendee but currently there isn't much support
for automated checking of such replies.

Delegation is where a listed attendee forwards the event to somebody
else and marks them as a delegate for the original attendee. Again there
is insufficient information in current events to verify the delegation.

Simple forwarding may take place when one attendee feels somebody else
could be invited and forwards the event to that person.

Some clients, when forwarding, appear to be setting the "from" header
address to be that of the organizer rather than the person forwarding.
This causes DKIM verification failures.

# Acting on behalf-of.

Calendar properties support the concept of somebody (e.g. personal assistant)
sending out invitations on behalf of somebody else. The organizer address will be of the actual organizer, with an attached sent-by indicating who actually sent the email.

Again, this can cause problems with DKIM especially if the organizer and sender are in different email domains.

Note that in all these situations, all the necessary information is in
the calendar data itself - if done correctly. The items are:

  * Organizer address
  * Attendee addresses
  * sent-by address
  * delegated-to and delegated-from addresses.

Email client do not need to adjust headers to try to provide that
information. They should hand over the event to a calendar client and
allow that to make the necessary decisions based on the content.

There is probably some work to be done on calendar specifications to
clear up some remaining issues. For example when one user A sends
invitations on behalf of user B, the SENT-BY parameter has the address
of user A. Do replies go back to A or B? The specifications say nothing.

