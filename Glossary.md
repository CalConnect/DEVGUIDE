# Calendaring and Scheduling Glossary of Terms

This page is an effort to compile, in one location, a common set of terminology with respect to calendaring and scheduling applications and standards. The document incorporates terminology already existing in calendaring standards such as RFC5545 (Internet Calendaring and Scheduling Core Object Specification (iCalendar)), RFC5546 (iCalendar Transport-Independent Interoperability Protocol (iTIP)), RFC6047 (iCalendar Message-Based Interoperability Protocol (iMIP)), RFC4791 (Calendaring Extensions to WebDAV (CalDAV)), RFC6638 (Scheduling Extensions to CalDAV (CalDAV)), as well as input from members of the Calendaring and Scheduling Consortium (CalConnect).

Some glossary terms may not appear in published standards today. These are common calendaring terms that are included so that everyone refers to components in the same manner.

As new standards evolve, the glossary will serve as a resource for those creating documents so that all the standards share a common set of terms.

Calendaring and scheduling implementers will be able to utilize the glossary to assist them as they read and decipher calendaring standards. Calendaring and scheduling users will be able to use the glossary to help them better understand the terminology deployed by applications written using calendaring standards.

<h5 id="access-control">Access Control</h5>
Access control is a system which enables an authority (e.g., user or resource administrator) to control access to different entities in a calendar system. Typically vendors create Preference/Settings options to instantiate access control. Terminology varies considerably across products but broadly speaking access control is usually broken into two areas, read access and write access. Vendor terminology used for read access includes: 'read', 'reviewer', 'proxy read', 'viewer', 'see all', and 'see only freebusy'. Vendor terminology for write access includes: 'write', 'editor', 'proxy write', 'proxy', 'manager', 'administrator', 'designate', 'read/create/edit', 'make changes', 'manage', and 'edit'. (Cp. Delegate and Designate below.)

<h5 id="access-control-list">Access Control List (ACL)</h5>
A list of access control elements that define access control to a particular calendar system entity. (Reference: RFC3744 for its use in a WebDAV context.)

<h5 id="accessibility">Accessibility</h5>
Information pertaining to access to a resource by the physically disabled. This applies to Location Resources.

<h5 id="admittance-info">Admittance Info</h5>
All information required to gain access to a resource. It applies to Location Resources.

<h5 id="agenda">Agenda</h5>
See [Calendar](#calendar).

<h5 id="alarm">Alarm</h5>
Use of the terms alarm, reminder, alert, and notifications vary by implementation and can represent several things. They can represent a setting applied to an event by which a user indicates they want a 'notification' to be triggered to 'remind' them about some event or action (cp. VALARM in RFC5545). They can also be used to designate the type of 'alert' that serves as the notification (e.g., email message, audible sound, pop-up window). (Reference [RFC4791 (CalDAV)](https://tools.ietf.org/html/rfc4791), [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.6), [RFC5546 (iTip)](https://tools.ietf.org/html/rfc5546).)

<h5 id="application-calendar-xml">Application/calendar + XML</h5>
The MIME content type that indicates an iCalendar object expressed in XML.

<h5 id="appointment">Appointment</h5>
See Calendar.

<h5 id="attachment">Attachment</h5>
A document object associated with a calendar component.

<h5 id="attendee">Attendee</h5>
Specifies the participants or non-participants (e.g., room or resources) for an event. This property in iCalendar can contain multiple attributes specifying additional information, i.e., role, participation status, group membership, delegation, etc. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.4.1).)

<h5 id="autoconfiguration">Autoconfiguration</h5>
the process of configuring clients such as mobile devices or desktop applications to access a service, or class of service, with a minimum of input from the user of the device. See also Autodiscovery.

<h5 id="autodiscovery">Autodiscovery</h5>
The process used to determine the services provided by a host, or for a domain, including retrieval of the recommended configuration values for those services. The autodiscovery funtionality requires the service provider to declare in a standard way which services are available and what their configuration looks like for the requesting user. See also Autoconfiguration. (Reference: draft-daboo-aggregated-service-discovery.)

<h5 id="autoschedule">Autoschedule</h5>
Accept scheduling invitations automatically with no human intervention.

<h5 id="booking-window">Booking Window</h5>
The window of time in which a resource can be booked, relative to the start time of the event.

<h5 id="caldav">CalDAV</h5>
Extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing and sharing calendar data based on the iCalendar format. Defined by two specifications, the first, RFC4791, specifies a calendar access protocol that allows Calendar User Agents to access and manage calendar data. The second specification, RFC 6638, specifies a standard way of performing scheduling transactions with iCalendar-based calendar components. This document defines the "calendar-auto-schedule" feature of CalDAV. (Reference: RFC4791, and RFC 6638.)

<h5 id="calendar">Calendar</h5>
A collection of calendar items such as events, tasks, journal entries, etc. Examples include a person's or group's schedule, resource availability, and event listings. Typically an individual may own multiple calendars based on the same or different services.

<h5 id="calendar-access-rights">Calendar Access Rights</h5>
See Access Control, Access Control List, Delegate, and Designate.

<h5 id="calendar-collection">Calendar Collection</h5>
A WebDAV collection used to represent a calendar containing a set of calendar object resources. (Reference: RFC4791 and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.4).)

