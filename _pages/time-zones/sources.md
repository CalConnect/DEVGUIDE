---
layout: toc-type
title: Sources of Time Zone Information
parent: "/time-zones/"
parents: Time Zones:/time-zones
order: 2
permalink: "/time-zones/sources/"

---
Sources of time zone data for calendar implementations.

## IANA Time Zone Database

The primary source. Available at [iana.org/time-zones](https://iana.org/time-zones). Contains:

- Current and historical time zone rules for all worldwide locations.
- Daylight saving time transition dates.
- UTC offsets and their changes over time.
- Leap seconds information.

Updated approximately 6–8 times per year as governments announce changes.

## Time Zone Data in Operating Systems

- **Linux/macOS** — tzdata package, usually at `/usr/share/zoneinfo/`.
- **Windows** — Windows Time Zone database. Maps to IANA IDs via Unicode CLDR.
- **Java** — Java Time API uses IANA data bundled with the JRE.

## ICU (International Components for Unicode)

Provides time zone data with Unicode CLDR mappings. Available for C/C++, Java, and JavaScript.

## Distributions

- **tzdata** — Raw IANA data, processed into binary format by `zic` (zone info compiler).
- **moment-timezone** — JavaScript library with IANA data.
- **pytz / zoneinfo** — Python libraries.
- **Luxon** — JavaScript date library with built-in time zone support.
