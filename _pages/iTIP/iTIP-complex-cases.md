---
layout: toc-type
title: iTIP - Complex Topics
parent: "/iTIP"
mainParent: "iTIP"
parents: "iTIP:/iTIP"
order: 200
---

# Complex issues with iTip

Most of these complex cases are associated with recurring events
and how to handle them - especially when instances have
different attendees.

Currently this page is a list of issues with few answers.

## Delete or set status:cancelled?

When a client receives a CANCEL should it remove the event/instance
or set the status. It's probably better to have a positive indication
that something changed. For 1 instance/event it's probably OK - but
what of the THISANDFUTURE case with possibly hundreds.

## CANCEL with THISANDFUTURE

How should the client react to this?