<h5 id="calendar-object-resource">Calendar Object Resource</h5>
A WebDAV resource representing an iCalendar component typically stored inside a Calendar Collection (cp. Component). (Reference: RFC4791.)

<h5 id="calendar-service">Calendar Service</h5>
A server application that provides calendar user agents access to calendar stores.

<h5 id="calendar-store">Calendar Store (CS)</h5>
A data repository that may contain several calendars as well as properties and components of those calendars. A local calendar store is on the same device as the calendar user agent (CUA). A remote calendar store is not on the same machine/device as the calendar user agent. (Reference: RFC3283.)

<h5 id="calendar-subscription">Calendar Subscription</h5>
See Subscribed Calendar.

<h5 id="calendar-user">Calendar User (CU)</h5>
A person who accesses or modifies calendar information.

<h5 id="calendar-user-agent">Calendar User Agent (CUA)</h5>
(1) Software with which the calendar user communicates with a calendar service or local calendar store to access calendar information. (2) Software that gathers calendar data on the Calendar User's behalf.

<h5 id="calendar-system">Calendar System</h5>
A way to represent dates as a combination of eras, years, months, weeks, and days in formats used in many different parts of the world. A calendar system also defines the limits for those different quantities and how "date arithmetic" can be done to implement repeating dates. (See http://en.wikipedia.org/wiki/Calendar for a description of many different calendar systems.)

<h5 id="calconnect">CalConnect</h5>
The Calendaring and Scheduling Consortium is a non-for-profit partnership between vendors of calendaring and scheduling systems and tools, and users of those tools. Our purpose is to improve all aspects of calendaring and scheduling, in particular interoperability. We do this by improving existing standards, developing new standards, offering interoperability testing for calendaring and scheduling systems and tools, collaborating with other organizations with similar goals, and conducting periodic conferences where engineers and customers meet and interact in a collegial atmosphere. Although CalConnect is not a standards development organization, virtually every important calendaring or calendaring-related standard over the last five years has been authored, edited and/or coedited by members of a CalConnect Technical Committee.

<h5 id="calscale">CALSCALE</h5>
An iCalendar property used to identify the calendar system used to represent dates and times within an iCalendar object. iCalendar currently only defines the GREGORIAN calendar system.

<h5 id="calws">CalWS</h5>
CalWS-REST is a CalConnect Proposal and CalWS-SOAP will be a parallel CalConnect Proposal which define an API of basic operations which allow creation, retrieval, update and deletion of calendar objects. In addition, query and freebusy operations are defined to allow efficient, partial retrieval of calendar data. (Reference: CalWS-REST Restful Web Services Protocol for Calendaring.)

<h5 id="capacity">Capacity</h5>
Capacity of a resource, expressed as a numerical quantity. This applies to a Location Resource.

<h5 id="carddav">CardDAV</h5>
Extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing, and sharing contact information based on the vCard format. (Reference: RFC6352.)

<h5 id="component">Component</h5>
A piece of calendar data such as an event, a task or an alarm. Information about components is stored as properties of those components (cp. Property). (Reference: RFC4791 and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6).)

<h5 id="consensus-scheduling">Consensus Scheduling</h5>
The process whereby a group comes to agreement on when and perhaps where to hold a meeting or carry out a task, by identifying the "best" time or location to help maximize participation and minimize inconvenience. For more information see 7 Things You Should Know About Consensus Scheduling. (See VPOLL.)

<h5 id="counter">Counter</h5>
A response sent by a Attendee of an event to the event Organizer to propose a change to the event or task such as the scheduled date/time, list of participants, etc. (Reference: RFC5546.)

