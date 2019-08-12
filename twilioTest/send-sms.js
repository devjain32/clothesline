require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendingNumber = process.env.TWILIO_NUMBER;

const client = require("twilio")(accountSid, authToken);

client.messages.create({
    to: "+18325231603", //2812167644
    from: "+18324307084",
    body: "Hello"
}).then((message) => console.log(message.sid));