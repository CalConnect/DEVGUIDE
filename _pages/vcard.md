---
layout: toc-type
title: vCard
parent: "/"
parents: vCard:/vcard/
order: 650
permalink: "/vcard/"
---

vCard (RFC 6350) is the standard format for representing and exchanging contact information. It is the contact data counterpart to iCalendar — where iCalendar handles events and scheduling, vCard handles names, addresses, phone numbers, and other personal data.

## What vCard Provides

A vCard object (typically stored in `.vcf` files) represents a single contact or entity. It uses a text-based property format similar to iCalendar:

```
BEGIN:VCARD
VERSION:4.0
FN:Alice Smith
N:Smith;Alice;;;
EMAIL;TYPE=work:alice@example.com
TEL;TYPE=cell:+1-555-0100
ORG:Example Corp
END:VCARD
```

## vCard Versions

| Version | RFC | Status |
|---|---|---|
| 2.1 | No formal RFC | Legacy, still widely used |
| 3.0 | RFC 2426 | Common in older systems |
| 4.0 | RFC 6350 | Current standard |
| 5.0 | RFC 9553 (JSContact) | JSON-based successor |

## Relationship to CardDAV

vCard is the data format that CardDAV servers store and serve. When a CardDAV client syncs contacts, it exchanges vCard objects with the server. The CardDAV protocol handles the synchronization, access control, and collection management, while vCard defines the contact data itself.

## Common Properties

- **FN** (Formatted Name) — The display name. Required in vCard 4.0.
- **N** (Structured Name) — Family, given, additional, prefix, suffix components.
- **EMAIL** — Email address with optional TYPE parameter (home, work).
- **TEL** — Telephone number with optional TYPE parameter.
- **ADR** — Structured delivery address (PO box, extended, street, locality, region, postal code, country).
- **ORG** — Organization name and organizational unit.
- **URL** — Website or profile URL.
- **PHOTO** — Contact photo, either inline (base64) or by reference (URI).
- **BDAY** — Birthday date.

## Extensibility

vCard supports custom properties with the `X-` prefix (e.g., `X-SOCIALPROFILE`, `X-ASSISTANT`). vCard 4.0 also supports grouping properties with a prefix (e.g., `ITEM1.EMAIL`, `ITEM1.TEL`) to associate related properties.

## What vCard Provides

A vCard object (often stored in `.vcf` files) represents a single contact or entity. It contains properties organized into groups, with support for:

- **Identity** — Formatted name (FN), structured name (N), nickname, and photo.
- **Contact details** — Email (EMAIL), telephone (TEL), and instant messaging addresses.
- **Addresses** — Structured delivery addresses (ADR) with components for street, city, region, postal code, and country.
- **Organization** — Organization name (ORG), title, and role.
- **Dates** — Birthday (BDAY), anniversary, and death date.
- **Extended properties** — Geographic coordinates (GEO), URLs, notes, and custom properties using the `X-` prefix.

vCard 4.0 (RFC 6350) is the current standard, introducing improvements like group-based property organization, enhanced security (KEY property for public keys), and better internationalization support.
