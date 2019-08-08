const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
app.use(fileupload());
app.use(express.static("public"));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard kat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  app.use(express.static("public"));
}
// Add routes, both API and view
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/theclothesline");

// Export configuration object
// module.exports = cfg;

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;