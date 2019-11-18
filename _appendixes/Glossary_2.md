---
layout: toc-type
title: Glossary of Terms
parent: "/Appendix/Appendixes"
mainParent: "Appendixes"
parents: 'Appendixes:/Appendix/Appendixes'
order: 1
published: false
---

# Calendaring and Scheduling Glossary of Terms

This page is an effort to compile, in one location, a common set of terminology with respect to calendaring and scheduling applications and standards. The document incorporates terminology already existing in calendaring standards such as [RFC5545](https://tools.ietf.org/html/rfc5545) (Internet Calendaring and Scheduling Core Object Specification (iCalendar)), [RFC5546](https://tools.ietf.org/html/rfc6646) (iCalendar Transport-Independent Interoperability Protocol (iTIP)), [RFC6047](https://tools.ietf.org/html/rfc6047) (iCalendar Message-Based Interoperability Protocol (iMIP)), [RFC4791](https://tools.ietf.org/html/rfc4791) (Calendaring Extensions to WebDAV (CalDAV)), [RFC6638](https://tools.ietf.org/html/rfc6638) (Scheduling Extensions to CalDAV (CalDAV)), as well as input from members of the Calendaring and Scheduling Consortium (CalConnect).

Some glossary terms may not appear in published standards today. These are common calendaring terms that are included so that everyone refers to components in the same manner.

As new standards evolve, the glossary will serve as a resource for those creating documents so that all the standards share a common set of terms.

Calendaring and scheduling implementers will be able to utilize the glossary to assist them as they read and decipher calendaring standards. Calendaring and scheduling users will be able to use the glossary to help them better understand the terminology deployed by applications written using calendaring standards.

<div class="data-expander expanded">
    <a href="#" id="AccessControl">
        <span>Access Control</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Access control is a system which enables an authority (e.g., user or resource administrator) to control access to different entities in a calendar system. Typically vendors create Preference/Settings options to instantiate access control. Terminology varies considerably across products but broadly speaking access control is usually broken into two areas, read access and write access. Vendor terminology used for read access includes: 'read', 'reviewer', 'proxy read', 'viewer', 'see all', and 'see only freebusy'. Vendor terminology for write access includes: 'write', 'editor', 'proxy write', 'proxy', 'manager', 'administrator', 'designate', 'read/create/edit', 'make changes', 'manage', and 'edit'. (Cp. [Delegate](#Delegate) and [Designate](#Designate) below.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="ACL">
        <span>Access Control List (ACL)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A list of access control elements that define access control to a particular calendar system entity. (Reference: [RFC3744](https://tools.ietf.org/html/rfc3744) for its use in a WebDAV context.)
  </div>
</div>

<div class="data-expander">
    <a href="#" id="Accessibility">
        <span>Accessibility</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Information pertaining to access to a resource by the physically disabled. This applies to Location Resources.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="AdmittanceInfo">
        <span>Admittance Info</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  All information required to gain access to a resource. It applies to Location Resources.
  </div>
</div>

<div class="data-expander">
    <a href="#" id="Agenda">
        <span>Agenda</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Calendar](#Calendar).
  </div>
</div>

<div class="data-expander">
    <a href="#" id="Alarm">
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
    <a href="#" id="Application/calendar+XML">
        <span>Application/calendar + XML</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The MIME content type that indicates an iCalendar object expressed in XML.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Appointment">
        <span>Appointment</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Calendar](#calendar).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Attachment">
        <span>Attachment</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A document object associated with a calendar component.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Attendee">
        <span>Attendee</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Specifies the participants or non-participants (e.g., room or resources) for an event. This property in iCalendar can contain multiple attributes specifying additional information, i.e., role, participation status, group membership, delegation, etc. (Reference: [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.6.4.1).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Autoconfiguration">
        <span>Autoconfiguration</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process of configuring clients such as mobile devices or desktop applications to access a service, or class of service, with a minimum of input from the user of the device. See also [Autodiscovery](#Autodiscovery).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Autodiscovery">
        <span>Autodiscovery</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The process used to determine the services provided by a host, or for a domain, including retrieval of the recommended configuration values for those services. The autodiscovery functionality requires the service provider to declare in a standard way which services are available and what their configuration looks like for the requesting user. See also [Autoconfiguration](#Autoconfiguration). (Reference: [draft-daboo-aggregated-service-discovery](https://datatracker.ietf.org/doc/draft-daboo-aggregated-service-discovery/).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Autoschedule">
        <span>Autoschedule</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Accept scheduling invitations automatically with no human intervention.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="BookingWindow">
        <span>Booking Window</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  The window of time in which a resource can be booked, relative to the start time of the event.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CalDAV">
        <span>CalDAV</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  Extensions to the Web Distributed Authoring and Versioning (WebDAV) protocol to specify a standard way of accessing, managing and sharing calendar data based on the iCalendar format. Defined by two specifications, the first, RFC4791, specifies a calendar access protocol that allows Calendar User Agents to access and manage calendar data. The second specification, RFC 6638, specifies a standard way of performing scheduling transactions with iCalendar-based calendar components. This document defines the "calendar-auto-schedule" feature of CalDAV. (Reference: [RFC 4791](https://tools.ietf.org/html/rfc4791), and [RFC 6638](https://tools.ietf.org/html/rfc6638).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="Calendar">
        <span>Calendar</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A collection of calendar items such as events, tasks, journal entries, etc. Examples include a person's or group's schedule, resource availability, and event listings. Typically an individual may own multiple calendars based on the same or different services.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CalendarAccessRights">
        <span>Calendar Access Rights</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  See [Access Control](#AccessControl), [Access Control List](#ACL), [Delegate](#Delegate), and [Designate](#Designate).
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CalendarCollection">
        <span>Calendar Collection</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A WebDAV collection used to represent a calendar containing a set of calendar object resources. (Reference: [RFC4791](https://tools.ietf.org/html/rfc4791) and [RFC5545](https://tools.ietf.org/html/rfc5545#section-3.4).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CalendarObjectResource">
        <span>Calendar Object Resource</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A WebDAV resource representing an iCalendar component typically stored inside a Calendar Collection (cp. Component). (Reference: [RFC4791](https://tools.ietf.org/html/rfc4791).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CalendarService">
        <span>Calendar Service</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A server application that provides calendar user agents access to calendar stores.
  </div>
</div>


<div class="data-expander">
    <a href="#" id="CS">
        <span>Calendar Store (CS)</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  A data repository that may contain several calendars as well as properties and components of those calendars. A local calendar store is on the same device as the calendar user agent ([CUA](#CUA)). A remote calendar store is not on the same machine/device as the calendar user agent. (Reference: [RFC3283](https://tools.ietf.org/html/rfc3283).)
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>


<div class="data-expander">
    <a href="#" id="">
        <span>title</span>
        <i class="material-icons">add</i>
    </a>
  <div class="data-expander-child" markdown="1">
  content
  </div>
</div>

