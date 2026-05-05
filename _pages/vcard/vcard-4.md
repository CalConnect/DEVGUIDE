---
layout: toc-type
title: vCard 4.0
parent: "/vcard/"
parents: vCard:/vcard
order: 2
permalink: "/vcard/vcard-4/"
---

vCard 4.0 (RFC 6350) is the current standard for contact data exchange. It improved on vCard 3.0 (RFC 2426) with better internationalization, structured data types, and enhanced security properties.

## Key Features

### Required FN Property

vCard 4.0 makes the `FN` (Formatted Name) property mandatory. Every vCard must have a displayable name, ensuring that applications can always present a meaningful label for a contact.

### Structured Data Types

Property values use explicit data types:

- **DATE** — Birthday, anniversary (ISO 8601 format: `YYYY-MM-DD`)
- **TIME** — Time values
- **DATETIME** — Combined date and time
- **URI** — URLs for websites, social profiles, and photos
- **BOOLEAN** — True/false values
- **INTEGER** — Numeric values
- **FLOAT** — Decimal numbers
- **UTC-OFFSET** — Time zone offsets

### Grouping

Properties can be grouped using a prefix:

```
ITEM1.EMAIL;TYPE=work:alice@example.com
ITEM1.TEL;TYPE=work:+1-555-0100
```

This associates related properties without creating a nested structure.

### Security Properties

- **KEY** — Public encryption keys (PGP, S/MIME) for secure communication.
- **EXPERTISE** — Areas of professional expertise.

### Internationalization

vCard 4.0 uses UTF-8 encoding by default, with full support for non-ASCII characters in names, addresses, and other properties. The `LANGUAGE` parameter can specify the language of a property value.

## Property Parameters

vCard 4.0 standardized several parameters:

- **TYPE** — Categorizes the property (e.g., `TYPE=home`, `TYPE=work`, `TYPE=cell`). Multiple types can be combined: `TYPE=home,voice`.
- **PREF** — Preference ranking (1 = most preferred). Used when a contact has multiple values for the same property.
- **ALTID** — Alternative representations of the same property (e.g., name in different scripts).
- **PID** — Persistent identifier for cross-referencing properties across vCard versions.
- **CALSCALE** — Calendar type (default: `GREGORIAN`).

## Example

```
BEGIN:VCARD
VERSION:4.0
FN:Alice Smith
N:Smith;Alice;Marie;Dr.;PhD
EMAIL;TYPE=work;PREF=1:alice@example.com
EMAIL;TYPE=home;PREF=2:alice@personal.org
TEL;TYPE=work,voice;VALUE=uri;PREF=1:tel:+1-555-0100
TEL;TYPE=cell;VALUE=uri:tel:+1-555-0200
ADR;TYPE=work:;;123 Business Ave;Metropolis;NY;10001;USA
ORG:Example Corp;Engineering
TITLE:Senior Engineer
URL:https://example.com/~alice
KEY;TYPE=PGP:https://keys.example.com/alice.asc
BDAY:19850315
END:VCARD
```