<h5 id="delegate">Delegate</h5>
In common usage 'delegate' may mean either a person who acts for someone else (cp. Designate below) or refer to the act of appointing someone as a representative. The term has very specific meaning in the iCalendar and iTIP RFCs. In iCalendar, delegate means to specify that another individual, rather than oneself, should attend an event (cp. Delegator and Delegatee). In iTIP, delegate means to assign ownership of a task to another individual. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.4) and RFC5546.)

<h5 id="delegatee">Delegatee</h5>
The attribute in iCalendar that specifies the calendar user(s) to whom a calendar user has delegated participation in an event. The actual attribute name is DELEGATED-TO. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.5).)

<h5 id="delegator">Delegator</h5>
The attribute in iCalendar that specifies the calendar user(s) that have delegated their participation in an event to another calendar user. The actual attribute name is DELEGATED-FROM. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.4).)

<h5 id="designate">Designate</h5>
A calendar user authorized to act on behalf of another calendar user. An example of a designate is an assistant who schedules meetings for his or her superior. (Cp. Access Control and Access Control List above.) (Reference: RFC5546.)

<h5 id="dtend">DTEND</h5>
The DTEND property for a VEVENT calendar component specifies the non-inclusive end of the event. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.2.2).)

<h5 id="dtstart">DTSTART</h5>
The DTSTART property for a VEVENT specifies the inclusive start of the event. For recurring events, it also specifies the very first instance in the recurrence set. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.2.4).)

<h5 id="event">Event</h5>
A calendar object that is commonly used to represent things that mark time or use time. Examples include meetings, appointments, anniversaries, start times, arrival times, closing times.

<h5 id="event-publication">Event Publication</h5>
The process by which public event data is gathered, formatted and distributed to calendar users. Often this takes the form of public, unauthenticated clients and/or feeds. See Public Event.

<h5 id="freebusy">Freebusy</h5>
A list of free and busy periods for a particular calendar user or resource. Primarily used for scheduling resources or meetings with other people. Time periods may be marked as busy, free, busy-unavailable (sometimes referred to as out of office) and busy-tentative.

<h5 id="gregorian-calendar">Gregorian Calendar</h5>
The most common civil calendar system in use today, recognized by many international bodies. (See http://en.wikipedia.org/wiki/Gregorian_calendar.)

<h5 id="ical">iCal</h5>
The name of Apple, Inc's desktop calendar user agent. Often used as an abbreviation for the iCalendar standard.

<h5 id="icalendar">iCalendar</h5>
The Internet Calendaring and Scheduling Core Object Specification. An IETF standard (RFC5545) for a text representation of calendar data. Scheduling operations are specified in RFC5546.

<h5 id="ietf">IETF (The Internet Engineering Task Force)</h5>
According to IETF RFC3935, "The IETF has traditionally been a community for experimentation with things that are not fully understood, standardization of protocols for which some understanding has been reached, and publication of (and refinement of) protocols originally specified outside the IETF process ...The mission of the IETF is to produce high quality, relevant technical and engineering documents that influence the way people design, use, and manage the Internet in such a way as to make the Internet work better. These documents include protocol standards, best current practices, and informational documents of various kinds."

<h5 id="impi">iMIP (iCalendar Message-Based Interoperability Protocol)</h5>
An IETF standard (RFC6047) that describes how iTIP messages are exchanged via email.

<h5 id="itip">iTIP (iCalendar Transport-Independent Interoperability Protocol)</h5>
An IETF Standard (RFC5546) that specifies a protocol that uses the iCalendar object specification to provide scheduling interoperability between different calendar systems without reference to a specific transport protocol so as to allow multiple methods of communication between systems (see iMIP, iSchedule).

<h5 id="ischedule">iSchedule</h5>
A draft specification that describes how iTIP messages are exchanged via HTTP (Reference: Internet Calendar Scheduling Protocol (iSchedule) draft-desruisseaux-ischedule.)

<h5 id="instance">Instance</h5>
A single event of a larger group of events specified as a recurring event (cp. Recurring). (Reference: RFC4791 and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.4.4).)

<h5 id="inventory-info">Inventory Info</h5>
All information on other resources available as part of a resource.

<h5 id="invitation-invite">Invitation/Invite</h5>
A general term from common usage to convey a request for an attendee's participation in an event. In RFC documents the more specific term is request (cp. Request).

