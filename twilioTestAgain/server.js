

const accountSid = "ACc142b821cb32b05ee3411ecf6bc64376";
const authToken = "a39fce8c3dab5e70710b4f9004b67e8b";
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+18324307084',
    to: '+18323502295'
}).then(message => console.log(message.sid));

// var http = require('http');
// var express = require('express');
// var twilio = require('twilio');
// var bodyParser = require('body-parser');

// var app = express();
// app.use(bodyParser.urlencoded({ extended: true })); 

// app.post('/', function(req, res) {
//     var twilio = require('twilio');
//     var twiml = new twilio.TwimlResponse();
//     if (req.body.Body == 'hello') {
//         twiml.message('Hi!');
//     } else if(req.body.Body == 'bye') {
//         twiml.message('Goodbye');
//     } else {
//         twiml.message('No Body param match, Twilio sends this in the request to your server.');
//     }
//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, function () {
//     console.log("Express server listening on port 1337");
// });