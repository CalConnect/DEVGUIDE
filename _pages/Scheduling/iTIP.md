---
layout: toc-type
title: iTIP
parent: /Scheduling/Scheduling
mainParent: "iCalendar Topics"
parents: "iCalendar Topics:/iCalendar-Topics;Scheduling:/Scheduling/Scheduling/"
order: 1
---

# iTIP - RFC 5546

iTIP is an extension to calendaring which describes how to invite attendees to meetings and how those attendees may respond to the requests. Additionally it describes how to publish events.

While RFC 5545 (and it's subsequent extensions) describe all the calendaring properties, iTIP defines both a protocol and the usage of those properties. It does not define new properties but does place some restrictions on how they may be used for iTIP.

iTIP DOES NOT describe HOW these messages are sent and received. That is described by other specifications. The most common approach is probably still [iMIP](/iMIP/iMIP-Introduction/) though CalDAV defines an approach for server based scheduling.

## iTip methods
Each iTip message has an associated METHOD, these are:

   *  PUBLISH - to publish an event. Used for events with an ORGANIZER but
      no explicit list of ATTENDEEs.  These are for publishing events, but have no facility to track who is coming.
   *  REQUEST - send a meeting or task request to attendees
   *  REPLY - and attendee sending the participation status
   *  ADD is used to add instances to an already scheduled event.
   *  CANCEL used to send
      a cancellation notice of an existing event request.
   *  REFRESH used to an attendee to request a full refresh of the
      event. The response should be a new REQUEST from the ORGANIZER.
  *  COUNTER and DECLINECOUNTER  are defined to allow attendees to
     suggest a new time for a meeting and for the organizer to reject
     the suggestion. These methods are often not implemented and
     generally impractical.


## How to handle meetings
The process involves a number of steps - some not covered by this specification. These steps are:

   *  Choose a time for the meeting (see [FreeBusyAvailability](/Scheduling/FreeBusyAvailability/))
   *  Create a meeting request with you as the ORGANIZER and with a number of ATTENDEEs
   *  Send the invitation with method REQUEST

Attendees receiving the invitation can choose to accept or decline the request by setting their participation status (PARTSTAT parameter) and sending it back with a METHOD: REPLY

iTIP describes a COUNTER method in which an attendee may respond with an alternative time for the meeting. This approach is often not implemented and in any case impractical (see [FreeBusyAvailability](/Scheduling/FreeBusyAvailability/))
