---
layout: toc-type
title: Standards
parent: "/Appendix/Appendixes"
mainParent: "Appendixes"
parents: 'Appendixes:/Appendix/Appendixes'
order: 2
---

# The standards
Standards are key to providing interoperability between products, particularly with a client/server protocol.

In addition to those below see [Index to Calendaring and Scheduling Standards](https://www.calconnect.org/resources/calendaring-standards)

## Which MUST be supported?
To be able to carry out reliable interoperable calendaring the following are a requirement as they define the data model and extensions. Even if you do not intend implementing some of the features, you may see the properties defined in these specifications.

Even if you cannot support the specification, for example RFC 7529, you should to be able to recognize it and fail gracefully.

   *  [RFC 5545: Internet Calendaring and Scheduling Core Object Specification](#RFC5545) - [IETF RFC](https://tools.ietf.org/html/rfc5545)
   *  [RFC 6868: Parameter Value Encoding in iCalendar and vCard](#RFC6868) - [IETF RFC](https://tools.ietf.org/html/rfc6868)
   *  [RFC 7529 Non-Gregorian Recurrence Rules in iCalendar](#RFC7529) - [IETF RFC](https://tools.ietf.org/html/rfc7529)

## Scheduling
If you wish to be able to transport or handle scheduling requests, depending on your approach you will need at least the iTip specification. You will almost certainly need iMip and the CalDAV scheduling specification if you have a CalDAV server

   *  [RFC 5546: iCalendar Transport-Independent Interoperability Protocol (iTIP)](#RFC5546) - [IETF RFC](https://tools.ietf.org/html/rfc5546)
   *  [RFC 6047: iCalendar Message-Based Interoperability Protocol (iMIP)](#RFC6047) - [IETF RFC](https://tools.ietf.org/html/rfc6047)

## Other representations
These specifications define different representations of the standard iCalendar data model. Depending on your needs you may need one or more of:

   *  [RFC 6321: xCal: The XML format for iCalendar](#RFC6321) - [IETF RFC](https://tools.ietf.org/html/rfc6321)
   *  [RFC 7265: jCal: The JSON Format for iCalendar](#RFC7265) - [IETF RFC](https://tools.ietf.org/html/rfc7265)

## CalDAV and CalDAV related base standards

[RFC 4791: Calendaring Extensions to WebDAV (CalDAV)](https://tools.ietf.org/html/rfc4791)
This document defines extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing, and sharing calendaring and scheduling information based on the iCalendar format. This document defines the "calendar-access" feature of CalDAV.

[RFC 6638: Scheduling Extensions to CalDAV](https://tools.ietf.org/html/rfc6638)
This document defines extensions to the Calendaring Extensions to WebDAV (CalDAV) "calendar-access" feature to specify a standard way of performing scheduling operations with iCalendar-based calendar components. This document defines the "calendar-auto-schedule" feature of CalDAV.

## CalDAV Additional standards and Extensions

[RFC 7809: CalDAV: Time Zones by Reference](https://tools.ietf.org/html/rfc7809)
This document defines an extension to the CalDAV calendar access protocol to allow clients and servers to exchange iCalendar data without the need to send full time zone data.

[RFC 6764: Locating CalDAV and CardDAV Services](https://tools.ietf.org/html/rfc6764)
This specification describes how DNS SRV records, DNS TXT records and well-known URIs can be used together or separately to locate Calendaring Extensions to WebDAV (CalDAV) or vCard Extensions to WebDAV (CardDAV) services.

## CalDAV and CalDAV works are in progress:

### CalDAV: Calendar Sharing
This specification defines sharing calendars between users on a CalDAV system.

### CalDAV: Calendar User Notifications
This specification defines an extension to CalDAV that allows the server to provide notifications to calendar users.

### CalDAV Managed Attachments
This document defines how CalDAV servers can provide server managed collections to allow attachments associated with iCalendar data, to be stored and managed on the server.

### Calendar Collection Entity Tag (CTag) in CalDAV
This specification defines an extension to CalDAV that provides a fast way for a client to determine whether the contents of a calendar collection may have changed.

### Calendar User Proxy Functionality in CalDAV
This specification defines an extension to CalDAV that makes it easy for clients to setup and manage calendar user proxies, using the WebDAV Access Control List extension as a basis.

### Collected Extensions to CalDAV
This document defines a set of extensions to the CalDAV calendar access protocol.

### Shared and Published Calendars in CalDAV
This specification defines an extension to CalDAV that enables the sharing of calendars between users on a CalDAV server.


## Other specifications
These specifications provide functionality which you may wish to support. It is not a requirement they be supported and some protocols allow the server to indicate which are supported. It is good to be at least aware of their existence.


<h5 id="RFC5545">RFC 5545: Internet Calendaring and Scheduling Core Object Specification</h5>
RFC 5545 is the base iCalendar specification which defines the data model. All calendaring properties are defined by this specification and a number of extensions. This specification also describes the iCalendar data format.

Other specifications describe different formats for the data such as json and XML. All other formats MUST retain compatability with this specifications data model as iCalendar is still the main storage and transfer format.

<h5 id="RFC6868">RFC 6868: Parameter Value Encoding in iCalendar and vCard</h5>
RFC 6868 defines an extension to iCalendar and vCard data formats to allow parameter
values to include certain characters forbidden by the existing specifications.

<h5 id="RFC5546">RFC 5546: iCalendar Transport-Independent Interoperability Protocol (iTIP)</h5>
RFC 5546 specifies the mechanisms for calendaring event interchange between calendar servers. It defines a protocol and the constraints on property values.

It provides methods for scheduling Events and tasks, getting BusyTime and distributing Journal Entries.

See [[iTip]] for a more complete description.

<h5 id="RFC6047">RFC 6047: iCalendar Message-Based Interoperability Protocol (iMIP)</h5>
RFC 6047 specifies how to exchange calendaring data using iTip via e-mail.

There are a number of issues to avoid when attempting to schedule via iMip. These are described in [iMip](/Scheduling/iMIP/).

<h5 id="RFC6321">RFC 6321: xCal: The XML format for iCalendar</h5>
RFC 6321 defines a format for representing iCalendar data in XML.
More specifically, it defines an XML format that allows iCalendar data to be converted to XML, and then back to iCalendar, without losing any semantic meaning in the data. Anyone creating XML calendar data according to this specification will know that their data can be converted to a valid iCalendar representation as well.

<h5 id="RFC7265">RFC 7265: jCal: The JSON Format for iCalendar</h5>
RFC 7265 defines "jCal", a JSON format for iCalendar data. The iCalendar data format is a text format for capturing and exchanging information normally stored within a calendaring and scheduling application, for example, tasks and events. JSON is a lightweight, text-based, language-independent data interchange format commonly used in Internet applications.

<h5 id="RFC7529">RFC 7529: Non-Gregorian Recurrence Rules in iCalendar</h5>
RFC 7529 defines how non-Gregorian recurrence rules can be specified in iCalendar data. This is of paticular importance in many cultures where birthdays, religious events and or public holidays may be based on other calendar systems.

These systems often have a different approach to the "leap" issue, often involving leap months which appear in different places.

This specification changes the recurrence rules defined in RFC 5545 by adding an RSCALE. It also defines how CalDAV (RFC 4791) servers and clients can be extended to support these new recurrence rules.

<h5 id="RFC7808">RFC 7808: Time Zone Data Distribution Service</h5>
RFC 7808 defines a time zone data distribution service that allows reliable, secure, and fast delivery of time zone data and leap-second rules to client systems such as calendaring and scheduling applications or operating systems.

## Additional and Extensions

[CalWS-Rest RESTful Web Services Protocol for Calendaring](http://calconnect.org/pubdocs/CD1011%20CalWS-Rest%20Restful%20Web%20Services%20Protocol%20for%20Calendaring.pdf)
This document, developed by the XML Technical Committee, specifies a RESTful web services protocol for
calendaring operations. This protocol has been contributed to OASIS WS-CALENDAR as a component of the
WS-CALENDAR Specification under development by OASIS.

[CalWS-SOAP SOAP Web Services Protocol for Calendaring](http://calconnect.org/pubdocs/CD1301%20CalWS-SOAP%20SOAP%20Web%20Services%20Protocol%20for%20Calendaring.pdf)
This document, developed by the XML Technical Committee, specifies a SOAP web services protocol for calendaring operations. This protocol has been contributed to OASIS WS-CALENDAR as a component of the WS-CALENDAR Specification under development by OASIS.

[Freebusy Read URL](http://calconnect.org/pubdocs/CD0903%20Freebusy%20Read%20URL.pdf)
This proposal, developed by the Freebusy Technical Committee, defines a standardized form of Freebusy Read URL to improve interoperability between client and server implementations, while extending functionality and utility through the use of optional parameters.

[hCalendar 1.0 microformat](http://microformats.org/wiki/hcalendar)
hCalendar is a simple, open, distributed calendaring and events format, using a 1:1 representation of standard iCalendar (RFC2445) VEVENT properties and values in semantic HTML or XHTML.

[RFC 5333 IANA Registration of Enumservices for Internet Calendaring](https://tools.ietf.org/html/rfc5333)
This document registers Enumservices for Internet calendaring. Specifically, this document focuses on
Enumservices for scheduling with iMIP (iCalendar Message-Based Interoperability Protocol) and for accessing
Internet calendaring information with CalDAV (Calendaring Extensions to WebDAV).