<h5 id="jcal">jCal</h5>
A draft specification that defines a JSON representation of iCalendar data. (Reference: jCal: The JSON format for iCalendar - https://datatracker.ietf.org/doc/draft-ietf-jcardcal-jcal.)

<h5 id="jcard">jCard</h5>
A draft specification that defines a JSON representation of vCard data. (Reference: jCard - The JSON format for vCard - https://datatracker.ietf.org/doc/draft-ietf-jcardcal-jcard.)

<h5 id="journal-entry">Journal Entry</h5>
From RFC5545, one or more descriptive text notes associated with a particular calendar date. Examples of a journal entry include a daily record of a legislative body or a journal entry of individual telephone contacts for the day or an ordered list of accomplishments for the day.

<h5 id="managed-attachment">Managed Attachment</h5>
An attachment associated with a calendar component that is stored and managed on a CalDAV server. (Reference draft-daboo-caldav-attachments.)

<h5 id="maximum-instances">Maximum Instances</h5>
Maximum number of instances of an event a resource can be scheduled for from a given point in time.

<h5 id="meeting">Meeting</h5>
See Event.

<h5 id="mime">MIME</h5>
An acronym for Multipurpose Internet Mail Extensions, a specification for formatting non-ASCII text message content, including iCalendar data, graphics, audio and video, so that they can be sent over the Internet. MIME is supported by email clients and web browsers (see RFC2045,RFC2046, RFC2047).

<h5 id="mime-type">Mime Type</h5>
An Internet media type, sometimes a Content-type after the name of a header in several protocols whose value is such a type, is a two-part identifier for file formats on the Internet. The identifiers were originally defined in RFC2046 for use in e-mail sent through SMTP, but their use has expanded to other protocols such as HTTP, RTP and SIP and for other uses (e.g., OS-level file type identification for application/file association).

<h5 id="multiple-bookings">Multiple Bookings</h5>
Number of simultaneous bookings allowed by a resource, during scheduling.

<h5 id="non-gregorian-calendar">Non-Gregorian Calendar</h5>
Any calendar system that is not a Gregorian Calendar (e.g., Chinese, Hebrew, Islamic). (See http://en.wikipedia.org/wiki/Calendar for a description of many different calendar systems.)

<h5 id="notification">Notification</h5>
See Alarm.

<h5 id="oasis">OASIS (Organization for the Advancement of Structured Information Standards)</h5>
A Standards Development Organization primarily focused on web services standards. OASIS and CalConnect have reciprocal memberships for joint work on WS-Calendar. (Reference http://www.oasis-open.org.)

<h5 id="organizer">Organizer</h5>
A calendar user who creates a calendar item, requests free/busy information, or published free/busy information. It is an Organizer who invites Attendees. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.4.3).)

<h5 id="personal-calendar">Personal Calendar</h5>
A calendar containing events for one calendar user (the owner), and typically only accessible to the owner, or others authorized by the owner (cp. Calendar, Public Calendar, Shared Calendar).

<h5 id="priority">Priority</h5>
A level of importance and/or urgency calendar users can apply to Tasks and Events. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.1.9).)

<h5 id="property">Property</h5>
RFCs define the objects and components of their subject which in turn have properties which have values (sometimes referred to as 'property parameters' or 'property attributes'). These "property parameters" contain meta-information about the property or the property value. Property parameters are provided to specify such information as the location of an alternate text representation for a property value, the language of a text property value, the value type of the property value, and other attributes. Throughout this glossary are references to component, property, and attribute following this usage. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8).)

<h5 id="public-calendar">Public Calendar</h5>
A calendar containing primarily public events and accessible to anyone or a specific group of calendar users (cp. Calendar, Personal Calendar, Shared Calendar). See Public Event.

<h5 id="public-event">Public Event</h5>
An event meant to be published to or distributed to anyone or a specific group of calendar users. These generally differ from personal events in that they contain much more detail about the event, its location, categories and other properties. See Event Publication and Publish.

<h5 id="publish">Publish</h5>
Generally, to make calendar information, such as freebusy time, available to a select group or to the public. From the RFC for iTIP, "The 'PUBLISH' method in a 'VEVENT' calendar component is an unsolicited posting of an iCalendar object."

<h5 id="rrule">RRULE</h5>
An iCalendar property used to define a repeating pattern for events or tasks.

