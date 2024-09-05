---
layout: toc-type
title: Component
parent: "/Tasks"
mainParent: "Tasks"
parents: "Tasks:/Tasks"
order: 200
---

# Tasks - Component
A task is represented in iCalendar by the VTODO component and in jsCalendar by an object of type Task.

The task object differs only slightly from an event. This section will describe those differences. The similarity of the components makes it easy to generate an event from a task, for instance when a task is assigned to someone to be carried out at a specific time.

## Tasks do not occupy busy time
Hard as it is to discern that from the specs - that is the case. Calculations of busy time only include events. This does make sense. A task is something to be done - not the period of time in which it is being done. However, implementations for freebusy need to exclude tasks in their data when calculating freebusy.

This is also the reason why tasks MUST be turned into events when accepted by somebody.

## Start and end times mean something different.
For an event the start and end mean that is the time taken by the event (bar some fuzziness with all day events).

For tasks the picture has been even more fuzzy. It's fairly clear what the intent was in that tasks in RFC5545 have a start and a due date. What was missing was how long the task was supposed to take.

For example, we might have a task "paint the room". That task is expected to take 2 hours.
However, there's a whole week to complete the task. The start may be Monday 5th and due date is Friday 9th. The extensions add an **estimated duration** to allow us to specify how long we expect the task to actually take. This makes the due date into a deadline.

Also, tasks do not require the specification of a start date. This means they MUST always appear in time range searches. They are task which need to be done but have no specific time - that is, they are reminders.

Note that RFC5545 removed the ability to specify ONLY a duration. This will be restored by the task extensions specification.

## Further extensions.
### Reporting.
The new tasks extensions provide better reporting of status. It is important to be able to specify not only the status of the task as a whole but also the status for individual actors - the **attendees**.

### Task mode
This allows specification of which actor alters the state of the task - usually to completed or failed. This may be a client or the server.

## Possible uses for task components.
The intent of the task extensions was to allow the component to be more widely used. broadly speaking there were two main areas of interest:

 * Project management.
 * Business processes.

The current extensions are intended t cover all of these requirements.

### Project management
A project consists of a number of sub-tasks which may have a number of temporal relationships constraining them, for example task-A must follow task-B. Additionally, a (sub)task may have its own deadlines and estimated time for completion. Other attributes may include cost to complete.

There is also a requirement to be able to report progress and indicate what is blocking progress.

The task component also provides a standard way to represent the project - allowing export from one application and import into another.

### Business processes.
The extensions allow an automated system to represent the tasks that must be fulfilled and track their progress and update their status.

Such systems may be order fulfillment, delivery systems etc. The main characteristic is possibly that the **organizer** is not a human but the application. The actors in such a system may take part by carrying out operations and reporting back, e.g. delivering a package or a meal. These actors may be humans or some automated mechanism.
