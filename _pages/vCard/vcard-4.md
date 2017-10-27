---
layout: toc-type
title: vCard 4.0
parent: "/vCard-Topics"
mainParent: "vCard Topics"
parents: "vCard Topics:/vCard-Topics/"
order: 2
---

# vCard 4.0

The latest major revision to vCard is vCard 4.0, a milestone improvement
over vCard 3.0.

Described in [RFC 6350, vCard Format Specification](https://tools.ietf.org/html/rfc6350),
it is designed as a generalization of the vCard 2.1 and 3.0 formats that
it is a general contact information format instead of just representing
a business card or a directory profile. RFC 6350 was developed through
the CalConnect VCARD technical committee and published in August 2011
through IETF.

## A brief history of vCard 4.0

In the early days of CalConnect (i.e. 2006/2007), our members had a fair
amount of discussion whether we should tackle a revision of vCard (which
was then at 3.0, but 2.1 was still in general use) due to the various
shortcomings of the standard.

Eventually, CalConnect hosted an open vCard workshop during the
CalConnect meeting at MIT in September 2007 with the goal of meeting
fellow users and vendors of vCard to discuss existing issues. A fair
number of interested parties, including CalConnect members and external
individuals, came and decided that it is time to update the existing
standard.

The conclusion of the CalConnect vCard workshop led the IETF to
undertake a revision of vCard and assigned an editor. The resulting
standard is vCard 4.0, which resolves some immediate concerns raised
during the workshop while keeping it compatible with 3.0.


## Benefits of vCard 4.0

vCard 4.0 provides a number of important updates over its predecessor:

* additional standardized properties to support modern businesses and
  use cases
* independent MIME type designated for vCard usage as a standalone file
* a standardized method of extending the vCard standard without
  modifying its core
* introduces standardized measures aimed to resolve incompatible
  vendor-specific properties used by client implementations
* greatly simplifies the vCard data format and resolves previous
  inconsistencies

vCard 4.0 also allows for better representation of information about
individuals, groups of people, companies, and locations, and
implementing it in your software gives you greater flexibility to store
and exchange this information.


## Changes in vCard 4.0 from vCard 3.0

vCard 4.0 represents an incremental but large improvement over the
previous vCard 3.0 and 2.1 formats.

The following sections contain discussion of the differences between
vCard 4.0 and previous versions of vCard, as well as information on how
to migrate existing software from the vCard 3.0 format to the newer
vCard 4.0 format.

Unfortunately, Appendix A of RFC 6350 contains an incomplete list of the
changes from vCard 3.0 to vCard 4.0. In this document we will provide
more detailed information on why you should utilize vCard 4.0, and
supplement that information with a brief discussion of the implications
and benefits of each change.


## Extendable structure

Instead of having two complementary specifications in vCard 3.0 in form
of RFC 2425 and RFC 2426, they are merged into just one document, RFC
6350. This change makes it much easier for implementers to understand
the vCard format definition, and much implementation simpler.

New vCard elements can be registered with IANA, allowing for central
control and extension of the vCard format without modification of the
core standard. This registry would simplify development of extensions
and resolve previous incompatiblities with widely used, non-standard,
vendor-specific properties (`X-properties`) that plagued versions 2.1
and 3.0 by large vendors.


## Internationalization

vCard 4.0 requires the encoding to be in the `UTF-8` character
set, eliminating any incompatibilities between programs encoding or
reading the format in different character sets, which is extremely
important for the global usage of the vCard format.

In international settings, it is increasingly common for business cards
to be in multiple languages. vCard 4.0 introduces a new parameter type
`LANGUAGE` to allow multiple translations of a property, effectively
allowing a business card to be encoded in multiple languages at once.

UTF-8 is now the only supported character set, eliminating any
incompatibilities which can arise from different pieces of software
implementing vCard with different character sets and languages.

The new property type `LANG` is also introduced to allow specifying the
preferred language of the vCard's subject.


## Unique MIME type

Version 4.0 formally introduces the `text/vcard` MIME type, allowing
vCard to be a standalone file format. This is one of the most important
changes in vCard 4.0.

Users can now directly store, edit and open them using their preferred
applications instead of requiring vCards to be attachments.  With vCards
being standalone files they are more distributable, and it is more easy
than ever to allow reading and exchange of contact data.

Previously, vCard existed only as a MIME type attached to email or as
information extracted from a directory profile through the
`text/directory` MIME type, which was unsuitable and confusing at best.
The new type remains a valid MIME type for message attachments.


## Representing groups and locations

vCard 4.0 introduces the `group` and `location` property values for the
`KIND` property, allowing a vCard to represent a group or geographical
location.

For `KIND:group`, an additional `MEMBER` property is introduced allowing
group members to be represented inside the group's vCard, which makes it
possible for the vCard to be self-contained about information pertaining
to the group.


## Simultaneous editing

With the advent of the cloud era, simultaneous collaborative editing of
information has become commonplace. vCard 4.0 has been designed exactly
with that in mind. The `PID` property (and the `CLIENTPIDMAP` property)
allows the user to edit properties on one device and complete the edit
on another, tracking and merging actions performed on each, allowing a
seamless experience with contact information updates.


## New Properties and Parameter Values

The following properties have been added for vCard 4.0: `KIND`, `GENDER`,
`LANG` (described above), `ANNIVERSARY`, `XML`, and `CLIENTPIDMAP`.  These
properties give vCard a much greater flexibility in representing
information about people and groups.

* `KIND` specifies the kind of object a particular vCard represents: an
  individual, group of people, organization, or geographic.
* `GENDER` specifies the sex and gender identity of the person or object a
  particular vCard represents.  This property is optional but can be
  useful in helping people identify themselves.
* `ANNIVERSARY` specifies the date of marriage (or equivalent) of the
  person that a particular vCard represents.
* `CLIENTPIDMAP` gives a global meaning to a local PID source identifier.

[RFC 2739 (Calendar attributes for vCard and LDAP)](https://tools.ietf.org/html/rfc2739)
(which defines `FBURL`, `CALADURI`, `CAPURI`, and `CALURI`) and
[RFC 4770 (vCard Extensions for Instant Messaging (IM))](https://tools.ietf.org/html/rfc4770)
(which defines `IMPP`) have been incorporated into the vCard 4.0
specification and further standardized. This merge simplifies the
specification of vCard and makes implementation easier.

The `work` and `home` `TYPE` parameter values have been made available to
more properties.  These tags help specify whether a property is related
to an individual's workplace or home.  When neither of these tags are
present and the `KIND` property is set to `individual`, the implication is
that a property relates to both the individual's home and workplace.  If
`KIND` is set to any other value and these tags are present, there is no
implication to the property.

The `pref` value of the `TYPE` parameter indicating preference when
multiple values are specified now includes a positive integer value
indicating the level of preference.  This can be useful for ranking
multiple values, for example when providing several phone number
contacts, they can be ranked in order of most preferred to least
preferred.

The `ALTID` and `PID` parameters have been added to further improve the
ability to identify properties.

The `MEDIATYPE` parameter has been added to specify the type of media to
expect when a value is a URI.  This parameter replaces the `TYPE`
parameter when used for indicating the specific media type of a
property's content.

### Removed Features

The `CONTEXT` and `CHARSET` parameters have been removed.  The`CHARSET`
parameter is no longer required as the vCard format now only supports
one character set.

The`NAME`,`MAILER`, `LABEL` and `CLASS` properties have been removed as they
are no longer useful with the modern usage of vCard.

The `TYPE` parameter values `intl`, `dom`, `postal`, and `parcel` for
the `ADR` property have been removed to simplify the address definition.

Inline vCards, such as the value of the `AGENT` property from vCard 3.0
are no longer supported.  This improves the readability of the vCard
format.


## Migrating from vCard 3.0 to vCard 4.0

When making changes to your software that implements vCard, you should
carefully review the new vCard specification, and make sure that you
support all new properties, as well as the expanded parameters for old
properties.

Additionally, implementing vCard 4.0 is simplified by the standalone
file format (be sure to continue to support MIME encoded vCards) and by
the reduction in supported character sets.

Ideally, your software should continue supporting vCard 3.0 alongside
the implementation of vCard 4.0, until the newest format is widely used.
For most use cases, vCard 4.0 represents a vast improvement over the
previous version, and should be adopted immediately.
