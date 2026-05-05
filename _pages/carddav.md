---
layout: toc-type
title: CardDAV
parent: "/"
parents: CardDAV:/carddav/
order: 700
permalink: "/carddav/"
---

CardDAV (RFC 6352) extends WebDAV for managing contact data. It models address books as WebDAV collections containing vCard resources.

## Core Concepts

- **Address book collections** — WebDAV collections containing vCard resources.
- **Address Book Home Set** — Contains all of a user's address books.
- **Principal URLs** — Each user has a principal resource.
- **Well-known URL** — `/.well-known/carddav` for service discovery.

## Operations

- **GET/PUT/DELETE** — Read, create/update, and remove vCard resources.
- **PROPFIND** — Discover properties and list contacts.
- **REPORT** — `addressbook-query` for searching contacts.
- **MKCOL** — Create address book collections.

## Address Book Query

```xml
<C:addressbook-query xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:carddav">
  <D:prop>
    <D:getetag/>
    <C:address-data/>
  </D:prop>
  <C:filter>
    <C:prop-filter name="FN">
      <C:text-match collation="i;unicode-casemap" match-type="contains">alice</C:text-match>
    </C:prop-filter>
  </C:filter>
</C:addressbook-query>
```
