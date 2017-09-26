---
layout: page
title: iCalendar Data Model
parent: "/iCalendar-Topics"
order: 2
---

# iCalendar Data Model

The iCalendar data format has a well defined data model. iCalendar "objects" encompass a set of iCalendar "components" each of which contains a set of iCalendar "properties" and possibly other sub-components. An iCalendar property consists of a name, a set of optional parameters (specified as "key=value" pairs) and a value.

iCalendar components include:

* **`VCALENDAR`** which encapsulates a set of other components to form a "calendar"
* **`VEVENT`** which represents an event
* **`VTODO`** which represents a task or to-do
* **`VJOURNAL`** which represents a journal entry
* **`VFREEBUSY`** which represents periods of free or busy time information
* **`VTIMEZONE`** which represents a timezone definition (timezone offset and daylight saving rules)
* **`VALARM`** is a sub-component and is used to set alarms or reminders on events or tasks.
* **`STANDARD`** and **`DAYLIGHT`** are sub-components used in **`VTIMEZONE`** components to represent standard and daylight time onsets and offsets.

Properties include:

* **`DTSTART`** which represents a start time for a component
* **`DTEND`** which represents an end time for a component
* **`SUMMARY`** which represents a title or summary for a component
* **`RRULE`** which can specify rules for repeating events or tasks (for example, every day, every week on Tuesdays, etc)
* **`ORGANIZER`** which represents the calendar user who is organizing an event or assigning a task
* **`ATTENDEE`** which represents calendar users attending an event or assigned a task

In addition to this data model and the predefined properties, the specification defines how all those are used together to define the semantics of calendar objects and scheduling. The semantics are basically a set of rules stating how all the components and properties are used together to ensure that all iCalendar products can work together to achieve good interoperability. For example, a rule requires that all events must have one and only one **`DTSTART`** property. The most important part of the iCalendar specification is the semantics of the calendaring model that it represents. The use of text, XML or JSON to encode those is secondary.

iCalendar was designed to be extensible, allowing for new components, properties and parameters to be defined as needed. A registry exists to maintain the list of standard extensions with references to their definitions to ensure anyone can use them and work well with others.

New components being worked on include **`VAVAILABILITY`** and **`VPOLL`**.
