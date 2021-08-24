# On-Hook

## Snapshot
----------------------------
On-Hook is a full stack app that allows users to look for fishing spots
in their city or state. Logged in users can favorite fishing spots and
rate them as well. Users can also comment on a specific fishing spot's
page. The user's profile page contains a profile pic as well as a short
description, a list of spots they have created and a list of all of their
favorite spots.

## Architecture
On-Hook is created using Express for the backend and React for the
Frontend. It also utilizes PostgreSQL for the database.

## Frontend

### React
On-Hook is built as a React application.

### Redux
On-Hook uses Redux for handling the state management of the application.
State management is synced to the database using thunks with API calls to
the backend.

## Backend

### ExpressJS
Express is used for the On-Hook server.


# Feature List

## Fishing Spots
* Styled as a list on the homepage
* Individual page with full information
* Address and location of the spot
* Image of location
* Rating of the fishing spot
* List of different species at that fishing spot
* List reviews on individual page
* List of comments on individual page

## Reviews
* Each fishing spot can have one review per user
* User can rate the fishing spot
* Ability to edit reviews
* Ability to delete reviews

## Users
* Can create a user account
* User must supply username, email, password, and bio, as well as fishing-style
* Can write reviews as a user
* Can create fishing spots as a user
* Can comment on fishing spots as a user

## Comments
* Users can write multiple comments for a fishing spot
* Users can edit their comments
* Users can delete their comments
