---
layout: toc-type
title: FreeBusy and Availability
parent: /Scheduling/Scheduling
mainParrent: "iCalendar Topics"
parents: "iCalendar Topics:/iCalendar-Topics;Scheduling:/Scheduling/Scheduling/"
order: 3
---

# FreeBusy and Availability
The problem we are generally trying to address here is the answer to a question posed to  group of people and resources:

   * When can we have this meeting?

This is often the hardest part of putting together a meeting. Here we describe some of the concepts, why what we think might work in fact doesn't and provide some links to possible solutions.

## Freebusy
FreeBusy is a report on the free and busy times of a person or sometimes a resource, such as a room. The is the 'traditional' approach to scheduling a meeting goes something like:

  1. Get a freebusy report for each potential attendee (and room)
  2. Select a time when enough attendees are free
  3. Send an invitation to the attendees
  4. Get some responses back
  5. Call, email or otherwise harass the attendees that didn't answer
  6. Pick another time and repeat.

This approach to putting together a meeting has been shown to be inordinately expensive. Numbers between 18 and 21 work hours have been reported for moderately sized meetings. This was the incentive behind our collaboration with Boeing on the FreeBusy aggregator project. (More on that [below.](#Aggregator))

In some environments, with appropriate constraints, this approach may work. It requires the following:

   *  Potential attendees must have up-to-date and visible calendars for the potential meeting times
   *  They need to respond in a timely manner to those meeting requests
   *  More often than not they should accept

This may be the case in a corporate environment with fairly fixed work hours or where the work calendar overrides other (personal) calendars. It did not work for Boeing and generally will not work in a more relaxed environment.

Some of the factors that prevent freebusy from working are:

   *  Potential attendees don't maintain their calendars
      Many people are very relaxed about maintaining their calendars
   *  Their calendars aren't available.
      Some work environments explicitly prohibit users from exporting calendar data outside of the work environment.
   *  Busy people are 100% busy

## Availability
Availability flips the problem around. Instead of asking a potential attendee when they are free then making a decision we instead ask them when they are available. We can also provide some context, e.g. location and the response can indicate a set of times when they might attend. This has some benefits:

   * They don't have to have a free slot - they're saying they're prepared to move some other meeting
   * They don't have to reveal anything about their schedule - that might be privileged information

The [VAVAILABILITY](/Scheduling/vavailability/) specification standardizes this and also allows for many other capabilities. Apart from being a way to respond with available time it has uses within the SmartGrid and for VPOLL.

VAVAILABILITY was originally defined in answer to a Office Hours problem. This was the need by many universities to:
   *  define the hours when faculty could meet with students and
   *  allow those students to book time and
   *  have it appear in the faculty calendar

CalConnect was asked if there was a standards based solution to that so we invented one. The term "Office Hours" has caused much confusion as the component can also be used to specify your working day.

## Some solutions
There are many solutions to the problem - at least partial. Web services have sprung up - such as Doodle (name others) - which take the approach of presenting choices to the potential attendees and having them rate them.

CalConnect has given this approach a name - Consensus Scheduling. This approach has many advantages:

   *  Does not require the participants to reveal anything beyond acceptance or rejection
   *  Peer pressure often leads to a quick solution - participants can see what others are moving towards

The end result of most of these services is an iTip request sent via iMip which now has a high acceptance rate.

<h4 id="Aggregator">The Boeing/CalConnect FreeBusy aggregator</h4>

##### The problem
With the development of the DreamLiner Boeing took a different approach of contracting out the building of most of the components to outside contractors with the aircraft being assembled by Boeing.Among the problems this caused them was that of trying to put together very many meetings with those contractors around the world.

Their own research showed them it was taking and average of 21 hours of work just to get each meeting organized. Somebody felt this could not be a true figure, tried an emulation - not involving timezones and came up with 18 hours. The Belgian government also came up with a similar number. (References needed)

##### The attempted solution
A proof of concept was put together to try to resolve the issue Boeing faced - and within it's constraints was successful.

Each potential attendee was supposed to register with a central service. That service would have access to their freebusy. This would allow somebody to query the service for a set of attendees, determine the optimal time and book the meeting.

A number of connectors to popular systems were developed and a subset of CalDAV was used to allow FreeBusy reports for registered users.

This was demonstrated at the Open Group meeting in Miami in (?) and that's where it stayed.

##### Why would it not work?
One of the assumptions was that we would be able to get the individuals freebusy. Even though the connector could probably provide some degree of security, contractors probably didn't want to hand out their freebusy anyway. Sudden busy periods alone may provide useful information to competitors. In the airline industry many of those contractors work on the Airbus and others.  
