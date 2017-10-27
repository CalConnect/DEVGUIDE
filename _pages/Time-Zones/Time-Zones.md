---
layout: toc-type
title: Time Zones
parent: "/iCalendar-Topics"
mainParent: "iCalendar Topics"
parents: "iCalendar Topics:/iCalendar-Topics"
childs: 'Best practices, Sources of Time Zone Information, Time Zone Distribution Service'
order: 5
---

# iCalendar Time Zones

## What are time zones?

Time zones provide a way for different geopolitical regions to define a "local" time and a set of rules for daylight saving time that is specific to that region. The "local" time is usually specified as an offset from Universal Coordinated Time (UTC) - the standard reference for time of day (which used to be Greenwich Mean Time - GMT).

Humans typically have names for the time zones they commonly use, such as "Pacific Time" or "Central European Time". Often these are abbreviated to a shorter form, for instance "PT" and "CET" corresponding to the previous examples.

On computers time zones are typically identified using a name of the form "country/city", for example "America/New_York". For that particular example, the UTC offset is -5 hours and daylight saving starts on the second Sunday in March, and ends on the first Sunday in November. All of that information is encoded into a digital "timezone definition" that a computer can understand and use to calculate local times of events, and each definition has a unique timezone identifier.

## How time zones work with digital calendars

Typically in a digital calendar there are two ways of entering a time. One is to enter the time with a timezone identifier "attached". The alternative is to enter the time without a timezone identifier - this style of time is called "floating time". To use a digital calendar correctly users need to understand the differences between these two ways of entering time. This is particularly important if users travel between different areas with different timezone definitions or have meetings (such as over the telephone) with people in different time zones.

Specifying a time with a timezone provides a precise definition for an instant of time relative to UTC. What that means is that the local time of the event is fixed relative to UTC. So a 9 am event in the "America/New_York" timezone in January corresponds to 2 pm (9 am plus the 5 hour offset) in UTC (see Figure 2.1). It also corresponds to 8 am in the "America/Chicago" local time as that timezone is an additional hour behind UTC (see Figure 2.2). So specifying the event using a timezone would allow someone in New York and someone in Chicago to be on a call at the same time.

If a floating time is specified instead of one with a timezone, then things are very different. Now the 9 am event has no associated timezone. Someone in New York sees it as occurring at 9 am in their local time, but someone in Chicago also sees it at 9 am in their local time. But there is a one hour difference between the two locations. A telephone call between the two people will fail because they are each expecting the event at different instants in time.

This simple example would suggest that it is never wise to use floating time events. That is certainly true for events that involve meetings between people. However, the most common use for floating time is for events that have a specific meaning to the owner of the calendar. For example, if the calendar owner always takes a lunch break at 12 pm, no matter where they are, by specifying floating times, the 12 pm event will always occur at that time in whichever locality the user happens to be in. Of course that requires the digital calendar application to know what the correct locality and associated timezone is.
