# PrimeNG Table

Purpose of this repo is to demonstrate PrimeNG table in an Angular 4 application

## Steps to run (During Development)
### Install
`npm install`

`cd frontend-client && npm install`

### Run
`npm run server`

NOTE: If the above doesn't work. Frontend and Backend servers can be run separately in two terminals.

Run Frontend: `npm run frontend`

Run Backend: `npm start`

## Steps to run (During Production)
### Configuration
Create a `.env` in the root of the project. Put this sample into it (change as necessary).
```
ENVIRONMENT=production
domain=localhost
PORT_FRONTEND=4200
PORT_BACKEND=8000
```

### Install
`npm install`

`cd frontend-client && npm install`

### Build
`cd frontend-client && npx ng build --prod --base-href '/client/'`

NOTE: This step is not required during development

### Run
`npm start`