// 'use strict';
 const http = require('http');
 const fs = require('fs');
// const socketio = require('socket.io');
 const request = require('request');

 const port = process.env.PORT || process.env.NODE_PORT || 3000;

// C:\Users\taraz_000\Desktop\Chiewab_Amalgamated\client\test.html
 const index = fs.readFileSync(`${__dirname}/../../client/test.html`);


 const onRequest = (req, response) => {
   response.writeHead(200, { 'Content-Type': 'text/html' });
   response.write(index);
   response.end();
 };



 const requestOptions = {
   url: 'https://api.skywatch.co/data/time/2015/location/36.281389,-80.060278/level/3',
   headers: {
     'x-api-key': 'CTgAvMShF74hRQ1cAFmhZaO2dcKootye2QfizXfm',
   },
 };

 const callback = (error, response, body) => {
  /*
  console.log(`request sent`);
  console.log(`Error: {$error}`);
  console.log(`Response: {$response}`);
  console.log(`Body: {$body}`); */
   if (!error && response.statusCode === 200) {
     console.log(body); // Print the google web page.
   }
 };

 request(requestOptions, callback);
  const app = http.createServer(onRequest).listen(port);
