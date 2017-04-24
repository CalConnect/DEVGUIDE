# Introducing the vCard standard

The vCard format is the ubiquitous standard for contact exchange and
management, used by over 2.5 billion devices today ranging from mobile
devices to the largest cloud-scale systems.

vCard has gone through multiple iterations, with version 4.0 the latest:

* Version 2.1: [vCard, The Electronic Business Card](https://www.imc.org/pdi/vcard-21.txt), September 1996
* Version 3.0: [RFC 2425, A MIME Content-Type for Directory Information](https://tools.ietf.org/html/rfc2425), September 1998
* Version 3.0: [RFC 2426, vCard MIME Directory Profile](https://tools.ietf.org/html/rfc2426), September 1998
* Version 4.0: [RFC 6350, vCard Format Specification](https://tools.ietf.org/html/rfc6350), August 2011


## A brief history

Originally called "The Electronic Business Card", vCard was first
developed by the [versit Consortium](https://en.wikipedia.org/wiki/Versit_Consortium)
(in lowercase indeed) in 1990 as an interoperable data format to
represent business cards in its suite of Personal Data Interchange
technologies, giving it the iconic 'vCard' name ('v' for 'Versit' or
'virtual').

In 1996, the versit Consortium was disbanded and its intellectual property,
including the vCard and vCalendar formats, were inherited by the
[Internet Mail Consortium (IMC)](https://en.wikipedia.org/wiki/Internet_Mail_Consortium).

When IMC ceased activities in 2002, its intellectual property was
transferred to IETF, including the vCard and vCalendar formats, which
were managed under the IETF Calendaring and Scheduling Working Group
(calsch) group.  Generally due to the lack of resources, development of
these standards stalled and the future of these formats looked
uncertain.

In 2003, Patricia Egen and Dave Thewlis, [SHARE's](<https://en.wikipedia.org/wiki/SHARE_(computing)>)
liaison to the IETF and Chief Standards Officer respectively, wanted to
revitalize these standards and sought contact with users of the vCard
and vCalendar standards.

Since the IETF was too busy anyway with
other work and was more than happy to eject non-core responsibility, it
was decided that the best way forward for interoperable contact and
calendar exchange is a separate, formal entity composed by contact and
calendaring developers and users, who are inherently incentivized to
give time and effort to make interoperability a reality.

The resulting organization is the [Calendar and Scheduling
Consortium](https://www.calconnect.org), otherwise known as CalConnect,
where Dave Thewlis serves as its Executive Director.
By the end of 2004, the intellectual property of the vCard 2.1 and
vCalendar standards were formally transferred to CalConnect.


## Who manages the vCard?

Since the inception of CalConnect, all vCard standards (after version
2.1) have been developed and matured within the organization, and
eventually published through IETF RFCs for open adoption.

Today, the [CalConnect VCARD technical committee](https://www.calconnect.org/about/technical-committees/vcard-technical-committee)
manages all aspects surrounding the vCard standard, with the goal of
promoting interoperable information exchange across populations and
industries. The VCARD technical committee works closely with IETF for
publishing CalConnect vCard standards through the RFC process.


## Where the vCard is used

[TODO]

## The vCard standard

vCard is a data format for exchanging electronic representations of
contact information. Commonly attached to e-mails, vCards can also be
exchanged through other communication channels, such as instant
messages, text messages, or embedded in websites.

As of version 4.0, the vCard standard today is used to represent a
variety of information that goes beyond electronic business cards and
MIME Directory Profiles.


## General usage

A vCard is generally used as an electronic contact card, representing a
person, an organization or even a location. Usually a vCard would
contain a name, contact details such as addresses, telephone numbers,
e-mail addresses and URLs, as well as multimedia content about the
subject.


## Client integration

vCards are often used in electronic contact or address book clients
(described in the 20th century as Personal Information Management
software,PIMs), such as the implementations on Apple's macOS and
iOS, Google's Android, Microsoft's Outlook and Mozilla's Lightning. This
type of software usually allows importing and exporting of vCards.

Other than simple client implementations, they are also used in customer
relationship management software (CRM) to represent current and
potential customer contacts, and as a data interchange format for
personal information managers and calendaring software.


## Server implementations

vCards can be used and exchanged as individual files, but are more often
used in conjunction with server implementations in form of cloud-based
systems.
Apple's iCloud Contacts and Google Contacts are cloud-based services
that utilize the vCard data format together with
[CardDAV](../CalDAV/introduction), a server/client protocol that helps
centrally manage vCard data on a server.



