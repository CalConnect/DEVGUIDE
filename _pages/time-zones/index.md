---
layout: toc-type
title: Time Zones
parent: "/"
parents: Time Zones:/time-zones
order: 500
permalink: "/time-zones/"

---
Time zones are one of the trickiest aspects of calendaring. iCalendar uses VTIMEZONE components to define time zone rules, and references them via TZID parameters.

## The Problem

A recurring event at "9am New York time" needs to correctly account for daylight saving time transitions. Without proper time zone handling, events shift by an hour when DST starts or ends.

## VTIMEZONE

iCalendar defines time zones using the VTIMEZONE component:

```
BEGIN:VTIMEZONE
TZID:America/New_York
BEGIN:DAYLIGHT
DTSTART:20070311T020000
RRULE:FREQ=YEARLY;BYDAY=2SU;BYMONTH=3
TZOFFSETFROM:-0500
TZOFFSETTO:-0400
TZNAME:EDT
END:DAYLIGHT
BEGIN:STANDARD
DTSTART:20071104T020000
RRULE:FREQ=YEARLY;BYDAY=1SU;BYMONTH=11
TZOFFSETFROM:-0400
TZOFFSETTO:-0500
TZNAME:EST
END:STANDARD
END:VTIMEZONE
```

## IANA Time Zone Database

The authoritative source for time zone definitions is the IANA Time Zone Database (also known as the Olson database or tzdata). It contains historical and current time zone rules for all worldwide locations.
