// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
    .create({
        twiml: '<Response><Play>http://174.4.243.139/files/untitled.mp3</Play></Response>',
        to: process.env.OUTGOING_PHONE_NUMBER,
        from: "+19035688521",
    })
    .then(call => console.log(call.sid));