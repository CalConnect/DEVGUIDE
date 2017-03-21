#Best practices 

## Reliable use and problem detection
A zoned date and time is generally expected to refer to a fixed point in local time, e.g. the time when a meeting occurs, a log entry for a particular incident etc. Common practice is to convert to UTC and assume the local time is merely a display artifact.
  
However, to the attendee, or the motorist receiving a ticket, or the power engineer trying to determine exactly when am incident occurred, local time is what matters. 

### What happens if we store only the UTC?
Immediately we can state that anybody retrieving that data cannot determine if the UTC was calculated correctly. If the system storing that data has an old version of timezone data it may well have stored a time which is incorrect. The situation only gets worse over time. As data accumulates we have a mix of times, some calculated correctly, some incorrectly.

This is not an artifically constructed scenario. It is exactly what happened when the timezone rules for the US were changed. 

How did vendors suggest that users correct their data? At least one suggested that users take screenshots of their calendar, apply a vendor patch which modified stored times and then compare the before and after.

### What should we be storing?
The situation is better if we store local time along with the tiumezone id. At least then we store the intent of the user - it's almost always better to preserve the intent. However, that is still not perfect.

To allow full detection of dates and times that will need adjustment we should store 3 values:
   * The local time
   * The timezone id
   * The UTC or the offset.
   
The UTC is generally more useful for the reasons most people store it: It's monotonically increasing (if we ignore leap seconds) and it's easy to calculate true intervals.

When timezone rules change we can now go through our stored data and recalculate the UTC value. If that value is unchanged we're fine. If it has changed then we need to take some action. In the case of a meeting that action should ALWAYS be to reschedule. The process of agreeing to some meeting time involves settling on a comon UTC time. If the timezone rules change then it is possible we are no longer able to attend that meeting at the original local time - represented by a new UTC or at a different local time - represented by the unchanged UTC. Additionally other attendees now need to be given the opportunity to review their own schedules.

# What's wrong with floating time?
Floating time is local time without a timezone. It has very few valid uses. A valid use might be to create an event for some daily activity that always takes place at a given time of day, such as exercise or lunch. However, note that if you share that calendar with someone else they will see those events take place atr a time local to them.

In reality the event should probably be tied to the location of a person, something not currently possible with iCalendar.

In short - it's inadvisable to use floating time for any event or task to be viewed by other people.
