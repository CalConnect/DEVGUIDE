<!-- --- title: Bootstrapping -->

Text about bootstrapping.

As of gollum-lib 4.1.0 [PlantUML](http://plantuml.com/) is supported to draw nice diagrams:

@startuml
Client -> Server: /.well-known/caldav
Server -> Client: location: /calendars/users
Client -> Server: PROPFIND /calendars/users 
@enduml

