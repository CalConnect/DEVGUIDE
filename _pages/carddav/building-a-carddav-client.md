---
layout: toc-type
title: Building a CardDAV client
parent: "/carddav/"
parents: CardDAV:/carddav
order: 2
permalink: "/carddav/building-a-client/"

---
Step-by-step guide to building a CardDAV client.

## 1. Discovery

Try `/.well-known/carddav` on the user's domain. Follow redirects.

## 2. Principal

PROPFIND for `current-user-principal`.

## 3. Home Set

PROPFIND the principal for `addressbook-home-set`.

## 4. List Address Books

PROPFIND the home set to discover address books.

## 5. Query Contacts

Use `addressbook-query` REPORT with filters:

```xml
<C:filter>
  <C:prop-filter name="EMAIL">
    <C:text-match match-type="contains">example</C:text-match>
  </C:prop-filter>
</C:filter>
```

## 6. Create/Update Contacts

PUT a vCard resource to the address book collection.

## 7. Sync

Use `sync-collection` REPORT for incremental updates.
