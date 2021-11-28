## Backend

Built using express and node.js

Command to run :  `npm run server-start`

Source code for server is present in the backend folder inside root dir.
## Frontend

Built on React

Command to run :  `yarn start`

Source code for the UI is present in the src folder inside root dir.

Single page application with Monthly view of calendar, which stores events.
## Setup

Run `npm i` 
Run `yarn`

### Database Used: MongoDB


Collections: Events, Users

Event Schema :
    {
        name : String ("Name of the Event"),
        start_time : Date  (ISO Date string of starting time of event),
        end_time :  Date (ISO Date string of end time of event),
        date_modified : Date  (ISO Date string when the event was created or updated),
        user_id : Mongo ID ("User Id"),
        _id : Mongo ID ("Event Id"),
        archived : Boolean (Whether the Event is deleted or not)
    }

