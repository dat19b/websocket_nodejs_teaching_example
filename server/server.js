'use strict';

// require (imports from node_modules folder)
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

// create web framework (express)
const app = express();
// create a http server and add the express framework to it
const server = http.createServer(app);
// add the websocket module to the http server
const wss = new WebSocket.Server({ server });

// here goes your code

wss.on('connection', function connection(ws) {
  console.log('Connection established!')
  ws.on('message', function incoming(message) {
    console.log('received: ' + message);
    ws.send('From server ' + message);
  });
  ws.send('something');
});

// add static webserver folder (html, css, frontend-javascript)
app.use(express.static('public'));

// start the webserver and make it listen for incomming requests
server.listen(8080, function (){
  console.log('Listening at port 8080');
});














// App
// const app = express();
// app.use(express.static('public'))
//
// app.get('/', function (req, res){
//   res.send("<h1>Hello</h1>")
// })
//
// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);
