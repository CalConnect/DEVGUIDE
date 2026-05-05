---
layout: toc-type
title: Recurrences
parent: "/icalendar/"
parents: iCalendar:/icalendar
order: 400
permalink: "/icalendar/recurrences/"

---
RRULE, RDATE, and EXDATE define repeating patterns with exceptions.

## RRULE — Recurrence Rules

```
RRULE:FREQ=DAILY
RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR
RRULE:FREQ=MONTHLY;BYMONTHDAY=15
RRULE:FREQ=MONTHLY;BYDAY=2TU
RRULE:FREQ=YEARLY
```

### Parameters

| Parameter | Description |
|---|---|
| FREQ | Required: DAILY, WEEKLY, MONTHLY, YEARLY, etc. |
| INTERVAL | Periods between recurrences |
| COUNT | Max instances |
| UNTIL | End date/datetime |
| BYDAY | Days of week |
| BYMONTHDAY | Days of month |
| BYSETPOS | Nth from BY\* set |

### Bounded

```
RRULE:FREQ=WEEKLY;COUNT=10
RRULE:FREQ=DAILY;UNTIL=20240315T000000Z
```

## RDATE — Additional dates

```
RDATE:20240215T090000Z
```

## EXDATE — Exception dates

```
RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR
EXDATE:20240115T090000Z
```

## Modifying Instances

EXDATE the original, then create a new component with same UID + RECURRENCE-ID:

```
BEGIN:VEVENT
UID:meeting@example.com
RECURRENCE-ID:20240115T090000Z
DTSTART:20240115T140000Z
SUMMARY:Team Meeting (moved)
END:VEVENT
```
