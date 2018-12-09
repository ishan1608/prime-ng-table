require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const path = require('path');


let app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(cors());

app.use('/api/data.json', (request, response) => {
    fs.readFile('data.json', {'encoding': 'utf-8'}, (err, data) => {
        if (err) {
            console.log('Error occurred while reading');
            response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            response.write('There was an internal error on the server.\nPlease try again at a later time, or contact the system admins.');
        } else {
            response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            response.write(data);
            response.end();
        }
    });
});

if (process.env.ENVIRONMENT === 'production') {
    // NOTE: Build angular-client like this: npx ng build --prod --base-href '/client/'
    app.use('/client', express.static(path.join(__dirname, 'angular-d3-client/dist/angular-d3-client')));
    app.use('/', (request, response) => {
        response.sendFile(path.join(__dirname + '/angular-d3-client/dist/angular-d3-client/index.html'));
    });
} else {
    app.use('/', (request, response) => {
        response.status(301).redirect('http://' + (process.env.domain || 'localhost') + ':' + (process.env.PORT_FRONTEND || '4200') + '/');
    });
}

const port = process.env.PORT_BACKEND || '8000';
app.set('port', port);

http.createServer(app).listen(port, '0.0.0.0');
console.log('Server listening on port 8000');
