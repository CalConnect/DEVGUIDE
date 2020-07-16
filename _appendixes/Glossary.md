---
layout: toc-type
title: Glossary of Terms
parent: "/Appendix/Appendixes"
mainParent: "Appendixes"
parents: 'Appendixes:/Appendix/Appendixes'
order: 1
published: true
---

# Calendaring and Scheduling Glossary of Terms

This page is an effort to compile, in one location, a common set of terminology with respect to calendaring and scheduling applications and standards. The document incorporates terminology already existing in calendaring standards such as [RFC5545](https://tools.ietf.org/html/rfc5545) (Internet Calendaring and Scheduling Core Object Specification (iCalendar)), [RFC5546](https://tools.ietf.org/html/rfc6646) (iCalendar Transport-Independent Interoperability Protocol (iTIP)), [RFC6047](https://tools.ietf.org/html/rfc6047) (iCalendar Message-Based Interoperability Protocol (iMIP)), [RFC4791](https://tools.ietf.org/html/rfc4791) (Calendaring Extensions to WebDAV (CalDAV)), [RFC6638](https://tools.ietf.org/html/rfc6638) (Scheduling Extensions to CalDAV (CalDAV)), as well as input from members of the Calendaring and Scheduling Consortium (CalConnect).

Some glossary terms may not appear in published standards today. These are common calendaring terms that are included so that everyone refers to components in the same manner.

As new standards evolve, the glossary will serve as a resource for those creating documents so that all the standards share a common set of terms.

Calendaring and scheduling implementers will be able to utilize the glossary to assist them as they read and decipher calendaring standards. Calendaring and scheduling users will be able to use the glossary to help them better understand the terminology deployed by applications written using calendaring standards.

<div class="data-expander expanded">
    <a href="#" id="Access-control">
        <span>Access Control</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Access control is a system which enables an authority (e.g., user or resource administrator) to control access to different entities in a calendar system. Typically vendors create Preference/Settings options to instantiate access control. Terminology varies considerably across products but broadly speaking access control is usually broken into two areas, read access and write access. Vendor terminology used for read access includes: 'read', 'reviewer', 'proxy read', 'viewer', 'see all', and 'see only freebusy'. Vendor terminology for write access includes: 'write', 'editor', 'proxy write', 'proxy', 'manager', 'administrator', 'designate', 'read/create/edit', 'make changes', 'manage', and 'edit'. (Cp. [Delegate](#Delegate) and [Designate](#Designate) below.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="access-control-list">
        <span>Access Control List (ACL)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A list of access control elements that define access control to a particular calendar system entity. (Reference: [RFC3744](https://tools.ietf.org/html/rfc3744) for its use in a WebDAV context.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="accessibility">
        <span>Accessibility</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Information pertaining to access to a resource by the physically disabled. This applies to Location Resources.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="admittance-info">
        <span>Admittance Info</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  All information required to gain access to a resource. It applies to Location Resources.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="agenda">
        <span>Agenda</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Calendar](#Calendar).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="alarm">
        <span>Alarm</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Use of the terms alarm, reminder, alert, and notifications vary by implementation and can represent several things.
  They can represent a setting applied to an event by which a user indicates they want a 'notification' to be triggered to 'remind' them about some event or action (cp. [VALARM](#VALARM) in [RFC5545](https://tools.ietf.org/html/rfc5545).
  They can also be used to designate the type of 'alert' that serves as the notification (e.g., email message, audible sound, pop-up window). (Reference [RFC4791 (CalDAV)](https://tools.ietf.org/html/rfc4791), [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.6), [RFC5546 (iTip)](https://tools.ietf.org/html/rfc5546).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="application-calendar-xml">
        <span>Application/calendar + XML</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The MIME content type that indicates an iCalendar object expressed in XML.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="appointment">
        <span>Appointment</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Calendar](#calendar).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="attachment">
        <span>Attachment</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A document object associated with a calendar component.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="attendee">
        <span>Attendee</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Specifies the participants or non-participants (e.g., room or resources) for an event. This property in iCalendar can contain multiple attributes specifying additional information, i.e., role, participation status, group membership, delegation, etc. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.4.1).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="autoconfiguration">
        <span>Autoconfiguration</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process of configuring clients such as mobile devices or desktop applications to access a service, or class of service, with a minimum of input from the user of the device. See also [Autodiscovery](#Autodiscovery).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="autodiscovery">
        <span>Autodiscovery</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process used to determine the services provided by a host, or for a domain, including retrieval of the recommended configuration values for those services. The autodiscovery functionality requires the service provider to declare in a standard way which services are available and what their configuration looks like for the requesting user. See also [Autoconfiguration](#Autoconfiguration). (Reference: [draft-daboo-aggregated-service-discovery](https://datatracker.ietf.org/doc/draft-daboo-aggregated-service-discovery/).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="autoschedule">
        <span>Autoschedule</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Accept scheduling invitations automatically with no human intervention.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="booking-window">
        <span>Booking Window</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The window of time in which a resource can be booked, relative to the start time of the event.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="caldav">
        <span>CalDAV</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing and sharing calendar data based on the iCalendar format. Defined by two specifications, the first, [RFC4791 (CalDAV)](https://tools.ietf.org/html/rfc4791), specifies a calendar access protocol that allows Calendar User Agents to access and manage calendar data. The second specification, RFC 6638, specifies a standard way of performing scheduling transactions with iCalendar-based calendar components. This document defines the "calendar-auto-schedule" feature of CalDAV. (Reference: [RFC 4791](https://tools.ietf.org/html/rfc4791), and [RFC 6638](https://tools.ietf.org/html/rfc6638).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar">
        <span>Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A collection of calendar items such as events, tasks, journal entries, etc. Examples include a person's or group's schedule, resource availability, and event listings. Typically an individual may own multiple calendars based on the same or different services.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-access-rights">
        <span>Calendar Access Rights</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Access Control](#AccessControl), [Access Control List](#ACL), [Delegate](#Delegate), and [Designate](#Designate).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-collection">
        <span>Calendar Collection</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A WebDAV collection used to represent a calendar containing a set of calendar object resources. (Reference: [RFC4791](https://tools.ietf.org/html/rfc4791) and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.4).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-object-resource">
        <span>Calendar Object Resource</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A WebDAV resource representing an iCalendar component typically stored inside a Calendar Collection (cp. Component). (Reference: [RFC4791](https://tools.ietf.org/html/rfc4791).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-service">
        <span>Calendar Service</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A server application that provides calendar user agents access to calendar stores.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-store">
        <span>Calendar Store (CS)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A data repository that may contain several calendars as well as properties and components of those calendars. A local calendar store is on the same device as the calendar user agent ([CUA](#CUA)). A remote calendar store is not on the same machine/device as the calendar user agent. (Reference: [RFC3283](https://tools.ietf.org/html/rfc3283).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-subscription">
        <span>Calendar Subscription</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Subscribed Calendar](#SubscribedCalendar)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-user">
        <span>Calendar User (CU)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A person who accesses or modifies calendar information.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-user-agent">
        <span>Calendar User Agent (CUA)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  1. Software with which the calendar user communicates with a calendar service or local calendar store to access calendar information.
  2. Software that gathers calendar data on the Calendar User's behalf.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calendar-system">
        <span>Calendar System</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A way to represent dates as a combination of eras, years, months, weeks, and days in formats used in many different parts of the world. A calendar system also defines the limits for those different quantities and how "date arithmetic" can be done to implement repeating dates. (See [Wikipedia:Calendar](http://en.wikipedia.org/wiki/Calendar) for a description of many different calendar systems.)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calconnect">
        <span>CalConnect</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The Calendaring and Scheduling Consortium is a non-for-profit partnership between vendors of calendaring and scheduling systems and tools, and users of those tools. Our purpose is to improve all aspects of calendaring and scheduling, in particular interoperability. We do this by improving existing standards, developing new standards, offering interoperability testing for calendaring and scheduling systems and tools, collaborating with other organizations with similar goals, and conducting periodic conferences where engineers and customers meet and interact in a collegial atmosphere. Virtually every important calendaring or calendaring-related standard since the late 2000s has been authored, edited and/or coedited by members of a CalConnect Technical Committee.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calext">
        <span>CALEXT</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The IETF mailing list most commonly used for calendaring and scheduling standards development. See the page at [https://www.ietf.org/mailman/listinfo/calsify](https://www.ietf.org/mailman/listinfo/calsify) to join.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calscale">
        <span>Calscale</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An iCalendar property used to identify the calendar system used to represent dates and times within an iCalendar object. iCalendar currently only defines the GREGORIAN calendar system.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="calws">
        <span>CalWS</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  CalWS-REST is a CalConnect Proposal and CalWS-SOAP will be a parallel CalConnect Proposal which define an API of basic operations which allow creation, retrieval, update and deletion of calendar objects. In addition, query and freebusy operations are defined to allow efficient, partial retrieval of calendar data. (Reference: CalWS-REST Restful Web Services Protocol for Calendaring.)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="capacity">
        <span>Capacity</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Capacity of a resource, expressed as a numerical quantity. This applies to a Location Resource.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="carddav">
        <span>CardDAV</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing, and sharing contact information based on the vCard format. (Reference: [RFC6352](https://tools.ietf.org/html/rfc6352)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="consensus-scheduling">
        <span>Consensus Scheduling</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process whereby a group comes to agreement on when and perhaps where to hold a meeting or carry out a task, by identifying the "best" time or location to help maximize participation and minimize inconvenience. For more information see 7 Things You Should Know About Consensus Scheduling. (See [VPOLL](#VPOLL).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="counter">
        <span>Counter</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A response sent by an Attendee of an event to the event Organizer to propose a change to the event or task such as the scheduled date/time, list of participants, etc. (Reference: [RFC5546](https://tools.ietf.org/html/rfc5546))
  </div>
</div>


<div class="data-expander">
    <a href="#" id="delegate">
        <span>Delegate</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  In common usage 'delegate' may mean either a person who acts for someone else (cp. [Designate](#Designate)) or refer to the act of appointing someone as a representative. The term has very specific meaning in the iCalendar and iTIP RFCs. In iCalendar, delegate means to specify that another individual, rather than oneself, should attend an event (cp. [Delegator](#Delegator) and [Delegatee](#Delegatee)). In iTIP, delegate means to assign ownership of a task to another individual. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.4) and [RFC5546](https://tools.ietf.org/html/rfc5546))
  </div>
</div>


<div class="data-expander">
    <a href="#" id="delegatee">
        <span>Delegatee</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The attribute in iCalendar that specifies the calendar user(s) to whom a calendar user has delegated participation in an event. The actual attribute name is DELEGATED-TO. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.5).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="delegator">
        <span>Delegator</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The attribute in iCalendar that specifies the calendar user(s) that have delegated their participation in an event to another calendar user. The actual attribute name is DELEGATED-FROM. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.4).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="designate">
        <span>Designate</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The DTEND property for a VEVENT calendar component specifies the non-inclusive end of the event. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.2.2).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="dtend">
        <span>DTEND</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The DTEND property for a VEVENT calendar component specifies the non-inclusive end of the event. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.2.2).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="dtstart">
        <span>DTSTART</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The DTSTART property for a VEVENT specifies the inclusive start of the event. For recurring events, it also specifies the very first instance in the recurrence set. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.2.4).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="event">
        <span>Event</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar object that is commonly used to represent things that mark time or use time. Examples include meetings, appointments, anniversaries, start times, arrival times, closing times.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="event-publication">
        <span>Event Publication</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process by which public event data is gathered, formatted and distributed to calendar users. Often this takes the form of public, unauthenticated clients and/or feeds. See [Public Event](#PublicEvent).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="freebusy">
        <span>Freebusy</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A list of free and busy periods for a particular calendar user or resource. Primarily used for scheduling resources or meetings with other people. Time periods may be marked as busy, free, busy-unavailable (sometimes referred to as out of office) and busy-tentative.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="gregorian-calendar">
        <span>Gregorian Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The most common civil calendar system in use today, recognized by [many international bodies](http://en.wikipedia.org/wiki/Gregorian_calendar)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="ical">
        <span>iCal</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The name of Apple, Inc's desktop calendar user agent. Often used as an abbreviation for the iCalendar standard.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="icalendar">
        <span>iCalendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The Internet Calendaring and Scheduling Core Object Specification. An IETF standard ([RFC5545](https://tools.ietf.org/html/rfc5545)) for a text representation of calendar data. Scheduling operations are specified in [RFC5546](https://tools.ietf.org/html/rfc5546).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="ietf">
        <span>IETF (The Internet Engineering Task Force)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  According to IETF [RFC3935](https://tools.ietf.org/html/rfc3935), "The IETF has traditionally been a community for experimentation with things that are not fully understood, standardization of protocols for which some understanding has been reached, and publication of (and refinement of) protocols originally specified outside the IETF process ...The mission of the IETF is to produce high quality, relevant technical and engineering documents that influence the way people design, use, and manage the Internet in such a way as to make the Internet work better. These documents include protocol standards, best current practices, and informational documents of various kinds."
  </div>
</div>


<div class="data-expander">
    <a href="#" id="imip">
        <span>iMIP (iCalendar Message-Based Interoperability Protocol)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An IETF standard ([RFC6047](https://tools.ietf.org/html/rfc6047)) that describes how iTIP messages are exchanged via email.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="itip">
        <span>iTIP (iCalendar Transport-Independent Interoperability Protocol)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An IETF Standard ([RFC5546](https://tools.ietf.org/html/rfc5546)) that specifies a protocol that uses the iCalendar object specification to provide scheduling interoperability between different calendar systems without reference to a specific transport protocol so as to allow multiple methods of communication between systems (see [iMIP](#iMIP), [iSchedule](#iSchedule)).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="ischedule">
        <span>iSchedule</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A draft specification that describes how iTIP messages are exchanged via HTTP (Reference: [Internet Calendar Scheduling Protocol (iSchedule) draft-desruisseaux-ischedule](https://tools.ietf.org/html/draft-desruisseaux-ischedule-05).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="instance">
        <span>Instance</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A single event of a larger group of events specified as a recurring event (cp. Recurring). (Reference: [RFC4791 (CalDAV)](https://tools.ietf.org/html/rfc4791) and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.4.4).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="inventory-info">
        <span>Inventory Info</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  All information on other resources available as part of a resource.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="invitation-invite">
        <span>Invitation/Invite</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A general term from common usage to convey a request for an attendee's participation in an event. In RFC documents the more specific term is request (cp. [Request](#Request)).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="jcal">
        <span>jCal</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A draft specification that defines a JSON representation of vCard data. Reference: [jCard - The JSON format for vCard](https://datatracker.ietf.org/doc/rfc7095/)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="journal-entry">
        <span>Journal Entry</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  From [RFC5545](https://tools.ietf.org/html/rfc5545), one or more descriptive text notes associated with a particular calendar date. Examples of a journal entry include a daily record of a legislative body or a journal entry of individual telephone contacts for the day or an ordered list of accomplishments for the day.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="managed-attachment">
        <span>Managed Attachment</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An attachment associated with a calendar component that is stored and managed on a CalDAV server. (Reference [draft-daboo-caldav-attachments](https://tools.ietf.org/html/draft-daboo-caldav-attachments-03).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="maximum-instances">
        <span>Maximum Instances</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Maximum number of instances of an event a resource can be scheduled for from a given point in time.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="meeting">
        <span>Meeting</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An acronym for Multipurpose Internet Mail Extensions, a specification for formatting non-ASCII text message content, including iCalendar data, graphics, audio and video, so that they can be sent over the Internet. MIME is supported by email clients and web browsers (see [RFC2045](https://tools.ietf.org/html/rfc2045), [RFC2046](https://tools.ietf.org/html/rfc2046), [RFC2047](https://tools.ietf.org/html/rfc2047)).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="mime-type">
        <span>Mime Type</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An Internet media type, sometimes a Content-type after the name of a header in several protocols whose value is such a type, is a two-part identifier for file formats on the Internet. The identifiers were originally defined in [RFC2046](https://tools.ietf.org/html/rfc2046) for use in e-mail sent through SMTP, but their use has expanded to other protocols such as HTTP, RTP and SIP and for other uses (e.g., OS-level file type identification for application/file association).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="multiple-bookings">
        <span>Multiple Bookings</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Number of simultaneous bookings allowed by a resource, during scheduling.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="non-gregorian-calendar">
        <span>Non-Gregorian Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Any calendar system that is not a Gregorian Calendar (e.g., Chinese, Hebrew, Islamic). See [Wikipedia](http://en.wikipedia.org/wiki/Calendar) for a description of many different calendar systems.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="notification">
        <span>Notification</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Alarm](#alarm).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="oasis">
        <span>OASIS (Organization for the Advancement of Structured Information Standards)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A Standards Development Organization primarily focused on web services standards. [OASIS](http://www.oasis-open.org) and CalConnect have reciprocal memberships for joint work on WS-Calendar.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="organizer">
        <span>Organizer</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar user who creates a calendar item, requests free/busy information, or published free/busy information. It is an Organizer who invites Attendees. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.4.3).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="personal-calendar">
        <span>Personal Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar containing events for one calendar user (the owner), and typically only accessible to the owner, or others authorized by the owner (cp. Calendar, Public Calendar, Shared Calendar).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="priority">
        <span>Priority</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A level of importance and/or urgency calendar users can apply to Tasks and Events. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.1.9).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="property">
        <span>Property</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  RFCs define the objects and components of their subject which in turn have properties which have values (sometimes referred to as 'property parameters' or 'property attributes'). These "property parameters" contain meta-information about the property or the property value. Property parameters are provided to specify such information as the location of an alternate text representation for a property value, the language of a text property value, the value type of the property value, and other attributes. Throughout this glossary are references to component, property, and attribute following this usage. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="public-calendar">
        <span>Public Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar containing primarily public events and accessible to anyone or a specific group of calendar users (cp. Calendar, Personal Calendar, Shared Calendar). See [Public Event](#public-event).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="public-event">
        <span>Public Event</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An event meant to be published to or distributed to anyone or a specific group of calendar users. These generally differ from personal events in that they contain much more detail about the event, its location, categories and other properties. See Event Publication and Publish.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="publish">
        <span>Publish</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Generally, to make calendar information, such as freebusy time, available to a select group or to the public. From the RFC for iTIP, "The 'PUBLISH' method in a 'VEVENT' calendar component is an unsolicited posting of an iCalendar object."
  </div>
</div>

<div class="data-expander">
    <a href="#" id="rrule">
        <span>RRULE</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An iCalendar property used to define a repeating pattern for events or tasks.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="rscale">
        <span>RSCALE</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  contAn iCalendar RRULE parameter indicating which calendar system to use for expanding this [RRULE](http://tools.ietf.org/html/rfc7529).ent
  </div>
</div>

<div class="data-expander">
    <a href="#" id="recurrence-id">
        <span>RECURRENCE-ID</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  This property is used to identify a specific instance of a recurring VEVENT, VTODO, or VJOURNAL calendar component.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="recurring">
        <span>Recurring</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An event or task that happens more than once either with a regular interval (ex. daily, weekly, monthly) that can be expressed by a rule or with an explicit series of dates/times.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="request">
        <span>Request</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A broadly used term in multiple RFCs to represent an action. That action may be a query for property values from a client to a server (cp. [RFC4791](https://tools.ietf.org/html/rfc4791), a query between a client and a server that results in object creation, modification, or deletion (cp. [RFC4791](https://tools.ietf.org/html/rfc4791) and [RFC5545](https://tools.ietf.org/html/rfc5545)), and it is the name of a method in iTIP that makes "an explicit invitation to one or more attendees" (among other things, cp. RFC5546). (Reference: [RFC4791](https://tools.ietf.org/html/rfc4791), [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.7.2), [RFC5546](https://tools.ietf.org/html/rfc5546), and Internet Calendar Scheduling Protocol ([iSchedule](#ischedule)).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="reminder">
        <span>Reminder</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Alarm](#alarm).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="repeating">
        <span>Repeating</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Recurring](#recurring).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="resource">
        <span>Resource</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A resource in the scheduling context is any shared entity, that can be scheduled by a calendar user, but does not control its own attendance status. Resources can be of "Location", "Equipment", or "Role" type.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="rvsp">
        <span>RSVP</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Specifies whether there is an expectation of a reply from a specific calendar user (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.2.17).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="scheduling">
        <span>Scheduling</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Briefly, the process by which organizers and attendees plan events or assign tasks. More specifically the term encompasses the exchange of request/invitations and responses between organizers and attendees of scheduled events, tasks or journal entries.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="scheduling-admin-contact-info">
        <span>Scheduling Admin Contact Info</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An attribute that contains contact information for the scheduling approvers, if approval is required.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="shared-calendar">
        <span>Shared Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar that is accessible to multiple calendar users. Typically there is an "owner" and a set of "sharees", some of whom may have read-only access and some of whom might have read/write access (cp. [Calendar](#calendar), [Personal Calendar](#personal-calendar), [Public Calendar](#public-calendar), [Subscribed Calendar](#subscribed-calendar)).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="subscribed-calendar">
        <span>Subscribed Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A calendar that has been published, typically on an HTTP server. See [Publish](#publish).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="task">
        <span>Task</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A representation of an item of work assigned to an individual. In [RFC5545](https://tools.ietf.org/html/rfc5545), these are "VTODO" calendar components, which are groupings of component properties and possibly "VALARM" calendar components that represent an action-item or assignment.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="text-calendar">
        <span>Text/calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The MIME content type for encoding iCalendar objects. Example usage includes: email, web pages.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="timezone">
        <span>Timezone also Time Zone</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Areas of the Earth that have adopted the same local time. Time zones are generally centered on meridians of a longitude, that is a multiple of 15, thus making neighbouring time zones one hour apart. However, the one hour separation is not universal and the shapes of time zones can be quite irregular because they usually follow the boundaries of states, countries or other administrative areas. In [RFC5545](https://tools.ietf.org/html/rfc5545), time zones are represented using "VTIMEZONE" calendar components, each with a Time Zone Identifier (TZID) that can be used to tie a particular date and time to a specific timezone.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="timezone-service">
        <span>Timezone Service</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A client/server protocol used for distributing Timezone data. The protocol improves the accuracy and speed of distributing timezone data to ensure clients are kept up to date with sometimes rapidly changing definitions. It also allows clients to avoid having a complete database of all timezones - instead they can download timezone data on a case-by-case basis. (Reference [draft-douglass-timezone-service](https://datatracker.ietf.org/doc/html/draft-douglass-timezone-service).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="transparency">
        <span>Transparency</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A property of an event that defines whether it will appear free or busy in free/busy time searches.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="valarm">
        <span>VALARM</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A VALARM calendar component is a grouping of component properties that is a reminder or alarm for an event or a to-do. For example, it may be used to define a reminder for a pending event or an overdue to-do. VALARMs will thus be included within VEVENT and VTODO components. VAVAILABILITY - An iCalendar component that is used to describe periods of time for which a calendar user is available for scheduling of events. (Reference: [draft-daboo-calendar-availability](https://tools.ietf.org/html/draft-daboo-calendar-availability.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="vcalendar">
        <span>vCalendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A text representation of calendar and scheduling data created by the Versit consortium (also, the vCalendar specification). The [RFC5545](https://tools.ietf.org/html/rfc5545) iCalendar specification supersedes the work of vCalendar, though VCALENDAR remains as a component type in the [RFC5545](https://tools.ietf.org/html/rfc5545) iCalendar specification.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="vCard">
        <span>vCard</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An IETF standard for a text representation of contact data. See CardDAV. (Reference: [RFC2426](https://tools.ietf.org/html/rfc2426) vCard V3.0, [RFC6350](https://tools.ietf.org/html/rfc6350) vCard V4.0.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="vevent">
        <span>VEVENT</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A VEVENT calendar component represents a scheduled amount of time on a calendar. For example, it can be an activity; such as a one-hour long, department meeting from 8:00 AM to 9:00 AM, tomorrow. Generally, an event will take up time on an individual calendar. The VEVENT is also the calendar component used to specify an anniversary or daily reminder within a calendar.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="vfreebusy">
        <span>VFREEBUSY</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A grouping of component properties that represents either a request for free or busy time information, a reply to a request for free or busy time information, or a published set of busy time information.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="vjournal">
        <span>VJOURNAL</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A VJOURNAL calendar component is a grouping of component properties that represent one or more descriptive text notes associated with a particular calendar date. The DTSTART property is used to specify the calendar date with which the journal entry is associated. Examples of a journal entry include a daily record of a legislative body or a journal entry of individual telephone contacts for the day or an ordered list of accomplishments for the day. The VJOURNAL calendar component can also be used to associate a document with a calendar date.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="voll">
        <span>VPOLL</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A proposed extension to iCalendar. VPOLL is a new component which allows conducting a "poll" via iTIP exchanges to accomplish consensus scheduling for an event or appointment. See Consensus Scheduling. (Reference: [draft-york-vpoll](https://datatracker.ietf.org/doc/draft-york-vpoll/).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="vtodo">
        <span>VTODO</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A VTODO calendar component is a grouping of component properties and possibly VALARM calendar components that represent an action-item or assignment. For example, it can be used to represent an item of work assigned to an individual; such as "turn in travel expense today".
  </div>
</div>

<div class="data-expander">
    <a href="#" id="webdav">
        <span>WebDAV</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Web Distributed Authoring and Versioning (WebDAV) is an extension of the Hypertext Transfer Protocol (HTTP) that facilitates collaboration between users in editing and managing documents and files stored on World Wide Web servers. See [CalDAV](#caldav) and [CardDAV](#carddav). (Reference: [RF4918](https://tools.ietf.org/html/rfc4918).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="webdav-sync">
        <span>WebDAV Sync</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An extension to Web Distributed Authoring and Versioning (WebDAV) that allows efficient synchronization of the contents of a WebDAV collection. (Reference: [RFC6578](https://tools.ietf.org/html/rfc6578).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="ws-calendar">
        <span>WS-Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  An OASIS (Organization for the Advancement of Structured Information Standards) working group tasked with defining a cross-domain standard for passing schedule and interval information between and within services built around CalWS. The product of the working group will be a standard also named [WS-Calendar](http://www.oasis-open.org/committees/workgroup.php?wg_abbrev=ws-calendar) incorporating the CalWS proposal. See [CalWS](#calws).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="xcal">
        <span>xCal</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A standard that defines an XML representation of iCalendar data. (Reference: xCal: The XML format for iCalendar - [RFC6321](https://tools.ietf.org/html/rfc6321).)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="xcard">
        <span>xCard</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A standard that defines an XML representation of vCard data. (Reference: xCard: vCard XML Representation - [RFC6351](https://tools.ietf.org/html/rfc6351).)
  </div>
</div>
