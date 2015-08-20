
<!-- --- title: A History of iCalendar -->

The iCalendar specification was first produced by the IETF in 1998 as [RFC 2445](https://www.rfc-editor.org/rfc/rfc2445.txt). Since then it has become the dominant standard for calendar data interchange on the internet and between devices (desktop computers, mobile phones, etc). The specification was revised in 2009 as RFC 5545.

Alongside iCalendar is the iTIP specification (RFC 2446 and revised as RFC 5546). iTIP defines how iCalendar is used to carry out scheduling operations (for example, how an organizer can invite attendees to a meeting and receive their replies). This forms the basis for email-based scheduling using iMIP (the specification that describes how to use iTIP with email - RFC 2447 and revised as RFC 6047).

iCalendar itself is a text-based data format. However, both XML (RFC 6321) and JSON () formats are available, providing a one-to-one mapping to the text format.

iCalendar data files typically have a .ics file name extension. Most desktop calendar clients can import or export iCalendar data, or directly access such data over the Internet using a variety of protocols.

iCalendar is typically identified by the MIME media type “text/calendar”, or “application/calendar+xml” for the XML syntax, or “application/calendar+json” for the JSON syntax.