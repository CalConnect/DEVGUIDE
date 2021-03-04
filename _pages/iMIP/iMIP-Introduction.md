---
layout: toc-type
title: Introduction
parent: "/iMIP"
mainParent: "iMIP"
parents: "iMIP:/iMIP"
order: 200
---

# iMIP - introduction
iMIP is defined by [RFC 6047][rfc6047] which defines how [iTIP] messages are sent and received via email.

Given that email is a major vector for spam and other attacks, senders and
receivers must take care over the handling of iMIP.

However, iMIP is still tost interoperable way to ensure that an
[iTIP](/Scheduling/iTIP/) request reaches the owner of an email address.

Note that iMIP is also used to resolve the "identity crisis" as it's called
within calendaring.  Many people have their calendar hosted on one
service, but their email address hosted somewhere else. Using iMIP allows
the receiver of the message to choose which calendar to use.

(Note - the documents in this area require many more examples
of what iMIP messages look like in different contexts.)

[rfc6047]: https://tools.ietf.org/html/rfc6047
