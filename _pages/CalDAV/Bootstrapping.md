---
layout: toc-type
title: Bootstrapping
parent: "/CalDAV/Client"
mainParent: "CalDAV"
parents: "CalDAV:/CalDAV;Client:/CalDAV/Client/"
order: 2
---

## Bootstrapping a CalDav client

This consists of the following phases:
  * Discovery of the service
  * Obtaining information about the user
  * Discovering what features are available

## Discovering the service given a user address

[RFC 6764](https://tools.ietf.org/html/rfc6764) describes how to discover the endpoint and context path for a CalDAV system. Endpoints should be available in DNS SRV records for each service:

```
host -t srv _caldavs._tcp.example.com
-->   _caldavs._tcp.example.com has SRV record 0 0 443 caldav.example.com
```

The context path for the service may be available in DNS TXT records. In practice, providers may not advertise the path this way since it can vary by user. In that case clients should use the "well-known" path instead, i.e. for caldav, ".well-known/caldav".

Once the endpoint and path are determined the next phase can take place.

## Obtaining information about the user
A client can query for the principal resource for this particular user, which is contained in the "current-user-principal" property, then query that resource to get the "calendar-home-set" property.

#### Request:
```
PROPFIND /calendars HTTP/1.1
Depth: 0
Prefer: return=minimal

<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:current-user-principal/>
    <A:principal-URL/>
    <A:resourcetype/>
  </A:prop>
</A:propfind>
```

#### Response:
```
Content-Type: application/xml; charset=utf-8
Content-Length: ...

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:">
  <A:response>
    <A:href>/calendars</A:href>
    <A:propstat>
      <A:prop>
        <A:current-user-principal>
          <A:href>/principals/user/ken/</A:href>
        </A:current-user-principal>
        <A:resourcetype>
          <A:collection/>
        </A:resourcetype>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>

```

## Discovering what features are available
This is currently handled by the client executing an OPTIONS request on the server. The result will contain headers which describe what services are available. [RFC 6764](https://tools.ietf.org/html/rfc6764) and its extensions define what header fields should be present for a particular service. Additionally a server MUST support certain DAV features so the ??? header fields MUST also be present in the response.

Features and the location of resources may vary depending upon the authenticated user so this should wait until we have determined that information.

#### Request:
```
OPTIONS /principals/user/ken/ HTTP/1.1
...
```
#### Response:
```
HTTP/1.1 200 OK
Cache-Control: no-cache
Link: </principals/.server-info>; rel="server-info"; token="fb1423150fe1d30982d5e0a41ebf2171adf2ff84"
DAV: 1, 2, 3, access-control, extended-mkcol, resource-sharing
DAV: calendar-access, calendar-auto-schedule
DAV: calendar-query-extended, calendar-availability, calendar-managed-attachments
DAV: calendarserver-sharing, inbox-availability
DAV: addressbook
Allow: OPTIONS, GET, HEAD, PROPFIND, REPORT, COPY
Content-Length: 0

```

In the above response we see that DAV levels 1, 2, 3 and access-control are supported. The extended-mkcol feature defined in ??? is supported and the developmental feature resource-sharing.

## Query calendar and DAV resources

Query the home set to see the available calendars and their properties, then query the individual collections to get the list of hrefs for the contained events. By using "multiget" REPORT queries clients can obtain the actual event content for many items at once.

#### Request:
```
PROPFIND /principals/user/ken/ HTTP/1.1
Brief: t
Content-type: text/xml
Content-length: ...
Depth: 0
Prefer: return=minimal

<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <B:calendar-home-set xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:calendar-user-address-set xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <A:current-user-principal/>
    <A:displayname/>
    <C:dropbox-home-URL xmlns:C="http://calendarserver.org/ns/"/>
    <C:email-address-set xmlns:C="http://calendarserver.org/ns/"/>
    <C:notification-URL xmlns:C="http://calendarserver.org/ns/"/>
    <A:principal-collection-set/>
    <A:principal-URL/>
    <A:resource-id/>
    <B:schedule-inbox-URL xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:schedule-outbox-URL xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <A:supported-report-set/>
  </A:prop>
</A:propfind>

```
#### Response:
```
HTTP/1.1 207 Multi-Status
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: ...

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/principals/user/ken/</A:href>
    <A:propstat>
      <A:prop>
        <B:calendar-home-set>
          <A:href>/calendars/user/ken/</A:href>
        </B:calendar-home-set>
        <B:calendar-user-address-set>
          <A:href>mailto:ken@example.com</A:href>
        </B:calendar-user-address-set>
        <A:current-user-principal>
          <A:href>/principals/user/ken/</A:href>
        </A:current-user-principal>
        <A:displayname>ken</A:displayname>
        <C:notification-URL>
          <A:href>/notifications/user/ken/</A:href>
        </C:notification-URL>
        <A:principal-collection-set>
          <A:href>/principals/user/</A:href>
        </A:principal-collection-set>
        <A:principal-URL>
          <A:href>/principals/user/ken/</A:href>
        </A:principal-URL>
        <B:schedule-inbox-URL>
          <A:href>/calendars/user/ken/Inbox/</A:href>
        </B:schedule-inbox-URL>
        <B:schedule-outbox-URL>
          <A:href>/calendars/user/ken/Outbox/</A:href>
        </B:schedule-outbox-URL>
        <A:supported-report-set>
          <A:supported-report>
            <A:report>
              <A:expand-property/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:principal-property-search/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:principal-search-property-set/>
            </A:report>
          </A:supported-report>
        </A:supported-report-set>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
```

```
---------- ken Tue Sep 26 03:50:28 2017

<1506412228<PROPFIND /calendars/user/ken/Inbox/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 175
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412228<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:calendar-availability xmlns:C="http://calendarserver.org/ns/"/>
  </A:prop>
</A:propfind>
>1506412228>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:28 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 304

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/Inbox/</A:href>
    <A:propstat>
      <A:prop/>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412228<PROPFIND /calendars/user/ken/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 2217
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412228<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:add-member/>
    <C:allowed-sharing-modes xmlns:C="http://calendarserver.org/ns/"/>
    <D:autoprovisioned xmlns:D="http://apple.com/ns/ical/"/>
    <E:bulk-requests xmlns:E="http://me.com/_namespace/"/>
    <B:calendar-alarm xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <D:calendar-color xmlns:D="http://apple.com/ns/ical/"/>
    <B:calendar-description xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:calendar-free-busy-set xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <D:calendar-order xmlns:D="http://apple.com/ns/ical/"/>
    <B:calendar-timezone xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <A:current-user-privilege-set/>
    <B:default-alarm-vevent-date xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:default-alarm-vevent-datetime xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <A:displayname/>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <C:invite xmlns:C="http://calendarserver.org/ns/"/>
    <D:language-code xmlns:D="http://apple.com/ns/ical/"/>
    <D:location-code xmlns:D="http://apple.com/ns/ical/"/>
    <A:owner/>
    <C:pre-publish-url xmlns:C="http://calendarserver.org/ns/"/>
    <C:publish-url xmlns:C="http://calendarserver.org/ns/"/>
    <C:push-transports xmlns:C="http://calendarserver.org/ns/"/>
    <C:pushkey xmlns:C="http://calendarserver.org/ns/"/>
    <A:quota-available-bytes/>
    <A:quota-used-bytes/>
    <D:refreshrate xmlns:D="http://apple.com/ns/ical/"/>
    <A:resource-id/>
    <A:resourcetype/>
    <B:schedule-calendar-transp xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:schedule-default-calendar-URL xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <C:source xmlns:C="http://calendarserver.org/ns/"/>
    <C:subscribed-strip-alarms xmlns:C="http://calendarserver.org/ns/"/>
    <C:subscribed-strip-attachments xmlns:C="http://calendarserver.org/ns/"/>
    <C:subscribed-strip-todos xmlns:C="http://calendarserver.org/ns/"/>
    <B:supported-calendar-component-set xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <B:supported-calendar-component-sets xmlns:B="urn:ietf:params:xml:ns:caldav"/>
    <A:supported-report-set/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412228>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:28 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 12893

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/" xmlns:D="http://apple.com/ns/ical/" xmlns:E="http://me.com/_namespace/" xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:CY="http://cyrusimap.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/</A:href>
    <A:propstat>
      <A:prop>
        <C:allowed-sharing-modes/>
        <E:bulk-requests/>
        <A:current-user-privilege-set>
          <A:privilege>
            <A:all/>
          </A:privilege>
          <A:privilege>
            <A:read/>
          </A:privilege>
          <A:privilege>
            <B:read-free-busy/>
          </A:privilege>
          <A:privilege>
            <A:write/>
          </A:privilege>
          <A:privilege>
            <A:write-content/>
          </A:privilege>
          <A:privilege>
            <A:write-properties/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-collection/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-resource/>
          </A:privilege>
          <A:privilege>
            <A:bind/>
          </A:privilege>
          <A:privilege>
            <CY:make-collection/>
          </A:privilege>
          <A:privilege>
            <CY:add-resource/>
          </A:privilege>
          <A:privilege>
            <A:unbind/>
          </A:privilege>
          <A:privilege>
            <CY:remove-collection/>
          </A:privilege>
          <A:privilege>
            <CY:remove-resource/>
          </A:privilege>
          <A:privilege>
            <CY:admin/>
          </A:privilege>
        </A:current-user-privilege-set>
        <A:displayname><![CDATA[#calendars]]></A:displayname>
        <C:invite/>
        <A:owner>
          <A:href>/principals/user/ken/</A:href>
        </A:owner>
        <A:resourcetype>
          <A:collection/>
        </A:resourcetype>
        <A:supported-report-set>
          <A:supported-report>
            <A:report>
              <A:expand-property/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:acl-principal-prop-set/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:sync-collection/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-query/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-multiget/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:free-busy-query/>
            </A:report>
          </A:supported-report>
        </A:supported-report-set>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <A:add-member>
          <A:href>/calendars/user/ken/Default/?action=add-member</A:href>
        </A:add-member>
        <C:allowed-sharing-modes>
          <C:can-be-shared/>
        </C:allowed-sharing-modes>
        <E:bulk-requests>
          <E:simple>
            <E:max-resources/>
            <E:max-bytes/>
          </E:simple>
        </E:bulk-requests>
        <A:current-user-privilege-set>
          <A:privilege>
            <A:all/>
          </A:privilege>
          <A:privilege>
            <A:read/>
          </A:privilege>
          <A:privilege>
            <B:read-free-busy/>
          </A:privilege>
          <A:privilege>
            <A:write/>
          </A:privilege>
          <A:privilege>
            <A:write-content/>
         >1506412228> </A:privilege>
          <A:privilege>
            <A:write-properties/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-collection/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-resource/>
          </A:privilege>
          <A:privilege>
            <A:bind/>
          </A:privilege>
          <A:privilege>
            <CY:make-collection/>
          </A:privilege>
          <A:privilege>
            <CY:add-resource/>
          </A:privilege>
          <A:privilege>
            <A:unbind/>
          </A:privilege>
          <A:privilege>
            <CY:remove-collection/>
          </A:privilege>
          <A:privilege>
            <CY:remove-resource/>
          </A:privilege>
          <A:privilege>
            <CY:admin/>
          </A:privilege>
        </A:current-user-privilege-set>
        <A:displayname><![CDATA[Default]]></A:displayname>
        <C:getctag>1436370616-382</C:getctag>
        <C:invite/>
        <A:owner>
          <A:href>/principals/user/ken/</A:href>
        </A:owner>
        <A:resourcetype>
          <A:collection/>
          <B:calendar/>
        </A:resourcetype>
        <B:supported-calendar-component-set>
          <B:comp name="VEVENT"/>
          <B:comp name="VTODO"/>
          <B:comp name="VJOURNAL"/>
          <B:comp name="VFREEBUSY"/>
          <B:comp name="VAVAILABILITY"/>
        </B:supported-calendar-component-set>
        <B:supported-calendar-component-sets>
          <B:comp name="VEVENT"/>
          <B:comp name="VTODO"/>
          <B:comp name="VJOURNAL"/>
          <B:comp name="VFREEBUSY"/>
          <B:comp name="VAVAILABILITY"/>
        </B:supported-calendar-component-sets>
        <A:supported-report-set>
          <A:supported-report>
            <A:report>
              <A:expand-property/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:acl-principal-prop-set/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:sync-collection/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-query/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-multiget/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:free-busy-query/>
            </A:report>
          </A:supported-report>
        </A:supported-report-set>
        <A:sync-token>data:,1436370616-382</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <A:add-member>
          <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/?action=add-member</A:href>
        </A:add-member>
        <C:allowed-sharing-modes>
          <C:can-be-shared/>
        </C:allowed-sharing-modes>
        <E:bulk-requests>
          <E:simple>
            <E:max-resources/>
            <E:max-bytes/>
          </E:simple>
        </E:bulk-requests>
        <B:calendar-description><![CDATA[testing 1,2,3]]></B:calendar-description>
        <A:current-user-privilege-set>
          <A:privilege>
            <A:all/>
          </A:privilege>
          <A:privilege>
            <A:read/>
          </A:privilege>
          <A:privilege>
            <B:read-free-busy/>
          </A:privilege>
          <A:privilege>
            <A:write/>
          </A:privilege>
          <A:privilege>
            <A:write-content/>
          </A:privilege>
          <A:privilege>
            <A:write-properties/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-collection/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-reso>1506412228>urce/>
          </A:privilege>
          <A:privilege>
            <A:bind/>
          </A:privilege>
          <A:privilege>
            <CY:make-collection/>
          </A:privilege>
          <A:privilege>
            <CY:add-resource/>
          </A:privilege>
          <A:privilege>
            <A:unbind/>
          </A:privilege>
          <A:privilege>
            <CY:remove-collection/>
          </A:privilege>
          <A:privilege>
            <CY:remove-resource/>
          </A:privilege>
          <A:privilege>
            <CY:admin/>
          </A:privilege>
        </A:current-user-privilege-set>
        <A:displayname><![CDATA[test]]></A:displayname>
        <C:getctag>1438801752-8</C:getctag>
        <C:invite>
          <C:user>
            <A:href>mailto:anyone@internal</A:href>
            <C:invite-noresponse/>
            <C:access>
              <C:read/>
            </C:access>
          </C:user>
        </C:invite>
        <A:owner>
          <A:href>/principals/user/ken/</A:href>
        </A:owner>
        <A:resourcetype>
          <A:collection/>
          <B:calendar/>
          <C:shared-owner/>
        </A:resourcetype>
        <B:supported-calendar-component-set>
          <B:comp name="VEVENT"/>
          <B:comp name="VTODO"/>
          <B:comp name="VPOLL"/>
        </B:supported-calendar-component-set>
        <B:supported-calendar-component-sets>
          <B:comp name="VEVENT"/>
          <B:comp name="VTODO"/>
          <B:comp name="VPOLL"/>
        </B:supported-calendar-component-sets>
        <A:supported-report-set>
          <A:supported-report>
            <A:report>
              <A:expand-property/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:acl-principal-prop-set/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:sync-collection/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-query/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:calendar-multiget/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <B:free-busy-query/>
            </A:report>
          </A:supported-report>
        </A:supported-report-set>
        <A:sync-token>data:,1438801752-8</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/notifications/user/ken/</A:href>
    <A:propstat>
      <A:prop>
        <A:current-user-privilege-set>
          <A:privilege>
            <A:all/>
          </A:privilege>
          <A:privilege>
            <A:read/>
          </A:privilege>
          <A:privilege>
            <A:write/>
          </A:privilege>
          <A:privilege>
            <A:write-content/>
          </A:privilege>
          <A:privilege>
            <A:write-properties/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-collection/>
          </A:privilege>
          <A:privilege>
            <CY:write-properties-resource/>
          </A:privilege>
          <A:privilege>
            <A:bind/>
          </A:privilege>
          <A:privilege>
            <CY:make-collection/>
          </A:privilege>
          <A:privilege>
            <CY:add-resource/>
          </A:privilege>
          <A:privilege>
            <A:unbind/>
          </A:privilege>
          <A:privilege>
            <CY:remove-collection/>
          </A:privilege>
          <A:privilege>
            <CY:remove-resource/>
          </A:privilege>
          <A:privilege>
            <CY:admin/>
          </A:privilege>
        </A:current-user-privilege-set>
        <A:displayname><![CDATA[#notifications]]></A:displayname>
        <C:getctag>1452898999-1</C:getctag>
        <A:owner>
          <A:href>/prin>1506412228>cipals/user/ken/</A:href>
        </A:owner>
        <A:resourcetype>
          <A:collection/>
          <A:notifications/>
          <C:notification/>
        </A:resourcetype>
        <A:supported-report-set>
          <A:supported-report>
            <A:report>
              <A:expand-property/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:acl-principal-prop-set/>
            </A:report>
          </A:supported-report>
          <A:supported-report>
            <A:report>
              <A:sync-collection/>
            </A:report>
          </A:supported-report>
        </A:supported-report-set>
        <A:sync-token>data:,1452898999-1</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>


<1506412230<PROPPATCH /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 198
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412230<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><D:calendar-order xmlns:D="http://apple.com/ns/ical/">1</D:calendar-order></A:prop></A:set></A:propertyupdate>
>1506412230>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:30 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 370

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:D="http://apple.com/ns/ical/">
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <D:calendar-order/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412230<PROPPATCH /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 748
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412230<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><B:calendar-timezone xmlns:B="urn:ietf:params:xml:ns:caldav">BEGIN:VCALENDAR&#13;
VERSION:2.0&#13;
PRODID:-//Apple Inc.//Mac OS X 10.12.6//EN&#13;
CALSCALE:GREGORIAN&#13;
BEGIN:VTIMEZONE&#13;
TZID:America/New_York&#13;
BEGIN:DAYLIGHT&#13;
TZOFFSETFROM:-0500&#13;
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU&#13;
DTSTART:20070311T020000&#13;
TZNAME:EDT&#13;
TZOFFSETTO:-0400&#13;
END:DAYLIGHT&#13;
BEGIN:STANDARD&#13;
TZOFFSETFROM:-0400&#13;
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU&#13;
DTSTART:20071104T020000&#13;
TZNAME:EST&#13;
TZOFFSETTO:-0500&#13;
END:STANDARD&#13;
END:VTIMEZONE&#13;
END:VCALENDAR&#13;
</B:calendar-timezone></A:prop></A:set></A:propertyupdate>
>1506412231>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:31 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 377

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <B:calendar-timezone/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412231<PROPPATCH /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 198
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412231<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><D:calendar-order xmlns:D="http://apple.com/ns/ical/">2</D:calendar-order></A:prop></A:set></A:propertyupdate>
>1506412232>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:31 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 345

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:D="http://apple.com/ns/ical/">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <D:calendar-order/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412232<PROPPATCH /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 227
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412232<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><D:calendar-color xmlns:D="http://apple.com/ns/ical/" symbolic-color="red">#FB0055FF</D:calendar-color></A:prop></A:set></A:propertyupdate>
>1506412232>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:32 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 345

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:D="http://apple.com/ns/ical/">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <D:calendar-color/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412232<PROPPATCH /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 198
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412232<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><D:calendar-order xmlns:D="http://apple.com/ns/ical/">2</D:calendar-order></A:prop></A:set></A:propertyupdate>
>1506412232>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:32 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 345

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:D="http://apple.com/ns/ical/">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <D:calendar-order/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412232<PROPPATCH /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 748
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412232<<?xml version="1.0" encoding="UTF-8"?>
<A:propertyupdate xmlns:A="DAV:"><A:set><A:prop><B:calendar-timezone xmlns:B="urn:ietf:params:xml:ns:caldav">BEGIN:VCALENDAR&#13;
VERSION:2.0&#13;
PRODID:-//Apple Inc.//Mac OS X 10.12.6//EN&#13;
CALSCALE:GREGORIAN&#13;
BEGIN:VTIMEZONE&#13;
TZID:America/New_York&#13;
BEGIN:DAYLIGHT&#13;
TZOFFSETFROM:-0500&#13;
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU&#13;
DTSTART:20070311T020000&#13;
TZNAME:EDT&#13;
TZOFFSETTO:-0400&#13;
END:DAYLIGHT&#13;
BEGIN:STANDARD&#13;
TZOFFSETFROM:-0400&#13;
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU&#13;
DTSTART:20071104T020000&#13;
TZNAME:EST&#13;
TZOFFSETTO:-0500&#13;
END:STANDARD&#13;
END:VTIMEZONE&#13;
END:VCALENDAR&#13;
</B:calendar-timezone></A:prop></A:set></A:propertyupdate>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:32 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-cache
Content-Type: application/xml; charset=utf-8
Content-Length: 352

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <B:calendar-timezone/>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 448

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <C:getctag>1438801752-11</C:getctag>
        <A:sync-token>data:,1438801752-11</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<REPORT /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 413
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<B:calendar-query xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:prop xmlns:A="DAV:">
    <A:getetag/>
    <A:getcontenttype/>
  </A:prop>
  <B:filter>
    <B:comp-filter name="VCALENDAR">
      <B:comp-filter name="VEVENT">
        <B:time-range start="20170919T010101Z" end="20171010T010101Z"/>
      </B:comp-filter>
    </B:comp-filter>
  </B:filter>
</B:calendar-query>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 111

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:A="DAV:"/>
<1506412233<REPORT /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 318
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<B:calendar-query xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:prop xmlns:A="DAV:">
    <A:getetag/>
    <A:getcontenttype/>
  </A:prop>
  <B:filter>
    <B:comp-filter name="VCALENDAR">
      <B:comp-filter name="VTODO"/>
    </B:comp-filter>
  </B:filter>
</B:calendar-query>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 111

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:A="DAV:"/>
<1506412233<PROPFIND /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 425

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <C:getctag>1436370616-385</C:getctag>
        <A:sync-token>data:,1436370616-385</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<REPORT /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 413
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<B:calendar-query xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:prop xmlns:A="DAV:">
    <A:getetag/>
    <A:getcontenttype/>
  </A:prop>
  <B:filter>
    <B:comp-filter name="VCALENDAR">
      <B:comp-filter name="VEVENT">
        <B:time-range start="20170919T010101Z" end="20171010T010101Z"/>
      </B:comp-filter>
    </B:comp-filter>
  </B:filter>
</B:calendar-query>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 111

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:A="DAV:"/>
<1506412233<REPORT /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 318
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<B:calendar-query xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:prop xmlns:A="DAV:">
    <A:getcontenttype/>
    <A:getetag/>
  </A:prop>
  <B:filter>
    <B:comp-filter name="VCALENDAR">
      <B:comp-filter name="VTODO"/>
    </B:comp-filter>
  </B:filter>
</B:calendar-query>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 111

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:A="DAV:"/>
<1506412233<PROPFIND /calendars/user/ken/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 171
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:checksum-versions xmlns:C="http://calendarserver.org/ns/"/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 298

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/</A:href>
    <A:propstat>
      <A:prop/>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 448

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <C:getctag>1438801752-11</C:getctag>
        <A:sync-token>data:,1438801752-11</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/b77929e-54c-1438801751723-942343/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 145
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:getcontenttype/>
    <A:getetag/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 428

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:">
  <A:response>
    <A:href>/calendars/user/ken/b77929e-54c-1438801751723-942343/</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8</A:getcontenttype>
        <A:getetag>"1438801752-0-0"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 171
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:checksum-versions xmlns:C="http://calendarserver.org/ns/"/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 298

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/</A:href>
    <A:propstat>
      <A:prop/>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 425

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <C:getctag>1436370616-385</C:getctag>
        <A:sync-token>data:,1436370616-385</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<PROPFIND /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 145
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:getcontenttype/>
    <A:getetag/>
  </A:prop>
</A:propfind>
>1506412233>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:33 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 2339

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:">
  <A:response>
    <A:href>/calendars/user/ken/Default/</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8</A:getcontenttype>
        <A:getetag>"1436370616-184-5"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/5dd30e69-e584-4949-8a54-95d49bd54730.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8; component=VEVENT</A:getcontenttype>
        <A:getetag>"01ffe8974301b6f2679aa4c719bb29d800a11fbc"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/85b2eee6-9f0a-4508-bf40-d730fd92e475.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8; component=VEVENT</A:getcontenttype>
        <A:getetag>"77f8727a5e28be5cb7f7073a66962339131ac2c9"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/b7f368f2-f24b-4c19-b2b7-8620de68a3a4.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8; component=VEVENT</A:getcontenttype>
        <A:getetag>"0504da75d38c40da6fa9f3e98a92e075e867d151"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/bar.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8; component=VEVENT</A:getcontenttype>
        <A:getetag>"b0e6efe8471ea7531055d7c8f7cdae09472092f1"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/foo.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8; component=VEVENT</A:getcontenttype>
        <A:getetag>"343b9041ee87312cc302020404c9db704e0697c7"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412233<REPORT /calendars/user/ken/Default/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Connection: keep-alive
Accept: */*
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 813
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412233<<?xml version="1.0" encoding="UTF-8"?>
<B:calendar-multiget xmlns:B="urn:ietf:params:xml:ns:caldav">
  <A:prop xmlns:A="DAV:">
    <A:getetag/>
    <B:calendar-data/>
    <B:schedule-tag/>
    <C:created-by xmlns:C="http://calendarserver.org/ns/"/>
    <C:updated-by xmlns:C="http://calendarserver.org/ns/"/>
  </A:prop>
  <A:href xmlns:A="DAV:">/calendars/user/ken/Default/b7f368f2-f24b-4c19-b2b7-8620de68a3a4.ics</A:href>
  <A:href xmlns:A="DAV:">/calendars/user/ken/Default/bar.ics</A:href>
  <A:href xmlns:A="DAV:">/calendars/user/ken/Default/85b2eee6-9f0a-4508-bf40-d730fd92e475.ics</A:href>
  <A:href xmlns:A="DAV:">/calendars/user/ken/Default/5dd30e69-e584-4949-8a54-95d49bd54730.ics</A:href>
  <A:href xmlns:A="DAV:">/calendars/user/ken/Default/foo.ics</A:href>
</B:calendar-multiget>
>1506412236>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:36 GMT
Strict-Transport-Security: max-age=600
Cache-Control: no-transform
Vary: Accept-Encoding, Brief, Prefer
Content-Type: application/xml; charset=utf-8
Content-Length: 8204

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:B="urn:ietf:params:xml:ns:caldav" xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/Default/b7f368f2-f24b-4c19-b2b7-8620de68a3a4.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"3603d4948094595d5091fdf4a0e5ce3f84869ec1"</A:getetag>
        <B:calendar-data><![CDATA[BEGIN:VCALENDAR
PRODID:-//Mozilla.org/NONSGML Mozilla Calendar V1.1//EN
VERSION:2.0
BEGIN:VEVENT
CREATED:20170213T193354Z
LAST-MODIFIED:20170213T193354Z
DTSTAMP:20170213T193354Z
UID:b7f368f2-f24b-4c19-b2b7-8620de68a3a4
SUMMARY:New Event
DTSTART;TZID=America/New_York:20170217T140000
DTEND;TZID=America/New_York:20170217T150000
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
]]></B:calendar-data>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
    <A:propstat>
      <A:prop>
        <B:schedule-tag/>
        <C:created-by/>
        <C:updated-by/>
      </A:prop>
      <A:status>HTTP/1.1 404 Not Found</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/bar.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"b0e6efe8471ea7531055d7c8f7cdae09472092f1"</A:getetag>
        <B:calendar-data><![CDATA[BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apple Inc.//iCal 5.0.2//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
RRULE:FREQ=DAILY;UNTIL=20120512
DTEND;VALUE=DATE:20120508
TRANSP:TRANSPARENT
ORGANIZER;SCHEDULE-STATUS=3.8:mailto:ken@ksm-t3400.murch.local
UID:D4FC86B4-D501-4DDC-A94B-3237ACF5F278
DTSTAMP:20120510T154031Z
SEQUENCE:9
SUMMARY:nbmnbmnbm
DTSTART;VALUE=DATE:20120507
CREATED:20120510T151540Z
ATTENDEE;CUTYPE=INDIVIDUAL;PARTSTAT=ACCEPTED:mailto:
 ken@ksm-t3400.murch.local
ATTENDEE;CN=test1@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test1@
ATTENDEE;CN=test0@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test0@
BEGIN:VALARM
X-WR-ALARMUID:FC9C8AEC-749C-4F0E-AB26-C5C8B790D1A3
TRIGGER:PT8H
DESCRIPTION:Event reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
ATTENDEE;CN=test1@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test1@
ATTENDEE;CUTYPE=INDIVIDUAL;PARTSTAT=ACCEPTED:mailto:
 ken@ksm-t3400.murch.local
ATTENDEE;CN=test0@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test0@
ATTENDEE;CN=test2@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test2@
DTEND;VALUE=DATE:20120511
TRANSP:TRANSPARENT
ORGANIZER;SCHEDULE-STATUS=3.8:mailto:ken@ksm-t3400.murch.local
UID:D4FC86B4-D501-4DDC-A94B-3237ACF5F278
DTSTAMP:20120510T153135Z
SEQUENCE:10
RECURRENCE-ID;VALUE=DATE:20120510
SUMMARY:nbmnbmnbm
DTSTART;VALUE=DATE:20120510
CREATED:20120510T151540Z
BEGIN:VALARM
X-WR-ALARMUID:DAC5BBBF-2FA7-4ABC-9812-D44DFF725938
TRIGGER:PT8H
DESCRIPTION:Event reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
BEGIN:VEVENT
ATTENDEE;CUTYPE=INDIVIDUAL;PARTSTAT=ACCEPTED:mailto:
 ken@ksm-t3400.murch.local
ATTENDEE;CN=test1@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test1@
ATTENDEE;CN=test0@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:
 mailto:test0@
DTEND;VALUE=DATE:20120513
TRANSP:TRANSPARENT
ORGANIZER;SCHEDULE-STATUS=3.8:mailto:ken@ksm-t3400.murch.local
UID:D4FC86B4-D501-4DDC-A94B-3237ACF5F278
DTSTAMP:20120510T154104Z
SEQUENCE:9
RECURRENCE-ID;VALUE=DATE:20120512
SUMMARY:nbmnbmnbm
DTSTART;VALUE=DATE:20120512
CREATED:20120510T151540Z
BEGIN:VALARM
X-WR-ALARMUID:FA5CAA77-F9A8-45E3-BF06-5A4FC94450DB
TRIGGER:PT8H
DESCRIPTION:Event reminder
ACTION:DISPLAY
END:VALARM
BEGIN:VALARM
X-WR-ALARMUID:BC9845EA-A17C-4289-841A-7F156080DF35
ATTENDEE:mailto:murch@andrew.cmu.edu
DESCRIPTION:This is an event reminder.
SUMMARY:Alert notification
TRIGGER:PT8H
ACTION:EMAIL
END:VALARM
END:VEVENT
BEGIN:VEVENT
A>1506412236>TTENDEE;RSVP=TRUE;CN=test0@;CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION:
 mailto:test0@
ATTENDEE;PARTSTAT=ACCEPTED;CUTYPE=INDIVIDUAL:mailto:
 ken@ksm-t3400.murch.local
DTEND;VALUE=DATE:20120510
TRANSP:TRANSPARENT
ORGANIZER;SCHEDULE-STATUS=3.8:mailto:ken@ksm-t3400.murch.local
UID:D4FC86B4-D501-4DDC-A94B-3237ACF5F278
DTSTAMP:20120510T153120Z
SEQUENCE:12
RECURRENCE-ID;VALUE=DATE:20120509
SUMMARY:nbmnbmnbm
DTSTART;VALUE=DATE:20120509
CREATED:20120510T151540Z
BEGIN:VALARM
X-WR-ALARMUID:0061F8F1-33EF-4B4F-8377-A8D626BE6920
TRIGGER:PT8H
DESCRIPTION:Event reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR
]]></B:calendar-data>
        <B:schedule-tag>"583a126a3cd2780a7b1e67dbdc9e0eb561901bb0"</B:schedule-tag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
    <A:propstat>
      <A:prop>
        <C:created-by/>
        <C:updated-by/>
      </A:prop>
      <A:status>HTTP/1.1 404 Not Found</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/85b2eee6-9f0a-4508-bf40-d730fd92e475.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"1fd91b4e643a107092c609f499831e64d2ceaca4"</A:getetag>
        <B:calendar-data><![CDATA[BEGIN:VCALENDAR
PRODID:-//Mozilla.org/NONSGML Mozilla Calendar V1.1//EN
VERSION:2.0
BEGIN:VEVENT
CREATED:20170213T193355Z
LAST-MODIFIED:20170213T193357Z
DTSTAMP:20170213T193357Z
UID:85b2eee6-9f0a-4508-bf40-d730fd92e475
SUMMARY:New Event
DTSTART;TZID=America/New_York:20170217T150000
DTEND;TZID=America/New_York:20170217T160000
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
]]></B:calendar-data>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
    <A:propstat>
      <A:prop>
        <B:schedule-tag/>
        <C:created-by/>
        <C:updated-by/>
      </A:prop>
      <A:status>HTTP/1.1 404 Not Found</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/5dd30e69-e584-4949-8a54-95d49bd54730.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"01ffe8974301b6f2679aa4c719bb29d800a11fbc"</A:getetag>
        <B:calendar-data><![CDATA[BEGIN:VCALENDAR
PRODID:-//Mozilla.org/NONSGML Mozilla Calendar V1.1//EN
VERSION:2.0
BEGIN:VEVENT
CREATED:20170612T213259Z
LAST-MODIFIED:20170612T230605Z
DTSTAMP:20170612T230605Z
UID:5dd30e69-e584-4949-8a54-95d49bd54730
SUMMARY:Test Event
DTSTART;TZID=America/Los_Angeles:20170612T130000
DTEND;TZID=America/Los_Angeles:20170612T140000
TRANSP:OPAQUE
X-MOZ-GENERATION:2
SEQUENCE:1
END:VEVENT
END:VCALENDAR
]]></B:calendar-data>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
    <A:propstat>
      <A:prop>
        <B:schedule-tag/>
        <C:created-by/>
        <C:updated-by/>
      </A:prop>
      <A:status>HTTP/1.1 404 Not Found</A:status>
    </A:propstat>
  </A:response>
  <A:response>
    <A:href>/calendars/user/ken/Default/foo.ics</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"6a5cabf8c79531191ddbff58c55d74e52e1ffc9b"</A:getetag>
        <B:calendar-data><![CDATA[BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp.//Example Client//EN
BEGIN:VEVENT
DESCRIPTION:We are having a meeting all this week at 12 pm for one hour\,
 with an additional meeting on the first day 2 hours long.\nPlease bring
 your own lunch for the 12 pm meetings.
DTSTAMP:20060206T001121Z
DTSTART;TZID=America/New_York:20060102T120000
DURATION:PT1H
RDATE;VALUE=PERIOD;TZID=America/New_York:20060102T150000/PT2H
RRULE:FREQ=DAILY;COUNT=5
STATUS:TENTATIVE
SUMMARY:Event #2
TRANSP:TRANSPARENT
UID:x100959BC664CA650E933C892C@example.com
CONFERENCE;VALUE=URI;FEATURE=PHONE;LABEL=Attendee dial-in:tel:
 +1-888-555-0456,,,555123
END:VEVENT
BEGIN:VEVENT
DTSTAMP:20060206T001121Z
DTSTART;TZID=America/New_York:20060104T140000
DURATION:PT1H
RECURRENCE-ID;TZID=America/New_York:20060104T120000
SUMMARY:Event #2 bis
UID:x100959BC664CA650E933C892C@example.com
END:VEVENT
END:VCALENDAR
]]></B:calendar-data>
      </A:prop>
      <A:status>HTTP/1.1 200 OK>1506412236></A:status>
    </A:propstat>
    <A:propstat>
      <A:prop>
        <B:schedule-tag/>
        <C:created-by/>
        <C:updated-by/>
      </A:prop>
      <A:status>HTTP/1.1 404 Not Found</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412236<PROPFIND /calendars/user/ken/Inbox/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412236<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412236>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:36 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 419

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/calendars/user/ken/Inbox/</A:href>
    <A:propstat>
      <A:prop>
        <C:getctag>1436370616-1</C:getctag>
        <A:sync-token>data:,1436370616-1</A:sync-token>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412236<PROPFIND /calendars/user/ken/Inbox/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 145
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412236<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:getcontenttype/>
    <A:getetag/>
  </A:prop>
</A:propfind>
>1506412236>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:36 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 401

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:">
  <A:response>
    <A:href>/calendars/user/ken/Inbox/</A:href>
    <A:propstat>
      <A:prop>
        <A:getcontenttype>text/calendar; charset=utf-8</A:getcontenttype>
        <A:getetag>"1436370616-0-0"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412236<PROPFIND /notifications/user/ken/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 0
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 181
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412236<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <C:getctag xmlns:C="http://calendarserver.org/ns/"/>
    <A:sync-token/>
  </A:prop>
</A:propfind>
>1506412236>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:36 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 302

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/notifications/user/ken/</A:href>
    <A:propstat>
      <A:prop/>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
<1506412236<PROPFIND /notifications/user/ken/ HTTP/1.1
Host: 192.168.1.203
Content-Type: text/xml
Depth: 1
Brief: t
Accept: */*
Connection: keep-alive
Prefer: return=minimal
User-Agent: Mac+OS+X/10.12.6 (16G29) CalendarAgent/386
Content-Length: 187
Accept-Language: en-us
Accept-Encoding: gzip, deflate

<1506412236<<?xml version="1.0" encoding="UTF-8"?>
<A:propfind xmlns:A="DAV:">
  <A:prop>
    <A:getetag/>
    <C:notificationtype xmlns:C="http://calendarserver.org/ns/"/>
  </A:prop>
</A:propfind>
>1506412236>HTTP/1.1 207 Multi-Status
Date: Tue, 26 Sep 2017 07:50:36 GMT
Strict-Transport-Security: max-age=600
Vary: Accept-Encoding, Brief, Prefer
Preference-Applied: return=minimal
Content-Type: application/xml; charset=utf-8
Content-Length: 365

<?xml version="1.0" encoding="utf-8"?>
<A:multistatus xmlns:A="DAV:" xmlns:C="http://calendarserver.org/ns/">
  <A:response>
    <A:href>/notifications/user/ken/</A:href>
    <A:propstat>
      <A:prop>
        <A:getetag>"1452898999-0-0"</A:getetag>
      </A:prop>
      <A:status>HTTP/1.1 200 OK</A:status>
    </A:propstat>
  </A:response>
</A:multistatus>
>1506412268>
```

