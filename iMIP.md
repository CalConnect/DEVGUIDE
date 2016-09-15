# iMIP: iTIP over email

iMIP is sending and receiving [[iTIP]] messages via email. It is described in [RFC 6047](http://tools.ietf.org/html/rfc6047).

<!-- ?: -->
It is bascially a workaround for the "identity crisis" that users get via email

## What to do as a Client

### Only one VCALENDAR per email
[RFC 6047](http://tools.ietf.org/html/rfc6047#section-4.4) allows to send multiple VCALENDARS with a single email, but we recommend to send only one update per iMIP email (exception: multiple recurrence-ids at once?).

### MIME structure
Since there can not be any negotiation, we need to make sure that all receivers can deal with the email that we sent.

- aplication/ics for yahoo
- text/calendar for ?

```
multipart/mixed
  multipart/alternative
    text/plain
    [… others]
    text/calendar; method=REQUEST
  application/ics (with a content-disposition-attachment: BASE64)
```


## What to do as a Server

### Automating incoming iMIP

- REPLY -> update maybe
- REQUEST -> display to user unless "trusted"
- Check DKIM / spam check should happen before
- Fastmail provides neat configuration for that:
<!-- SCREENSHOT OF FASTMAIL CONFIGURATION UI -->

### Don't have multiple resources with the same UID
Allow same UID in different calendars of the same user? Upgrade to scheduling resource.

This issue rises when having an invitation to "recurrence-only" VEVENTS
When a person is invited to only one or more invididual recurrences of an ongoing meeting series, the client has VEVENTS that are recurrences but doesn't know the master event of them. 

### SCHEDULE-AGENT behaviour
Users might want to be able to orpt-out of sending notifications at all in case it was spam.

<!-- The Scalability Issue -->
When having many attendants, email notifications of an attendant updating the event can end up in a big mail load.
Possible Workarounds for that are
 - Within the first 5 minutes, many people respond to an invitation. So it makes sense to delay sending the reaction to all attendants and send emails that contain batch updates.


This is a test matrix what answers the server should send ([RFC 6638](http://tools.ietf.org/html/rfc6638)):

<!-- TEST MATRIX HERE -->

## Products supporting iMIP

<!-- PRODUCT LIST HERE -->

