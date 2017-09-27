---
layout: page
title: iTIP
parent: /Scheduling/Scheduling
order: 1
---

# iTIP - RFC 5546

iTIP is an extension to calendaring which describes how to invite attendees to meetings and how those attendees may respond to the requests. Additionally it describes how to publish events.

While RFC 5545 (and it's subsequent extensions) describe all the calendaring properties, iTIP defines both a protocol and the usage of those properties. It does not define new properties but does place some restrictions on how the may be used for iTIP.

iTIP DOES NOT describe HOW these messages are sent and received. That is described by other specifications. The most common approach is probably still [iMIP](/Scheduling/iMIP/) though CalDAV defines an approach for server based scheduling.

## How to handle meetings
The process involves a number of steps - some not covered by this specification. These steps are:

   *  Choose a time for the meeting (see [FreeBusyAvailability](/Scheduling/FreeBusyAvailability/))
   *  Create a meeting request with you as the ORGANIZER and with a number of ATTENDEEs
   *  Send the invitation with method REQUEST
   
Attendees receiving the invitation can choose to accept or decline the request by setting their participation status (PARTSTAT parameter) and sending it back with a METHOD: REPLY

iTIP describes a COUNTER method in which an attendee may respond with an alternative time for the meeting. This approach is often not implemented and in any case impractical (see [FreeBusyAvailability](/Scheduling/FreeBusyAvailability/)) 
