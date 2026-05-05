---
layout: toc-type
title: Server
parent: "/carddav/"
order: 4
parents: CardDAV:/carddav
permalink: "/carddav/server/"

---
CardDAV server requirements per RFC 6352.

## Requirements

- Support WebDAV Class 1.
- Support `addressbook-collection` resource type.
- Implement `addressbook-query` REPORT.
- Support GET, PUT, DELETE, PROPFIND on vCard resources.
- Include ETags on all resources.

## Address Book Properties

- Display name
- Description
- Supported vCard versions
- Maximum resource size
