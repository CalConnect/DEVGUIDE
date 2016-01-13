
# Test for showing ics examples

## using ticks

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
DTSTART;TZID=America/New_York:20160420T120000
DURATION:PT1H
LOCATION:Mo's bar - back room
RRULE:FREQ=WEEKLY;COUNT=3
END:VEVENT
END:VCALENDAR
```

Pro:
- easy to use
- common way of doing so

Contra:
- no highlighting e.g. of changes possible

## using plantuml / salt

@startuml
salt{
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ABC Corporation//NONSGML My Product//EN
BEGIN:VEVENT
SUMMARY:Lunchtime meeting
UID:ff808181-1fd7389e-011f-d7389ef9-00000003
DTSTART;TZID=America/New_York:20160420T120000
DURATION:PT1H
LOCATION:Mo's bar - back room
**RRULE:FREQ=WEEKLY;COUNT=3**
END:VEVENT
END:VCALENDAR
}@enduml

Pro:
- still easy
- highlighting possible

Contra:
- not the usual way of doing so
- no background color change possible

## another example with real uml

@startuml
title Example: Simple recurrent event

object "Recurrence 1" as r1 {
  Lunchtime meeting
  week 1
}

object "--Recurrence-- --2--" as r2 {
}

object "Recurrence 3“ as r3 {
  Lunchtime meeting
  week 3
}

r1 -right-> r2
r2 -right-> r3 
@enduml


