const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

app.post("/sms", function(req, res) {
    const twiml = new MessagingResponse();
    twiml.message("It works");
    res.writeHead(200, {"Content-Type": "text/xml"});
    res.end(twiml.toString());
})

http.createServer(app).listen(8080, () => {
    console.log("Express server listening on port 8080")
})