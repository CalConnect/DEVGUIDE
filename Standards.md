# The standards 

Additionally see [Index to Calendaring and Scheduling Standards](https://www.calconnect.org/resources/calendaring-standards)

## Calendaring standards
   *  [RFC 5545 Internet Calendaring and Scheduling Core Object Specification](#RFC5545) - [IETF RFC](https://tools.ietf.org/html/rfc5545)
   *  [RFC 5546 iCalendar Transport-Independent Interoperability Protocol (iTIP)](#RFC5546)
   *  [RFC 6047 iCalendar Message-Based Interoperability Protocol (iMIP)](#RFC6047)
   *  [RFC 6321 xCal: The XML format for iCalendar](#RFC6321)

<h5 id="RFC5545">RFC 5545: Internet Calendaring and Scheduling Core Object Specification</h5>
[RFC 5545](https://tools.ietf.org/html/rfc5545) is the base iCalendar specification which defines the data model. All calendaring properties are defined by this specification and a number of extensions. This specification also describes the iCalendar data format.

Other specifications describe different formats for the data such as json and XML. All other formats MUST retain compatability with this specifications data model as iCalendar is still the main storage and transfer format. 

<h5 id="RFC5546">iCalendar Transport-Independent Interoperability Protocol (iTIP)</h5>
[RFC 5546	iCalendar Transport-Independent Interoperability Protocol (iTIP)](https://tools.ietf.org/html/rfc5546)
Scheduling Events, BusyTime, To-dos and Journal Entries.
Specifies the mechanisms for calendaring event interchange between calendar servers.

See [[iTip]] for a more complete description.

<h5 id="RFC6047">iCalendar Message-Based Interoperability Protocol (iMIP)</h5>
[RFC 6047 iCalendar Message-Based Interoperability Protocol (iMIP)](https://tools.ietf.org/html/rfc6047)
Specifies how to exchange calendaring data using iTip via e-mail. 

<h5 id="RFC6321">xCal: The XML format for iCalendar</h5>
[RFC 6321 xCal: The XML format for iCalendar](https://tools.ietf.org/html/rfc6321)
This specification defines a format for representing iCalendar data in XML. 
More specifically, it defines an XML format that allows iCalendar data to be converted to XML, 
and then back to iCalendar, without losing any semantic meaning in the data. 
Anyone creating XML calendar data according to this specification will know that their data can be 
converted to a valid iCalendar representation as well.

[RFC 6868 Parameter Value Encoding in iCalendar and vCard](https://tools.ietf.org/html/rfc6868)
This specification defines an extension to iCalendar and vCard data formats to allow parameter 
values to include certain characters forbidden by the existing specifications.

[RFC 7265 jCal: The JSON Format for iCalendar](https://tools.ietf.org/html/rfc7265)
This specification defines "jCal", a JSON format for iCalendar data. The iCalendar data format 
is a text format for capturing and exchanging information normally stored within a calendaring and 
scheduling application, for example, tasks and events. JSON is a lightweight, text-based, 
language-independent data interchange format commonly used in Internet applications.

[RFC 7529 Non-Gregorian Recurrence Rules in iCalendar](https://tools.ietf.org/html/rfc7529)
This document defines how non-Gregorian recurrence rules can be specified in iCalendar data.

## Additional and Extensions

[CalWS-Rest RESTful Web Services Protocol for Calendaring](http://calconnect.org/pubdocs/CD1011%20CalWS-Rest%20Restful%20Web%20Services%20Protocol%20for%20Calendaring.pdf)
This document, developed by the XML Technical Committee, specifies a RESTful web services protocol for 
calendaring operations. This protocol has been contributed to OASIS WS-CALENDAR as a component of the 
WS-CALENDAR Specification under development by OASIS.

[CalWS-SOAP SOAP Web Servicies Protocol for Calendaring](http://calconnect.org/pubdocs/CD1301%20CalWS-SOAP%20SOAP%20Web%20Services%20Protocol%20for%20Calendaring.pdf)
This document, developed by the XML Technical Committee, specifies a SOAP web services protocol for calendaring operations. This protocol has been contributed to OASIS WS-CALENDAR as a component of the WS-CALENDAR Specification under development by OASIS.

[Freebusy Read URL](http://calconnect.org/pubdocs/CD0903%20Freebusy%20Read%20URL.pdf)
This proposal, developed by the Freebusy Technical Committee, defines a standardized form of Freebusy Read URL to improve interoperability between client and server implementations, while extending functionality and utility through the use of optional parameters.

[hCalendar 1.0 microformat](http://microformats.org/wiki/hcalendar)
hCalendar is a simple, open, distributed calendaring and events format, using a 1:1 representation of standard iCalendar (RFC2445) VEVENT properties and values in semantic HTML or XHTML.

[RFC 5333 IANA Registration of Enumservices for Internet Calendaring](https://tools.ietf.org/html/rfc5333)
This document registers Enumservices for Internet calendaring. Specifically, this document focuses on 
Enumservices for scheduling with iMIP (iCalendar Message-Based Interoperability Protocol) and for accessing 
Internet calendaring information with CalDAV (Calendaring Extensions to WebDAV).

