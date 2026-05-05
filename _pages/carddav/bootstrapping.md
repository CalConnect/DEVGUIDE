---
layout: toc-type
title: Bootstrapping
parent: "/carddav/client/"
parents: CardDAV:/carddav;Client:/carddav/client/
order: 2
permalink: "/carddav/bootstrapping/"

---
CardDAV service discovery.

## Well-Known URL

```
https://example.com/.well-known/carddav
```

Server redirects to the CardDAV endpoint.

## DNS SRV

```
_carddavs._tcp.example.com. SRV 0 1 443 carddav.example.com.
```

## Principal → Home Set

Same pattern as CalDAV: PROPFIND for `current-user-principal`, then PROPFIND for `addressbook-home-set`.
