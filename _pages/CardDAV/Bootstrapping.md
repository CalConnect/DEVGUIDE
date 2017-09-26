---
layout: page
title: Bootstrapping
parent: "/CardDAV/Client"
order: 2
---

## How to discover and load address book contents given a user address

[RFC 6764](https://tools.ietf.org/html/rfc6764) describes how to discover the endpoint and context path for a CardDAV system. Endpoints should be available in DNS SRV records for each service:

```
host -t srv _carddavs._tcp.example.com
-->   _carddavs._tcp.example.com has SRV record 0 0 443 carddav.example.com
```

Context path for the service may be available in DNS TXT records. In practice, providers may not advertise the path this way since it can vary by user.  In that case clients should use the "well-known" path instead, i.e. for carddav, ".well-known/carddav".

Once the endpoint and path are determined, a client can query for the principal resource for this particular user, contained in the "current-user-principal" property, then query that resource to get the "addressbook-home-set" property.  

Query the home set to see the available address book(s) and their properties, then query the individual collections to get the list of hrefs for the contained contacts. By using "multiget" REPORT queries clients can obtain the actual contact content for many items at once.



