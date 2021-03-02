---
layout: toc-type
title: Best Practices
parent: "/iMip"
mainParent: "iMip"
parents: "iMip:/iMip"
order: 400
---

## Best Practices

Email messages may have more than a single iCalendar file attached, particular
in the case of PUBLISH/REFRESH/ADD where a calendar file is being broadcast.
As a processor of iMIP messages you may care about these things, but as a
generator the best practice is to only attach a single iMIP file to each email.

The recommended structure the email is as follows:

* multipart/mixed
  * multipart/alternative
    * text/plain
    * text/html
    * text/calendar; method=REQUEST
  * application/ics (with a content-disposition:attachment) BASE64

This structure is based on interoperability testing with various existing
implementations.  Some clients will only see the part with the standard
text/calendar content-type and the method header.  Other clients are only
able to attached parts with application/ics (which is non-standard)

It is also recommended that the filename of the application/ics part end
with `.ics`.

Some vendors add links within the HTML part which can be used from
non-calendaring-aware email clients to accept or decline a request
without having to process the calendar parts at all.  The server just
updates the ORGANIZER's copy of the event based on the link clicked.

Note that email clients taking short-cuts may lead to significant
issues regarding spam and other attacks.

An example of the whole RFC message is provided on [GitHub](https://github.com/CalConnect/DEVGUIDE-EXAMPLES/blob/master/imip/imip_example.txt).

One useful practice is to set the ORGANIZER address to a per-event or
per-calendar agent email address rather than the personal address of a
human, while still adding the personal address of the ORGANIZER as one
of the ATTENDEEs.  Particularly with a per-event address which is not
easily guessable, the server can do more automated processing of
incoming replies.

# Automatic handling of incoming iMIP messages

To avoid spam automatically being added to calendars, it is recommended to
provide some upfront checking of emails before blindly processing the
attached calendar parts, for example checking if the sender email is in the
recipient's address book or if the UID of an incoming REPLY or REQUEST is
already in the user's calendar, implying that they created or have already
accepted this event.

# Gotchas and things to be aware of

If you're writing a client which is talking CalDAV to a server there isn't
much to think about other than the being aware that if there is a
SCHEDULE-AGENT attribute on your ATTENDEE and it's not "SERVER" then the
server won't send out iMIP messages on your behalf.

You also need to read enough of RFC6638 to know how you are legally allowed
to modify a scheduling resource if you are not the ORGANIZER.  Section 2.4.1
defines the CALDAV:calendar-user-address-set, which is the addresses which
are "you" for the purpose of scheduling.  Generally it's a set of one address,
and most clients seem to only look for one.  So just use one!

As an ATTENDEE, you can modify your own ATTENDEE property within the VEVENT
and the server will send an iMIP REPLY to the ORGANIZER to update the master
copy of the event.  Deleting your copy of the VEVENT will cause the server
to send a REPLY with PARTSTAT=DECLINED, the same as declining the request.

As a server author, things are much more complex.  Not only do you have to
determine which attendee the client is when processing an update to a
scheduling VEVENT via CalDAV, you then need to calculate the correct iMIP
message to send.

In particular, Section 3.2.6 'Restrict Recurrence Instances Sent to "Attendees"'
means that the VEVENT will have to be rewritten depending on which attendee the
iMIP message is being sent to.  It is easiest by far to send a separate email
to each ATTENDEE.

One of the most complex cases to handle, both as a sender and as a recipient of
iMIP, is the case where an ATTENDEE is invited to only a single recurrence or
(even more complex) to multiple single recurrences of a repeating event, but is
not invited to the entire event.  In this case the ATTENDEE receives one or more
VEVENTS with both a UID and a RECURRENCE-ID, but no VEVENT with just the UID.
Handling these "naked" recurrences is a frequent source of bugs in implementations.

# No negotiation

iMIP via email provides no return channel other than sending a new iMIP back,
so there's no protocol negotiation.  All VEVENTs need to be lowest common
denominator VERSION:2.0 ICALENDAR files complete with VTIMEZONEs for all
mentioned timezone names.
