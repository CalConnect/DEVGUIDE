CalConnect project to provide documentation on Calendaring and related issues.

View the site at https://devguide.calconnect.org

# CalConnect DEVGUIDE Technical Committee

## Background

iCalendar [RFC5545] is a calendaring and scheduling data interchange format designed to promote interoperability between digital calendaring systems. However, calendaring, by its very nature, is complex. Things like recurring events, time zones, multi-party scheduling, and more, all lead to complex scenarios. This complexity is fully exposed in iCalendar, and implementors of digital calendar systems that use it, need to be fully aware of these issues in order to correctly use it.

Evidence to date has shown that there are a number of key areas that consistently cause problems for implementors. In addition, many implementors are put off by the perceived complexity of iCalendar, instead inventing their own, initially simplistic, calendaring data formats, that eventually fall foul of the same issues iCalendar has already addressed, as more calendaring features are added.

Interoperability is best served by having one solid standard for data interchange - iCalendar - with good examples and descriptions of how it is properly used, and how it can be used for simple situations as well as more complex ones.

## Charter

The goal of this TC is to develop a "cookbook" document that describes how to start using iCalendar to build basic events and then move on to more complex calendaring and scheduling problems. This document will link to diagrams and more in-depth articles (FAQs) on specific topic areas that need additional detail. The primary audience for this document is developers at all levels (from hobbyists, to web sites embedded calendaring data, to full-blown calendar and scheduling systems, to complex systems wishing to embed a calendaring platform). The initial goal will be to produce the content for the document, diagrams and FAQs, then follow that up with the actual presentation of that data (which might be a static document, a simple set of linked HTML pages, a wiki, or a more complex "interactive" site). It is expected that this will lead to development of additional "how to" documents that describes more sophisticated calendaring use such as CalDAV and other APIs.

## Out of Scope for API

We're not developing new protocol elements or APIs, this work is just describing the standards as they exist today.
 
## Deliverables

- A "cookbook" document in a format that is engaging for developers
- Guidance to CalConnect on building a suitable IT infrastructure to support an interactive document

## Begin and End Dates

* **Begin:** April 2015
* **End:** tbd

## Milestones and Work Products

| Period | Milestone |
| --- | --- |
| April-May 2015 |	Identify key problem areas of iCalendar for documenting as FAQs|
|May 2015 |	Outline of the "cookbook" document for presentation at the Conference|
|June-August 2015 |	Develop the key examples for the "cookbook" along with associated FAQs and diagrams|
|September 2015 |	Evaluate the best way to present the content and present it at CalConnect XXXIV|
|October 2015-January 2016 |	Develop the public-facing version of the document|
|April 2016 | Official announcement of DEVGUIDE at Conference in Hong Kong|
|September 2016|Integrate content about Server, Clients and libraries from caldav.calconnect.org and carddav.calconnect.org|
|January 2017 | Integrate content about Timezones and Handling Date and Time|
|April 2017| Integrate content about VCard and Bootstrapping |
|July 2017 | Integrate way to receive feedback from users |

## DEVGUIDE Mailing List

Besides participation on improving this Developers' Guide is free for everyone, there is a closed DEVGUIDE Mailing list within CalConnect to organise the work.

You must be an employee of a Consortium member to be subscribed to this mailing list.
You must be subscribed to the TC DEVGUIDE mailing list to post messages to this mailing list.

[tc-devguide-l](mailto:tc-devguide-l@lists.calconnect.org)

Participation on the DEVGUIDE mailing list will be in accordance with standard CalConnect practices and procedures.

## Chair 

Thomas Schäfer (1&1)

Please contact the Chair for more information or to join this Technical Committee. Participation in this Technical Committee will be in accordance with standard CalConnect practices and procedures.
