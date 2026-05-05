---
layout: toc-type
title: vCard 5.0
parent: "/vcard/"
parents: vCard:/vcard
order: 3
permalink: "/vcard/vcard-5/"
---

vCard 5.0 is represented by JSContact (RFC 9553), a JSON-based format for contact data. It applies the same design philosophy as jsCalendar (RFC 8984) to the contact data domain — replacing vCard's text-based property format with native JSON structures.

## Why JSContact

vCard's text format shares the same parsing challenges as iCalendar: custom delimiters, line folding, and ambiguous type handling. JSContact addresses these with:

- **Native JSON** — Direct integration with web APIs, databases, and programming languages.
- **Type clarity** — Properties use JSON types instead of encoded text.
- **Extensibility** — Custom data uses the `@type` discriminator pattern.

## Data Model

A JSContact object represents a single contact:

```json
{
  "@type": "JSContact",
  "uid": "contact-001",
  "fullName": "Dr. Alice Marie Smith, PhD",
  "name": {
    "components": [
      { "type": "prefix", "value": "Dr." },
      { "type": "personal", "value": "Alice Marie" },
      { "type": "surname", "value": "Smith" },
      { "type": "suffix", "value": "PhD" }
    ]
  },
  "emails": {
    "e1": {
      "@type": "EmailAddress",
      "email": "alice@example.com",
      "contexts": { "work": true },
      "pref": 1
    }
  },
  "phones": {
    "p1": {
      "@type": "Phone",
      "phone": "tel:+1-555-0100",
      "features": { "voice": true },
      "contexts": { "work": true }
    }
  },
  "organizations": {
    "o1": {
      "@type": "Organization",
      "name": "Example Corp",
      "units": ["Engineering"]
    }
  }
}
```

## Relationship to vCard 4.0

JSContact is designed to cover the same data as vCard 4.0, with a clear mapping between properties:

| vCard Property | JSContact Field |
|---|---|
| `FN` | `fullName` |
| `N` | `name.components` |
| `EMAIL` | `emails` |
| `TEL` | `phones` |
| `ADR` | `addresses` |
| `ORG` | `organizations` |
| `URL` | `links` |
| `PHOTO` | `photos` |
| `BDAY` | `anniversaries` (with type `birth`) |

## Adoption

JSContact is part of the JMAP suite of protocols. Applications implementing JMAP for Contacts use JSContact natively. For CalDAV/CardDAV ecosystems, conversion between vCard 4.0 and JSContact is needed at the protocol boundary.
