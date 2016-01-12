# Creating Simple Events

On this page we describe creating a simple non-recurring event. We will
show the contents of an ics file that represents the event. An ics file is
a representation of calendar events in the standard format with a filename
that ends with ".ics".

An ics file contains a `VCALENDAR` object which contains one or more
events.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
 events go here
END:VCALENDAR
```

Then `BEGIN` and `END` of the `VCALENDAR` object are required and there should be
only one `VCALENDAR` object per file.

The `VERSION` property is required and currently always has the value `2.0`.
The `PRODID` should have a value that identifies your organization.

As an  example we will create an event describing a period in time -
a 1 hour lunch meeting. This event has the following properties:

* start - the date, time and timezone identifier
* duration
* a uid
* a summary - the title for the event

We will add further properties later. For now this event added to the ics file
will look like:

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003@example.com
DTSTART;TZID=America/New_York:20160420T120000
DURATION:PT1H
END:VEVENT
END:VCALENDAR
```

Note that the order of properties within a component is irrelevant.

### SUMMARY
`SUMMARY:Lunchtime meeting`

The summary property provides a title for the event. It should be brief but descriptive.

### UID
`UID:ff808181-1fd7389e-011f-d7389ef9-00000003@example.com`

This is a **globally unique** identifier for the event. It
must not change if the event is altered or republished. This property
is used by clients to identify the event. Events with a different `UID` are
different events - even if they are at the same time.

The value should be guaranteed to be unique. A uuid generator can do this.
(Some reference to a UID generator?) Adding your domain to that makes it even better.

### DTSTART
`DTSTART;TZID=America/New_York:20160420T120000`

This defines the start of the event. In this case it is shown as a local
time of 12:00:00, that is midday. Additionally there is a timezone parameter
which shows that the time must be interpreted as being in that timezone.
(Need a reference to a place of identify timezone)

The date and time part has the form

```
date T time

where

date is year month day in numeric form with no delimiters
time is hours minutes seconds in numeric form with no delimiters
```

### DURATION
`DURATION:PT1H`

The duration property takes a value which has the form
```
P [days] [T [hours][minutes]]

where

days is a number
hours is a number followed by "H"
minutes is a number followed by "M"
```

## Going further - where?
While the above is sufficient for many cases it may not be enough.
Where are we having our lunch meeting? For this we have the `LOCATION` property.

This property has a simple text value - make sure the value has enough
information for all users of the event. For example, the value
"Room 123" may not be enough for those who don't know which building.

For our example we assume it's in a downtown establishment:

```
LOCATION:Mo's bar - back room
```

The full ics file now looks like:
```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
DTSTART;TZID=America/New_York:20160420T120000@example.com
DURATION:PT1H
LOCATION:Mo's bar - back room
END:VEVENT
END:VCALENDAR
```

## Going further - why?
We know when the meeting takes place, and now we know where. But why
are we meeting. For this we have the `DESCRIPTION` property. This
property can take a (very) long description of the event. There are some
rules that must be followed.
* Line feeds MUST be represented as "\n"
* Continuation lines MUST start with a space (true for any property)

So the description might be something like:

```
DESCRIPTION: We'll continue with the unfinished business from last time,\n
 in particular:\n
   Can names start with a number?\n
   What if they are all numeric?\n
   Reuse of names - is it valid\n
 I remind the attendees we have spent 3 months on these subjects. We need
 closure!!!
```

So now our full ics file looks like:
```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
DTSTART;TZID=America/New_York:20160420T120000@example.com
DURATION:PT1H
DESCRIPTION: We'll continue with the unfinished business from last time,\n
 in particular:\n
   Can names start with a number?\n
   What if they are all numeric?\n
   Reuse of names - is it valid\n
 I remind the attendees we have spent 3 months on these subjects. We need
 closure!!!
LOCATION:Mo's bar - back room
END:VEVENT
END:VCALENDAR
```
