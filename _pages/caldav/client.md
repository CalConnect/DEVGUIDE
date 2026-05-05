---
layout: toc-type
title: Client
parent: "/caldav/"
order: 2
parents: CalDAV:/caldav
permalink: "/caldav/client/"

---
The CalDAV client section covers client architecture and common operations.

## Architecture

A CalDAV client typically:

1. Discovers the server via well-known URLs or DNS SRV.
2. Authenticates the user (Basic, Digest, OAuth 2.0, or Bearer tokens).
3. Discovers the principal URL and calendar home set.
4. Lists available calendars.
5. Synchronizes events using sync tokens or ETags.
6. Sends scheduling messages via CalDAV scheduling (RFC 6638).

## Sub-Pages

- [Client Implementations](/caldav/client-implementations/) — Known CalDAV clients and applications.
- [Bootstrapping](/caldav/bootstrapping/) — Service discovery details.
