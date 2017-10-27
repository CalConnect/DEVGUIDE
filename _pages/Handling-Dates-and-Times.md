---
layout: toc-type
title: Handling Dates and Times
parent: "/iCalendar-Topics"
mainParent: "iCalendar Topics"
parents: "iCalendar Topics:/iCalendar-Topics"
order: 3
---

# Dates importance in calendar components

When speaking about a calendar, we are speaking  about dates and  times.
Dates represent the most important part of a calendar component.
Either we are speaking about the start of an event, end of an event, duration of an event, we are speaking about dates and times.
Calendar properties like `DTSTART`, `DTEND`, `DUE`, `COMPLETED` have as value types one of following value types: `DATE` or `DATE-TIME`.

Some property values examples can be seen below:

<pre><code>
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
<strong>DTSTART;TZID=America/New_York:20160223T110000
DTEND;TZID=America/New_York:20160226T120000</strong>
LOCATION:Mo's bar - back room
END:VEVENT
</code></pre>


# Using DATE values

A Property value for a Date related property, assigned to a Calendar component, can have the `DATE` value type.
This value type if defined to identify values that contain a calendar date, without any `TIME` information include in it.
This value is basically composed on the year value, month value and day value.
Month value has 4 digits, the month and the day values contain each of them 2 digits.

An example of a `DATE` value type is:
`20160226` - February 26, 2016

Below there is an example of an event having the properties `DTSTART` and `DTEND` set with `DATE` value types
<pre><code>
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
<strong>DTSTART;VALUE=DATE:20160223
DTEND;VALUE=DATE:20160226</strong>
RRULE:FREQ=DAILY
LOCATION:Mo's bar - back room
END:VEVENT
</code></pre>

# Using DATE-TIME values

Beside the `DATE` value type, another value type which is mostly used for the properties is the `DATE-TIME` value type.
The `DATE-TIME` identifies values that specify a calendar date and the time of the day.
`DATE-TIME` can be seen as an extension of the `DATE` value type, an extension that contains beside the normal calendar date also the time of the day, in hours, minutes and seconds.
The way this value is created is the following concatenation:
`DATE` + "T" + `TIME` where:
* `DATE` - represents the calendar date
* "T" - the LATIN CAPITAL LETTER T character is a time designator showing that the value also contains `TIME` value.
* `TIME` - it is the time value, value that can be represented in different ways.

Below there are 2 examples of a `DATE-TIME` value:
* 20160226T120000 - a `DATE-TIME` value that does not contain time zone information
* TZID=America/New_York:20160226T120000 - a `DATE-TIME` value that has also the `TZID` property defining the Time zone on which that `DATE-TIME` applies to.

Depending on the `TIME` value the `DATE-TIME` values can be split in 3 categories:
* `DATE WITH LOCAL TIME AND TIME ZONE REFERENCE` - Date and local time with reference to time zone information. Time zone information is specified by `TZID` property parameter. The `TZID` property parameter value references a particular time zone definition
via a `VTIMEZONE` calendar component.
Example:
TZID=America/New_York:20160307T230000. Indicates March 07, 2016 11:00 PM UTC-05:00
* `DATE WITH LOCAL TIME` - these are "Floating" date-times. They represent the same year, month, day, hour, minute, second no matter
in what time zone they are observed. For example '20160307T230000' will indicate year 2016, month March, day 7, hour 23, minute 0, second 0 for users with different time zones.
* `DATE WITH UTC TIME` - Represent a fix point in time. Their time zone is `UTC` or absolute time. Are identified with suffix 'Z' (which comes from Zulu Military Time with UTC±00:00).
Example: 20160307T230000Z.
It is illegal to apply a 'TZID' property parameter to `DATE-TIME` properties with values in `UTC`

# Using `TIME ZONE` values instead of `LOCAL TIME`

Using `DATE WITH LOCAL TIME` values assigned to your properties is the easiest way of using the `DATE-TIME` value type but in the same time is the less recommended.
Using them may cause synchronization problems for users that are in different time zones and they need to participate at a common event.
For example, creating an event that has as Start Date Time the value '20160307T230000', means that every participant, no matter in what time zone he will be at that moment, will have in his calendar an event at 11 PM, on March 7, 2016.
This will definitely lead to synchronization issues between all participants.

# `UTC` and `TIME ZONE` Handling

UTC Time and Time zone reference are two of the ways on managing the values for the `DATE-TIME` value type.
Dates with local time and time zone reference should be preferred instead of `UTC Time`. Using Time zone information helps the Calendar components to be precise when talking about events that occur more than once when changing from daylight to standard time.
When talking about `Daylight Saving Time`, there is definitely an advantage in using time zone reference. By using `UTC Time`, when changing from standard to daylight time, we will have a gap in our recurrent events, because using `UTC` we will point to a fix point in time.
This will not happen if we will provide time zone reference, because the value will adapt to the time zone, which includes Daylight Time Saving support.

There is a more detailed description about [Best Practices](/Time-Zones/Best-Practices/) in the [Time Zones](/Time-Zones/Time-Zones/) section.
