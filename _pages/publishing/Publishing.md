---
layout: toc-type
title: "Publishing Events"
parent: "/publishing"
mainParent: "publishing"
parents: 'Publishing Events:/publishing'
order: 100
---

Publishing events is a good way to advertise what is happening in your organisation and, when done correctly, allows people to add the information to their personal calendars.

They may be published as a single ics file which can be downloaded or subscribed to or they may be made visible through some of the javascript packages available. Whichever is chosen, for this to be most effective the events must be available in iCalendar format.

Simply providing an html, pdf or other format list of events is the least useful approach. It is relatively easy (perhaps easier) to use a calendar client to maintain a single calendar collection which can be exported or published for subscription or download. Not doing so forces your users/customers to transcribe the information to get it into their calendar.

## Some points to be addressed more fully


 * use and meaning of iCalendar METHOD property
 * content-type
 * Etags - last-modified
     * if-none-match header
 *   subscription upgrade
 * best practices for clients
     *   how to "discover" good behavior on a server
     *   how to deal with bad behaving servers
 * common pitfalls
     *   why not to return "current time" as "last modified"

## Long running events
Do NOT use a huge duration for events that cover many days. Instead use a recurring, allday event.

## Subscription or download
A subscription is generally provided using the de-facto webcal scheme, e.g. webcal://example.org/mycalendar.ics. Such a url is used by clients which will repeatedly check for changes to the data. This allows you to add new events and update or cancel existing events.

A download is usually just a one time operation - the client will import the event or events but will not go back to check for changes.

## Delete or cancel
It is almost always bad practice to delete an event that is canceled. This leaves no record for people who may have decided to attend. Use the **STATUS** property and set it to **"CANCELLED"** (that's the spelling). Clients will often highlight canceled events and it provides a positive indication to the end user.

## Good locations.
Remember that your audience doesn't necessarily have the full context. Put a full address into the location. Many clients will recognize it as such and use that to link to maps to help people get there. "Room 123" is simply not enough.

## Valid UIDs
Ensure correct usage of the UID property. An event (including all instances for recurring events) is identifid by the UID. When regenerating an ics feed the UID for a given event must not change.
