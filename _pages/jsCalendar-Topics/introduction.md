---
layout: toc-type
title: Introduction
parent: "/jsCalendar-Topics"
mainParent: "jsCalendar Topics"
parents: 'jsCalendar Topics:/jsCalendar-Topics'
order: 100
---

# Introduction

JsCalendar is a JSON based representation of calendar data. The
specification is available as [RFC 8984](https://www.rfc-editor.org/rfc/rfc8984.html).

Along with the specification a mapping document is being created. This
will describe how to map from jsCalendar to iCalendar and vice-versa.
This document may be tracked at the [IETF Datatracker for jsCalendar-iCalendar](https://datatracker.ietf.org/doc/draft-ietf-calext-jscalendar-icalendar/)

It is hoped this new representation will eventually take over from the current iCalendar.

As an example the following is a simple recurring event in iCalendar:

```
BEGIN:VCALENDAR
CALSCALE:GREGORIAN
PRODID:-//Example//EN
VERSION:2.0
BEGIN:VEVENT
DTSTAMP:20200522T142047Z
DTSTART;TZID=America/New_York:20200522T120000
DURATION:PT1H
RRULE:FREQ=DAILY;COUNT=8
SUMMARY:recurring daily 8 times
UID:6252D6C40A8308BFE25BBDEsimpleInvite-1.ics
ORGANIZER:mailto:douglm@mysite.edu
ATTENDEE:mailto:user1@mysite.edu
END:VEVENT
END:VCALENDAR
```
This will be represented in jsCalendar as:

```
{
  "@type": "jsgroup",
  "prodId": "//Example//EN",
  "entries": [
    {
      "@type": "jsevent",
      "participants": {
        "1": {
          "@type": "Participant",
          "sendTo": {
            "imip": "mailto:user1@mysite.edu"
          },
          "expectReply": true,
          "roles": {
            "attendee": true
          }
        },
        "2": {
          "@type": "Participant",
          "sendTo": {
            "imip": "mailto:douglm@mysite.edu"
          },
          "roles": {
            "owner": true
          }
        }
      },
      "created": "2021-02-04T19:29:07Z",
      "start": "2020-05-22T12:00:00",
      "timeZone": "America/New_York",
      "duration": "PT1H",
      "replyTo": {
        "imip": "mailto:douglm@mysite.edu"
      },
      "title": "recurring daily 8 times",
      "uid": "6252D6C40A8308BFE25BBDEsimpleInvite-1.ics",
      "recurrenceRules": [
        {
          "@type": "RecurrenceRule",
          "frequency": "daily",
          "count": 8
        }
      ]
    }
  ]
}
```