<h5 id="rscale">RSCALE</h5>
An iCalendar RRULE parameter indicating which calendar system to use for expanding this RRULE. (See draft http://tools.ietf.org/id/draft-daboo-icalendar-rscale. )

<h5 id="recurrence-id">RECURRENCE-ID</h5>
This property is used to identify a specific instance of a recurring VEVENT, VTODO, or VJOURNAL calendar component.

<h5 id="recurring">Recurring</h5>
An event or task that happens more than once either with a regular interval (ex. daily, weekly, monthly) that can be expressed by a rule or with an explicit series of dates/times.

<h5 id="request">Request</h5>
A broadly used term in multiple RFCs to represent an action. That action may be a query for property values from a client to a server (cp. RFC4791), a query between a client and a server that results in object creation, modification, or deletion (cp. RFC4791 and RFC5545), and it is the name of a method in iTIP that makes "an explicit invitation to one or more attendees" (among other things, cp. RFC5546). (Reference: RFC4791, [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.7.2), RFC5546, and Internet Calendar Scheduling Protocol (iSchedule).)

<h5 id="reminder">Reminder</h5>
See Alarm.

<h5 id="repeating">Repeating</h5>
See Recurring.

<h5 id="resource">Resource</h5>
A resource in the scheduling context is any shared entity, that can be scheduled by a calendar user, but does not control its own attendance status. Resources can be of "Location", "Equipment", or "Role" type.

<h5 id="resource-kind">Resource Kind</h5>
Specifies the kind of resource object represented. Some of the possible values are "Location", "Thing", or "Group". Location is used for any physical location resource such as room, building, etc. Thing is used for any physical object that can scheduled like projector, printer, etc. Group is used to specify a group of resources with a specific skill set. For example: drivers, electricians, etc.

<h5 id="resource-manager-info">Resource Manager Info</h5>
Information on the person(s) responsible for the daily upkeep of a resource.

<h5 id="response">Response</h5>
acceptance or refusal of a meeting request sent to a meeting proposer.

<h5 id="rfc">RFC (Request for Comments)</h5>
The IETF and some other standards bodies use RFCs to define Internet standards. They document most of the protocols, mechanisms, procedures and best practices in use on the Internet (Reference: ietf.org).

<h5 id="rsvp">RSVP</h5>
Specifies whether there is an expectation of a reply from a specific calendar user (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.17).)

<h5 id="scheduling">Scheduling</h5>
Briefly, the process by which organizers and attendees plan events or assign tasks. More specifically the term encompasses the exchange of request/invitations and responses between organizers and attendees of scheduled events, tasks or journal entries.

<h5 id="scheduling-admin-contact-info">Scheduling Admin Contact Info</h5>
An attribute that contains contact information for the scheduling approvers, if approval is required.

<h5 id="shared-calendar">Shared Calendar</h5>
A calendar that is accessible to multiple calendar users. Typically there is an "owner" and a set of "sharees", some of whom may have read-only access and some of whom might have read/write access (cp. Calendar, Personal Calendar, Public Calendar, Subscribed Calendar).

<h5 id="subscribed-calendar">Subscribed Calendar</h5>
A calendar that has been published, typically on an HTTP server. See Publish.

<h5 id="task">Task</h5>
A representation of an item of work assigned to an individual. In RFC5545, these are "VTODO" calendar components, which are groupings of component properties and possibly "VALARM" calendar components that represent an action-item or assignment.

<h5 id="text-calendar">Text/calendar</h5>
The MIME content type for encoding iCalendar objects. Example usage includes: email, web pages.

<h5 id="timezone">Timezone also Time Zone</h5>
Areas of the Earth that have adopted the same local time. Time zones are generally centered on meridians of a longitude, that is a multiple of 15, thus making neighboring time zones one hour apart. However, the one hour separation is not universal and the shapes of time zones can be quite irregular because they usually follow the boundaries of states, countries or other administrative areas. In RFC5545, time zones are represented using "VTIMEZONE" calendar components, each with a Time Zone Identifier (TZID) that can be used to tie a particular date and time to a specific timezone.

<h5 id="timezone-service">Timezone Service</h5>
A client/server protocol used for distributing Timezone data. The protocol improves the accuracy and speed of distributing timezone data to ensure clients are kept up to date with sometimes rapidly changing definitions. It also allows clients to avoid having a complete database of all timezones - instead they can download timezone data on a case-by-case basis. (Reference draft-douglass-timezone-service.)

