---
layout: toc-type
title: Time Zone Distribution Service
parent: /Time-Zones/Time-Zones
mainParent: "iCalendar Topics"
parents: "iCalendar Topics:/iCalendar-Topics;Time Zones:/Time-Zones/Time-Zones/"
order: 3
published: true
---

# Time Zone Distribution Service

[TZDist] - RFC7808 - defines a time zone data distribution service that allows reliable, secure, and fast delivery of time zone data and leap-second rules to client systems such as calendaring and scheduling applications or operating systems.

The intent is to try to move away from treating time zone data like system code and handle it in much the same way we handle other changing data.

[TZif] - RFC8536 - defines the Time Zone Information Format (TZif) for representing and exchanging time zone information,  a binary format used by most UNIX systems to calculate local time. Some of the servers below can return this format.

## Implementations

### Bedework Calendar server
[Bedework] provides as part of the project a java based implementation of the specification - available from [github](https://github.com/Bedework/bw-timezone-server).

The [Bedework-util-tz] library provides some possibly useful code for both clients and servers.

### Cyrus iMap server
[Cyrus IMAP] is an email, contacts and calendar server. Cyrus is free and open source. Information on tzdist can be found [here](https://www.cyrusimap.org/imap/download/installation/http/caldav.html).

### Darwin Calendar server
[Darwin Calendar server] implemented in python contains an old implementation of the specification.


[TZDist]: https://tools.ietf.org/html/rfc7808
[TZif]: https://tools.ietf.org/html/rfc8536
[Bedework]: https://bedework.github.io/
[Bedework-util-tz]: https://github.com/Bedework/bw-util-tz
[Cyrus IMAP]: https://www.cyrusimap.org
[Darwin Calendar server]: https://www.calendarserver.org/
