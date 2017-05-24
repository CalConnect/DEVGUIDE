<!-- --- title: Bootstrapping -->

Text about bootstrapping.

As of gollum-lib 4.1.0 [PlantUML](http://plantuml.com/) is supported to draw nice diagrams:

@startuml
Client -> Server: /.well-known/caldav
Server -> Client: location: /calendars/users
Client -> Server: PROPFIND /calendars/users 
@enduml

## How to discover and load calendar content given a user address

[RFC 6764](https://tools.ietf.org/html/rfc6764) describes how to discover the endpoint and context path for a CalDAV system. Endpoints should be available in DNS SRV records for each service:

```
host -t srv _caldavs._tcp.example.com
-->   _caldavs._tcp.example.com has SRV record 0 0 443 caldav.example.com
```

Context path for the service may be available in DNS TXT records. In practice, providers may not advertise the path this way since it can vary by user.  In that case clients should use the "well-known" path instead, i.e. for caldav, ".well-known/caldav".

Once the endpoint and path are determined, a client can query for the principal resource for this particular user, contained in the "current-user-principal" property, then query that resource to get the "calendar-home-set" property.  

Query the home set to see the available calendars and their properties, then query the individual collections to get the list of hrefs for the contained events. By using "multiget" REPORT queries clients can obtain the actual event content for many items at once.