<h5 id="transparency">Transparency</h5>
A property of an event that defines whether it will appear free or busy in free/busy time searches.

<h5 id="utc">UTC (Coordinated Universal Time)</h5>
UTC is designated to be at zero longitude. Also known as Zulu Time (NATO/military designation). Formerly GMT (Greenwich Mean Time) although there is a slight difference. UTC is the basis for all local time offsets. Offsets are either positive or negative. An example is UTC-8 (Pacific Standard Time). Some iCalendar examples:

    DTSTART:19970714T133000 ;Local time
    DTSTART:19970714T173000Z ;UTC time
    DTSTART;TZID=US-Eastern:19970714T133000 ;Local time and time zone reference

<h5 id="valarm">VALARM</h5>
A VALARM calendar component is a grouping of component properties that is a reminder or alarm for an event or a to-do. For example, it may be used to define a reminder for a pending event or an overdue to-do. VALARMs will thus be included within VEVENT and VTODO components. VAVAILABILITY - An iCalendar component that is used to describe periods of time for which a calendar user is available for scheduling of events. (Reference: draft-daboo-calendar-availability.)

<h5 id="vcalendar">vCalendar</h5>
A text representation of calendar and scheduling data created by the Versit consortium (also, the vCalendar specification). The RFC5545 iCalendar specification supersedes the work of vCalendar, though VCALENDAR remains as a component type in the RFC5545 iCalendar specification.

<h5 id="vcard">vCard</h5>
An IETF standard for a text representation of contact data. See CardDAV. (Reference: RFC2426 vCard V3.0, RFC6350 vCard V4.0.)

<h5 id="vevent">VEVENT</h5>
A VEVENT calendar component represents a scheduled amount of time on a calendar. For example, it can be an activity; such as a one-hour long, department meeting from 8:00 AM to 9:00 AM, tomorrow. Generally, an event will take up time on an individual calendar. The VEVENT is also the calendar component used to specify an anniversary or daily reminder within a calendar.

<h5 id="vfreebusy">VFREEBUSY</h5>
A grouping of component properties that represents either a request for free or busy time information, a reply to a request for free or busy time information, or a published set of busy time information.

<h5 id="vjournal">VJOURNAL</h5>
A VJOURNAL calendar component is a grouping of component properties that represent one or more descriptive text notes associated with a particular calendar date. The DTSTART property is used to specify the calendar date with which the journal entry is associated. Examples of a journal entry include a daily record of a legislative body or a journal entry of individual telephone contacts for the day or an ordered list of accomplishments for the day. The VJOURNAL calendar component can also be used to associate a document with a calendar date.

<h5 id="vpoll">VPOLL</h5>
A proposed extension to iCalendar. VPOLL is a new component which allows conducting a "poll" via iTIP exchanges to accomplish consensus scheduling for an event or appointment. See Consensus Scheduling. (Reference: draft-york-vpoll.)

<h5 id="vtodo">VTODO</h5>
A VTODO calendar component is a grouping of component properties and possibly VALARM calendar components that represent an action-item or assignment. For example, it can be used to represent an item of work assigned to an individual; such as "turn in travel expense today".

<h5 id="webdav">WebDAV</h5>
Web Distributed Authoring and Versioning (WebDAV) is an extension of the Hypertext Transfer Protocol (HTTP) that facilitates collaboration between users in editing and managing documents and files stored on World Wide Web servers. See CalDAV and CardDAV. (Reference: RF4918.)

<h5 id="webdav-sync">WebDAV Sync</h5>
An extension to Web Distributed Authoring and Versioning (WebDAV) that allows efficient synchornization of the contents of a WebDAV collection. (Reference: RFC6578.)

<h5 id="ws-calendar">WS-Calendar</h5>
An OASIS (Organization for the Advancement of Structured Information Standards) working group tasked with defining a cross-domain standard for passing schedule and interval information between and within services built around CalWS. The product of the working group will be a standard also named "WS-Calendar" (from http://www.oasis-open.org/committees/workgroup.php?wg_abbrev=ws-calendar) incorporating the CalWS proposal. See CalWS.

<h5 id="xcal">xCal</h5>
A standard that defines an XML representation of iCalendar data. (Reference: xCal: The XML format for iCalendar - RFC6321.)

<h5 id="xcard">xCard</h5>
A standard that defines an XML representation of vCard data. (Reference: xCard: vCard XML Representation - RFC6351.)